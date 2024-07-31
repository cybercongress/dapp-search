import { Helia, Pin, createHelia } from 'helia';
import { UnixFS, unixfs, AddOptions } from '@helia/unixfs';
import { Libp2p } from 'libp2p';
import { multiaddr } from '@multiformats/multiaddr';
import { LsResult } from 'ipfs-core-types/src/pin';

import { MemoryDatastore } from 'datastore-core';
import {
  AbortOptions,
  CatOptions,
  IpfsNodeType,
  IpfsFileStats,
  IpfsNode,
  InitOptions,
} from '../../types';
import { stringToCid } from '../../utils/cid';
import { CYBER_GATEWAY_URL } from '../../config';

async function* mapToLsResult(
  iterable: AsyncIterable<Pin>
): AsyncIterable<LsResult> {
  // eslint-disable-next-line no-restricted-syntax
  for await (const item of iterable) {
    const { cid, metadata } = item;
    yield { cid: cid.toV0(), metadata, type: 'recursive' };
  }
}

const addOptionsV0: Partial<AddOptions> = {
  cidVersion: 0,
  rawLeaves: false,
};

class HeliaNode implements IpfsNode {
  readonly nodeType: IpfsNodeType = 'helia';

  get config() {
    return { gatewayUrl: CYBER_GATEWAY_URL };
  }

  private _isStarted = false;

  get isStarted() {
    return this._isStarted;
  }

  private node?: Helia;

  private fs?: UnixFS;

  private libp2p?: Libp2p;

  async init(options?: InitOptions, libp2p?: Libp2p) {
    this.libp2p = libp2p;

    // const blockstore = new IDBBlockstore('helia-bs');
    // await blockstore.open();

    // const datastore = new IDBDatastore('helia-ds');
    // await datastore.open();

    const blockstore = new MemoryDatastore();
    const datastore = new MemoryDatastore();

    this.node = await createHelia({ blockstore, datastore, libp2p });

    this.fs = unixfs(this.node);

    this._isStarted = true;
  }

  async stat(cid: string, options: AbortOptions = {}): Promise<IpfsFileStats> {
    return this.fs!.stat(stringToCid(cid), options).then((result) => {
      const { type, fileSize, localFileSize, blocks, dagSize, mtime } = result;
      return {
        type,
        size: fileSize || -1,
        sizeLocal: localFileSize || -1,
        blocks,
      };
    });
  }

  cat(cid: string, options: CatOptions = {}) {
    return this.fs!.cat(stringToCid(cid), options);
  }

  async add(content: File | string, options: AbortOptions = {}) {
    // Options to keep CID in V0 format 'Qm....';
    const optionsV0 = {
      ...options,
      ...addOptionsV0,
    } as Partial<AddOptions>;

    let cid;

    if (content instanceof File) {
      const fileName = content.name;
      const arrayBuffer = await content.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      cid = await this.fs!.addFile(
        { path: fileName, content: data },
        optionsV0
      );
    } else {
      const data = new TextEncoder().encode(content);
      cid = await this.fs!.addBytes(data, optionsV0);
    }
    this.pin(cid.toString(), options);

    return cid.toString();
  }

  async pin(cid: string, options: AbortOptions = {}) {
    const cid_ = stringToCid(cid);
    const isPinned = await this.node?.pins.isPinned(cid_, options);
    if (!isPinned) {
      const results: any[] = [];

      const pinResult = this.node!.pins.add(cid_, options);
      // eslint-disable-next-line no-restricted-syntax
      for await (const result of pinResult) {
        results.push(result.toString());
      }

      console.log('------pinned', results);
    }
    return undefined;
  }

  async getPeers() {
    return this.libp2p!.getConnections().map((c) => c.remotePeer.toString());
  }

  async stop() {
    await this.node?.stop();
  }

  async start() {
    await this.node?.start();
  }

  async connectPeer(address: string) {
    const conn = await this.libp2p!.dial(multiaddr(address));
    return conn.status === 'open';
  }

  ls() {
    const result = mapToLsResult(this.node!.pins.ls());
    return result;
  }

  async info() {
    const id = this.libp2p!.peerId.toString();
    const agentVersion = this.libp2p!.services!.identify!.host!
      .agentVersion as string;

    return { id, agentVersion, repoSize: -1 };
  }
}

export default HeliaNode;
