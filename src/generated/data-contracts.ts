/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CyberGraphV1Beta1QueryGraphStatsResponse {
  /** @format uint64 */
  cyberlinks?: string;
  /** @format uint64 */
  particles?: string;
}

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *
 *  Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 *  Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := ptypes.MarshalAny(foo)
 *      ...
 *      foo := &pb.Foo{}
 *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 *
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */
export interface GoogleProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  type_url?: string;
  /**
   * Must be a valid serialized protocol buffer of the above specified type.
   * @format byte
   */
  value?: string;
}

export interface GrpcGatewayRuntimeError {
  error?: string;
  /** @format int32 */
  code?: number;
  message?: string;
  details?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  }[];
}

export interface CyberGraphV1Beta1Link {
  from?: string;
  to?: string;
}

export type CyberGraphV1Beta1MsgCyberlinkResponse = object;

export interface CyberBaseQueryV1Beta1PageRequest {
  /** @format int64 */
  page?: number;
  /** @format int64 */
  per_page?: number;
}

export interface CyberBaseQueryV1Beta1PageResponse {
  /** @format int64 */
  total?: number;
}

export interface CyberRankV1Beta1Params {
  /** @format int64 */
  calculation_period?: string;
  damping_factor?: string;
  tolerance?: string;
}

export interface CyberRankV1Beta1QueryKarmaResponse {
  /** @format uint64 */
  karma?: string;
}

export interface CyberRankV1Beta1QueryLinkExistResponse {
  /** @format boolean */
  exist?: boolean;
}

export interface CyberRankV1Beta1QueryNegentropyParticleResponse {
  /** @format uint64 */
  entropy?: string;
}

export interface CyberRankV1Beta1QueryNegentropyResponse {
  /** @format uint64 */
  negentropy?: string;
}

export interface CyberRankV1Beta1QueryParamsResponse {
  params?: {
    /** @format int64 */
    calculation_period?: string;
    damping_factor?: string;
    tolerance?: string;
  };
}

export interface CyberRankV1Beta1QueryRankResponse {
  /** @format uint64 */
  rank?: string;
}

export interface CyberRankV1Beta1QuerySearchResponse {
  result?: {
    particle?: string;
    /** @format uint64 */
    rank?: string;
  }[];
  pagination?: {
    /** @format int64 */
    total?: number;
  };
}

export interface CyberRankV1Beta1RankedParticle {
  particle?: string;
  /** @format uint64 */
  rank?: string;
}

/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface CosmosBaseV1Beta1DecProto {
  dec?: string;
}

export interface CyberBandwidthV1Beta1NeuronBandwidth {
  neuron?: string;
  /** @format uint64 */
  remained_value?: string;
  /** @format uint64 */
  last_updated_block?: string;
  /** @format uint64 */
  max_value?: string;
}

export interface CyberBandwidthV1Beta1Params {
  /** @format uint64 */
  recovery_period?: string;
  /** @format uint64 */
  adjust_price_period?: string;
  base_price?: string;
  base_load?: string;
  /** @format uint64 */
  max_block_bandwidth?: string;
}

export interface CyberBandwidthV1Beta1QueryLoadResponse {
  /** DecProto defines a Protobuf wrapper around a Dec object. */
  load?: {
    dec?: string;
  };
}

export interface CyberBandwidthV1Beta1QueryNeuronBandwidthResponse {
  neuron_bandwidth?: {
    neuron?: string;
    /** @format uint64 */
    remained_value?: string;
    /** @format uint64 */
    last_updated_block?: string;
    /** @format uint64 */
    max_value?: string;
  };
}

export interface CyberBandwidthV1Beta1QueryParamsResponse {
  params?: {
    /** @format uint64 */
    recovery_period?: string;
    /** @format uint64 */
    adjust_price_period?: string;
    base_price?: string;
    base_load?: string;
    /** @format uint64 */
    max_block_bandwidth?: string;
  };
}

export interface CyberBandwidthV1Beta1QueryPriceResponse {
  /** DecProto defines a Protobuf wrapper around a Dec object. */
  price?: {
    dec?: string;
  };
}

export interface CyberBandwidthV1Beta1QueryTotalBandwidthResponse {
  /** @format uint64 */
  total_bandwidth?: string;
}

/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface CosmosBaseQueryV1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   * @format boolean
   */
  count_total?: boolean;
  /**
   * reverse is set to true if results are to be returned in the descending order.
   * @format boolean
   */
  reverse?: boolean;
}

/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface CosmosBaseQueryV1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   * @format byte
   */
  next_key?: string;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface CosmosBaseV1Beta1Coin {
  denom?: string;
  amount?: string;
}

export interface CyberGridV1Beta1Params {
  /** @format int64 */
  max_routes?: number;
}

export interface CyberGridV1Beta1QueryParamsResponse {
  params?: {
    /** @format int64 */
    max_routes?: number;
  };
}

export interface CyberGridV1Beta1QueryRouteResponse {
  route?: {
    source?: string;
    destination?: string;
    name?: string;
    value?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

export interface CyberGridV1Beta1QueryRoutedEnergyResponse {
  value?: {
    denom?: string;
    amount?: string;
  }[];
}

export interface CyberGridV1Beta1QueryRoutesResponse {
  routes?: {
    source?: string;
    destination?: string;
    name?: string;
    value?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

export interface CyberGridV1Beta1Route {
  source?: string;
  destination?: string;
  name?: string;
  value?: {
    denom?: string;
    amount?: string;
  }[];
}

export type CyberGridV1Beta1MsgCreateRouteResponse = object;

export type CyberGridV1Beta1MsgDeleteRouteResponse = object;

export type CyberGridV1Beta1MsgEditRouteNameResponse = object;

export type CyberGridV1Beta1MsgEditRouteResponse = object;

export interface CyberResourcesV1Beta1Params {
  /** @format int64 */
  max_slots?: number;
  /** @format int64 */
  halving_period_volt_blocks?: number;
  /** @format int64 */
  halving_period_ampere_blocks?: number;
  /** @format int64 */
  base_investmint_period_volt?: number;
  /** @format int64 */
  base_investmint_period_ampere?: number;
  /** @format int64 */
  min_investmint_period?: number;
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  base_investmint_amount_volt?: {
    denom?: string;
    amount?: string;
  };
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  base_investmint_amount_ampere?: {
    denom?: string;
    amount?: string;
  };
}

export interface CyberResourcesV1Beta1QueryInvestmintResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: {
    denom?: string;
    amount?: string;
  };
}

export interface CyberResourcesV1Beta1QueryParamsResponse {
  params?: {
    /** @format int64 */
    max_slots?: number;
    /** @format int64 */
    halving_period_volt_blocks?: number;
    /** @format int64 */
    halving_period_ampere_blocks?: number;
    /** @format int64 */
    base_investmint_period_volt?: number;
    /** @format int64 */
    base_investmint_period_ampere?: number;
    /** @format int64 */
    min_investmint_period?: number;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    base_investmint_amount_volt?: {
      denom?: string;
      amount?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    base_investmint_amount_ampere?: {
      denom?: string;
      amount?: string;
    };
  };
}

export type CyberResourcesV1Beta1MsgInvestmintResponse = object;

export interface CyberDmnV1Beta1Load {
  input?: string;
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  gas_price?: {
    denom?: string;
    amount?: string;
  };
}

export interface CyberDmnV1Beta1Params {
  /** @format int64 */
  max_slots?: number;
  /** @format int64 */
  max_gas?: number;
  /** @format int64 */
  fee_ttl?: number;
}

export interface CyberDmnV1Beta1QueryParamsResponse {
  params?: {
    /** @format int64 */
    max_slots?: number;
    /** @format int64 */
    max_gas?: number;
    /** @format int64 */
    fee_ttl?: number;
  };
}

export interface CyberDmnV1Beta1QueryThoughtResponse {
  thought?: {
    program?: string;
    trigger?: {
      /** @format uint64 */
      period?: string;
      /** @format uint64 */
      block?: string;
    };
    load?: {
      input?: string;
      /**
       * Coin defines a token with a denomination and an amount.
       *
       * NOTE: The amount field is an Int which implements the custom method
       * signatures required by gogoproto.
       */
      gas_price?: {
        denom?: string;
        amount?: string;
      };
    };
    name?: string;
    particle?: string;
  };
}

export interface CyberDmnV1Beta1QueryThoughtStatsResponse {
  thought_stats?: {
    program?: string;
    name?: string;
    /** @format uint64 */
    calls?: string;
    /** @format uint64 */
    fees?: string;
    /** @format uint64 */
    gas?: string;
    /** @format uint64 */
    last_block?: string;
  };
}

export interface CyberDmnV1Beta1QueryThoughtsResponse {
  thoughts?: {
    program?: string;
    trigger?: {
      /** @format uint64 */
      period?: string;
      /** @format uint64 */
      block?: string;
    };
    load?: {
      input?: string;
      /**
       * Coin defines a token with a denomination and an amount.
       *
       * NOTE: The amount field is an Int which implements the custom method
       * signatures required by gogoproto.
       */
      gas_price?: {
        denom?: string;
        amount?: string;
      };
    };
    name?: string;
    particle?: string;
  }[];
}

export interface CyberDmnV1Beta1QueryThoughtsStatsResponse {
  thoughts_stats?: {
    program?: string;
    name?: string;
    /** @format uint64 */
    calls?: string;
    /** @format uint64 */
    fees?: string;
    /** @format uint64 */
    gas?: string;
    /** @format uint64 */
    last_block?: string;
  }[];
}

export interface CyberDmnV1Beta1Thought {
  program?: string;
  trigger?: {
    /** @format uint64 */
    period?: string;
    /** @format uint64 */
    block?: string;
  };
  load?: {
    input?: string;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    gas_price?: {
      denom?: string;
      amount?: string;
    };
  };
  name?: string;
  particle?: string;
}

export interface CyberDmnV1Beta1ThoughtStats {
  program?: string;
  name?: string;
  /** @format uint64 */
  calls?: string;
  /** @format uint64 */
  fees?: string;
  /** @format uint64 */
  gas?: string;
  /** @format uint64 */
  last_block?: string;
}

export interface CyberDmnV1Beta1Trigger {
  /** @format uint64 */
  period?: string;
  /** @format uint64 */
  block?: string;
}

export type CyberDmnV1Beta1MsgChangeThoughtBlockResponse = object;

export type CyberDmnV1Beta1MsgChangeThoughtGasPriceResponse = object;

export type CyberDmnV1Beta1MsgChangeThoughtInputResponse = object;

export type CyberDmnV1Beta1MsgChangeThoughtNameResponse = object;

export type CyberDmnV1Beta1MsgChangeThoughtParticleResponse = object;

export type CyberDmnV1Beta1MsgChangeThoughtPeriodResponse = object;

export type CyberDmnV1Beta1MsgCreateThoughtResponse = object;

export type CyberDmnV1Beta1MsgForgetThoughtResponse = object;

/** @example {"code":0,"data":"data","log":"log","gas_used":5000,"gas_wanted":10000,"info":"info","tags":["",""]} */
export interface CheckTxResult {
  code?: number;
  data?: string;
  gas_used?: number;
  gas_wanted?: number;
  info?: string;
  log?: string;
  tags?: {
    key?: string;
    value?: string;
  }[];
}

/** @example {"code":5,"data":"data","log":"log","gas_used":5000,"gas_wanted":10000,"info":"info","tags":["",""]} */
export interface DeliverTxResult {
  code?: number;
  data?: string;
  gas_used?: number;
  gas_wanted?: number;
  info?: string;
  log?: string;
  tags?: {
    key?: string;
    value?: string;
  }[];
}

export interface BroadcastTxCommitResult {
  /** @example {"code":0,"data":"data","log":"log","gas_used":5000,"gas_wanted":10000,"info":"info","tags":["",""]} */
  check_tx?: {
    code?: number;
    data?: string;
    gas_used?: number;
    gas_wanted?: number;
    info?: string;
    log?: string;
    tags?: {
      key?: string;
      value?: string;
    }[];
  };
  /** @example {"code":5,"data":"data","log":"log","gas_used":5000,"gas_wanted":10000,"info":"info","tags":["",""]} */
  deliver_tx?: {
    code?: number;
    data?: string;
    gas_used?: number;
    gas_wanted?: number;
    info?: string;
    log?: string;
    tags?: {
      key?: string;
      value?: string;
    }[];
  };
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  hash?: string;
  height?: number;
}

export interface KVPair {
  key?: string;
  value?: string;
}

export type Msg = object;

/**
 * bech32 encoded address
 * @example "pb1depk54cuajgkzea6zpgkq36tnjwdzv4afc3d27"
 */
export type Address = string;

/**
 * bech32 encoded address
 * @example "pbvaloper16xyempempp92x9hyzz9wrgf94r6j9h5f2w4n2l"
 */
export type ValidatorAddress = string;

export interface Coin {
  /** @example "vspn" */
  denom?: string;
  /** @example "5000" */
  amount?: string;
}

/** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
export type Hash = string;

export interface TxQuery {
  /** @example "D085138D913993919295FF4B0A9107F1F2CDE0D37A87CE0644E217CBF3B49656" */
  hash?: string;
  /** @example 368 */
  height?: number;
  tx?: {
    msg?: object[];
    fee?: {
      gas?: string;
      amount?: {
        /** @example "vspn" */
        denom?: string;
        /** @example "5000" */
        amount?: string;
      }[];
    };
    memo?: string;
    signature?: {
      /** @example "MEUCIQD02fsDPra8MtbRsyB1w7bqTM55Wu138zQbFcWx4+CFyAIge5WNPfKIuvzBZ69MyqHsqD8S1IwiEp+iUb6VSdtlpgY=" */
      signature?: string;
      pub_key?: {
        /** @example "tendermint/PubKeySecp256k1" */
        type?: string;
        /** @example "Avz04VhtKJh8ACCVzlI8aTosGy0ikFXKIVHQ3jKMrosH" */
        value?: string;
      };
      /** @example "0" */
      account_number?: string;
      /** @example "0" */
      sequence?: string;
    };
  };
  result?: {
    log?: string;
    /** @example "200000" */
    gas_wanted?: string;
    /** @example "26354" */
    gas_used?: string;
    tags?: {
      key?: string;
      value?: string;
    }[];
  };
}

export interface PaginatedQueryTxs {
  /** @example 1 */
  total_count?: number;
  /** @example 1 */
  count?: number;
  /** @example 1 */
  page_number?: number;
  /** @example 1 */
  page_total?: number;
  /** @example 30 */
  limit?: number;
  txs?: {
    /** @example "D085138D913993919295FF4B0A9107F1F2CDE0D37A87CE0644E217CBF3B49656" */
    hash?: string;
    /** @example 368 */
    height?: number;
    tx?: {
      msg?: object[];
      fee?: {
        gas?: string;
        amount?: {
          /** @example "vspn" */
          denom?: string;
          /** @example "5000" */
          amount?: string;
        }[];
      };
      memo?: string;
      signature?: {
        /** @example "MEUCIQD02fsDPra8MtbRsyB1w7bqTM55Wu138zQbFcWx4+CFyAIge5WNPfKIuvzBZ69MyqHsqD8S1IwiEp+iUb6VSdtlpgY=" */
        signature?: string;
        pub_key?: {
          /** @example "tendermint/PubKeySecp256k1" */
          type?: string;
          /** @example "Avz04VhtKJh8ACCVzlI8aTosGy0ikFXKIVHQ3jKMrosH" */
          value?: string;
        };
        /** @example "0" */
        account_number?: string;
        /** @example "0" */
        sequence?: string;
      };
    };
    result?: {
      log?: string;
      /** @example "200000" */
      gas_wanted?: string;
      /** @example "26354" */
      gas_used?: string;
      tags?: {
        key?: string;
        value?: string;
      }[];
    };
  }[];
}

export interface StdTx {
  msg?: object[];
  fee?: {
    gas?: string;
    amount?: {
      /** @example "vspn" */
      denom?: string;
      /** @example "5000" */
      amount?: string;
    }[];
  };
  memo?: string;
  signature?: {
    /** @example "MEUCIQD02fsDPra8MtbRsyB1w7bqTM55Wu138zQbFcWx4+CFyAIge5WNPfKIuvzBZ69MyqHsqD8S1IwiEp+iUb6VSdtlpgY=" */
    signature?: string;
    pub_key?: {
      /** @example "tendermint/PubKeySecp256k1" */
      type?: string;
      /** @example "Avz04VhtKJh8ACCVzlI8aTosGy0ikFXKIVHQ3jKMrosH" */
      value?: string;
    };
    /** @example "0" */
    account_number?: string;
    /** @example "0" */
    sequence?: string;
  };
}

export interface BlockID {
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  hash?: string;
  parts?: {
    /** @example 0 */
    total?: number;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    hash?: string;
  };
}

export interface BlockHeader {
  /** @example "provenance-test-chain" */
  chain_id?: string;
  /** @example 1 */
  height?: number;
  /** @example "2017-12-30T05:53:09.287+01:00" */
  time?: string;
  /** @example 0 */
  num_txs?: number;
  last_block_id?: {
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    hash?: string;
    parts?: {
      /** @example 0 */
      total?: number;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      hash?: string;
    };
  };
  /** @example 35 */
  total_txs?: number;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  last_commit_hash?: string;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  data_hash?: string;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  validators_hash?: string;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  next_validators_hash?: string;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  consensus_hash?: string;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  app_hash?: string;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  last_results_hash?: string;
  /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
  evidence_hash?: string;
  /**
   * bech32 encoded address
   * @example "pb1depk54cuajgkzea6zpgkq36tnjwdzv4afc3d27"
   */
  proposer_address?: string;
  version?: {
    /** @example 10 */
    block?: string;
    /** @example 0 */
    app?: string;
  };
}

export interface Block {
  header?: {
    /** @example "provenance-test-chain" */
    chain_id?: string;
    /** @example 1 */
    height?: number;
    /** @example "2017-12-30T05:53:09.287+01:00" */
    time?: string;
    /** @example 0 */
    num_txs?: number;
    last_block_id?: {
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      hash?: string;
      parts?: {
        /** @example 0 */
        total?: number;
        /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
        hash?: string;
      };
    };
    /** @example 35 */
    total_txs?: number;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    last_commit_hash?: string;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    data_hash?: string;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    validators_hash?: string;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    next_validators_hash?: string;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    consensus_hash?: string;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    app_hash?: string;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    last_results_hash?: string;
    /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
    evidence_hash?: string;
    /**
     * bech32 encoded address
     * @example "pb1depk54cuajgkzea6zpgkq36tnjwdzv4afc3d27"
     */
    proposer_address?: string;
    version?: {
      /** @example 10 */
      block?: string;
      /** @example 0 */
      app?: string;
    };
  };
  txs?: string[];
  evidence?: string[];
  last_commit?: {
    block_id?: {
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      hash?: string;
      parts?: {
        /** @example 0 */
        total?: number;
        /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
        hash?: string;
      };
    };
    precommits?: {
      validator_address?: string;
      /** @example "0" */
      validator_index?: string;
      /** @example "0" */
      height?: string;
      /** @example "0" */
      round?: string;
      /** @example "2017-12-30T05:53:09.287+01:00" */
      timestamp?: string;
      /** @example 2 */
      type?: number;
      block_id?: {
        /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
        hash?: string;
        parts?: {
          /** @example 0 */
          total?: number;
          /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
          hash?: string;
        };
      };
      /** @example "7uTC74QlknqYWEwg7Vn6M8Om7FuZ0EO4bjvuj6rwH1mTUJrRuMMZvAAqT9VjNgP0RA/TDp6u/92AqrZfXJSpBQ==" */
      signature?: string;
    }[];
  };
}

export interface BlockQuery {
  block_meta?: {
    header?: {
      /** @example "provenance-test-chain" */
      chain_id?: string;
      /** @example 1 */
      height?: number;
      /** @example "2017-12-30T05:53:09.287+01:00" */
      time?: string;
      /** @example 0 */
      num_txs?: number;
      last_block_id?: {
        /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
        hash?: string;
        parts?: {
          /** @example 0 */
          total?: number;
          /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
          hash?: string;
        };
      };
      /** @example 35 */
      total_txs?: number;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      last_commit_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      data_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      validators_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      next_validators_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      consensus_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      app_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      last_results_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      evidence_hash?: string;
      /**
       * bech32 encoded address
       * @example "pb1depk54cuajgkzea6zpgkq36tnjwdzv4afc3d27"
       */
      proposer_address?: string;
      version?: {
        /** @example 10 */
        block?: string;
        /** @example 0 */
        app?: string;
      };
    };
    block_id?: {
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      hash?: string;
      parts?: {
        /** @example 0 */
        total?: number;
        /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
        hash?: string;
      };
    };
  };
  block?: {
    header?: {
      /** @example "provenance-test-chain" */
      chain_id?: string;
      /** @example 1 */
      height?: number;
      /** @example "2017-12-30T05:53:09.287+01:00" */
      time?: string;
      /** @example 0 */
      num_txs?: number;
      last_block_id?: {
        /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
        hash?: string;
        parts?: {
          /** @example 0 */
          total?: number;
          /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
          hash?: string;
        };
      };
      /** @example 35 */
      total_txs?: number;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      last_commit_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      data_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      validators_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      next_validators_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      consensus_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      app_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      last_results_hash?: string;
      /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
      evidence_hash?: string;
      /**
       * bech32 encoded address
       * @example "pb1depk54cuajgkzea6zpgkq36tnjwdzv4afc3d27"
       */
      proposer_address?: string;
      version?: {
        /** @example 10 */
        block?: string;
        /** @example 0 */
        app?: string;
      };
    };
    txs?: string[];
    evidence?: string[];
    last_commit?: {
      block_id?: {
        /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
        hash?: string;
        parts?: {
          /** @example 0 */
          total?: number;
          /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
          hash?: string;
        };
      };
      precommits?: {
        validator_address?: string;
        /** @example "0" */
        validator_index?: string;
        /** @example "0" */
        height?: string;
        /** @example "0" */
        round?: string;
        /** @example "2017-12-30T05:53:09.287+01:00" */
        timestamp?: string;
        /** @example 2 */
        type?: number;
        block_id?: {
          /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
          hash?: string;
          parts?: {
            /** @example 0 */
            total?: number;
            /** @example "EE5F3404034C524501629B56E0DDC38FAD651F04" */
            hash?: string;
          };
        };
        /** @example "7uTC74QlknqYWEwg7Vn6M8Om7FuZ0EO4bjvuj6rwH1mTUJrRuMMZvAAqT9VjNgP0RA/TDp6u/92AqrZfXJSpBQ==" */
        signature?: string;
      }[];
    };
  };
}

export interface DelegationDelegatorReward {
  /**
   * bech32 encoded address
   * @example "pbvaloper16xyempempp92x9hyzz9wrgf94r6j9h5f2w4n2l"
   */
  validator_address?: string;
  reward?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
}

export interface DelegatorTotalRewards {
  rewards?: {
    /**
     * bech32 encoded address
     * @example "pbvaloper16xyempempp92x9hyzz9wrgf94r6j9h5f2w4n2l"
     */
    validator_address?: string;
    reward?: {
      /** @example "vspn" */
      denom?: string;
      /** @example "5000" */
      amount?: string;
    }[];
  }[];
  total?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
}

export interface BaseReq {
  /**
   * Sender address or Keybase name to generate a transaction
   * @example "pb1ytyfcdj0nymx9afx34mvwj6gyrped0hmfd9qyq"
   */
  from?: string;
  /** @example "Sent via Provenance API" */
  memo?: string;
  /** @example "provenance-test-chain" */
  chain_id?: string;
  /** @example "0" */
  account_number?: string;
  /** @example "1" */
  sequence?: string;
  /** @example "200000" */
  gas?: string;
  /** @example "1.2" */
  gas_adjustment?: string;
  fees?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
  /**
   * Estimate gas for a transaction (cannot be used in conjunction with generate_only)
   * @example false
   */
  simulate?: boolean;
}

export interface TendermintValidator {
  /**
   * bech32 encoded address
   * @example "pbvaloper16xyempempp92x9hyzz9wrgf94r6j9h5f2w4n2l"
   */
  address?: string;
  /** @example "pbvalconspub1zcjduepq0vu2zgkgk49efa0nqwzndanq5m4c7pa3u4apz4g2r9gspqg6g9cs3k9cuf" */
  pub_key?: string;
  /** @example "1000" */
  voting_power?: string;
  /** @example "1000" */
  proposer_priority?: string;
}

export interface TextProposal {
  proposal_id?: number;
  title?: string;
  description?: string;
  proposal_type?: string;
  proposal_status?: string;
  final_tally_result?: {
    /** @example "0.0000000000" */
    yes?: string;
    /** @example "0.0000000000" */
    abstain?: string;
    /** @example "0.0000000000" */
    no?: string;
    /** @example "0.0000000000" */
    no_with_veto?: string;
  };
  submit_time?: string;
  total_deposit?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
  voting_start_time?: string;
}

export interface Proposer {
  proposal_id?: string;
  proposer?: string;
}

export interface Deposit {
  amount?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
  proposal_id?: string;
  /**
   * bech32 encoded address
   * @example "pb1depk54cuajgkzea6zpgkq36tnjwdzv4afc3d27"
   */
  depositor?: string;
}

export interface TallyResult {
  /** @example "0.0000000000" */
  yes?: string;
  /** @example "0.0000000000" */
  abstain?: string;
  /** @example "0.0000000000" */
  no?: string;
  /** @example "0.0000000000" */
  no_with_veto?: string;
}

export interface Vote {
  voter?: string;
  proposal_id?: string;
  option?: string;
}

export interface Validator {
  /**
   * bech32 encoded address
   * @example "pbvaloper16xyempempp92x9hyzz9wrgf94r6j9h5f2w4n2l"
   */
  operator_address?: string;
  /** @example "pbvalconspub1zcjduepq0vu2zgkgk49efa0nqwzndanq5m4c7pa3u4apz4g2r9gspqg6g9cs3k9cuf" */
  consensus_pubkey?: string;
  jailed?: boolean;
  status?: number;
  tokens?: string;
  delegator_shares?: string;
  description?: {
    moniker?: string;
    identity?: string;
    website?: string;
    security_contact?: string;
    details?: string;
  };
  /** @example "0" */
  bond_height?: string;
  /** @example 0 */
  bond_intra_tx_counter?: number;
  /** @example "0" */
  unbonding_height?: string;
  /** @example "1970-01-01T00:00:00Z" */
  unbonding_time?: string;
  commission?: {
    /** @example "0" */
    rate?: string;
    /** @example "0" */
    max_rate?: string;
    /** @example "0" */
    max_change_rate?: string;
    /** @example "1970-01-01T00:00:00Z" */
    update_time?: string;
  };
}

export interface Delegation {
  delegator_address?: string;
  validator_address?: string;
  shares?: string;
  balance?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  };
}

export interface UnbondingDelegationPair {
  delegator_address?: string;
  validator_address?: string;
  entries?: {
    initial_balance?: string;
    balance?: string;
    creation_height?: string;
    min_time?: string;
  }[];
}

export interface UnbondingEntries {
  initial_balance?: string;
  balance?: string;
  creation_height?: string;
  min_time?: string;
}

export interface UnbondingDelegation {
  delegator_address?: string;
  validator_address?: string;
  initial_balance?: string;
  balance?: string;
  creation_height?: number;
  min_time?: number;
}

export interface Redelegation {
  delegator_address?: string;
  validator_src_address?: string;
  validator_dst_address?: string;
  entries?: Redelegation[];
}

export interface RedelegationEntry {
  creation_height?: number;
  completion_time?: number;
  initial_balance?: string;
  balance?: string;
  shares_dst?: string;
}

export interface ValidatorDistInfo {
  /**
   * bech32 encoded address
   * @example "pbvaloper16xyempempp92x9hyzz9wrgf94r6j9h5f2w4n2l"
   */
  operator_address?: string;
  self_bond_rewards?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
  val_commission?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
}

export interface PublicKey {
  type?: string;
  value?: string;
}

export interface SigningInfo {
  start_height?: string;
  index_offset?: string;
  jailed_until?: string;
  missed_blocks_counter?: string;
}

export interface ParamChange {
  /** @example "staking" */
  subspace?: string;
  /** @example "MaxValidators" */
  key?: string;
  /** @example "" */
  subkey?: string;
  value?: object;
}

export interface Supply {
  total?: {
    /** @example "vspn" */
    denom?: string;
    /** @example "5000" */
    amount?: string;
  }[];
}

/** Params defines the parameters for the auth module. */
export interface CosmosAuthV1Beta1Params {
  /** @format uint64 */
  max_memo_characters?: string;
  /** @format uint64 */
  tx_sig_limit?: string;
  /** @format uint64 */
  tx_size_cost_per_byte?: string;
  /** @format uint64 */
  sig_verify_cost_ed25519?: string;
  /** @format uint64 */
  sig_verify_cost_secp256k1?: string;
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface CosmosAuthV1Beta1QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface CosmosAuthV1Beta1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    /** @format uint64 */
    max_memo_characters?: string;
    /** @format uint64 */
    tx_sig_limit?: string;
    /** @format uint64 */
    tx_size_cost_per_byte?: string;
    /** @format uint64 */
    sig_verify_cost_ed25519?: string;
    /** @format uint64 */
    sig_verify_cost_secp256k1?: string;
  };
}

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface CosmosBankV1Beta1DenomUnit {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom?: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 1^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   * @format int64
   */
  exponent?: number;
  /** aliases is a list of string aliases for the given denom */
  aliases?: string[];
}

/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface CosmosBankV1Beta1Metadata {
  description?: string;
  /** denom_units represents the list of DenomUnit's for a given coin */
  denom_units?: {
    /** denom represents the string name of the given denom unit (e.g uatom). */
    denom?: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 1^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     * @format int64
     */
    exponent?: number;
    /** aliases is a list of string aliases for the given denom */
    aliases?: string[];
  }[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base?: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display?: string;
}

/** Params defines the parameters for the bank module. */
export interface CosmosBankV1Beta1Params {
  send_enabled?: {
    denom?: string;
    enabled?: boolean;
  }[];
  default_send_enabled?: boolean;
}

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface CosmosBankV1Beta1QueryAllBalancesResponse {
  /** balances is the balances of all the coins. */
  balances?: {
    denom?: string;
    amount?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface CosmosBankV1Beta1QueryBalanceResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: {
    denom?: string;
    amount?: string;
  };
}

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface CosmosBankV1Beta1QueryDenomMetadataResponse {
  /**
   * Metadata represents a struct that describes
   * a basic token.
   */
  metadata?: {
    description?: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denom_units?: {
      /** denom represents the string name of the given denom unit (e.g uatom). */
      denom?: string;
      /**
       * exponent represents power of 10 exponent that one must
       * raise the base_denom to in order to equal the given DenomUnit's denom
       * 1 denom = 1^exponent base_denom
       * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
       * exponent = 6, thus: 1 atom = 10^6 uatom).
       * @format int64
       */
      exponent?: number;
      /** aliases is a list of string aliases for the given denom */
      aliases?: string[];
    }[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base?: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display?: string;
  };
}

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface CosmosBankV1Beta1QueryDenomsMetadataResponse {
  /** metadata provides the client information for all the registered tokens. */
  metadatas?: {
    description?: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denom_units?: {
      /** denom represents the string name of the given denom unit (e.g uatom). */
      denom?: string;
      /**
       * exponent represents power of 10 exponent that one must
       * raise the base_denom to in order to equal the given DenomUnit's denom
       * 1 denom = 1^exponent base_denom
       * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
       * exponent = 6, thus: 1 atom = 10^6 uatom).
       * @format int64
       */
      exponent?: number;
      /** aliases is a list of string aliases for the given denom */
      aliases?: string[];
    }[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base?: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface CosmosBankV1Beta1QueryParamsResponse {
  /** Params defines the parameters for the bank module. */
  params?: {
    send_enabled?: {
      denom?: string;
      enabled?: boolean;
    }[];
    default_send_enabled?: boolean;
  };
}

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface CosmosBankV1Beta1QuerySupplyOfResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: {
    denom?: string;
    amount?: string;
  };
}

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface CosmosBankV1Beta1QueryTotalSupplyResponse {
  /** supply is the supply of the coins */
  supply?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface CosmosBankV1Beta1SendEnabled {
  denom?: string;
  enabled?: boolean;
}

/** Input models transaction input. */
export interface CosmosBankV1Beta1Input {
  address?: string;
  coins?: {
    denom?: string;
    amount?: string;
  }[];
}

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export type CosmosBankV1Beta1MsgMultiSendResponse = object;

/** MsgSendResponse defines the Msg/Send response type. */
export type CosmosBankV1Beta1MsgSendResponse = object;

/** Output models transaction outputs. */
export interface CosmosBankV1Beta1Output {
  address?: string;
  coins?: {
    denom?: string;
    amount?: string;
  }[];
}

/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface CosmosBaseTendermintV1Beta1GetBlockByHeightResponse {
  /** BlockID */
  block_id?: {
    /** @format byte */
    hash?: string;
    /** PartsetHeader */
    part_set_header?: {
      /** @format int64 */
      total?: number;
      /** @format byte */
      hash?: string;
    };
  };
  block?: {
    /** Header defines the structure of a Tendermint block header. */
    header?: {
      /**
       * basic block info
       * Consensus captures the consensus rules for processing a block in the blockchain,
       * including all blockchain data structures and the rules of the application's
       * state transition machine.
       */
      version?: {
        /** @format uint64 */
        block?: string;
        /** @format uint64 */
        app?: string;
      };
      chain_id?: string;
      /** @format int64 */
      height?: string;
      /** @format date-time */
      time?: string;
      /** BlockID */
      last_block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /**
       * hashes of block data
       * @format byte
       */
      last_commit_hash?: string;
      /** @format byte */
      data_hash?: string;
      /**
       * hashes from the app output from the prev block
       * @format byte
       */
      validators_hash?: string;
      /** @format byte */
      next_validators_hash?: string;
      /** @format byte */
      consensus_hash?: string;
      /** @format byte */
      app_hash?: string;
      /** @format byte */
      last_results_hash?: string;
      /**
       * consensus info
       * @format byte
       */
      evidence_hash?: string;
      /** @format byte */
      proposer_address?: string;
    };
    /** Data contains the set of transactions included in the block */
    data?: {
      /**
       * Txs that will be applied by state @ block.Height+1.
       * NOTE: not all txs here are valid.  We're just agreeing on the order first.
       * This means that block.AppHash does not include these txs.
       */
      txs?: string[];
    };
    evidence?: {
      evidence?: {
        /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
        duplicate_vote_evidence?: {
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_a?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_b?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /** @format int64 */
          total_voting_power?: string;
          /** @format int64 */
          validator_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
        /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
        light_client_attack_evidence?: {
          conflicting_block?: {
            signed_header?: {
              /** Header defines the structure of a Tendermint block header. */
              header?: {
                /**
                 * basic block info
                 * Consensus captures the consensus rules for processing a block in the blockchain,
                 * including all blockchain data structures and the rules of the application's
                 * state transition machine.
                 */
                version?: {
                  /** @format uint64 */
                  block?: string;
                  /** @format uint64 */
                  app?: string;
                };
                chain_id?: string;
                /** @format int64 */
                height?: string;
                /** @format date-time */
                time?: string;
                /** BlockID */
                last_block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                /**
                 * hashes of block data
                 * @format byte
                 */
                last_commit_hash?: string;
                /** @format byte */
                data_hash?: string;
                /**
                 * hashes from the app output from the prev block
                 * @format byte
                 */
                validators_hash?: string;
                /** @format byte */
                next_validators_hash?: string;
                /** @format byte */
                consensus_hash?: string;
                /** @format byte */
                app_hash?: string;
                /** @format byte */
                last_results_hash?: string;
                /**
                 * consensus info
                 * @format byte
                 */
                evidence_hash?: string;
                /** @format byte */
                proposer_address?: string;
              };
              /** Commit contains the evidence that a block was committed by a set of validators. */
              commit?: {
                /** @format int64 */
                height?: string;
                /** @format int32 */
                round?: number;
                /** BlockID */
                block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                signatures?: {
                  /**
                   * BlockIdFlag indicates which BlcokID the signature is for
                   * @default "BLOCK_ID_FLAG_UNKNOWN"
                   */
                  block_id_flag?:
                    | 'BLOCK_ID_FLAG_UNKNOWN'
                    | 'BLOCK_ID_FLAG_ABSENT'
                    | 'BLOCK_ID_FLAG_COMMIT'
                    | 'BLOCK_ID_FLAG_NIL';
                  /** @format byte */
                  validator_address?: string;
                  /** @format date-time */
                  timestamp?: string;
                  /** @format byte */
                  signature?: string;
                }[];
              };
            };
            validator_set?: {
              validators?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              }[];
              proposer?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              };
              /** @format int64 */
              total_voting_power?: string;
            };
          };
          /** @format int64 */
          common_height?: string;
          byzantine_validators?: {
            /** @format byte */
            address?: string;
            /** PublicKey defines the keys available for use with Tendermint Validators */
            pub_key?: {
              /** @format byte */
              ed25519?: string;
              /** @format byte */
              secp256k1?: string;
            };
            /** @format int64 */
            voting_power?: string;
            /** @format int64 */
            proposer_priority?: string;
          }[];
          /** @format int64 */
          total_voting_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
      }[];
    };
    /** Commit contains the evidence that a block was committed by a set of validators. */
    last_commit?: {
      /** @format int64 */
      height?: string;
      /** @format int32 */
      round?: number;
      /** BlockID */
      block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      signatures?: {
        /**
         * BlockIdFlag indicates which BlcokID the signature is for
         * @default "BLOCK_ID_FLAG_UNKNOWN"
         */
        block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
        /** @format byte */
        validator_address?: string;
        /** @format date-time */
        timestamp?: string;
        /** @format byte */
        signature?: string;
      }[];
    };
  };
}

/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface CosmosBaseTendermintV1Beta1GetLatestBlockResponse {
  /** BlockID */
  block_id?: {
    /** @format byte */
    hash?: string;
    /** PartsetHeader */
    part_set_header?: {
      /** @format int64 */
      total?: number;
      /** @format byte */
      hash?: string;
    };
  };
  block?: {
    /** Header defines the structure of a Tendermint block header. */
    header?: {
      /**
       * basic block info
       * Consensus captures the consensus rules for processing a block in the blockchain,
       * including all blockchain data structures and the rules of the application's
       * state transition machine.
       */
      version?: {
        /** @format uint64 */
        block?: string;
        /** @format uint64 */
        app?: string;
      };
      chain_id?: string;
      /** @format int64 */
      height?: string;
      /** @format date-time */
      time?: string;
      /** BlockID */
      last_block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /**
       * hashes of block data
       * @format byte
       */
      last_commit_hash?: string;
      /** @format byte */
      data_hash?: string;
      /**
       * hashes from the app output from the prev block
       * @format byte
       */
      validators_hash?: string;
      /** @format byte */
      next_validators_hash?: string;
      /** @format byte */
      consensus_hash?: string;
      /** @format byte */
      app_hash?: string;
      /** @format byte */
      last_results_hash?: string;
      /**
       * consensus info
       * @format byte
       */
      evidence_hash?: string;
      /** @format byte */
      proposer_address?: string;
    };
    /** Data contains the set of transactions included in the block */
    data?: {
      /**
       * Txs that will be applied by state @ block.Height+1.
       * NOTE: not all txs here are valid.  We're just agreeing on the order first.
       * This means that block.AppHash does not include these txs.
       */
      txs?: string[];
    };
    evidence?: {
      evidence?: {
        /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
        duplicate_vote_evidence?: {
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_a?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_b?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /** @format int64 */
          total_voting_power?: string;
          /** @format int64 */
          validator_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
        /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
        light_client_attack_evidence?: {
          conflicting_block?: {
            signed_header?: {
              /** Header defines the structure of a Tendermint block header. */
              header?: {
                /**
                 * basic block info
                 * Consensus captures the consensus rules for processing a block in the blockchain,
                 * including all blockchain data structures and the rules of the application's
                 * state transition machine.
                 */
                version?: {
                  /** @format uint64 */
                  block?: string;
                  /** @format uint64 */
                  app?: string;
                };
                chain_id?: string;
                /** @format int64 */
                height?: string;
                /** @format date-time */
                time?: string;
                /** BlockID */
                last_block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                /**
                 * hashes of block data
                 * @format byte
                 */
                last_commit_hash?: string;
                /** @format byte */
                data_hash?: string;
                /**
                 * hashes from the app output from the prev block
                 * @format byte
                 */
                validators_hash?: string;
                /** @format byte */
                next_validators_hash?: string;
                /** @format byte */
                consensus_hash?: string;
                /** @format byte */
                app_hash?: string;
                /** @format byte */
                last_results_hash?: string;
                /**
                 * consensus info
                 * @format byte
                 */
                evidence_hash?: string;
                /** @format byte */
                proposer_address?: string;
              };
              /** Commit contains the evidence that a block was committed by a set of validators. */
              commit?: {
                /** @format int64 */
                height?: string;
                /** @format int32 */
                round?: number;
                /** BlockID */
                block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                signatures?: {
                  /**
                   * BlockIdFlag indicates which BlcokID the signature is for
                   * @default "BLOCK_ID_FLAG_UNKNOWN"
                   */
                  block_id_flag?:
                    | 'BLOCK_ID_FLAG_UNKNOWN'
                    | 'BLOCK_ID_FLAG_ABSENT'
                    | 'BLOCK_ID_FLAG_COMMIT'
                    | 'BLOCK_ID_FLAG_NIL';
                  /** @format byte */
                  validator_address?: string;
                  /** @format date-time */
                  timestamp?: string;
                  /** @format byte */
                  signature?: string;
                }[];
              };
            };
            validator_set?: {
              validators?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              }[];
              proposer?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              };
              /** @format int64 */
              total_voting_power?: string;
            };
          };
          /** @format int64 */
          common_height?: string;
          byzantine_validators?: {
            /** @format byte */
            address?: string;
            /** PublicKey defines the keys available for use with Tendermint Validators */
            pub_key?: {
              /** @format byte */
              ed25519?: string;
              /** @format byte */
              secp256k1?: string;
            };
            /** @format int64 */
            voting_power?: string;
            /** @format int64 */
            proposer_priority?: string;
          }[];
          /** @format int64 */
          total_voting_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
      }[];
    };
    /** Commit contains the evidence that a block was committed by a set of validators. */
    last_commit?: {
      /** @format int64 */
      height?: string;
      /** @format int32 */
      round?: number;
      /** BlockID */
      block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      signatures?: {
        /**
         * BlockIdFlag indicates which BlcokID the signature is for
         * @default "BLOCK_ID_FLAG_UNKNOWN"
         */
        block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
        /** @format byte */
        validator_address?: string;
        /** @format date-time */
        timestamp?: string;
        /** @format byte */
        signature?: string;
      }[];
    };
  };
}

/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface CosmosBaseTendermintV1Beta1GetLatestValidatorSetResponse {
  /** @format int64 */
  block_height?: string;
  validators?: {
    address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    pub_key?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** @format int64 */
    voting_power?: string;
    /** @format int64 */
    proposer_priority?: string;
  }[];
  /** pagination defines an pagination for the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** GetNodeInfoResponse is the request type for the Query/GetNodeInfo RPC method. */
export interface CosmosBaseTendermintV1Beta1GetNodeInfoResponse {
  default_node_info?: {
    protocol_version?: {
      /** @format uint64 */
      p2p?: string;
      /** @format uint64 */
      block?: string;
      /** @format uint64 */
      app?: string;
    };
    default_node_id?: string;
    listen_addr?: string;
    network?: string;
    version?: string;
    /** @format byte */
    channels?: string;
    moniker?: string;
    other?: {
      tx_index?: string;
      rpc_address?: string;
    };
  };
  /** VersionInfo is the type for the GetNodeInfoResponse message. */
  application_version?: {
    name?: string;
    app_name?: string;
    version?: string;
    git_commit?: string;
    build_tags?: string;
    go_version?: string;
    build_deps?: {
      /** module path */
      path?: string;
      /** module version */
      version?: string;
      /** checksum */
      sum?: string;
    }[];
  };
}

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface CosmosBaseTendermintV1Beta1GetSyncingResponse {
  syncing?: boolean;
}

/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface CosmosBaseTendermintV1Beta1GetValidatorSetByHeightResponse {
  /** @format int64 */
  block_height?: string;
  validators?: {
    address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    pub_key?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** @format int64 */
    voting_power?: string;
    /** @format int64 */
    proposer_priority?: string;
  }[];
  /** pagination defines an pagination for the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** Module is the type for VersionInfo */
export interface CosmosBaseTendermintV1Beta1Module {
  /** module path */
  path?: string;
  /** module version */
  version?: string;
  /** checksum */
  sum?: string;
}

/** Validator is the type for the validator-set. */
export interface CosmosBaseTendermintV1Beta1Validator {
  address?: string;
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  pub_key?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /** @format int64 */
  voting_power?: string;
  /** @format int64 */
  proposer_priority?: string;
}

/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface CosmosBaseTendermintV1Beta1VersionInfo {
  name?: string;
  app_name?: string;
  version?: string;
  git_commit?: string;
  build_tags?: string;
  go_version?: string;
  build_deps?: {
    /** module path */
    path?: string;
    /** module version */
    version?: string;
    /** checksum */
    sum?: string;
  }[];
}

/** PublicKey defines the keys available for use with Tendermint Validators */
export interface TendermintCryptoPublicKey {
  /** @format byte */
  ed25519?: string;
  /** @format byte */
  secp256k1?: string;
}

export interface TendermintP2PDefaultNodeInfo {
  protocol_version?: {
    /** @format uint64 */
    p2p?: string;
    /** @format uint64 */
    block?: string;
    /** @format uint64 */
    app?: string;
  };
  default_node_id?: string;
  listen_addr?: string;
  network?: string;
  version?: string;
  /** @format byte */
  channels?: string;
  moniker?: string;
  other?: {
    tx_index?: string;
    rpc_address?: string;
  };
}

export interface TendermintP2PDefaultNodeInfoOther {
  tx_index?: string;
  rpc_address?: string;
}

export interface TendermintP2PProtocolVersion {
  /** @format uint64 */
  p2p?: string;
  /** @format uint64 */
  block?: string;
  /** @format uint64 */
  app?: string;
}

export interface TendermintTypesBlock {
  /** Header defines the structure of a Tendermint block header. */
  header?: {
    /**
     * basic block info
     * Consensus captures the consensus rules for processing a block in the blockchain,
     * including all blockchain data structures and the rules of the application's
     * state transition machine.
     */
    version?: {
      /** @format uint64 */
      block?: string;
      /** @format uint64 */
      app?: string;
    };
    chain_id?: string;
    /** @format int64 */
    height?: string;
    /** @format date-time */
    time?: string;
    /** BlockID */
    last_block_id?: {
      /** @format byte */
      hash?: string;
      /** PartsetHeader */
      part_set_header?: {
        /** @format int64 */
        total?: number;
        /** @format byte */
        hash?: string;
      };
    };
    /**
     * hashes of block data
     * @format byte
     */
    last_commit_hash?: string;
    /** @format byte */
    data_hash?: string;
    /**
     * hashes from the app output from the prev block
     * @format byte
     */
    validators_hash?: string;
    /** @format byte */
    next_validators_hash?: string;
    /** @format byte */
    consensus_hash?: string;
    /** @format byte */
    app_hash?: string;
    /** @format byte */
    last_results_hash?: string;
    /**
     * consensus info
     * @format byte
     */
    evidence_hash?: string;
    /** @format byte */
    proposer_address?: string;
  };
  /** Data contains the set of transactions included in the block */
  data?: {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs?: string[];
  };
  evidence?: {
    evidence?: {
      /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
      duplicate_vote_evidence?: {
        /**
         * Vote represents a prevote, precommit, or commit vote from validators for
         * consensus.
         */
        vote_a?: {
          /**
           * SignedMsgType is a type of signed message in the consensus.
           *
           *  - SIGNED_MSG_TYPE_PREVOTE: Votes
           *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
           * @default "SIGNED_MSG_TYPE_UNKNOWN"
           */
          type?:
            | 'SIGNED_MSG_TYPE_UNKNOWN'
            | 'SIGNED_MSG_TYPE_PREVOTE'
            | 'SIGNED_MSG_TYPE_PRECOMMIT'
            | 'SIGNED_MSG_TYPE_PROPOSAL';
          /** @format int64 */
          height?: string;
          /** @format int32 */
          round?: number;
          /** BlockID */
          block_id?: {
            /** @format byte */
            hash?: string;
            /** PartsetHeader */
            part_set_header?: {
              /** @format int64 */
              total?: number;
              /** @format byte */
              hash?: string;
            };
          };
          /** @format date-time */
          timestamp?: string;
          /** @format byte */
          validator_address?: string;
          /** @format int32 */
          validator_index?: number;
          /** @format byte */
          signature?: string;
        };
        /**
         * Vote represents a prevote, precommit, or commit vote from validators for
         * consensus.
         */
        vote_b?: {
          /**
           * SignedMsgType is a type of signed message in the consensus.
           *
           *  - SIGNED_MSG_TYPE_PREVOTE: Votes
           *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
           * @default "SIGNED_MSG_TYPE_UNKNOWN"
           */
          type?:
            | 'SIGNED_MSG_TYPE_UNKNOWN'
            | 'SIGNED_MSG_TYPE_PREVOTE'
            | 'SIGNED_MSG_TYPE_PRECOMMIT'
            | 'SIGNED_MSG_TYPE_PROPOSAL';
          /** @format int64 */
          height?: string;
          /** @format int32 */
          round?: number;
          /** BlockID */
          block_id?: {
            /** @format byte */
            hash?: string;
            /** PartsetHeader */
            part_set_header?: {
              /** @format int64 */
              total?: number;
              /** @format byte */
              hash?: string;
            };
          };
          /** @format date-time */
          timestamp?: string;
          /** @format byte */
          validator_address?: string;
          /** @format int32 */
          validator_index?: number;
          /** @format byte */
          signature?: string;
        };
        /** @format int64 */
        total_voting_power?: string;
        /** @format int64 */
        validator_power?: string;
        /** @format date-time */
        timestamp?: string;
      };
      /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
      light_client_attack_evidence?: {
        conflicting_block?: {
          signed_header?: {
            /** Header defines the structure of a Tendermint block header. */
            header?: {
              /**
               * basic block info
               * Consensus captures the consensus rules for processing a block in the blockchain,
               * including all blockchain data structures and the rules of the application's
               * state transition machine.
               */
              version?: {
                /** @format uint64 */
                block?: string;
                /** @format uint64 */
                app?: string;
              };
              chain_id?: string;
              /** @format int64 */
              height?: string;
              /** @format date-time */
              time?: string;
              /** BlockID */
              last_block_id?: {
                /** @format byte */
                hash?: string;
                /** PartsetHeader */
                part_set_header?: {
                  /** @format int64 */
                  total?: number;
                  /** @format byte */
                  hash?: string;
                };
              };
              /**
               * hashes of block data
               * @format byte
               */
              last_commit_hash?: string;
              /** @format byte */
              data_hash?: string;
              /**
               * hashes from the app output from the prev block
               * @format byte
               */
              validators_hash?: string;
              /** @format byte */
              next_validators_hash?: string;
              /** @format byte */
              consensus_hash?: string;
              /** @format byte */
              app_hash?: string;
              /** @format byte */
              last_results_hash?: string;
              /**
               * consensus info
               * @format byte
               */
              evidence_hash?: string;
              /** @format byte */
              proposer_address?: string;
            };
            /** Commit contains the evidence that a block was committed by a set of validators. */
            commit?: {
              /** @format int64 */
              height?: string;
              /** @format int32 */
              round?: number;
              /** BlockID */
              block_id?: {
                /** @format byte */
                hash?: string;
                /** PartsetHeader */
                part_set_header?: {
                  /** @format int64 */
                  total?: number;
                  /** @format byte */
                  hash?: string;
                };
              };
              signatures?: {
                /**
                 * BlockIdFlag indicates which BlcokID the signature is for
                 * @default "BLOCK_ID_FLAG_UNKNOWN"
                 */
                block_id_flag?:
                  | 'BLOCK_ID_FLAG_UNKNOWN'
                  | 'BLOCK_ID_FLAG_ABSENT'
                  | 'BLOCK_ID_FLAG_COMMIT'
                  | 'BLOCK_ID_FLAG_NIL';
                /** @format byte */
                validator_address?: string;
                /** @format date-time */
                timestamp?: string;
                /** @format byte */
                signature?: string;
              }[];
            };
          };
          validator_set?: {
            validators?: {
              /** @format byte */
              address?: string;
              /** PublicKey defines the keys available for use with Tendermint Validators */
              pub_key?: {
                /** @format byte */
                ed25519?: string;
                /** @format byte */
                secp256k1?: string;
              };
              /** @format int64 */
              voting_power?: string;
              /** @format int64 */
              proposer_priority?: string;
            }[];
            proposer?: {
              /** @format byte */
              address?: string;
              /** PublicKey defines the keys available for use with Tendermint Validators */
              pub_key?: {
                /** @format byte */
                ed25519?: string;
                /** @format byte */
                secp256k1?: string;
              };
              /** @format int64 */
              voting_power?: string;
              /** @format int64 */
              proposer_priority?: string;
            };
            /** @format int64 */
            total_voting_power?: string;
          };
        };
        /** @format int64 */
        common_height?: string;
        byzantine_validators?: {
          /** @format byte */
          address?: string;
          /** PublicKey defines the keys available for use with Tendermint Validators */
          pub_key?: {
            /** @format byte */
            ed25519?: string;
            /** @format byte */
            secp256k1?: string;
          };
          /** @format int64 */
          voting_power?: string;
          /** @format int64 */
          proposer_priority?: string;
        }[];
        /** @format int64 */
        total_voting_power?: string;
        /** @format date-time */
        timestamp?: string;
      };
    }[];
  };
  /** Commit contains the evidence that a block was committed by a set of validators. */
  last_commit?: {
    /** @format int64 */
    height?: string;
    /** @format int32 */
    round?: number;
    /** BlockID */
    block_id?: {
      /** @format byte */
      hash?: string;
      /** PartsetHeader */
      part_set_header?: {
        /** @format int64 */
        total?: number;
        /** @format byte */
        hash?: string;
      };
    };
    signatures?: {
      /**
       * BlockIdFlag indicates which BlcokID the signature is for
       * @default "BLOCK_ID_FLAG_UNKNOWN"
       */
      block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
      /** @format byte */
      validator_address?: string;
      /** @format date-time */
      timestamp?: string;
      /** @format byte */
      signature?: string;
    }[];
  };
}

/** BlockID */
export interface TendermintTypesBlockID {
  /** @format byte */
  hash?: string;
  /** PartsetHeader */
  part_set_header?: {
    /** @format int64 */
    total?: number;
    /** @format byte */
    hash?: string;
  };
}

/**
 * BlockIdFlag indicates which BlcokID the signature is for
 * @default "BLOCK_ID_FLAG_UNKNOWN"
 */
export enum TendermintTypesBlockIDFlag {
  BLOCK_ID_FLAG_UNKNOWN = 'BLOCK_ID_FLAG_UNKNOWN',
  BLOCK_ID_FLAG_ABSENT = 'BLOCK_ID_FLAG_ABSENT',
  BLOCK_ID_FLAG_COMMIT = 'BLOCK_ID_FLAG_COMMIT',
  BLOCK_ID_FLAG_NIL = 'BLOCK_ID_FLAG_NIL',
}

/** Commit contains the evidence that a block was committed by a set of validators. */
export interface TendermintTypesCommit {
  /** @format int64 */
  height?: string;
  /** @format int32 */
  round?: number;
  /** BlockID */
  block_id?: {
    /** @format byte */
    hash?: string;
    /** PartsetHeader */
    part_set_header?: {
      /** @format int64 */
      total?: number;
      /** @format byte */
      hash?: string;
    };
  };
  signatures?: {
    /**
     * BlockIdFlag indicates which BlcokID the signature is for
     * @default "BLOCK_ID_FLAG_UNKNOWN"
     */
    block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
    /** @format byte */
    validator_address?: string;
    /** @format date-time */
    timestamp?: string;
    /** @format byte */
    signature?: string;
  }[];
}

/** CommitSig is a part of the Vote included in a Commit. */
export interface TendermintTypesCommitSig {
  /**
   * BlockIdFlag indicates which BlcokID the signature is for
   * @default "BLOCK_ID_FLAG_UNKNOWN"
   */
  block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
  /** @format byte */
  validator_address?: string;
  /** @format date-time */
  timestamp?: string;
  /** @format byte */
  signature?: string;
}

/** Data contains the set of transactions included in the block */
export interface TendermintTypesData {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs?: string[];
}

/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface TendermintTypesDuplicateVoteEvidence {
  /**
   * Vote represents a prevote, precommit, or commit vote from validators for
   * consensus.
   */
  vote_a?: {
    /**
     * SignedMsgType is a type of signed message in the consensus.
     *
     *  - SIGNED_MSG_TYPE_PREVOTE: Votes
     *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
     * @default "SIGNED_MSG_TYPE_UNKNOWN"
     */
    type?:
      | 'SIGNED_MSG_TYPE_UNKNOWN'
      | 'SIGNED_MSG_TYPE_PREVOTE'
      | 'SIGNED_MSG_TYPE_PRECOMMIT'
      | 'SIGNED_MSG_TYPE_PROPOSAL';
    /** @format int64 */
    height?: string;
    /** @format int32 */
    round?: number;
    /** BlockID */
    block_id?: {
      /** @format byte */
      hash?: string;
      /** PartsetHeader */
      part_set_header?: {
        /** @format int64 */
        total?: number;
        /** @format byte */
        hash?: string;
      };
    };
    /** @format date-time */
    timestamp?: string;
    /** @format byte */
    validator_address?: string;
    /** @format int32 */
    validator_index?: number;
    /** @format byte */
    signature?: string;
  };
  /**
   * Vote represents a prevote, precommit, or commit vote from validators for
   * consensus.
   */
  vote_b?: {
    /**
     * SignedMsgType is a type of signed message in the consensus.
     *
     *  - SIGNED_MSG_TYPE_PREVOTE: Votes
     *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
     * @default "SIGNED_MSG_TYPE_UNKNOWN"
     */
    type?:
      | 'SIGNED_MSG_TYPE_UNKNOWN'
      | 'SIGNED_MSG_TYPE_PREVOTE'
      | 'SIGNED_MSG_TYPE_PRECOMMIT'
      | 'SIGNED_MSG_TYPE_PROPOSAL';
    /** @format int64 */
    height?: string;
    /** @format int32 */
    round?: number;
    /** BlockID */
    block_id?: {
      /** @format byte */
      hash?: string;
      /** PartsetHeader */
      part_set_header?: {
        /** @format int64 */
        total?: number;
        /** @format byte */
        hash?: string;
      };
    };
    /** @format date-time */
    timestamp?: string;
    /** @format byte */
    validator_address?: string;
    /** @format int32 */
    validator_index?: number;
    /** @format byte */
    signature?: string;
  };
  /** @format int64 */
  total_voting_power?: string;
  /** @format int64 */
  validator_power?: string;
  /** @format date-time */
  timestamp?: string;
}

export interface TendermintTypesEvidence {
  /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
  duplicate_vote_evidence?: {
    /**
     * Vote represents a prevote, precommit, or commit vote from validators for
     * consensus.
     */
    vote_a?: {
      /**
       * SignedMsgType is a type of signed message in the consensus.
       *
       *  - SIGNED_MSG_TYPE_PREVOTE: Votes
       *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
       * @default "SIGNED_MSG_TYPE_UNKNOWN"
       */
      type?:
        | 'SIGNED_MSG_TYPE_UNKNOWN'
        | 'SIGNED_MSG_TYPE_PREVOTE'
        | 'SIGNED_MSG_TYPE_PRECOMMIT'
        | 'SIGNED_MSG_TYPE_PROPOSAL';
      /** @format int64 */
      height?: string;
      /** @format int32 */
      round?: number;
      /** BlockID */
      block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /** @format date-time */
      timestamp?: string;
      /** @format byte */
      validator_address?: string;
      /** @format int32 */
      validator_index?: number;
      /** @format byte */
      signature?: string;
    };
    /**
     * Vote represents a prevote, precommit, or commit vote from validators for
     * consensus.
     */
    vote_b?: {
      /**
       * SignedMsgType is a type of signed message in the consensus.
       *
       *  - SIGNED_MSG_TYPE_PREVOTE: Votes
       *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
       * @default "SIGNED_MSG_TYPE_UNKNOWN"
       */
      type?:
        | 'SIGNED_MSG_TYPE_UNKNOWN'
        | 'SIGNED_MSG_TYPE_PREVOTE'
        | 'SIGNED_MSG_TYPE_PRECOMMIT'
        | 'SIGNED_MSG_TYPE_PROPOSAL';
      /** @format int64 */
      height?: string;
      /** @format int32 */
      round?: number;
      /** BlockID */
      block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /** @format date-time */
      timestamp?: string;
      /** @format byte */
      validator_address?: string;
      /** @format int32 */
      validator_index?: number;
      /** @format byte */
      signature?: string;
    };
    /** @format int64 */
    total_voting_power?: string;
    /** @format int64 */
    validator_power?: string;
    /** @format date-time */
    timestamp?: string;
  };
  /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
  light_client_attack_evidence?: {
    conflicting_block?: {
      signed_header?: {
        /** Header defines the structure of a Tendermint block header. */
        header?: {
          /**
           * basic block info
           * Consensus captures the consensus rules for processing a block in the blockchain,
           * including all blockchain data structures and the rules of the application's
           * state transition machine.
           */
          version?: {
            /** @format uint64 */
            block?: string;
            /** @format uint64 */
            app?: string;
          };
          chain_id?: string;
          /** @format int64 */
          height?: string;
          /** @format date-time */
          time?: string;
          /** BlockID */
          last_block_id?: {
            /** @format byte */
            hash?: string;
            /** PartsetHeader */
            part_set_header?: {
              /** @format int64 */
              total?: number;
              /** @format byte */
              hash?: string;
            };
          };
          /**
           * hashes of block data
           * @format byte
           */
          last_commit_hash?: string;
          /** @format byte */
          data_hash?: string;
          /**
           * hashes from the app output from the prev block
           * @format byte
           */
          validators_hash?: string;
          /** @format byte */
          next_validators_hash?: string;
          /** @format byte */
          consensus_hash?: string;
          /** @format byte */
          app_hash?: string;
          /** @format byte */
          last_results_hash?: string;
          /**
           * consensus info
           * @format byte
           */
          evidence_hash?: string;
          /** @format byte */
          proposer_address?: string;
        };
        /** Commit contains the evidence that a block was committed by a set of validators. */
        commit?: {
          /** @format int64 */
          height?: string;
          /** @format int32 */
          round?: number;
          /** BlockID */
          block_id?: {
            /** @format byte */
            hash?: string;
            /** PartsetHeader */
            part_set_header?: {
              /** @format int64 */
              total?: number;
              /** @format byte */
              hash?: string;
            };
          };
          signatures?: {
            /**
             * BlockIdFlag indicates which BlcokID the signature is for
             * @default "BLOCK_ID_FLAG_UNKNOWN"
             */
            block_id_flag?:
              | 'BLOCK_ID_FLAG_UNKNOWN'
              | 'BLOCK_ID_FLAG_ABSENT'
              | 'BLOCK_ID_FLAG_COMMIT'
              | 'BLOCK_ID_FLAG_NIL';
            /** @format byte */
            validator_address?: string;
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            signature?: string;
          }[];
        };
      };
      validator_set?: {
        validators?: {
          /** @format byte */
          address?: string;
          /** PublicKey defines the keys available for use with Tendermint Validators */
          pub_key?: {
            /** @format byte */
            ed25519?: string;
            /** @format byte */
            secp256k1?: string;
          };
          /** @format int64 */
          voting_power?: string;
          /** @format int64 */
          proposer_priority?: string;
        }[];
        proposer?: {
          /** @format byte */
          address?: string;
          /** PublicKey defines the keys available for use with Tendermint Validators */
          pub_key?: {
            /** @format byte */
            ed25519?: string;
            /** @format byte */
            secp256k1?: string;
          };
          /** @format int64 */
          voting_power?: string;
          /** @format int64 */
          proposer_priority?: string;
        };
        /** @format int64 */
        total_voting_power?: string;
      };
    };
    /** @format int64 */
    common_height?: string;
    byzantine_validators?: {
      /** @format byte */
      address?: string;
      /** PublicKey defines the keys available for use with Tendermint Validators */
      pub_key?: {
        /** @format byte */
        ed25519?: string;
        /** @format byte */
        secp256k1?: string;
      };
      /** @format int64 */
      voting_power?: string;
      /** @format int64 */
      proposer_priority?: string;
    }[];
    /** @format int64 */
    total_voting_power?: string;
    /** @format date-time */
    timestamp?: string;
  };
}

export interface TendermintTypesEvidenceList {
  evidence?: {
    /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
    duplicate_vote_evidence?: {
      /**
       * Vote represents a prevote, precommit, or commit vote from validators for
       * consensus.
       */
      vote_a?: {
        /**
         * SignedMsgType is a type of signed message in the consensus.
         *
         *  - SIGNED_MSG_TYPE_PREVOTE: Votes
         *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
         * @default "SIGNED_MSG_TYPE_UNKNOWN"
         */
        type?:
          | 'SIGNED_MSG_TYPE_UNKNOWN'
          | 'SIGNED_MSG_TYPE_PREVOTE'
          | 'SIGNED_MSG_TYPE_PRECOMMIT'
          | 'SIGNED_MSG_TYPE_PROPOSAL';
        /** @format int64 */
        height?: string;
        /** @format int32 */
        round?: number;
        /** BlockID */
        block_id?: {
          /** @format byte */
          hash?: string;
          /** PartsetHeader */
          part_set_header?: {
            /** @format int64 */
            total?: number;
            /** @format byte */
            hash?: string;
          };
        };
        /** @format date-time */
        timestamp?: string;
        /** @format byte */
        validator_address?: string;
        /** @format int32 */
        validator_index?: number;
        /** @format byte */
        signature?: string;
      };
      /**
       * Vote represents a prevote, precommit, or commit vote from validators for
       * consensus.
       */
      vote_b?: {
        /**
         * SignedMsgType is a type of signed message in the consensus.
         *
         *  - SIGNED_MSG_TYPE_PREVOTE: Votes
         *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
         * @default "SIGNED_MSG_TYPE_UNKNOWN"
         */
        type?:
          | 'SIGNED_MSG_TYPE_UNKNOWN'
          | 'SIGNED_MSG_TYPE_PREVOTE'
          | 'SIGNED_MSG_TYPE_PRECOMMIT'
          | 'SIGNED_MSG_TYPE_PROPOSAL';
        /** @format int64 */
        height?: string;
        /** @format int32 */
        round?: number;
        /** BlockID */
        block_id?: {
          /** @format byte */
          hash?: string;
          /** PartsetHeader */
          part_set_header?: {
            /** @format int64 */
            total?: number;
            /** @format byte */
            hash?: string;
          };
        };
        /** @format date-time */
        timestamp?: string;
        /** @format byte */
        validator_address?: string;
        /** @format int32 */
        validator_index?: number;
        /** @format byte */
        signature?: string;
      };
      /** @format int64 */
      total_voting_power?: string;
      /** @format int64 */
      validator_power?: string;
      /** @format date-time */
      timestamp?: string;
    };
    /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
    light_client_attack_evidence?: {
      conflicting_block?: {
        signed_header?: {
          /** Header defines the structure of a Tendermint block header. */
          header?: {
            /**
             * basic block info
             * Consensus captures the consensus rules for processing a block in the blockchain,
             * including all blockchain data structures and the rules of the application's
             * state transition machine.
             */
            version?: {
              /** @format uint64 */
              block?: string;
              /** @format uint64 */
              app?: string;
            };
            chain_id?: string;
            /** @format int64 */
            height?: string;
            /** @format date-time */
            time?: string;
            /** BlockID */
            last_block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /**
             * hashes of block data
             * @format byte
             */
            last_commit_hash?: string;
            /** @format byte */
            data_hash?: string;
            /**
             * hashes from the app output from the prev block
             * @format byte
             */
            validators_hash?: string;
            /** @format byte */
            next_validators_hash?: string;
            /** @format byte */
            consensus_hash?: string;
            /** @format byte */
            app_hash?: string;
            /** @format byte */
            last_results_hash?: string;
            /**
             * consensus info
             * @format byte
             */
            evidence_hash?: string;
            /** @format byte */
            proposer_address?: string;
          };
          /** Commit contains the evidence that a block was committed by a set of validators. */
          commit?: {
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            signatures?: {
              /**
               * BlockIdFlag indicates which BlcokID the signature is for
               * @default "BLOCK_ID_FLAG_UNKNOWN"
               */
              block_id_flag?:
                | 'BLOCK_ID_FLAG_UNKNOWN'
                | 'BLOCK_ID_FLAG_ABSENT'
                | 'BLOCK_ID_FLAG_COMMIT'
                | 'BLOCK_ID_FLAG_NIL';
              /** @format byte */
              validator_address?: string;
              /** @format date-time */
              timestamp?: string;
              /** @format byte */
              signature?: string;
            }[];
          };
        };
        validator_set?: {
          validators?: {
            /** @format byte */
            address?: string;
            /** PublicKey defines the keys available for use with Tendermint Validators */
            pub_key?: {
              /** @format byte */
              ed25519?: string;
              /** @format byte */
              secp256k1?: string;
            };
            /** @format int64 */
            voting_power?: string;
            /** @format int64 */
            proposer_priority?: string;
          }[];
          proposer?: {
            /** @format byte */
            address?: string;
            /** PublicKey defines the keys available for use with Tendermint Validators */
            pub_key?: {
              /** @format byte */
              ed25519?: string;
              /** @format byte */
              secp256k1?: string;
            };
            /** @format int64 */
            voting_power?: string;
            /** @format int64 */
            proposer_priority?: string;
          };
          /** @format int64 */
          total_voting_power?: string;
        };
      };
      /** @format int64 */
      common_height?: string;
      byzantine_validators?: {
        /** @format byte */
        address?: string;
        /** PublicKey defines the keys available for use with Tendermint Validators */
        pub_key?: {
          /** @format byte */
          ed25519?: string;
          /** @format byte */
          secp256k1?: string;
        };
        /** @format int64 */
        voting_power?: string;
        /** @format int64 */
        proposer_priority?: string;
      }[];
      /** @format int64 */
      total_voting_power?: string;
      /** @format date-time */
      timestamp?: string;
    };
  }[];
}

/** Header defines the structure of a Tendermint block header. */
export interface TendermintTypesHeader {
  /**
   * basic block info
   * Consensus captures the consensus rules for processing a block in the blockchain,
   * including all blockchain data structures and the rules of the application's
   * state transition machine.
   */
  version?: {
    /** @format uint64 */
    block?: string;
    /** @format uint64 */
    app?: string;
  };
  chain_id?: string;
  /** @format int64 */
  height?: string;
  /** @format date-time */
  time?: string;
  /** BlockID */
  last_block_id?: {
    /** @format byte */
    hash?: string;
    /** PartsetHeader */
    part_set_header?: {
      /** @format int64 */
      total?: number;
      /** @format byte */
      hash?: string;
    };
  };
  /**
   * hashes of block data
   * @format byte
   */
  last_commit_hash?: string;
  /** @format byte */
  data_hash?: string;
  /**
   * hashes from the app output from the prev block
   * @format byte
   */
  validators_hash?: string;
  /** @format byte */
  next_validators_hash?: string;
  /** @format byte */
  consensus_hash?: string;
  /** @format byte */
  app_hash?: string;
  /** @format byte */
  last_results_hash?: string;
  /**
   * consensus info
   * @format byte
   */
  evidence_hash?: string;
  /** @format byte */
  proposer_address?: string;
}

export interface TendermintTypesLightBlock {
  signed_header?: {
    /** Header defines the structure of a Tendermint block header. */
    header?: {
      /**
       * basic block info
       * Consensus captures the consensus rules for processing a block in the blockchain,
       * including all blockchain data structures and the rules of the application's
       * state transition machine.
       */
      version?: {
        /** @format uint64 */
        block?: string;
        /** @format uint64 */
        app?: string;
      };
      chain_id?: string;
      /** @format int64 */
      height?: string;
      /** @format date-time */
      time?: string;
      /** BlockID */
      last_block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /**
       * hashes of block data
       * @format byte
       */
      last_commit_hash?: string;
      /** @format byte */
      data_hash?: string;
      /**
       * hashes from the app output from the prev block
       * @format byte
       */
      validators_hash?: string;
      /** @format byte */
      next_validators_hash?: string;
      /** @format byte */
      consensus_hash?: string;
      /** @format byte */
      app_hash?: string;
      /** @format byte */
      last_results_hash?: string;
      /**
       * consensus info
       * @format byte
       */
      evidence_hash?: string;
      /** @format byte */
      proposer_address?: string;
    };
    /** Commit contains the evidence that a block was committed by a set of validators. */
    commit?: {
      /** @format int64 */
      height?: string;
      /** @format int32 */
      round?: number;
      /** BlockID */
      block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      signatures?: {
        /**
         * BlockIdFlag indicates which BlcokID the signature is for
         * @default "BLOCK_ID_FLAG_UNKNOWN"
         */
        block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
        /** @format byte */
        validator_address?: string;
        /** @format date-time */
        timestamp?: string;
        /** @format byte */
        signature?: string;
      }[];
    };
  };
  validator_set?: {
    validators?: {
      /** @format byte */
      address?: string;
      /** PublicKey defines the keys available for use with Tendermint Validators */
      pub_key?: {
        /** @format byte */
        ed25519?: string;
        /** @format byte */
        secp256k1?: string;
      };
      /** @format int64 */
      voting_power?: string;
      /** @format int64 */
      proposer_priority?: string;
    }[];
    proposer?: {
      /** @format byte */
      address?: string;
      /** PublicKey defines the keys available for use with Tendermint Validators */
      pub_key?: {
        /** @format byte */
        ed25519?: string;
        /** @format byte */
        secp256k1?: string;
      };
      /** @format int64 */
      voting_power?: string;
      /** @format int64 */
      proposer_priority?: string;
    };
    /** @format int64 */
    total_voting_power?: string;
  };
}

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface TendermintTypesLightClientAttackEvidence {
  conflicting_block?: {
    signed_header?: {
      /** Header defines the structure of a Tendermint block header. */
      header?: {
        /**
         * basic block info
         * Consensus captures the consensus rules for processing a block in the blockchain,
         * including all blockchain data structures and the rules of the application's
         * state transition machine.
         */
        version?: {
          /** @format uint64 */
          block?: string;
          /** @format uint64 */
          app?: string;
        };
        chain_id?: string;
        /** @format int64 */
        height?: string;
        /** @format date-time */
        time?: string;
        /** BlockID */
        last_block_id?: {
          /** @format byte */
          hash?: string;
          /** PartsetHeader */
          part_set_header?: {
            /** @format int64 */
            total?: number;
            /** @format byte */
            hash?: string;
          };
        };
        /**
         * hashes of block data
         * @format byte
         */
        last_commit_hash?: string;
        /** @format byte */
        data_hash?: string;
        /**
         * hashes from the app output from the prev block
         * @format byte
         */
        validators_hash?: string;
        /** @format byte */
        next_validators_hash?: string;
        /** @format byte */
        consensus_hash?: string;
        /** @format byte */
        app_hash?: string;
        /** @format byte */
        last_results_hash?: string;
        /**
         * consensus info
         * @format byte
         */
        evidence_hash?: string;
        /** @format byte */
        proposer_address?: string;
      };
      /** Commit contains the evidence that a block was committed by a set of validators. */
      commit?: {
        /** @format int64 */
        height?: string;
        /** @format int32 */
        round?: number;
        /** BlockID */
        block_id?: {
          /** @format byte */
          hash?: string;
          /** PartsetHeader */
          part_set_header?: {
            /** @format int64 */
            total?: number;
            /** @format byte */
            hash?: string;
          };
        };
        signatures?: {
          /**
           * BlockIdFlag indicates which BlcokID the signature is for
           * @default "BLOCK_ID_FLAG_UNKNOWN"
           */
          block_id_flag?:
            | 'BLOCK_ID_FLAG_UNKNOWN'
            | 'BLOCK_ID_FLAG_ABSENT'
            | 'BLOCK_ID_FLAG_COMMIT'
            | 'BLOCK_ID_FLAG_NIL';
          /** @format byte */
          validator_address?: string;
          /** @format date-time */
          timestamp?: string;
          /** @format byte */
          signature?: string;
        }[];
      };
    };
    validator_set?: {
      validators?: {
        /** @format byte */
        address?: string;
        /** PublicKey defines the keys available for use with Tendermint Validators */
        pub_key?: {
          /** @format byte */
          ed25519?: string;
          /** @format byte */
          secp256k1?: string;
        };
        /** @format int64 */
        voting_power?: string;
        /** @format int64 */
        proposer_priority?: string;
      }[];
      proposer?: {
        /** @format byte */
        address?: string;
        /** PublicKey defines the keys available for use with Tendermint Validators */
        pub_key?: {
          /** @format byte */
          ed25519?: string;
          /** @format byte */
          secp256k1?: string;
        };
        /** @format int64 */
        voting_power?: string;
        /** @format int64 */
        proposer_priority?: string;
      };
      /** @format int64 */
      total_voting_power?: string;
    };
  };
  /** @format int64 */
  common_height?: string;
  byzantine_validators?: {
    /** @format byte */
    address?: string;
    /** PublicKey defines the keys available for use with Tendermint Validators */
    pub_key?: {
      /** @format byte */
      ed25519?: string;
      /** @format byte */
      secp256k1?: string;
    };
    /** @format int64 */
    voting_power?: string;
    /** @format int64 */
    proposer_priority?: string;
  }[];
  /** @format int64 */
  total_voting_power?: string;
  /** @format date-time */
  timestamp?: string;
}

/** PartsetHeader */
export interface TendermintTypesPartSetHeader {
  /** @format int64 */
  total?: number;
  /** @format byte */
  hash?: string;
}

export interface TendermintTypesSignedHeader {
  /** Header defines the structure of a Tendermint block header. */
  header?: {
    /**
     * basic block info
     * Consensus captures the consensus rules for processing a block in the blockchain,
     * including all blockchain data structures and the rules of the application's
     * state transition machine.
     */
    version?: {
      /** @format uint64 */
      block?: string;
      /** @format uint64 */
      app?: string;
    };
    chain_id?: string;
    /** @format int64 */
    height?: string;
    /** @format date-time */
    time?: string;
    /** BlockID */
    last_block_id?: {
      /** @format byte */
      hash?: string;
      /** PartsetHeader */
      part_set_header?: {
        /** @format int64 */
        total?: number;
        /** @format byte */
        hash?: string;
      };
    };
    /**
     * hashes of block data
     * @format byte
     */
    last_commit_hash?: string;
    /** @format byte */
    data_hash?: string;
    /**
     * hashes from the app output from the prev block
     * @format byte
     */
    validators_hash?: string;
    /** @format byte */
    next_validators_hash?: string;
    /** @format byte */
    consensus_hash?: string;
    /** @format byte */
    app_hash?: string;
    /** @format byte */
    last_results_hash?: string;
    /**
     * consensus info
     * @format byte
     */
    evidence_hash?: string;
    /** @format byte */
    proposer_address?: string;
  };
  /** Commit contains the evidence that a block was committed by a set of validators. */
  commit?: {
    /** @format int64 */
    height?: string;
    /** @format int32 */
    round?: number;
    /** BlockID */
    block_id?: {
      /** @format byte */
      hash?: string;
      /** PartsetHeader */
      part_set_header?: {
        /** @format int64 */
        total?: number;
        /** @format byte */
        hash?: string;
      };
    };
    signatures?: {
      /**
       * BlockIdFlag indicates which BlcokID the signature is for
       * @default "BLOCK_ID_FLAG_UNKNOWN"
       */
      block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
      /** @format byte */
      validator_address?: string;
      /** @format date-time */
      timestamp?: string;
      /** @format byte */
      signature?: string;
    }[];
  };
}

/**
 * SignedMsgType is a type of signed message in the consensus.
 *
 *  - SIGNED_MSG_TYPE_PREVOTE: Votes
 *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
 * @default "SIGNED_MSG_TYPE_UNKNOWN"
 */
export enum TendermintTypesSignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 'SIGNED_MSG_TYPE_UNKNOWN',
  SIGNED_MSG_TYPE_PREVOTE = 'SIGNED_MSG_TYPE_PREVOTE',
  SIGNED_MSG_TYPE_PRECOMMIT = 'SIGNED_MSG_TYPE_PRECOMMIT',
  SIGNED_MSG_TYPE_PROPOSAL = 'SIGNED_MSG_TYPE_PROPOSAL',
}

export interface TendermintTypesValidator {
  /** @format byte */
  address?: string;
  /** PublicKey defines the keys available for use with Tendermint Validators */
  pub_key?: {
    /** @format byte */
    ed25519?: string;
    /** @format byte */
    secp256k1?: string;
  };
  /** @format int64 */
  voting_power?: string;
  /** @format int64 */
  proposer_priority?: string;
}

export interface TendermintTypesValidatorSet {
  validators?: {
    /** @format byte */
    address?: string;
    /** PublicKey defines the keys available for use with Tendermint Validators */
    pub_key?: {
      /** @format byte */
      ed25519?: string;
      /** @format byte */
      secp256k1?: string;
    };
    /** @format int64 */
    voting_power?: string;
    /** @format int64 */
    proposer_priority?: string;
  }[];
  proposer?: {
    /** @format byte */
    address?: string;
    /** PublicKey defines the keys available for use with Tendermint Validators */
    pub_key?: {
      /** @format byte */
      ed25519?: string;
      /** @format byte */
      secp256k1?: string;
    };
    /** @format int64 */
    voting_power?: string;
    /** @format int64 */
    proposer_priority?: string;
  };
  /** @format int64 */
  total_voting_power?: string;
}

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface TendermintTypesVote {
  /**
   * SignedMsgType is a type of signed message in the consensus.
   *
   *  - SIGNED_MSG_TYPE_PREVOTE: Votes
   *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
   * @default "SIGNED_MSG_TYPE_UNKNOWN"
   */
  type?:
    | 'SIGNED_MSG_TYPE_UNKNOWN'
    | 'SIGNED_MSG_TYPE_PREVOTE'
    | 'SIGNED_MSG_TYPE_PRECOMMIT'
    | 'SIGNED_MSG_TYPE_PROPOSAL';
  /** @format int64 */
  height?: string;
  /** @format int32 */
  round?: number;
  /** BlockID */
  block_id?: {
    /** @format byte */
    hash?: string;
    /** PartsetHeader */
    part_set_header?: {
      /** @format int64 */
      total?: number;
      /** @format byte */
      hash?: string;
    };
  };
  /** @format date-time */
  timestamp?: string;
  /** @format byte */
  validator_address?: string;
  /** @format int32 */
  validator_index?: number;
  /** @format byte */
  signature?: string;
}

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface TendermintVersionConsensus {
  /** @format uint64 */
  block?: string;
  /** @format uint64 */
  app?: string;
}

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export type CosmosCrisisV1Beta1MsgVerifyInvariantResponse = object;

/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface CosmosBaseV1Beta1DecCoin {
  denom?: string;
  amount?: string;
}

/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface CosmosDistributionV1Beta1DelegationDelegatorReward {
  validator_address?: string;
  reward?: {
    denom?: string;
    amount?: string;
  }[];
}

/** Params defines the set of params for the distribution module. */
export interface CosmosDistributionV1Beta1Params {
  community_tax?: string;
  base_proposer_reward?: string;
  bonus_proposer_reward?: string;
  withdraw_addr_enabled?: boolean;
}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface CosmosDistributionV1Beta1QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface CosmosDistributionV1Beta1QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface CosmosDistributionV1Beta1QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: {
    validator_address?: string;
    reward?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /** total defines the sum of all the rewards. */
  total?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface CosmosDistributionV1Beta1QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators?: string[];
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface CosmosDistributionV1Beta1QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address?: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface CosmosDistributionV1Beta1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    community_tax?: string;
    base_proposer_reward?: string;
    bonus_proposer_reward?: string;
    withdraw_addr_enabled?: boolean;
  };
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface CosmosDistributionV1Beta1QueryValidatorCommissionResponse {
  /** commission defines the commision the validator received. */
  commission?: {
    commission?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface CosmosDistributionV1Beta1QueryValidatorOutstandingRewardsResponse {
  /**
   * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
   * for a validator inexpensive to track, allows simple sanity checks.
   */
  rewards?: {
    rewards?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface CosmosDistributionV1Beta1QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes?: {
    /** @format uint64 */
    validator_period?: string;
    fraction?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface CosmosDistributionV1Beta1ValidatorAccumulatedCommission {
  commission?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface CosmosDistributionV1Beta1ValidatorOutstandingRewards {
  rewards?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface CosmosDistributionV1Beta1ValidatorSlashEvent {
  /** @format uint64 */
  validator_period?: string;
  fraction?: string;
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export type CosmosDistributionV1Beta1MsgFundCommunityPoolResponse = object;

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export type CosmosDistributionV1Beta1MsgSetWithdrawAddressResponse = object;

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export type CosmosDistributionV1Beta1MsgWithdrawDelegatorRewardResponse = object;

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export type CosmosDistributionV1Beta1MsgWithdrawValidatorCommissionResponse = object;

/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface CosmosEvidenceV1Beta1QueryAllEvidenceResponse {
  /** evidence returns all evidences. */
  evidence?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface CosmosEvidenceV1Beta1QueryEvidenceResponse {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  evidence?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface CosmosEvidenceV1Beta1MsgSubmitEvidenceResponse {
  /**
   * hash defines the hash of the evidence.
   * @format byte
   */
  hash?: string;
}

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface CosmosGovV1Beta1Deposit {
  /** @format uint64 */
  proposal_id?: string;
  depositor?: string;
  amount?: {
    denom?: string;
    amount?: string;
  }[];
}

/** DepositParams defines the params for deposits on governance proposals. */
export interface CosmosGovV1Beta1DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit?: {
    denom?: string;
    amount?: string;
  }[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   *  months.
   */
  max_deposit_period?: string;
}

/** Proposal defines the core field members of a governance proposal. */
export interface CosmosGovV1Beta1Proposal {
  /** @format uint64 */
  proposal_id?: string;
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  content?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /**
   * ProposalStatus enumerates the valid statuses of a proposal.
   *
   *  - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
   *  - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   *  - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   *  - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   *  - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   *  - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   * @default "PROPOSAL_STATUS_UNSPECIFIED"
   */
  status?:
    | 'PROPOSAL_STATUS_UNSPECIFIED'
    | 'PROPOSAL_STATUS_DEPOSIT_PERIOD'
    | 'PROPOSAL_STATUS_VOTING_PERIOD'
    | 'PROPOSAL_STATUS_PASSED'
    | 'PROPOSAL_STATUS_REJECTED'
    | 'PROPOSAL_STATUS_FAILED';
  /** TallyResult defines a standard tally for a governance proposal. */
  final_tally_result?: {
    yes?: string;
    abstain?: string;
    no?: string;
    no_with_veto?: string;
  };
  /** @format date-time */
  submit_time?: string;
  /** @format date-time */
  deposit_end_time?: string;
  total_deposit?: {
    denom?: string;
    amount?: string;
  }[];
  /** @format date-time */
  voting_start_time?: string;
  /** @format date-time */
  voting_end_time?: string;
}

/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 *  - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
 *  - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
 * period.
 *  - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
 * period.
 *  - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
 * passed.
 *  - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
 * been rejected.
 *  - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
 * failed.
 * @default "PROPOSAL_STATUS_UNSPECIFIED"
 */
export enum CosmosGovV1Beta1ProposalStatus {
  PROPOSAL_STATUS_UNSPECIFIED = 'PROPOSAL_STATUS_UNSPECIFIED',
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 'PROPOSAL_STATUS_DEPOSIT_PERIOD',
  PROPOSAL_STATUS_VOTING_PERIOD = 'PROPOSAL_STATUS_VOTING_PERIOD',
  PROPOSAL_STATUS_PASSED = 'PROPOSAL_STATUS_PASSED',
  PROPOSAL_STATUS_REJECTED = 'PROPOSAL_STATUS_REJECTED',
  PROPOSAL_STATUS_FAILED = 'PROPOSAL_STATUS_FAILED',
}

/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface CosmosGovV1Beta1QueryDepositResponse {
  /**
   * Deposit defines an amount deposited by an account address to an active
   * proposal.
   */
  deposit?: {
    /** @format uint64 */
    proposal_id?: string;
    depositor?: string;
    amount?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface CosmosGovV1Beta1QueryDepositsResponse {
  deposits?: {
    /** @format uint64 */
    proposal_id?: string;
    depositor?: string;
    amount?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface CosmosGovV1Beta1QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  voting_params?: {
    /** Length of the voting period. */
    voting_period?: string;
  };
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: {
    /** Minimum deposit for a proposal to enter voting period. */
    min_deposit?: {
      denom?: string;
      amount?: string;
    }[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     */
    max_deposit_period?: string;
  };
  /** tally_params defines the parameters related to tally. */
  tally_params?: {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     * @format byte
     */
    quorum?: string;
    /**
     * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
     * @format byte
     */
    threshold?: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     * @format byte
     */
    veto_threshold?: string;
  };
}

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface CosmosGovV1Beta1QueryProposalResponse {
  /** Proposal defines the core field members of a governance proposal. */
  proposal?: {
    /** @format uint64 */
    proposal_id?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    content?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * ProposalStatus enumerates the valid statuses of a proposal.
     *
     *  - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
     *  - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *  - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *  - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *  - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *  - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     * @default "PROPOSAL_STATUS_UNSPECIFIED"
     */
    status?:
      | 'PROPOSAL_STATUS_UNSPECIFIED'
      | 'PROPOSAL_STATUS_DEPOSIT_PERIOD'
      | 'PROPOSAL_STATUS_VOTING_PERIOD'
      | 'PROPOSAL_STATUS_PASSED'
      | 'PROPOSAL_STATUS_REJECTED'
      | 'PROPOSAL_STATUS_FAILED';
    /** TallyResult defines a standard tally for a governance proposal. */
    final_tally_result?: {
      yes?: string;
      abstain?: string;
      no?: string;
      no_with_veto?: string;
    };
    /** @format date-time */
    submit_time?: string;
    /** @format date-time */
    deposit_end_time?: string;
    total_deposit?: {
      denom?: string;
      amount?: string;
    }[];
    /** @format date-time */
    voting_start_time?: string;
    /** @format date-time */
    voting_end_time?: string;
  };
}

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface CosmosGovV1Beta1QueryProposalsResponse {
  proposals?: {
    /** @format uint64 */
    proposal_id?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    content?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * ProposalStatus enumerates the valid statuses of a proposal.
     *
     *  - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
     *  - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *  - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *  - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *  - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *  - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     * @default "PROPOSAL_STATUS_UNSPECIFIED"
     */
    status?:
      | 'PROPOSAL_STATUS_UNSPECIFIED'
      | 'PROPOSAL_STATUS_DEPOSIT_PERIOD'
      | 'PROPOSAL_STATUS_VOTING_PERIOD'
      | 'PROPOSAL_STATUS_PASSED'
      | 'PROPOSAL_STATUS_REJECTED'
      | 'PROPOSAL_STATUS_FAILED';
    /** TallyResult defines a standard tally for a governance proposal. */
    final_tally_result?: {
      yes?: string;
      abstain?: string;
      no?: string;
      no_with_veto?: string;
    };
    /** @format date-time */
    submit_time?: string;
    /** @format date-time */
    deposit_end_time?: string;
    total_deposit?: {
      denom?: string;
      amount?: string;
    }[];
    /** @format date-time */
    voting_start_time?: string;
    /** @format date-time */
    voting_end_time?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface CosmosGovV1Beta1QueryTallyResultResponse {
  /** TallyResult defines a standard tally for a governance proposal. */
  tally?: {
    yes?: string;
    abstain?: string;
    no?: string;
    no_with_veto?: string;
  };
}

/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface CosmosGovV1Beta1QueryVoteResponse {
  /**
   * Vote defines a vote on a governance proposal.
   * A Vote consists of a proposal ID, the voter, and the vote option.
   */
  vote?: {
    /** @format uint64 */
    proposal_id?: string;
    voter?: string;
    /**
     * VoteOption enumerates the valid vote options for a given governance proposal.
     *
     *  - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *  - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
     *  - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *  - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
     *  - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     * @default "VOTE_OPTION_UNSPECIFIED"
     */
    option?:
      | 'VOTE_OPTION_UNSPECIFIED'
      | 'VOTE_OPTION_YES'
      | 'VOTE_OPTION_ABSTAIN'
      | 'VOTE_OPTION_NO'
      | 'VOTE_OPTION_NO_WITH_VETO';
  };
}

/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface CosmosGovV1Beta1QueryVotesResponse {
  /** votes defined the queried votes. */
  votes?: {
    /** @format uint64 */
    proposal_id?: string;
    voter?: string;
    /**
     * VoteOption enumerates the valid vote options for a given governance proposal.
     *
     *  - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *  - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
     *  - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *  - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
     *  - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     * @default "VOTE_OPTION_UNSPECIFIED"
     */
    option?:
      | 'VOTE_OPTION_UNSPECIFIED'
      | 'VOTE_OPTION_YES'
      | 'VOTE_OPTION_ABSTAIN'
      | 'VOTE_OPTION_NO'
      | 'VOTE_OPTION_NO_WITH_VETO';
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** TallyParams defines the params for tallying votes on governance proposals. */
export interface CosmosGovV1Beta1TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   * @format byte
   */
  quorum?: string;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
   * @format byte
   */
  threshold?: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   * @format byte
   */
  veto_threshold?: string;
}

/** TallyResult defines a standard tally for a governance proposal. */
export interface CosmosGovV1Beta1TallyResult {
  yes?: string;
  abstain?: string;
  no?: string;
  no_with_veto?: string;
}

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface CosmosGovV1Beta1Vote {
  /** @format uint64 */
  proposal_id?: string;
  voter?: string;
  /**
   * VoteOption enumerates the valid vote options for a given governance proposal.
   *
   *  - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
   *  - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
   *  - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
   *  - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
   *  - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
   * @default "VOTE_OPTION_UNSPECIFIED"
   */
  option?:
    | 'VOTE_OPTION_UNSPECIFIED'
    | 'VOTE_OPTION_YES'
    | 'VOTE_OPTION_ABSTAIN'
    | 'VOTE_OPTION_NO'
    | 'VOTE_OPTION_NO_WITH_VETO';
}

/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 *  - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
 *  - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
 *  - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
 *  - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
 *  - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
 * @default "VOTE_OPTION_UNSPECIFIED"
 */
export enum CosmosGovV1Beta1VoteOption {
  VOTE_OPTION_UNSPECIFIED = 'VOTE_OPTION_UNSPECIFIED',
  VOTE_OPTION_YES = 'VOTE_OPTION_YES',
  VOTE_OPTION_ABSTAIN = 'VOTE_OPTION_ABSTAIN',
  VOTE_OPTION_NO = 'VOTE_OPTION_NO',
  VOTE_OPTION_NO_WITH_VETO = 'VOTE_OPTION_NO_WITH_VETO',
}

/** VotingParams defines the params for voting on governance proposals. */
export interface CosmosGovV1Beta1VotingParams {
  /** Length of the voting period. */
  voting_period?: string;
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export type CosmosGovV1Beta1MsgDepositResponse = object;

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface CosmosGovV1Beta1MsgSubmitProposalResponse {
  /** @format uint64 */
  proposal_id?: string;
}

/** MsgVoteResponse defines the Msg/Vote response type. */
export type CosmosGovV1Beta1MsgVoteResponse = object;

/** Params holds parameters for the mint module. */
export interface CosmosMintV1Beta1Params {
  /** type of coin to mint */
  mint_denom?: string;
  /** maximum annual change in inflation rate */
  inflation_rate_change?: string;
  /** maximum inflation rate */
  inflation_max?: string;
  /** minimum inflation rate */
  inflation_min?: string;
  /** goal of percent bonded atoms */
  goal_bonded?: string;
  /**
   * expected blocks per year
   * @format uint64
   */
  blocks_per_year?: string;
}

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface CosmosMintV1Beta1QueryAnnualProvisionsResponse {
  /**
   * annual_provisions is the current minting annual provisions value.
   * @format byte
   */
  annual_provisions?: string;
}

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface CosmosMintV1Beta1QueryInflationResponse {
  /**
   * inflation is the current minting inflation value.
   * @format byte
   */
  inflation?: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface CosmosMintV1Beta1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    /** type of coin to mint */
    mint_denom?: string;
    /** maximum annual change in inflation rate */
    inflation_rate_change?: string;
    /** maximum inflation rate */
    inflation_max?: string;
    /** minimum inflation rate */
    inflation_min?: string;
    /** goal of percent bonded atoms */
    goal_bonded?: string;
    /**
     * expected blocks per year
     * @format uint64
     */
    blocks_per_year?: string;
  };
}

/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface CosmosParamsV1Beta1ParamChange {
  subspace?: string;
  key?: string;
  value?: string;
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface CosmosParamsV1Beta1QueryParamsResponse {
  /** param defines the queried parameter. */
  param?: {
    subspace?: string;
    key?: string;
    value?: string;
  };
}

/** Params represents the parameters used for by the slashing module. */
export interface CosmosSlashingV1Beta1Params {
  /** @format int64 */
  signed_blocks_window?: string;
  /** @format byte */
  min_signed_per_window?: string;
  downtime_jail_duration?: string;
  /** @format byte */
  slash_fraction_double_sign?: string;
  /** @format byte */
  slash_fraction_downtime?: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface CosmosSlashingV1Beta1QueryParamsResponse {
  /** Params represents the parameters used for by the slashing module. */
  params?: {
    /** @format int64 */
    signed_blocks_window?: string;
    /** @format byte */
    min_signed_per_window?: string;
    downtime_jail_duration?: string;
    /** @format byte */
    slash_fraction_double_sign?: string;
    /** @format byte */
    slash_fraction_downtime?: string;
  };
}

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface CosmosSlashingV1Beta1QuerySigningInfoResponse {
  /**
   * val_signing_info is the signing info of requested val cons address
   * ValidatorSigningInfo defines a validator's signing info for monitoring their
   * liveness activity.
   */
  val_signing_info?: {
    address?: string;
    /**
     * height at which validator was first a candidate OR was unjailed
     * @format int64
     */
    start_height?: string;
    /**
     * index offset into signed block bit array
     * @format int64
     */
    index_offset?: string;
    /**
     * timestamp validator cannot be unjailed until
     * @format date-time
     */
    jailed_until?: string;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned?: boolean;
    /**
     * missed blocks counter (to avoid scanning the array every time)
     * @format int64
     */
    missed_blocks_counter?: string;
  };
}

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface CosmosSlashingV1Beta1QuerySigningInfosResponse {
  /** info is the signing info of all validators */
  info?: {
    address?: string;
    /**
     * height at which validator was first a candidate OR was unjailed
     * @format int64
     */
    start_height?: string;
    /**
     * index offset into signed block bit array
     * @format int64
     */
    index_offset?: string;
    /**
     * timestamp validator cannot be unjailed until
     * @format date-time
     */
    jailed_until?: string;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned?: boolean;
    /**
     * missed blocks counter (to avoid scanning the array every time)
     * @format int64
     */
    missed_blocks_counter?: string;
  }[];
  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface CosmosSlashingV1Beta1ValidatorSigningInfo {
  address?: string;
  /**
   * height at which validator was first a candidate OR was unjailed
   * @format int64
   */
  start_height?: string;
  /**
   * index offset into signed block bit array
   * @format int64
   */
  index_offset?: string;
  /**
   * timestamp validator cannot be unjailed until
   * @format date-time
   */
  jailed_until?: string;
  /**
   * whether or not a validator has been tombstoned (killed out of validator
   * set)
   */
  tombstoned?: boolean;
  /**
   * missed blocks counter (to avoid scanning the array every time)
   * @format int64
   */
  missed_blocks_counter?: string;
}

/** MsgUnjailResponse defines the Msg/Unjail response type */
export type CosmosSlashingV1Beta1MsgUnjailResponse = object;

/**
 * BondStatus is the status of a validator.
 *
 *  - BOND_STATUS_UNSPECIFIED: UNSPECIFIED defines an invalid validator status.
 *  - BOND_STATUS_UNBONDED: UNBONDED defines a validator that is not bonded.
 *  - BOND_STATUS_UNBONDING: UNBONDING defines a validator that is unbonding.
 *  - BOND_STATUS_BONDED: BONDED defines a validator that is bonded.
 * @default "BOND_STATUS_UNSPECIFIED"
 */
export enum CosmosStakingV1Beta1BondStatus {
  BOND_STATUS_UNSPECIFIED = 'BOND_STATUS_UNSPECIFIED',
  BOND_STATUS_UNBONDED = 'BOND_STATUS_UNBONDED',
  BOND_STATUS_UNBONDING = 'BOND_STATUS_UNBONDING',
  BOND_STATUS_BONDED = 'BOND_STATUS_BONDED',
}

/** Commission defines commission parameters for a given validator. */
export interface CosmosStakingV1Beta1Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commission_rates?: {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate?: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    max_rate?: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    max_change_rate?: string;
  };
  /**
   * update_time is the last time the commission rate was changed.
   * @format date-time
   */
  update_time?: string;
}

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CosmosStakingV1Beta1CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate?: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  max_rate?: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  max_change_rate?: string;
}

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface CosmosStakingV1Beta1Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;
  /** shares define the delegation shares received. */
  shares?: string;
}

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface CosmosStakingV1Beta1DelegationResponse {
  /**
   * Delegation represents the bond with tokens held by an account. It is
   * owned by one delegator, and is associated with the voting power of one
   * validator.
   */
  delegation?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** shares define the delegation shares received. */
    shares?: string;
  };
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: {
    denom?: string;
    amount?: string;
  };
}

/** Description defines a validator description. */
export interface CosmosStakingV1Beta1Description {
  /** moniker defines a human-readable name for the validator. */
  moniker?: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity?: string;
  /** website defines an optional website link. */
  website?: string;
  /** security_contact defines an optional email for security contact. */
  security_contact?: string;
  /** details define other optional details. */
  details?: string;
}

/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface CosmosStakingV1Beta1HistoricalInfo {
  /** Header defines the structure of a Tendermint block header. */
  header?: {
    /**
     * basic block info
     * Consensus captures the consensus rules for processing a block in the blockchain,
     * including all blockchain data structures and the rules of the application's
     * state transition machine.
     */
    version?: {
      /** @format uint64 */
      block?: string;
      /** @format uint64 */
      app?: string;
    };
    chain_id?: string;
    /** @format int64 */
    height?: string;
    /** @format date-time */
    time?: string;
    /** prev block info */
    last_block_id?: {
      /** @format byte */
      hash?: string;
      /** PartsetHeader */
      part_set_header?: {
        /** @format int64 */
        total?: number;
        /** @format byte */
        hash?: string;
      };
    };
    /**
     * hashes of block data
     * @format byte
     */
    last_commit_hash?: string;
    /** @format byte */
    data_hash?: string;
    /**
     * hashes from the app output from the prev block
     * @format byte
     */
    validators_hash?: string;
    /** @format byte */
    next_validators_hash?: string;
    /** @format byte */
    consensus_hash?: string;
    /** @format byte */
    app_hash?: string;
    /** @format byte */
    last_results_hash?: string;
    /**
     * consensus info
     * @format byte
     */
    evidence_hash?: string;
    /** @format byte */
    proposer_address?: string;
  };
  valset?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  }[];
}

/** Params defines the parameters for the staking module. */
export interface CosmosStakingV1Beta1Params {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time?: string;
  /**
   * max_validators is the maximum number of validators.
   * @format int64
   */
  max_validators?: number;
  /**
   * max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
   * @format int64
   */
  max_entries?: number;
  /**
   * historical_entries is the number of historical entries to persist.
   * @format int64
   */
  historical_entries?: number;
  /** bond_denom defines the bondable coin denomination. */
  bond_denom?: string;
}

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface CosmosStakingV1Beta1Pool {
  not_bonded_tokens?: string;
  bonded_tokens?: string;
}

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface CosmosStakingV1Beta1QueryDelegationResponse {
  /**
   * DelegationResponse is equivalent to Delegation except that it contains a
   * balance in addition to shares which is more suitable for client responses.
   */
  delegation_response?: {
    /**
     * Delegation represents the bond with tokens held by an account. It is
     * owned by one delegator, and is associated with the voting power of one
     * validator.
     */
    delegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_address is the bech32-encoded address of the validator. */
      validator_address?: string;
      /** shares define the delegation shares received. */
      shares?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    balance?: {
      denom?: string;
      amount?: string;
    };
  };
}

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface CosmosStakingV1Beta1QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses?: {
    /**
     * Delegation represents the bond with tokens held by an account. It is
     * owned by one delegator, and is associated with the voting power of one
     * validator.
     */
    delegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_address is the bech32-encoded address of the validator. */
      validator_address?: string;
      /** shares define the delegation shares received. */
      shares?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    balance?: {
      denom?: string;
      amount?: string;
    };
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface CosmosStakingV1Beta1QueryDelegatorUnbondingDelegationsResponse {
  unbonding_responses?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** entries are the unbonding delegation entries. */
    entries?: {
      /**
       * creation_height is the height which the unbonding took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time is the unix time for unbonding completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the tokens initially scheduled to receive at completion. */
      initial_balance?: string;
      /** balance defines the tokens to receive at completion. */
      balance?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface CosmosStakingV1Beta1QueryDelegatorValidatorResponse {
  /**
   * Validator defines a validator, together with the total amount of the
   * Validator's bond shares and their exchange rate to coins. Slashing results in
   * a decrease in the exchange rate, allowing correct calculation of future
   * undelegations without iterating over delegators. When coins are delegated to
   * this validator, the validator is credited with a delegation whose number of
   * bond shares is based on the amount of coins delegated divided by the current
   * exchange rate. Voting power can be calculated as total bonded shares
   * multiplied by exchange rate.
   */
  validator?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  };
}

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface CosmosStakingV1Beta1QueryDelegatorValidatorsResponse {
  /** validators defines the the validators' info of a delegator. */
  validators?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface CosmosStakingV1Beta1QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: {
    /** Header defines the structure of a Tendermint block header. */
    header?: {
      /**
       * basic block info
       * Consensus captures the consensus rules for processing a block in the blockchain,
       * including all blockchain data structures and the rules of the application's
       * state transition machine.
       */
      version?: {
        /** @format uint64 */
        block?: string;
        /** @format uint64 */
        app?: string;
      };
      chain_id?: string;
      /** @format int64 */
      height?: string;
      /** @format date-time */
      time?: string;
      /** prev block info */
      last_block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /**
       * hashes of block data
       * @format byte
       */
      last_commit_hash?: string;
      /** @format byte */
      data_hash?: string;
      /**
       * hashes from the app output from the prev block
       * @format byte
       */
      validators_hash?: string;
      /** @format byte */
      next_validators_hash?: string;
      /** @format byte */
      consensus_hash?: string;
      /** @format byte */
      app_hash?: string;
      /** @format byte */
      last_results_hash?: string;
      /**
       * consensus info
       * @format byte
       */
      evidence_hash?: string;
      /** @format byte */
      proposer_address?: string;
    };
    valset?: {
      /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
      operator_address?: string;
      /**
       * `Any` contains an arbitrary serialized protocol buffer message along with a
       * URL that describes the type of the serialized message.
       *
       * Protobuf library provides support to pack/unpack Any values in the form
       * of utility functions or additional generated methods of the Any type.
       *
       * Example 1: Pack and unpack a message in C++.
       *
       *     Foo foo = ...;
       *     Any any;
       *     any.PackFrom(foo);
       *     ...
       *     if (any.UnpackTo(&foo)) {
       *       ...
       *     }
       *
       * Example 2: Pack and unpack a message in Java.
       *
       *     Foo foo = ...;
       *     Any any = Any.pack(foo);
       *     ...
       *     if (any.is(Foo.class)) {
       *       foo = any.unpack(Foo.class);
       *     }
       *
       *  Example 3: Pack and unpack a message in Python.
       *
       *     foo = Foo(...)
       *     any = Any()
       *     any.Pack(foo)
       *     ...
       *     if any.Is(Foo.DESCRIPTOR):
       *       any.Unpack(foo)
       *       ...
       *
       *  Example 4: Pack and unpack a message in Go
       *
       *      foo := &pb.Foo{...}
       *      any, err := ptypes.MarshalAny(foo)
       *      ...
       *      foo := &pb.Foo{}
       *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
       *        ...
       *      }
       *
       * The pack methods provided by protobuf library will by default use
       * 'type.googleapis.com/full.type.name' as the type URL and the unpack
       * methods only use the fully qualified type name after the last '/'
       * in the type URL, for example "foo.bar.com/x/y.z" will yield type
       * name "y.z".
       *
       *
       * JSON
       * ====
       * The JSON representation of an `Any` value uses the regular
       * representation of the deserialized, embedded message, with an
       * additional field `@type` which contains the type URL. Example:
       *
       *     package google.profile;
       *     message Person {
       *       string first_name = 1;
       *       string last_name = 2;
       *     }
       *
       *     {
       *       "@type": "type.googleapis.com/google.profile.Person",
       *       "firstName": <string>,
       *       "lastName": <string>
       *     }
       *
       * If the embedded message type is well-known and has a custom JSON
       * representation, that representation will be embedded adding a field
       * `value` which holds the custom JSON in addition to the `@type`
       * field. Example (for message [google.protobuf.Duration][]):
       *
       *     {
       *       "@type": "type.googleapis.com/google.protobuf.Duration",
       *       "value": "1.212s"
       *     }
       */
      consensus_pubkey?: {
        /**
         * A URL/resource name that uniquely identifies the type of the serialized
         * protocol buffer message. This string must contain at least
         * one "/" character. The last segment of the URL's path must represent
         * the fully qualified name of the type (as in
         * `path/google.protobuf.Duration`). The name should be in a canonical form
         * (e.g., leading "." is not accepted).
         *
         * In practice, teams usually precompile into the binary all types that they
         * expect it to use in the context of Any. However, for URLs which use the
         * scheme `http`, `https`, or no scheme, one can optionally set up a type
         * server that maps type URLs to message definitions as follows:
         *
         * * If no scheme is provided, `https` is assumed.
         * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
         *   value in binary format, or produce an error.
         * * Applications are allowed to cache lookup results based on the
         *   URL, or have them precompiled into a binary to avoid any
         *   lookup. Therefore, binary compatibility needs to be preserved
         *   on changes to types. (Use versioned type names to manage
         *   breaking changes.)
         *
         * Note: this functionality is not currently available in the official
         * protobuf release, and it is not used for type URLs beginning with
         * type.googleapis.com.
         *
         * Schemes other than `http`, `https` (or the empty scheme) might be
         * used with implementation specific semantics.
         */
        type_url?: string;
        /**
         * Must be a valid serialized protocol buffer of the above specified type.
         * @format byte
         */
        value?: string;
      };
      /** jailed defined whether the validator has been jailed from bonded status or not. */
      jailed?: boolean;
      /**
       * status is the validator status (bonded/unbonding/unbonded).
       * @default "BOND_STATUS_UNSPECIFIED"
       */
      status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
      /** tokens define the delegated tokens (incl. self-delegation). */
      tokens?: string;
      /** delegator_shares defines total shares issued to a validator's delegators. */
      delegator_shares?: string;
      /** description defines the description terms for the validator. */
      description?: {
        /** moniker defines a human-readable name for the validator. */
        moniker?: string;
        /** identity defines an optional identity signature (ex. UPort or Keybase). */
        identity?: string;
        /** website defines an optional website link. */
        website?: string;
        /** security_contact defines an optional email for security contact. */
        security_contact?: string;
        /** details define other optional details. */
        details?: string;
      };
      /**
       * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
       * @format int64
       */
      unbonding_height?: string;
      /**
       * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
       * @format date-time
       */
      unbonding_time?: string;
      /** commission defines the commission parameters. */
      commission?: {
        /** commission_rates defines the initial commission rates to be used for creating a validator. */
        commission_rates?: {
          /** rate is the commission rate charged to delegators, as a fraction. */
          rate?: string;
          /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
          max_rate?: string;
          /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
          max_change_rate?: string;
        };
        /**
         * update_time is the last time the commission rate was changed.
         * @format date-time
         */
        update_time?: string;
      };
      /** min_self_delegation is the validator's self declared minimum self delegation. */
      min_self_delegation?: string;
    }[];
  };
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface CosmosStakingV1Beta1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: {
    /** unbonding_time is the time duration of unbonding. */
    unbonding_time?: string;
    /**
     * max_validators is the maximum number of validators.
     * @format int64
     */
    max_validators?: number;
    /**
     * max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
     * @format int64
     */
    max_entries?: number;
    /**
     * historical_entries is the number of historical entries to persist.
     * @format int64
     */
    historical_entries?: number;
    /** bond_denom defines the bondable coin denomination. */
    bond_denom?: string;
  };
}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface CosmosStakingV1Beta1QueryPoolResponse {
  /** pool defines the pool info. */
  pool?: {
    not_bonded_tokens?: string;
    bonded_tokens?: string;
  };
}

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface CosmosStakingV1Beta1QueryRedelegationsResponse {
  redelegation_responses?: {
    /**
     * Redelegation contains the list of a particular delegator's redelegating bonds
     * from a particular source validator to a particular destination validator.
     */
    redelegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_src_address is the validator redelegation source operator address. */
      validator_src_address?: string;
      /** validator_dst_address is the validator redelegation destination operator address. */
      validator_dst_address?: string;
      /** entries are the redelegation entries. */
      entries?: {
        /**
         * creation_height  defines the height which the redelegation took place.
         * @format int64
         */
        creation_height?: string;
        /**
         * completion_time defines the unix time for redelegation completion.
         * @format date-time
         */
        completion_time?: string;
        /** initial_balance defines the initial balance when redelegation started. */
        initial_balance?: string;
        /** shares_dst is the amount of destination-validator shares created by redelegation. */
        shares_dst?: string;
      }[];
    };
    entries?: {
      /** RedelegationEntry defines a redelegation object with relevant metadata. */
      redelegation_entry?: {
        /**
         * creation_height  defines the height which the redelegation took place.
         * @format int64
         */
        creation_height?: string;
        /**
         * completion_time defines the unix time for redelegation completion.
         * @format date-time
         */
        completion_time?: string;
        /** initial_balance defines the initial balance when redelegation started. */
        initial_balance?: string;
        /** shares_dst is the amount of destination-validator shares created by redelegation. */
        shares_dst?: string;
      };
      balance?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface CosmosStakingV1Beta1QueryUnbondingDelegationResponse {
  /**
   * UnbondingDelegation stores all of a single delegator's unbonding bonds
   * for a single validator in an time-ordered list.
   */
  unbond?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** entries are the unbonding delegation entries. */
    entries?: {
      /**
       * creation_height is the height which the unbonding took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time is the unix time for unbonding completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the tokens initially scheduled to receive at completion. */
      initial_balance?: string;
      /** balance defines the tokens to receive at completion. */
      balance?: string;
    }[];
  };
}

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface CosmosStakingV1Beta1QueryValidatorDelegationsResponse {
  delegation_responses?: {
    /**
     * Delegation represents the bond with tokens held by an account. It is
     * owned by one delegator, and is associated with the voting power of one
     * validator.
     */
    delegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_address is the bech32-encoded address of the validator. */
      validator_address?: string;
      /** shares define the delegation shares received. */
      shares?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    balance?: {
      denom?: string;
      amount?: string;
    };
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface CosmosStakingV1Beta1QueryValidatorResponse {
  /**
   * Validator defines a validator, together with the total amount of the
   * Validator's bond shares and their exchange rate to coins. Slashing results in
   * a decrease in the exchange rate, allowing correct calculation of future
   * undelegations without iterating over delegators. When coins are delegated to
   * this validator, the validator is credited with a delegation whose number of
   * bond shares is based on the amount of coins delegated divided by the current
   * exchange rate. Voting power can be calculated as total bonded shares
   * multiplied by exchange rate.
   */
  validator?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  };
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface CosmosStakingV1Beta1QueryValidatorUnbondingDelegationsResponse {
  unbonding_responses?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** entries are the unbonding delegation entries. */
    entries?: {
      /**
       * creation_height is the height which the unbonding took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time is the unix time for unbonding completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the tokens initially scheduled to receive at completion. */
      initial_balance?: string;
      /** balance defines the tokens to receive at completion. */
      balance?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface CosmosStakingV1Beta1QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface CosmosStakingV1Beta1Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validator_src_address?: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validator_dst_address?: string;
  /** entries are the redelegation entries. */
  entries?: {
    /**
     * creation_height  defines the height which the redelegation took place.
     * @format int64
     */
    creation_height?: string;
    /**
     * completion_time defines the unix time for redelegation completion.
     * @format date-time
     */
    completion_time?: string;
    /** initial_balance defines the initial balance when redelegation started. */
    initial_balance?: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    shares_dst?: string;
  }[];
}

/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface CosmosStakingV1Beta1RedelegationEntry {
  /**
   * creation_height  defines the height which the redelegation took place.
   * @format int64
   */
  creation_height?: string;
  /**
   * completion_time defines the unix time for redelegation completion.
   * @format date-time
   */
  completion_time?: string;
  /** initial_balance defines the initial balance when redelegation started. */
  initial_balance?: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  shares_dst?: string;
}

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface CosmosStakingV1Beta1RedelegationEntryResponse {
  /** RedelegationEntry defines a redelegation object with relevant metadata. */
  redelegation_entry?: {
    /**
     * creation_height  defines the height which the redelegation took place.
     * @format int64
     */
    creation_height?: string;
    /**
     * completion_time defines the unix time for redelegation completion.
     * @format date-time
     */
    completion_time?: string;
    /** initial_balance defines the initial balance when redelegation started. */
    initial_balance?: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    shares_dst?: string;
  };
  balance?: string;
}

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface CosmosStakingV1Beta1RedelegationResponse {
  /**
   * Redelegation contains the list of a particular delegator's redelegating bonds
   * from a particular source validator to a particular destination validator.
   */
  redelegation?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validator_src_address?: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validator_dst_address?: string;
    /** entries are the redelegation entries. */
    entries?: {
      /**
       * creation_height  defines the height which the redelegation took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time defines the unix time for redelegation completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the initial balance when redelegation started. */
      initial_balance?: string;
      /** shares_dst is the amount of destination-validator shares created by redelegation. */
      shares_dst?: string;
    }[];
  };
  entries?: {
    /** RedelegationEntry defines a redelegation object with relevant metadata. */
    redelegation_entry?: {
      /**
       * creation_height  defines the height which the redelegation took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time defines the unix time for redelegation completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the initial balance when redelegation started. */
      initial_balance?: string;
      /** shares_dst is the amount of destination-validator shares created by redelegation. */
      shares_dst?: string;
    };
    balance?: string;
  }[];
}

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface CosmosStakingV1Beta1UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;
  /** entries are the unbonding delegation entries. */
  entries?: {
    /**
     * creation_height is the height which the unbonding took place.
     * @format int64
     */
    creation_height?: string;
    /**
     * completion_time is the unix time for unbonding completion.
     * @format date-time
     */
    completion_time?: string;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initial_balance?: string;
    /** balance defines the tokens to receive at completion. */
    balance?: string;
  }[];
}

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface CosmosStakingV1Beta1UnbondingDelegationEntry {
  /**
   * creation_height is the height which the unbonding took place.
   * @format int64
   */
  creation_height?: string;
  /**
   * completion_time is the unix time for unbonding completion.
   * @format date-time
   */
  completion_time?: string;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initial_balance?: string;
  /** balance defines the tokens to receive at completion. */
  balance?: string;
}

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface CosmosStakingV1Beta1Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operator_address?: string;
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_pubkey?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed?: boolean;
  /**
   * status is the validator status (bonded/unbonding/unbonded).
   * @default "BOND_STATUS_UNSPECIFIED"
   */
  status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens?: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegator_shares?: string;
  /** description defines the description terms for the validator. */
  description?: {
    /** moniker defines a human-readable name for the validator. */
    moniker?: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity?: string;
    /** website defines an optional website link. */
    website?: string;
    /** security_contact defines an optional email for security contact. */
    security_contact?: string;
    /** details define other optional details. */
    details?: string;
  };
  /**
   * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
   * @format int64
   */
  unbonding_height?: string;
  /**
   * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
   * @format date-time
   */
  unbonding_time?: string;
  /** commission defines the commission parameters. */
  commission?: {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commission_rates?: {
      /** rate is the commission rate charged to delegators, as a fraction. */
      rate?: string;
      /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
      max_rate?: string;
      /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
      max_change_rate?: string;
    };
    /**
     * update_time is the last time the commission rate was changed.
     * @format date-time
     */
    update_time?: string;
  };
  /** min_self_delegation is the validator's self declared minimum self delegation. */
  min_self_delegation?: string;
}

/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface CosmosStakingV1Beta1MsgBeginRedelegateResponse {
  /** @format date-time */
  completion_time?: string;
}

/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export type CosmosStakingV1Beta1MsgCreateValidatorResponse = object;

/** MsgDelegateResponse defines the Msg/Delegate response type. */
export type CosmosStakingV1Beta1MsgDelegateResponse = object;

/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export type CosmosStakingV1Beta1MsgEditValidatorResponse = object;

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface CosmosStakingV1Beta1MsgUndelegateResponse {
  /** @format date-time */
  completion_time?: string;
}

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface CosmosBaseAbciV1Beta1ABCIMessageLog {
  /** @format int64 */
  msg_index?: number;
  log?: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events?: {
    type?: string;
    attributes?: {
      key?: string;
      value?: string;
    }[];
  }[];
}

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface CosmosBaseAbciV1Beta1Attribute {
  key?: string;
  value?: string;
}

/** GasInfo defines tx execution gas context. */
export interface CosmosBaseAbciV1Beta1GasInfo {
  /**
   * GasWanted is the maximum units of work we allow this tx to perform.
   * @format uint64
   */
  gas_wanted?: string;
  /**
   * GasUsed is the amount of gas actually consumed.
   * @format uint64
   */
  gas_used?: string;
}

/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface CosmosBaseAbciV1Beta1Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * @format byte
   */
  data?: string;
  /** Log contains the log information from message or handler execution. */
  log?: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events?: {
    type?: string;
    attributes?: {
      /** @format byte */
      key?: string;
      /** @format byte */
      value?: string;
      index?: boolean;
    }[];
  }[];
}

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface CosmosBaseAbciV1Beta1StringEvent {
  type?: string;
  attributes?: {
    key?: string;
    value?: string;
  }[];
}

/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface CosmosBaseAbciV1Beta1TxResponse {
  /**
   * The block height
   * @format int64
   */
  height?: string;
  /** The transaction hash. */
  txhash?: string;
  /** Namespace for the Code */
  codespace?: string;
  /**
   * Response code.
   * @format int64
   */
  code?: number;
  /** Result bytes, if any. */
  data?: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  raw_log?: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs?: {
    /** @format int64 */
    msg_index?: number;
    log?: string;
    /**
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     */
    events?: {
      type?: string;
      attributes?: {
        key?: string;
        value?: string;
      }[];
    }[];
  }[];
  /** Additional information. May be non-deterministic. */
  info?: string;
  /**
   * Amount of gas requested for transaction.
   * @format int64
   */
  gas_wanted?: string;
  /**
   * Amount of gas consumed by transaction.
   * @format int64
   */
  gas_used?: string;
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  tx?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp?: string;
}

/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */
export interface CosmosCryptoMultisigV1Beta1CompactBitArray {
  /** @format int64 */
  extra_bits_stored?: number;
  /** @format byte */
  elems?: string;
}

/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 *  - SIGN_MODE_UNSPECIFIED: SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
 * rejected
 *  - SIGN_MODE_DIRECT: SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
 * verified with raw bytes from Tx
 *  - SIGN_MODE_TEXTUAL: SIGN_MODE_TEXTUAL is a future signing mode that will verify some
 * human-readable textual representation on top of the binary representation
 * from SIGN_MODE_DIRECT
 *  - SIGN_MODE_LEGACY_AMINO_JSON: SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
 * Amino JSON and will be removed in the future
 * @default "SIGN_MODE_UNSPECIFIED"
 */
export enum CosmosTxSigningV1Beta1SignMode {
  SIGN_MODE_UNSPECIFIED = 'SIGN_MODE_UNSPECIFIED',
  SIGN_MODE_DIRECT = 'SIGN_MODE_DIRECT',
  SIGN_MODE_TEXTUAL = 'SIGN_MODE_TEXTUAL',
  SIGN_MODE_LEGACY_AMINO_JSON = 'SIGN_MODE_LEGACY_AMINO_JSON',
}

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */
export interface CosmosTxV1Beta1AuthInfo {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   */
  signer_infos?: CosmosTxV1Beta1SignerInfo[];
  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   */
  fee?: {
    /** amount is the amount of coins to be paid as a fee */
    amount?: {
      denom?: string;
      amount?: string;
    }[];
    /**
     * gas_limit is the maximum gas that can be used in transaction processing
     * before an out of gas error occurs
     * @format uint64
     */
    gas_limit?: string;
    /**
     * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
     * the payer must be a tx signer (and thus have signed this field in AuthInfo).
     * setting this field does *not* change the ordering of required signers for the transaction.
     */
    payer?: string;
    /**
     * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
     * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
     * not support fee grants, this will fail
     */
    granter?: string;
  };
}

/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method.
 *
 *  - BROADCAST_MODE_UNSPECIFIED: zero-value for mode ordering
 *  - BROADCAST_MODE_BLOCK: BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
 * the tx to be committed in a block.
 *  - BROADCAST_MODE_SYNC: BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
 * a CheckTx execution response only.
 *  - BROADCAST_MODE_ASYNC: BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
 * immediately.
 * @default "BROADCAST_MODE_UNSPECIFIED"
 */
export enum CosmosTxV1Beta1BroadcastMode {
  BROADCAST_MODE_UNSPECIFIED = 'BROADCAST_MODE_UNSPECIFIED',
  BROADCAST_MODE_BLOCK = 'BROADCAST_MODE_BLOCK',
  BROADCAST_MODE_SYNC = 'BROADCAST_MODE_SYNC',
  BROADCAST_MODE_ASYNC = 'BROADCAST_MODE_ASYNC',
}

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface CosmosTxV1Beta1BroadcastTxRequest {
  /**
   * tx_bytes is the raw transaction.
   * @format byte
   */
  tx_bytes?: string;
  /**
   * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method.
   *
   *  - BROADCAST_MODE_UNSPECIFIED: zero-value for mode ordering
   *  - BROADCAST_MODE_BLOCK: BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
   * the tx to be committed in a block.
   *  - BROADCAST_MODE_SYNC: BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   *  - BROADCAST_MODE_ASYNC: BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   * @default "BROADCAST_MODE_UNSPECIFIED"
   */
  mode?: 'BROADCAST_MODE_UNSPECIFIED' | 'BROADCAST_MODE_BLOCK' | 'BROADCAST_MODE_SYNC' | 'BROADCAST_MODE_ASYNC';
}

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface CosmosTxV1Beta1BroadcastTxResponse {
  /**
   * TxResponse defines a structure containing relevant tx data and metadata. The
   * tags are stringified and the log is JSON decoded.
   */
  tx_response?: {
    /**
     * The block height
     * @format int64
     */
    height?: string;
    /** The transaction hash. */
    txhash?: string;
    /** Namespace for the Code */
    codespace?: string;
    /**
     * Response code.
     * @format int64
     */
    code?: number;
    /** Result bytes, if any. */
    data?: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    raw_log?: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs?: {
      /** @format int64 */
      msg_index?: number;
      log?: string;
      /**
       * Events contains a slice of Event objects that were emitted during some
       * execution.
       */
      events?: {
        type?: string;
        attributes?: {
          key?: string;
          value?: string;
        }[];
      }[];
    }[];
    /** Additional information. May be non-deterministic. */
    info?: string;
    /**
     * Amount of gas requested for transaction.
     * @format int64
     */
    gas_wanted?: string;
    /**
     * Amount of gas consumed by transaction.
     * @format int64
     */
    gas_used?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    tx?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp?: string;
  };
}

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface CosmosTxV1Beta1Fee {
  /** amount is the amount of coins to be paid as a fee */
  amount?: {
    denom?: string;
    amount?: string;
  }[];
  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   * @format uint64
   */
  gas_limit?: string;
  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   */
  payer?: string;
  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   */
  granter?: string;
}

/** GetTxResponse is the response type for the Service.GetTx method. */
export interface CosmosTxV1Beta1GetTxResponse {
  /** tx is the queried transaction. */
  tx?: CosmosTxV1Beta1Tx;
  /**
   * TxResponse defines a structure containing relevant tx data and metadata. The
   * tags are stringified and the log is JSON decoded.
   */
  tx_response?: {
    /**
     * The block height
     * @format int64
     */
    height?: string;
    /** The transaction hash. */
    txhash?: string;
    /** Namespace for the Code */
    codespace?: string;
    /**
     * Response code.
     * @format int64
     */
    code?: number;
    /** Result bytes, if any. */
    data?: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    raw_log?: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs?: {
      /** @format int64 */
      msg_index?: number;
      log?: string;
      /**
       * Events contains a slice of Event objects that were emitted during some
       * execution.
       */
      events?: {
        type?: string;
        attributes?: {
          key?: string;
          value?: string;
        }[];
      }[];
    }[];
    /** Additional information. May be non-deterministic. */
    info?: string;
    /**
     * Amount of gas requested for transaction.
     * @format int64
     */
    gas_wanted?: string;
    /**
     * Amount of gas consumed by transaction.
     * @format int64
     */
    gas_used?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    tx?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp?: string;
  };
}

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface CosmosTxV1Beta1GetTxsEventResponse {
  /** txs is the list of queried transactions. */
  txs?: CosmosTxV1Beta1Tx[];
  /** tx_responses is the list of queried TxResponses. */
  tx_responses?: {
    /**
     * The block height
     * @format int64
     */
    height?: string;
    /** The transaction hash. */
    txhash?: string;
    /** Namespace for the Code */
    codespace?: string;
    /**
     * Response code.
     * @format int64
     */
    code?: number;
    /** Result bytes, if any. */
    data?: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    raw_log?: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs?: {
      /** @format int64 */
      msg_index?: number;
      log?: string;
      /**
       * Events contains a slice of Event objects that were emitted during some
       * execution.
       */
      events?: {
        type?: string;
        attributes?: {
          key?: string;
          value?: string;
        }[];
      }[];
    }[];
    /** Additional information. May be non-deterministic. */
    info?: string;
    /**
     * Amount of gas requested for transaction.
     * @format int64
     */
    gas_wanted?: string;
    /**
     * Amount of gas consumed by transaction.
     * @format int64
     */
    gas_used?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    tx?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp?: string;
  }[];
  /** pagination defines an pagination for the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** ModeInfo describes the signing mode of a single or nested multisig signer. */
export interface CosmosTxV1Beta1ModeInfo {
  /** single represents a single signer */
  single?: {
    /**
     * mode is the signing mode of the single signer
     * SignMode represents a signing mode with its own security guarantees.
     *
     *  - SIGN_MODE_UNSPECIFIED: SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected
     *  - SIGN_MODE_DIRECT: SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx
     *  - SIGN_MODE_TEXTUAL: SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT
     *  - SIGN_MODE_LEGACY_AMINO_JSON: SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future
     * @default "SIGN_MODE_UNSPECIFIED"
     */
    mode?: 'SIGN_MODE_UNSPECIFIED' | 'SIGN_MODE_DIRECT' | 'SIGN_MODE_TEXTUAL' | 'SIGN_MODE_LEGACY_AMINO_JSON';
  };
  /** multi represents a nested multisig signer */
  multi?: CosmosTxV1Beta1ModeInfoMulti;
}

/** Multi is the mode info for a multisig public key */
export interface CosmosTxV1Beta1ModeInfoMulti {
  /**
   * bitarray specifies which keys within the multisig are signing
   * CompactBitArray is an implementation of a space efficient bit array.
   * This is used to ensure that the encoded data takes up a minimal amount of
   * space after proto encoding.
   * This is not thread safe, and is not intended for concurrent usage.
   */
  bitarray?: {
    /** @format int64 */
    extra_bits_stored?: number;
    /** @format byte */
    elems?: string;
  };
  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   */
  mode_infos?: CosmosTxV1Beta1ModeInfo[];
}

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */
export interface CosmosTxV1Beta1ModeInfoSingle {
  /**
   * mode is the signing mode of the single signer
   * SignMode represents a signing mode with its own security guarantees.
   *
   *  - SIGN_MODE_UNSPECIFIED: SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected
   *  - SIGN_MODE_DIRECT: SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx
   *  - SIGN_MODE_TEXTUAL: SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT
   *  - SIGN_MODE_LEGACY_AMINO_JSON: SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future
   * @default "SIGN_MODE_UNSPECIFIED"
   */
  mode?: 'SIGN_MODE_UNSPECIFIED' | 'SIGN_MODE_DIRECT' | 'SIGN_MODE_TEXTUAL' | 'SIGN_MODE_LEGACY_AMINO_JSON';
}

/**
 * OrderBy defines the sorting order
 * - ORDER_BY_UNSPECIFIED: ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case.
 *  - ORDER_BY_ASC: ORDER_BY_ASC defines ascending order
 *  - ORDER_BY_DESC: ORDER_BY_DESC defines descending order
 * @default "ORDER_BY_UNSPECIFIED"
 */
export enum CosmosTxV1Beta1OrderBy {
  ORDER_BY_UNSPECIFIED = 'ORDER_BY_UNSPECIFIED',
  ORDER_BY_ASC = 'ORDER_BY_ASC',
  ORDER_BY_DESC = 'ORDER_BY_DESC',
}

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */
export interface CosmosTxV1Beta1SignerInfo {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  public_key?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   * ModeInfo describes the signing mode of a single or nested multisig signer.
   */
  mode_info?: CosmosTxV1Beta1ModeInfo;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   * @format uint64
   */
  sequence?: string;
}

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface CosmosTxV1Beta1SimulateRequest {
  /** tx is the transaction to simulate. */
  tx?: CosmosTxV1Beta1Tx;
}

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface CosmosTxV1Beta1SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gas_info?: {
    /**
     * GasWanted is the maximum units of work we allow this tx to perform.
     * @format uint64
     */
    gas_wanted?: string;
    /**
     * GasUsed is the amount of gas actually consumed.
     * @format uint64
     */
    gas_used?: string;
  };
  /** result is the result of the simulation. */
  result?: {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     * @format byte
     */
    data?: string;
    /** Log contains the log information from message or handler execution. */
    log?: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     */
    events?: {
      type?: string;
      attributes?: {
        /** @format byte */
        key?: string;
        /** @format byte */
        value?: string;
        index?: boolean;
      }[];
    }[];
  };
}

/** Tx is the standard type used for broadcasting transactions. */
export interface CosmosTxV1Beta1Tx {
  /**
   * body is the processable content of the transaction
   * TxBody is the body of a transaction that all signers sign over.
   */
  body?: {
    /**
     * messages is a list of messages to be executed. The required signers of
     * those messages define the number and order of elements in AuthInfo's
     * signer_infos and Tx's signatures. Each required signer address is added to
     * the list only the first time it occurs.
     * By convention, the first required signer (usually from the first message)
     * is referred to as the primary signer and pays the fee for the whole
     * transaction.
     */
    messages?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    }[];
    /** memo is any arbitrary memo to be added to the transaction */
    memo?: string;
    /**
     * timeout is the block height after which this transaction will not
     * be processed by the chain
     * @format uint64
     */
    timeout_height?: string;
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, the transaction will be rejected
     */
    extension_options?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    }[];
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, they will be ignored
     */
    non_critical_extension_options?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    }[];
  };
  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   * AuthInfo describes the fee and signer modes that are used to sign a
   * transaction.
   */
  auth_info?: CosmosTxV1Beta1AuthInfo;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures?: string[];
}

/** TxBody is the body of a transaction that all signers sign over. */
export interface CosmosTxV1Beta1TxBody {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   */
  messages?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  }[];
  /** memo is any arbitrary memo to be added to the transaction */
  memo?: string;
  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain
   * @format uint64
   */
  timeout_height?: string;
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extension_options?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  }[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  non_critical_extension_options?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  }[];
}

/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface TendermintAbciEvent {
  type?: string;
  attributes?: {
    /** @format byte */
    key?: string;
    /** @format byte */
    value?: string;
    index?: boolean;
  }[];
}

/** EventAttribute is a single key-value pair, associated with an event. */
export interface TendermintAbciEventAttribute {
  /** @format byte */
  key?: string;
  /** @format byte */
  value?: string;
  index?: boolean;
}

/** Plan specifies information about a planned upgrade and when it should occur. */
export interface CosmosUpgradeV1Beta1Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name?: string;
  /**
   * The time after which the upgrade must be performed.
   * Leave set to its zero value to use a pre-defined Height instead.
   * @format date-time
   */
  time?: string;
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   * @format int64
   */
  height?: string;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info?: string;
  /**
   * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
   * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
   * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
   * previous version of the chain.
   * This will allow IBC connections to persist smoothly across planned chain upgrades
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  upgraded_client_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface CosmosUpgradeV1Beta1QueryAppliedPlanResponse {
  /**
   * height is the block height at which the plan was applied.
   * @format int64
   */
  height?: string;
}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface CosmosUpgradeV1Beta1QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan?: {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name?: string;
    /**
     * The time after which the upgrade must be performed.
     * Leave set to its zero value to use a pre-defined Height instead.
     * @format date-time
     */
    time?: string;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     * @format int64
     */
    height?: string;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info?: string;
    /**
     * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
     * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
     * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
     * previous version of the chain.
     * This will allow IBC connections to persist smoothly across planned chain upgrades
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    upgraded_client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface CosmosUpgradeV1Beta1QueryUpgradedConsensusStateResponse {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  upgraded_consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export type CosmosVestingV1Beta1MsgCreateVestingAccountResponse = object;

/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface CosmwasmWasmV1Beta1AbsoluteTxPosition {
  /**
   * BlockHeight is the block the contract was created at
   * @format uint64
   */
  block_height?: string;
  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   * @format uint64
   */
  tx_index?: string;
}

/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CosmwasmWasmV1Beta1CodeInfoResponse {
  /** @format uint64 */
  code_id?: string;
  creator?: string;
  /** @format byte */
  data_hash?: string;
  source?: string;
  builder?: string;
}

/** ContractCodeHistoryEntry metadata to a contract. */
export interface CosmwasmWasmV1Beta1ContractCodeHistoryEntry {
  /**
   * ContractCodeHistoryOperationType actions that caused a code change
   * - CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
   *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation
   *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration
   *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data
   * @default "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"
   */
  operation?:
    | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED'
    | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT'
    | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE'
    | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS';
  /**
   * CodeID is the reference to the stored WASM code
   * @format uint64
   */
  code_id?: string;
  /** Updated Tx position when the operation was executed. */
  updated?: {
    /**
     * BlockHeight is the block the contract was created at
     * @format uint64
     */
    block_height?: string;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     * @format uint64
     */
    tx_index?: string;
  };
  /** @format byte */
  msg?: string;
}

/**
 * ContractCodeHistoryOperationType actions that caused a code change
 * - CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
 *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation
 *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration
 *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data
 * @default "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"
 */
export enum CosmwasmWasmV1Beta1ContractCodeHistoryOperationType {
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED',
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT',
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE',
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS',
}

/** ContractInfo stores a WASM contract instance */
export interface CosmwasmWasmV1Beta1ContractInfo {
  /**
   * CodeID is the reference to the stored Wasm code
   * @format uint64
   */
  code_id?: string;
  /** Creator address who initially instantiated the contract */
  creator?: string;
  /** Admin is an optional address that can execute migrations */
  admin?: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label?: string;
  /**
   * Created Tx position when the contract was instantiated.
   * This data should kept internal and not be exposed via query results. Just
   * use for sorting
   * AbsoluteTxPosition is a unique transaction position that allows for global
   * ordering of transactions.
   */
  created?: {
    /**
     * BlockHeight is the block the contract was created at
     * @format uint64
     */
    block_height?: string;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     * @format uint64
     */
    tx_index?: string;
  };
  ibc_port_id?: string;
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  extension?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** Model is a struct that holds a KV pair */
export interface CosmwasmWasmV1Beta1Model {
  /**
   * hex-encode key to read it better (this is often ascii)
   * @format byte
   */
  key?: string;
  /**
   * base64-encode raw value
   * @format byte
   */
  value?: string;
}

/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface CosmwasmWasmV1Beta1QueryAllContractStateResponse {
  models?: {
    /**
     * hex-encode key to read it better (this is often ascii)
     * @format byte
     */
    key?: string;
    /**
     * base64-encode raw value
     * @format byte
     */
    value?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface CosmwasmWasmV1Beta1QueryCodeResponse {
  /** CodeInfoResponse contains code meta data from CodeInfo */
  code_info?: {
    /** @format uint64 */
    code_id?: string;
    creator?: string;
    /** @format byte */
    data_hash?: string;
    source?: string;
    builder?: string;
  };
  /** @format byte */
  data?: string;
}

/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface CosmwasmWasmV1Beta1QueryCodesResponse {
  code_infos?: {
    /** @format uint64 */
    code_id?: string;
    creator?: string;
    /** @format byte */
    data_hash?: string;
    source?: string;
    builder?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface CosmwasmWasmV1Beta1QueryContractHistoryResponse {
  entries?: {
    /**
     * ContractCodeHistoryOperationType actions that caused a code change
     * - CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
     *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation
     *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration
     *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data
     * @default "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"
     */
    operation?:
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED'
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT'
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE'
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS';
    /**
     * CodeID is the reference to the stored WASM code
     * @format uint64
     */
    code_id?: string;
    /** Updated Tx position when the operation was executed. */
    updated?: {
      /**
       * BlockHeight is the block the contract was created at
       * @format uint64
       */
      block_height?: string;
      /**
       * TxIndex is a monotonic counter within the block (actual transaction index,
       * or gas consumed)
       * @format uint64
       */
      tx_index?: string;
    };
    /** @format byte */
    msg?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface CosmwasmWasmV1Beta1QueryContractInfoResponse {
  /** address is the address of the contract */
  address?: string;
  /** ContractInfo stores a WASM contract instance */
  contract_info?: {
    /**
     * CodeID is the reference to the stored Wasm code
     * @format uint64
     */
    code_id?: string;
    /** Creator address who initially instantiated the contract */
    creator?: string;
    /** Admin is an optional address that can execute migrations */
    admin?: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label?: string;
    /**
     * Created Tx position when the contract was instantiated.
     * This data should kept internal and not be exposed via query results. Just
     * use for sorting
     * AbsoluteTxPosition is a unique transaction position that allows for global
     * ordering of transactions.
     */
    created?: {
      /**
       * BlockHeight is the block the contract was created at
       * @format uint64
       */
      block_height?: string;
      /**
       * TxIndex is a monotonic counter within the block (actual transaction index,
       * or gas consumed)
       * @format uint64
       */
      tx_index?: string;
    };
    ibc_port_id?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    extension?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
}

/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface CosmwasmWasmV1Beta1QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface CosmwasmWasmV1Beta1QueryRawContractStateResponse {
  /**
   * Data contains the raw store data
   * @format byte
   */
  data?: string;
}

/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface CosmwasmWasmV1Beta1QuerySmartContractStateResponse {
  /**
   * Data contains the json data returned from the smart contract
   * @format byte
   */
  data?: string;
}

/** AccessConfig access control type. */
export interface CosmwasmWasmV1Beta1AccessConfig {
  /**
   * AccessType permission types
   * - ACCESS_TYPE_UNSPECIFIED: AccessTypeUnspecified placeholder for empty value
   *  - ACCESS_TYPE_NOBODY: AccessTypeNobody forbidden
   *  - ACCESS_TYPE_ONLY_ADDRESS: AccessTypeOnlyAddress restricted to an address
   *  - ACCESS_TYPE_EVERYBODY: AccessTypeEverybody unrestricted
   * @default "ACCESS_TYPE_UNSPECIFIED"
   */
  permission?: 'ACCESS_TYPE_UNSPECIFIED' | 'ACCESS_TYPE_NOBODY' | 'ACCESS_TYPE_ONLY_ADDRESS' | 'ACCESS_TYPE_EVERYBODY';
  address?: string;
}

/**
 * AccessType permission types
 * - ACCESS_TYPE_UNSPECIFIED: AccessTypeUnspecified placeholder for empty value
 *  - ACCESS_TYPE_NOBODY: AccessTypeNobody forbidden
 *  - ACCESS_TYPE_ONLY_ADDRESS: AccessTypeOnlyAddress restricted to an address
 *  - ACCESS_TYPE_EVERYBODY: AccessTypeEverybody unrestricted
 * @default "ACCESS_TYPE_UNSPECIFIED"
 */
export enum CosmwasmWasmV1Beta1AccessType {
  ACCESS_TYPE_UNSPECIFIED = 'ACCESS_TYPE_UNSPECIFIED',
  ACCESS_TYPE_NOBODY = 'ACCESS_TYPE_NOBODY',
  ACCESS_TYPE_ONLY_ADDRESS = 'ACCESS_TYPE_ONLY_ADDRESS',
  ACCESS_TYPE_EVERYBODY = 'ACCESS_TYPE_EVERYBODY',
}

/** MsgClearAdminResponse returns empty data */
export type CosmwasmWasmV1Beta1MsgClearAdminResponse = object;

/** MsgExecuteContractResponse returns execution result data. */
export interface CosmwasmWasmV1Beta1MsgExecuteContractResponse {
  /**
   * Data contains base64-encoded bytes to returned from the contract
   * @format byte
   */
  data?: string;
}

/** MsgInstantiateContractResponse return instantiation result data */
export interface CosmwasmWasmV1Beta1MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address?: string;
  /**
   * Data contains base64-encoded bytes to returned from the contract
   * @format byte
   */
  data?: string;
}

/** MsgMigrateContractResponse returns contract migration result data. */
export interface CosmwasmWasmV1Beta1MsgMigrateContractResponse {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   * @format byte
   */
  data?: string;
}

/** MsgStoreCodeResponse returns store result data. */
export interface CosmwasmWasmV1Beta1MsgStoreCodeResponse {
  /**
   * CodeID is the reference to the stored WASM code
   * @format uint64
   */
  code_id?: string;
}

/** MsgUpdateAdminResponse returns empty data */
export type CosmwasmWasmV1Beta1MsgUpdateAdminResponse = object;

/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface IbcApplicationsTransferV1DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path?: string;
  /** base denomination of the relayed fungible token. */
  base_denom?: string;
}

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface IbcApplicationsTransferV1Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled?: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receive_enabled?: boolean;
}

/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface IbcApplicationsTransferV1QueryDenomTraceResponse {
  /**
   * DenomTrace contains the base denomination for ICS20 fungible tokens and the
   * source tracing information path.
   */
  denom_trace?: {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path?: string;
    /** base denomination of the relayed fungible token. */
    base_denom?: string;
  };
}

/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface IbcApplicationsTransferV1QueryDenomTracesResponse {
  /** denom_traces returns all denominations trace information. */
  denom_traces?: {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path?: string;
    /** base denomination of the relayed fungible token. */
    base_denom?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface IbcApplicationsTransferV1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    send_enabled?: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receive_enabled?: boolean;
  };
}

/** MsgTransferResponse defines the Msg/Transfer response type. */
export type IbcApplicationsTransferV1MsgTransferResponse = object;

/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
 * the same. However some consensus algorithms may choose to reset the
 * height in certain conditions e.g. hard forks, state-machine breaking changes
 * In these cases, the RevisionNumber is incremented so that height continues to
 * be monitonically increasing even as the RevisionHeight gets reset
 */
export interface IbcCoreClientV1Height {
  /**
   * the revision that the client is currently on
   * @format uint64
   */
  revision_number?: string;
  /**
   * the height within the given revision
   * @format uint64
   */
  revision_height?: string;
}

/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface IbcCoreChannelV1Channel {
  /**
   * current state of the channel end
   * State defines if a channel is in one of the following states:
   * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
   *
   *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
   *  - STATE_INIT: A channel has just started the opening handshake.
   *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
   *  - STATE_OPEN: A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
   * packets.
   * @default "STATE_UNINITIALIZED_UNSPECIFIED"
   */
  state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
  /**
   * whether the channel is ordered or unordered
   * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
   *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
   * @default "ORDER_NONE_UNSPECIFIED"
   */
  ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
  /** counterparty channel end */
  counterparty?: {
    /** port on the counterparty chain which owns the other end of the channel. */
    port_id?: string;
    /** channel end on the counterparty chain */
    channel_id?: string;
  };
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops?: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version?: string;
}

/** Counterparty defines a channel end counterparty */
export interface IbcCoreChannelV1Counterparty {
  /** port on the counterparty chain which owns the other end of the channel. */
  port_id?: string;
  /** channel end on the counterparty chain */
  channel_id?: string;
}

/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IbcCoreChannelV1IdentifiedChannel {
  /**
   * current state of the channel end
   * State defines if a channel is in one of the following states:
   * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
   *
   *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
   *  - STATE_INIT: A channel has just started the opening handshake.
   *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
   *  - STATE_OPEN: A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
   * packets.
   * @default "STATE_UNINITIALIZED_UNSPECIFIED"
   */
  state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
  /**
   * whether the channel is ordered or unordered
   * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
   *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
   * @default "ORDER_NONE_UNSPECIFIED"
   */
  ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
  /** counterparty channel end */
  counterparty?: {
    /** port on the counterparty chain which owns the other end of the channel. */
    port_id?: string;
    /** channel end on the counterparty chain */
    channel_id?: string;
  };
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops?: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version?: string;
  /** port identifier */
  port_id?: string;
  /** channel identifier */
  channel_id?: string;
}

/**
 * Order defines if a channel is ORDERED or UNORDERED
 * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
 *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
 * which they were sent.
 *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
 * @default "ORDER_NONE_UNSPECIFIED"
 */
export enum IbcCoreChannelV1Order {
  ORDER_NONE_UNSPECIFIED = 'ORDER_NONE_UNSPECIFIED',
  ORDER_UNORDERED = 'ORDER_UNORDERED',
  ORDER_ORDERED = 'ORDER_ORDERED',
}

/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface IbcCoreChannelV1PacketState {
  /** channel port identifier. */
  port_id?: string;
  /** channel unique identifier. */
  channel_id?: string;
  /**
   * packet sequence.
   * @format uint64
   */
  sequence?: string;
  /**
   * embedded data that represents packet state.
   * @format byte
   */
  data?: string;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface IbcCoreChannelV1QueryChannelClientStateResponse {
  /**
   * client state associated with the channel
   * IdentifiedClientState defines a client state with an additional client
   * identifier field.
   */
  identified_client_state?: {
    /** client identifier */
    client_id?: string;
    /**
     * client state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface IbcCoreChannelV1QueryChannelConsensusStateResponse {
  /**
   * consensus state associated with the channel
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /** client ID associated with the consensus state */
  client_id?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface IbcCoreChannelV1QueryChannelResponse {
  /**
   * channel associated with the request identifiers
   * Channel defines pipeline for exactly-once packet delivery between specific
   * modules on separate blockchains, which has at least one end capable of
   * sending packets and one end capable of receiving packets.
   */
  channel?: {
    /**
     * current state of the channel end
     * State defines if a channel is in one of the following states:
     * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
     *
     *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
     *  - STATE_INIT: A channel has just started the opening handshake.
     *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
     *  - STATE_OPEN: A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
     * packets.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
    /**
     * whether the channel is ordered or unordered
     * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
     *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
     * @default "ORDER_NONE_UNSPECIFIED"
     */
    ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
    /** counterparty channel end */
    counterparty?: {
      /** port on the counterparty chain which owns the other end of the channel. */
      port_id?: string;
      /** channel end on the counterparty chain */
      channel_id?: string;
    };
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops?: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface IbcCoreChannelV1QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels?: {
    /**
     * current state of the channel end
     * State defines if a channel is in one of the following states:
     * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
     *
     *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
     *  - STATE_INIT: A channel has just started the opening handshake.
     *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
     *  - STATE_OPEN: A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
     * packets.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
    /**
     * whether the channel is ordered or unordered
     * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
     *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
     * @default "ORDER_NONE_UNSPECIFIED"
     */
    ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
    /** counterparty channel end */
    counterparty?: {
      /** port on the counterparty chain which owns the other end of the channel. */
      port_id?: string;
      /** channel end on the counterparty chain */
      channel_id?: string;
    };
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops?: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version?: string;
    /** port identifier */
    port_id?: string;
    /** channel identifier */
    channel_id?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface IbcCoreChannelV1QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels?: {
    /**
     * current state of the channel end
     * State defines if a channel is in one of the following states:
     * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
     *
     *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
     *  - STATE_INIT: A channel has just started the opening handshake.
     *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
     *  - STATE_OPEN: A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
     * packets.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
    /**
     * whether the channel is ordered or unordered
     * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
     *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
     * @default "ORDER_NONE_UNSPECIFIED"
     */
    ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
    /** counterparty channel end */
    counterparty?: {
      /** port on the counterparty chain which owns the other end of the channel. */
      port_id?: string;
      /** channel end on the counterparty chain */
      channel_id?: string;
    };
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops?: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version?: string;
    /** port identifier */
    port_id?: string;
    /** channel identifier */
    channel_id?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface IbcCoreChannelV1QueryNextSequenceReceiveResponse {
  /**
   * next sequence receive number
   * @format uint64
   */
  next_sequence_receive?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface IbcCoreChannelV1QueryPacketAcknowledgementResponse {
  /**
   * packet associated with the request fields
   * @format byte
   */
  acknowledgement?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface IbcCoreChannelV1QueryPacketAcknowledgementsResponse {
  acknowledgements?: {
    /** channel port identifier. */
    port_id?: string;
    /** channel unique identifier. */
    channel_id?: string;
    /**
     * packet sequence.
     * @format uint64
     */
    sequence?: string;
    /**
     * embedded data that represents packet state.
     * @format byte
     */
    data?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface IbcCoreChannelV1QueryPacketCommitmentResponse {
  /**
   * packet associated with the request fields
   * @format byte
   */
  commitment?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface IbcCoreChannelV1QueryPacketCommitmentsResponse {
  commitments?: {
    /** channel port identifier. */
    port_id?: string;
    /** channel unique identifier. */
    channel_id?: string;
    /**
     * packet sequence.
     * @format uint64
     */
    sequence?: string;
    /**
     * embedded data that represents packet state.
     * @format byte
     */
    data?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet receipt
 * which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface IbcCoreChannelV1QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received?: boolean;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface IbcCoreChannelV1QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences?: string[];
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface IbcCoreChannelV1QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences?: string[];
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 *
 *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
 *  - STATE_INIT: A channel has just started the opening handshake.
 *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
 *  - STATE_OPEN: A channel has completed the handshake. Open channels are
 * ready to send and receive packets.
 *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
 * packets.
 * @default "STATE_UNINITIALIZED_UNSPECIFIED"
 */
export enum IbcCoreChannelV1State {
  STATE_UNINITIALIZED_UNSPECIFIED = 'STATE_UNINITIALIZED_UNSPECIFIED',
  STATE_INIT = 'STATE_INIT',
  STATE_TRYOPEN = 'STATE_TRYOPEN',
  STATE_OPEN = 'STATE_OPEN',
  STATE_CLOSED = 'STATE_CLOSED',
}

/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IbcCoreClientV1IdentifiedClientState {
  /** client identifier */
  client_id?: string;
  /**
   * client state
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  client_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export type IbcCoreChannelV1MsgAcknowledgementResponse = object;

/** MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response type. */
export type IbcCoreChannelV1MsgChannelCloseConfirmResponse = object;

/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export type IbcCoreChannelV1MsgChannelCloseInitResponse = object;

/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export type IbcCoreChannelV1MsgChannelOpenAckResponse = object;

/** MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response type. */
export type IbcCoreChannelV1MsgChannelOpenConfirmResponse = object;

/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export type IbcCoreChannelV1MsgChannelOpenInitResponse = object;

/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export type IbcCoreChannelV1MsgChannelOpenTryResponse = object;

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export type IbcCoreChannelV1MsgRecvPacketResponse = object;

/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export type IbcCoreChannelV1MsgTimeoutOnCloseResponse = object;

/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export type IbcCoreChannelV1MsgTimeoutResponse = object;

/** Packet defines a type that carries data across different chains through IBC */
export interface IbcCoreChannelV1Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   * @format uint64
   */
  sequence?: string;
  /** identifies the port on the sending chain. */
  source_port?: string;
  /** identifies the channel end on the sending chain. */
  source_channel?: string;
  /** identifies the port on the receiving chain. */
  destination_port?: string;
  /** identifies the channel end on the receiving chain. */
  destination_channel?: string;
  /**
   * actual opaque bytes transferred directly to the application module
   * @format byte
   */
  data?: string;
  /**
   * block height after which the packet times out
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  timeout_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
  /**
   * block timestamp (in nanoseconds) after which the packet times out
   * @format uint64
   */
  timeout_timestamp?: string;
}

/** ConsensusStateWithHeight defines a consensus state with an additional height field. */
export interface IbcCoreClientV1ConsensusStateWithHeight {
  /**
   * consensus state height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
  /**
   * consensus state
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** Params defines the set of IBC light client parameters. */
export interface IbcCoreClientV1Params {
  /** allowed_clients defines the list of allowed client state types. */
  allowed_clients?: string[];
}

/** QueryClientParamsResponse is the response type for the Query/ClientParams RPC method. */
export interface IbcCoreClientV1QueryClientParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    /** allowed_clients defines the list of allowed client state types. */
    allowed_clients?: string[];
  };
}

/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface IbcCoreClientV1QueryClientStateResponse {
  /**
   * client state associated with the request identifier
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  client_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface IbcCoreClientV1QueryClientStatesResponse {
  /** list of stored ClientStates of the chain. */
  client_states?: {
    /** client identifier */
    client_id?: string;
    /**
     * client state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface IbcCoreClientV1QueryConsensusStateResponse {
  /**
   * consensus state associated with the client identifier at the given height
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface IbcCoreClientV1QueryConsensusStatesResponse {
  /** consensus states associated with the identifier */
  consensus_states?: {
    /**
     * consensus state height
     * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
     * the same. However some consensus algorithms may choose to reset the
     * height in certain conditions e.g. hard forks, state-machine breaking changes
     * In these cases, the RevisionNumber is incremented so that height continues to
     * be monitonically increasing even as the RevisionHeight gets reset
     */
    height?: {
      /**
       * the revision that the client is currently on
       * @format uint64
       */
      revision_number?: string;
      /**
       * the height within the given revision
       * @format uint64
       */
      revision_height?: string;
    };
    /**
     * consensus state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export type IbcCoreClientV1MsgCreateClientResponse = object;

/** MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response type. */
export type IbcCoreClientV1MsgSubmitMisbehaviourResponse = object;

/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export type IbcCoreClientV1MsgUpdateClientResponse = object;

/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export type IbcCoreClientV1MsgUpgradeClientResponse = object;

/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface IbcCoreCommitmentV1MerklePrefix {
  /** @format byte */
  key_prefix?: string;
}

/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface IbcCoreConnectionV1ConnectionEnd {
  /** client associated with this connection. */
  client_id?: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection.
   */
  versions?: {
    /** unique version identifier */
    identifier?: string;
    /** list of features compatible with the specified identifier */
    features?: string[];
  }[];
  /**
   * current state of the connection end.
   * @default "STATE_UNINITIALIZED_UNSPECIFIED"
   */
  state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN';
  /** counterparty chain associated with this connection. */
  counterparty?: {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    client_id?: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connection_id?: string;
    /**
     * MerklePrefix is merkle path prefixed to the key.
     * The constructed key from the Path and the key will be append(Path.KeyPath,
     * append(Path.KeyPrefix, key...))
     * commitment merkle prefix of the counterparty chain.
     */
    prefix?: {
      /** @format byte */
      key_prefix?: string;
    };
  };
  /**
   * delay period that must pass before a consensus state can be used for packet-verification
   * NOTE: delay period logic is only implemented by some clients.
   * @format uint64
   */
  delay_period?: string;
}

/** Counterparty defines the counterparty chain associated with a connection end. */
export interface IbcCoreConnectionV1Counterparty {
  /**
   * identifies the client on the counterparty chain associated with a given
   * connection.
   */
  client_id?: string;
  /**
   * identifies the connection end on the counterparty chain associated with a
   * given connection.
   */
  connection_id?: string;
  /**
   * MerklePrefix is merkle path prefixed to the key.
   * The constructed key from the Path and the key will be append(Path.KeyPath,
   * append(Path.KeyPrefix, key...))
   * commitment merkle prefix of the counterparty chain.
   */
  prefix?: {
    /** @format byte */
    key_prefix?: string;
  };
}

/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IbcCoreConnectionV1IdentifiedConnection {
  /** connection identifier. */
  id?: string;
  /** client associated with this connection. */
  client_id?: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection
   */
  versions?: {
    /** unique version identifier */
    identifier?: string;
    /** list of features compatible with the specified identifier */
    features?: string[];
  }[];
  /**
   * current state of the connection end.
   * @default "STATE_UNINITIALIZED_UNSPECIFIED"
   */
  state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN';
  /** counterparty chain associated with this connection. */
  counterparty?: {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    client_id?: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connection_id?: string;
    /**
     * MerklePrefix is merkle path prefixed to the key.
     * The constructed key from the Path and the key will be append(Path.KeyPath,
     * append(Path.KeyPrefix, key...))
     * commitment merkle prefix of the counterparty chain.
     */
    prefix?: {
      /** @format byte */
      key_prefix?: string;
    };
  };
  /**
   * delay period associated with this connection.
   * @format uint64
   */
  delay_period?: string;
}

/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface IbcCoreConnectionV1QueryClientConnectionsResponse {
  /** slice of all the connection paths associated with a client. */
  connection_paths?: string[];
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was generated
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface IbcCoreConnectionV1QueryConnectionClientStateResponse {
  /**
   * client state associated with the channel
   * IdentifiedClientState defines a client state with an additional client
   * identifier field.
   */
  identified_client_state?: {
    /** client identifier */
    client_id?: string;
    /**
     * client state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface IbcCoreConnectionV1QueryConnectionConsensusStateResponse {
  /**
   * consensus state associated with the channel
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /** client ID associated with the consensus state */
  client_id?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface IbcCoreConnectionV1QueryConnectionResponse {
  /**
   * connection associated with the request identifier
   * ConnectionEnd defines a stateful object on a chain connected to another
   * separate one.
   * NOTE: there must only be 2 defined ConnectionEnds to establish
   * a connection between two chains.
   */
  connection?: {
    /** client associated with this connection. */
    client_id?: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions?: {
      /** unique version identifier */
      identifier?: string;
      /** list of features compatible with the specified identifier */
      features?: string[];
    }[];
    /**
     * current state of the connection end.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN';
    /** counterparty chain associated with this connection. */
    counterparty?: {
      /**
       * identifies the client on the counterparty chain associated with a given
       * connection.
       */
      client_id?: string;
      /**
       * identifies the connection end on the counterparty chain associated with a
       * given connection.
       */
      connection_id?: string;
      /**
       * MerklePrefix is merkle path prefixed to the key.
       * The constructed key from the Path and the key will be append(Path.KeyPath,
       * append(Path.KeyPrefix, key...))
       * commitment merkle prefix of the counterparty chain.
       */
      prefix?: {
        /** @format byte */
        key_prefix?: string;
      };
    };
    /**
     * delay period that must pass before a consensus state can be used for packet-verification
     * NOTE: delay period logic is only implemented by some clients.
     * @format uint64
     */
    delay_period?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface IbcCoreConnectionV1QueryConnectionsResponse {
  /** list of stored connections of the chain. */
  connections?: {
    /** connection identifier. */
    id?: string;
    /** client associated with this connection. */
    client_id?: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     */
    versions?: {
      /** unique version identifier */
      identifier?: string;
      /** list of features compatible with the specified identifier */
      features?: string[];
    }[];
    /**
     * current state of the connection end.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN';
    /** counterparty chain associated with this connection. */
    counterparty?: {
      /**
       * identifies the client on the counterparty chain associated with a given
       * connection.
       */
      client_id?: string;
      /**
       * identifies the connection end on the counterparty chain associated with a
       * given connection.
       */
      connection_id?: string;
      /**
       * MerklePrefix is merkle path prefixed to the key.
       * The constructed key from the Path and the key will be append(Path.KeyPath,
       * append(Path.KeyPrefix, key...))
       * commitment merkle prefix of the counterparty chain.
       */
      prefix?: {
        /** @format byte */
        key_prefix?: string;
      };
    };
    /**
     * delay period associated with this connection.
     * @format uint64
     */
    delay_period?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 *
 *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
 *  - STATE_INIT: A connection end has just started the opening handshake.
 *  - STATE_TRYOPEN: A connection end has acknowledged the handshake step on the counterparty
 * chain.
 *  - STATE_OPEN: A connection end has completed the handshake.
 * @default "STATE_UNINITIALIZED_UNSPECIFIED"
 */
export enum IbcCoreConnectionV1State {
  STATE_UNINITIALIZED_UNSPECIFIED = 'STATE_UNINITIALIZED_UNSPECIFIED',
  STATE_INIT = 'STATE_INIT',
  STATE_TRYOPEN = 'STATE_TRYOPEN',
  STATE_OPEN = 'STATE_OPEN',
}

/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface IbcCoreConnectionV1Version {
  /** unique version identifier */
  identifier?: string;
  /** list of features compatible with the specified identifier */
  features?: string[];
}

/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export type IbcCoreConnectionV1MsgConnectionOpenAckResponse = object;

/** MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm response type. */
export type IbcCoreConnectionV1MsgConnectionOpenConfirmResponse = object;

/** MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response type. */
export type IbcCoreConnectionV1MsgConnectionOpenInitResponse = object;

/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export type IbcCoreConnectionV1MsgConnectionOpenTryResponse = object;

export interface GraphStatsData {
  /** @format uint64 */
  cyberlinks?: string;
  /** @format uint64 */
  particles?: string;
}

export interface IsAnyLinkExistData {
  /** @format boolean */
  exist?: boolean;
}

export interface IsLinkExistData {
  /** @format boolean */
  exist?: boolean;
}

export interface KarmaData {
  /** @format uint64 */
  karma?: string;
}

export interface NegentropyData {
  /** @format uint64 */
  negentropy?: string;
}

export interface ParticleNegentropyData {
  /** @format uint64 */
  entropy?: string;
}

export interface BacklinksData {
  result?: {
    particle?: string;
    /** @format uint64 */
    rank?: string;
  }[];
  pagination?: {
    /** @format int64 */
    total?: number;
  };
}

export interface RankParamsData {
  params?: {
    /** @format int64 */
    calculation_period?: string;
    damping_factor?: string;
    tolerance?: string;
  };
}

export interface RankData {
  /** @format uint64 */
  rank?: string;
}

export interface SearchData {
  result?: {
    particle?: string;
    /** @format uint64 */
    rank?: string;
  }[];
  pagination?: {
    /** @format int64 */
    total?: number;
  };
}

export interface TopData {
  result?: {
    particle?: string;
    /** @format uint64 */
    rank?: string;
  }[];
  pagination?: {
    /** @format int64 */
    total?: number;
  };
}

export interface LoadData {
  /** DecProto defines a Protobuf wrapper around a Dec object. */
  load?: {
    dec?: string;
  };
}

export interface NeuronBandwidthData {
  neuron_bandwidth?: {
    neuron?: string;
    /** @format uint64 */
    remained_value?: string;
    /** @format uint64 */
    last_updated_block?: string;
    /** @format uint64 */
    max_value?: string;
  };
}

export interface BandwidthParamsData {
  params?: {
    /** @format uint64 */
    recovery_period?: string;
    /** @format uint64 */
    adjust_price_period?: string;
    base_price?: string;
    base_load?: string;
    /** @format uint64 */
    max_block_bandwidth?: string;
  };
}

export interface PriceData {
  /** DecProto defines a Protobuf wrapper around a Dec object. */
  price?: {
    dec?: string;
  };
}

export interface TotalBandwidthData {
  /** @format uint64 */
  total_bandwidth?: string;
}

export interface DestinationRoutedEnergyData {
  value?: {
    denom?: string;
    amount?: string;
  }[];
}

export interface DestinationRoutesData {
  routes?: {
    source?: string;
    destination?: string;
    name?: string;
    value?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

export interface GridParamsData {
  params?: {
    /** @format int64 */
    max_routes?: number;
  };
}

export interface RouteData {
  route?: {
    source?: string;
    destination?: string;
    name?: string;
    value?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

export interface RoutesData {
  routes?: {
    source?: string;
    destination?: string;
    name?: string;
    value?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

export interface SourceRoutedEnergyData {
  value?: {
    denom?: string;
    amount?: string;
  }[];
}

export interface SourceRoutesData {
  routes?: {
    source?: string;
    destination?: string;
    name?: string;
    value?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

export interface InvestmintData {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: {
    denom?: string;
    amount?: string;
  };
}

export interface ResourcesParamsData {
  params?: {
    /** @format int64 */
    max_slots?: number;
    /** @format int64 */
    halving_period_volt_blocks?: number;
    /** @format int64 */
    halving_period_ampere_blocks?: number;
    /** @format int64 */
    base_investmint_period_volt?: number;
    /** @format int64 */
    base_investmint_period_ampere?: number;
    /** @format int64 */
    min_investmint_period?: number;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    base_investmint_amount_volt?: {
      denom?: string;
      amount?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    base_investmint_amount_ampere?: {
      denom?: string;
      amount?: string;
    };
  };
}

export interface DmnParamsData {
  params?: {
    /** @format int64 */
    max_slots?: number;
    /** @format int64 */
    max_gas?: number;
    /** @format int64 */
    fee_ttl?: number;
  };
}

export interface ThoughtData {
  thought?: {
    program?: string;
    trigger?: {
      /** @format uint64 */
      period?: string;
      /** @format uint64 */
      block?: string;
    };
    load?: {
      input?: string;
      /**
       * Coin defines a token with a denomination and an amount.
       *
       * NOTE: The amount field is an Int which implements the custom method
       * signatures required by gogoproto.
       */
      gas_price?: {
        denom?: string;
        amount?: string;
      };
    };
    name?: string;
    particle?: string;
  };
}

export interface ThoughtStatsData {
  thought_stats?: {
    program?: string;
    name?: string;
    /** @format uint64 */
    calls?: string;
    /** @format uint64 */
    fees?: string;
    /** @format uint64 */
    gas?: string;
    /** @format uint64 */
    last_block?: string;
  };
}

export interface ThoughtsData {
  thoughts?: {
    program?: string;
    trigger?: {
      /** @format uint64 */
      period?: string;
      /** @format uint64 */
      block?: string;
    };
    load?: {
      input?: string;
      /**
       * Coin defines a token with a denomination and an amount.
       *
       * NOTE: The amount field is an Int which implements the custom method
       * signatures required by gogoproto.
       */
      gas_price?: {
        denom?: string;
        amount?: string;
      };
    };
    name?: string;
    particle?: string;
  }[];
}

export interface ThoughtsStatsData {
  thoughts_stats?: {
    program?: string;
    name?: string;
    /** @format uint64 */
    calls?: string;
    /** @format uint64 */
    fees?: string;
    /** @format uint64 */
    gas?: string;
    /** @format uint64 */
    last_block?: string;
  }[];
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface AccountData {
  /** account defines the account of the corresponding address. */
  account?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface AuthParamsData {
  /** params defines the parameters of the module. */
  params?: {
    /** @format uint64 */
    max_memo_characters?: string;
    /** @format uint64 */
    tx_sig_limit?: string;
    /** @format uint64 */
    tx_size_cost_per_byte?: string;
    /** @format uint64 */
    sig_verify_cost_ed25519?: string;
    /** @format uint64 */
    sig_verify_cost_secp256k1?: string;
  };
}

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface AllBalancesData {
  /** balances is the balances of all the coins. */
  balances?: {
    denom?: string;
    amount?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface BalanceData {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: {
    denom?: string;
    amount?: string;
  };
}

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface DenomsMetadataData {
  /** metadata provides the client information for all the registered tokens. */
  metadatas?: {
    description?: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denom_units?: {
      /** denom represents the string name of the given denom unit (e.g uatom). */
      denom?: string;
      /**
       * exponent represents power of 10 exponent that one must
       * raise the base_denom to in order to equal the given DenomUnit's denom
       * 1 denom = 1^exponent base_denom
       * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
       * exponent = 6, thus: 1 atom = 10^6 uatom).
       * @format int64
       */
      exponent?: number;
      /** aliases is a list of string aliases for the given denom */
      aliases?: string[];
    }[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base?: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface DenomMetadataData {
  /**
   * Metadata represents a struct that describes
   * a basic token.
   */
  metadata?: {
    description?: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denom_units?: {
      /** denom represents the string name of the given denom unit (e.g uatom). */
      denom?: string;
      /**
       * exponent represents power of 10 exponent that one must
       * raise the base_denom to in order to equal the given DenomUnit's denom
       * 1 denom = 1^exponent base_denom
       * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
       * exponent = 6, thus: 1 atom = 10^6 uatom).
       * @format int64
       */
      exponent?: number;
      /** aliases is a list of string aliases for the given denom */
      aliases?: string[];
    }[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base?: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display?: string;
  };
}

/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface BankParamsData {
  /** Params defines the parameters for the bank module. */
  params?: {
    send_enabled?: {
      denom?: string;
      enabled?: boolean;
    }[];
    default_send_enabled?: boolean;
  };
}

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface TotalSupplyData {
  /** supply is the supply of the coins */
  supply?: {
    denom?: string;
    amount?: string;
  }[];
}

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface SupplyOfData {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: {
    denom?: string;
    amount?: string;
  };
}

/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockData {
  /** BlockID */
  block_id?: {
    /** @format byte */
    hash?: string;
    /** PartsetHeader */
    part_set_header?: {
      /** @format int64 */
      total?: number;
      /** @format byte */
      hash?: string;
    };
  };
  block?: {
    /** Header defines the structure of a Tendermint block header. */
    header?: {
      /**
       * basic block info
       * Consensus captures the consensus rules for processing a block in the blockchain,
       * including all blockchain data structures and the rules of the application's
       * state transition machine.
       */
      version?: {
        /** @format uint64 */
        block?: string;
        /** @format uint64 */
        app?: string;
      };
      chain_id?: string;
      /** @format int64 */
      height?: string;
      /** @format date-time */
      time?: string;
      /** BlockID */
      last_block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /**
       * hashes of block data
       * @format byte
       */
      last_commit_hash?: string;
      /** @format byte */
      data_hash?: string;
      /**
       * hashes from the app output from the prev block
       * @format byte
       */
      validators_hash?: string;
      /** @format byte */
      next_validators_hash?: string;
      /** @format byte */
      consensus_hash?: string;
      /** @format byte */
      app_hash?: string;
      /** @format byte */
      last_results_hash?: string;
      /**
       * consensus info
       * @format byte
       */
      evidence_hash?: string;
      /** @format byte */
      proposer_address?: string;
    };
    /** Data contains the set of transactions included in the block */
    data?: {
      /**
       * Txs that will be applied by state @ block.Height+1.
       * NOTE: not all txs here are valid.  We're just agreeing on the order first.
       * This means that block.AppHash does not include these txs.
       */
      txs?: string[];
    };
    evidence?: {
      evidence?: {
        /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
        duplicate_vote_evidence?: {
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_a?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_b?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /** @format int64 */
          total_voting_power?: string;
          /** @format int64 */
          validator_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
        /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
        light_client_attack_evidence?: {
          conflicting_block?: {
            signed_header?: {
              /** Header defines the structure of a Tendermint block header. */
              header?: {
                /**
                 * basic block info
                 * Consensus captures the consensus rules for processing a block in the blockchain,
                 * including all blockchain data structures and the rules of the application's
                 * state transition machine.
                 */
                version?: {
                  /** @format uint64 */
                  block?: string;
                  /** @format uint64 */
                  app?: string;
                };
                chain_id?: string;
                /** @format int64 */
                height?: string;
                /** @format date-time */
                time?: string;
                /** BlockID */
                last_block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                /**
                 * hashes of block data
                 * @format byte
                 */
                last_commit_hash?: string;
                /** @format byte */
                data_hash?: string;
                /**
                 * hashes from the app output from the prev block
                 * @format byte
                 */
                validators_hash?: string;
                /** @format byte */
                next_validators_hash?: string;
                /** @format byte */
                consensus_hash?: string;
                /** @format byte */
                app_hash?: string;
                /** @format byte */
                last_results_hash?: string;
                /**
                 * consensus info
                 * @format byte
                 */
                evidence_hash?: string;
                /** @format byte */
                proposer_address?: string;
              };
              /** Commit contains the evidence that a block was committed by a set of validators. */
              commit?: {
                /** @format int64 */
                height?: string;
                /** @format int32 */
                round?: number;
                /** BlockID */
                block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                signatures?: {
                  /**
                   * BlockIdFlag indicates which BlcokID the signature is for
                   * @default "BLOCK_ID_FLAG_UNKNOWN"
                   */
                  block_id_flag?:
                    | 'BLOCK_ID_FLAG_UNKNOWN'
                    | 'BLOCK_ID_FLAG_ABSENT'
                    | 'BLOCK_ID_FLAG_COMMIT'
                    | 'BLOCK_ID_FLAG_NIL';
                  /** @format byte */
                  validator_address?: string;
                  /** @format date-time */
                  timestamp?: string;
                  /** @format byte */
                  signature?: string;
                }[];
              };
            };
            validator_set?: {
              validators?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              }[];
              proposer?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              };
              /** @format int64 */
              total_voting_power?: string;
            };
          };
          /** @format int64 */
          common_height?: string;
          byzantine_validators?: {
            /** @format byte */
            address?: string;
            /** PublicKey defines the keys available for use with Tendermint Validators */
            pub_key?: {
              /** @format byte */
              ed25519?: string;
              /** @format byte */
              secp256k1?: string;
            };
            /** @format int64 */
            voting_power?: string;
            /** @format int64 */
            proposer_priority?: string;
          }[];
          /** @format int64 */
          total_voting_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
      }[];
    };
    /** Commit contains the evidence that a block was committed by a set of validators. */
    last_commit?: {
      /** @format int64 */
      height?: string;
      /** @format int32 */
      round?: number;
      /** BlockID */
      block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      signatures?: {
        /**
         * BlockIdFlag indicates which BlcokID the signature is for
         * @default "BLOCK_ID_FLAG_UNKNOWN"
         */
        block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
        /** @format byte */
        validator_address?: string;
        /** @format date-time */
        timestamp?: string;
        /** @format byte */
        signature?: string;
      }[];
    };
  };
}

/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightData {
  /** BlockID */
  block_id?: {
    /** @format byte */
    hash?: string;
    /** PartsetHeader */
    part_set_header?: {
      /** @format int64 */
      total?: number;
      /** @format byte */
      hash?: string;
    };
  };
  block?: {
    /** Header defines the structure of a Tendermint block header. */
    header?: {
      /**
       * basic block info
       * Consensus captures the consensus rules for processing a block in the blockchain,
       * including all blockchain data structures and the rules of the application's
       * state transition machine.
       */
      version?: {
        /** @format uint64 */
        block?: string;
        /** @format uint64 */
        app?: string;
      };
      chain_id?: string;
      /** @format int64 */
      height?: string;
      /** @format date-time */
      time?: string;
      /** BlockID */
      last_block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /**
       * hashes of block data
       * @format byte
       */
      last_commit_hash?: string;
      /** @format byte */
      data_hash?: string;
      /**
       * hashes from the app output from the prev block
       * @format byte
       */
      validators_hash?: string;
      /** @format byte */
      next_validators_hash?: string;
      /** @format byte */
      consensus_hash?: string;
      /** @format byte */
      app_hash?: string;
      /** @format byte */
      last_results_hash?: string;
      /**
       * consensus info
       * @format byte
       */
      evidence_hash?: string;
      /** @format byte */
      proposer_address?: string;
    };
    /** Data contains the set of transactions included in the block */
    data?: {
      /**
       * Txs that will be applied by state @ block.Height+1.
       * NOTE: not all txs here are valid.  We're just agreeing on the order first.
       * This means that block.AppHash does not include these txs.
       */
      txs?: string[];
    };
    evidence?: {
      evidence?: {
        /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
        duplicate_vote_evidence?: {
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_a?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /**
           * Vote represents a prevote, precommit, or commit vote from validators for
           * consensus.
           */
          vote_b?: {
            /**
             * SignedMsgType is a type of signed message in the consensus.
             *
             *  - SIGNED_MSG_TYPE_PREVOTE: Votes
             *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
             * @default "SIGNED_MSG_TYPE_UNKNOWN"
             */
            type?:
              | 'SIGNED_MSG_TYPE_UNKNOWN'
              | 'SIGNED_MSG_TYPE_PREVOTE'
              | 'SIGNED_MSG_TYPE_PRECOMMIT'
              | 'SIGNED_MSG_TYPE_PROPOSAL';
            /** @format int64 */
            height?: string;
            /** @format int32 */
            round?: number;
            /** BlockID */
            block_id?: {
              /** @format byte */
              hash?: string;
              /** PartsetHeader */
              part_set_header?: {
                /** @format int64 */
                total?: number;
                /** @format byte */
                hash?: string;
              };
            };
            /** @format date-time */
            timestamp?: string;
            /** @format byte */
            validator_address?: string;
            /** @format int32 */
            validator_index?: number;
            /** @format byte */
            signature?: string;
          };
          /** @format int64 */
          total_voting_power?: string;
          /** @format int64 */
          validator_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
        /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
        light_client_attack_evidence?: {
          conflicting_block?: {
            signed_header?: {
              /** Header defines the structure of a Tendermint block header. */
              header?: {
                /**
                 * basic block info
                 * Consensus captures the consensus rules for processing a block in the blockchain,
                 * including all blockchain data structures and the rules of the application's
                 * state transition machine.
                 */
                version?: {
                  /** @format uint64 */
                  block?: string;
                  /** @format uint64 */
                  app?: string;
                };
                chain_id?: string;
                /** @format int64 */
                height?: string;
                /** @format date-time */
                time?: string;
                /** BlockID */
                last_block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                /**
                 * hashes of block data
                 * @format byte
                 */
                last_commit_hash?: string;
                /** @format byte */
                data_hash?: string;
                /**
                 * hashes from the app output from the prev block
                 * @format byte
                 */
                validators_hash?: string;
                /** @format byte */
                next_validators_hash?: string;
                /** @format byte */
                consensus_hash?: string;
                /** @format byte */
                app_hash?: string;
                /** @format byte */
                last_results_hash?: string;
                /**
                 * consensus info
                 * @format byte
                 */
                evidence_hash?: string;
                /** @format byte */
                proposer_address?: string;
              };
              /** Commit contains the evidence that a block was committed by a set of validators. */
              commit?: {
                /** @format int64 */
                height?: string;
                /** @format int32 */
                round?: number;
                /** BlockID */
                block_id?: {
                  /** @format byte */
                  hash?: string;
                  /** PartsetHeader */
                  part_set_header?: {
                    /** @format int64 */
                    total?: number;
                    /** @format byte */
                    hash?: string;
                  };
                };
                signatures?: {
                  /**
                   * BlockIdFlag indicates which BlcokID the signature is for
                   * @default "BLOCK_ID_FLAG_UNKNOWN"
                   */
                  block_id_flag?:
                    | 'BLOCK_ID_FLAG_UNKNOWN'
                    | 'BLOCK_ID_FLAG_ABSENT'
                    | 'BLOCK_ID_FLAG_COMMIT'
                    | 'BLOCK_ID_FLAG_NIL';
                  /** @format byte */
                  validator_address?: string;
                  /** @format date-time */
                  timestamp?: string;
                  /** @format byte */
                  signature?: string;
                }[];
              };
            };
            validator_set?: {
              validators?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              }[];
              proposer?: {
                /** @format byte */
                address?: string;
                /** PublicKey defines the keys available for use with Tendermint Validators */
                pub_key?: {
                  /** @format byte */
                  ed25519?: string;
                  /** @format byte */
                  secp256k1?: string;
                };
                /** @format int64 */
                voting_power?: string;
                /** @format int64 */
                proposer_priority?: string;
              };
              /** @format int64 */
              total_voting_power?: string;
            };
          };
          /** @format int64 */
          common_height?: string;
          byzantine_validators?: {
            /** @format byte */
            address?: string;
            /** PublicKey defines the keys available for use with Tendermint Validators */
            pub_key?: {
              /** @format byte */
              ed25519?: string;
              /** @format byte */
              secp256k1?: string;
            };
            /** @format int64 */
            voting_power?: string;
            /** @format int64 */
            proposer_priority?: string;
          }[];
          /** @format int64 */
          total_voting_power?: string;
          /** @format date-time */
          timestamp?: string;
        };
      }[];
    };
    /** Commit contains the evidence that a block was committed by a set of validators. */
    last_commit?: {
      /** @format int64 */
      height?: string;
      /** @format int32 */
      round?: number;
      /** BlockID */
      block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      signatures?: {
        /**
         * BlockIdFlag indicates which BlcokID the signature is for
         * @default "BLOCK_ID_FLAG_UNKNOWN"
         */
        block_id_flag?: 'BLOCK_ID_FLAG_UNKNOWN' | 'BLOCK_ID_FLAG_ABSENT' | 'BLOCK_ID_FLAG_COMMIT' | 'BLOCK_ID_FLAG_NIL';
        /** @format byte */
        validator_address?: string;
        /** @format date-time */
        timestamp?: string;
        /** @format byte */
        signature?: string;
      }[];
    };
  };
}

/** GetNodeInfoResponse is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoData {
  default_node_info?: {
    protocol_version?: {
      /** @format uint64 */
      p2p?: string;
      /** @format uint64 */
      block?: string;
      /** @format uint64 */
      app?: string;
    };
    default_node_id?: string;
    listen_addr?: string;
    network?: string;
    version?: string;
    /** @format byte */
    channels?: string;
    moniker?: string;
    other?: {
      tx_index?: string;
      rpc_address?: string;
    };
  };
  /** VersionInfo is the type for the GetNodeInfoResponse message. */
  application_version?: {
    name?: string;
    app_name?: string;
    version?: string;
    git_commit?: string;
    build_tags?: string;
    go_version?: string;
    build_deps?: {
      /** module path */
      path?: string;
      /** module version */
      version?: string;
      /** checksum */
      sum?: string;
    }[];
  };
}

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingData {
  syncing?: boolean;
}

/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetData {
  /** @format int64 */
  block_height?: string;
  validators?: {
    address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    pub_key?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** @format int64 */
    voting_power?: string;
    /** @format int64 */
    proposer_priority?: string;
  }[];
  /** pagination defines an pagination for the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightData {
  /** @format int64 */
  block_height?: string;
  validators?: {
    address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    pub_key?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** @format int64 */
    voting_power?: string;
    /** @format int64 */
    proposer_priority?: string;
  }[];
  /** pagination defines an pagination for the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface CommunityPoolData {
  /** pool defines community pool's coins. */
  pool?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface DelegationTotalRewardsData {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: {
    validator_address?: string;
    reward?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /** total defines the sum of all the rewards. */
  total?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface DelegationRewardsData {
  /** rewards defines the rewards accrued by a delegation. */
  rewards?: {
    denom?: string;
    amount?: string;
  }[];
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface DelegatorValidatorsData {
  /** validators defines the validators a delegator is delegating for. */
  validators?: string[];
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface DelegatorWithdrawAddressData {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address?: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface DistributionParamsData {
  /** params defines the parameters of the module. */
  params?: {
    community_tax?: string;
    base_proposer_reward?: string;
    bonus_proposer_reward?: string;
    withdraw_addr_enabled?: boolean;
  };
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface ValidatorCommissionData {
  /** commission defines the commision the validator received. */
  commission?: {
    commission?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface ValidatorOutstandingRewardsData {
  /**
   * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
   * for a validator inexpensive to track, allows simple sanity checks.
   */
  rewards?: {
    rewards?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface ValidatorSlashesData {
  /** slashes defines the slashes the validator received. */
  slashes?: {
    /** @format uint64 */
    validator_period?: string;
    fraction?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface AllEvidenceData {
  /** evidence returns all evidences. */
  evidence?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface EvidenceData {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  evidence?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface GovParamsData {
  /** voting_params defines the parameters related to voting. */
  voting_params?: {
    /** Length of the voting period. */
    voting_period?: string;
  };
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: {
    /** Minimum deposit for a proposal to enter voting period. */
    min_deposit?: {
      denom?: string;
      amount?: string;
    }[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     */
    max_deposit_period?: string;
  };
  /** tally_params defines the parameters related to tally. */
  tally_params?: {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     * @format byte
     */
    quorum?: string;
    /**
     * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
     * @format byte
     */
    threshold?: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     * @format byte
     */
    veto_threshold?: string;
  };
}

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface ProposalsData {
  proposals?: {
    /** @format uint64 */
    proposal_id?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    content?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * ProposalStatus enumerates the valid statuses of a proposal.
     *
     *  - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
     *  - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *  - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *  - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *  - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *  - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     * @default "PROPOSAL_STATUS_UNSPECIFIED"
     */
    status?:
      | 'PROPOSAL_STATUS_UNSPECIFIED'
      | 'PROPOSAL_STATUS_DEPOSIT_PERIOD'
      | 'PROPOSAL_STATUS_VOTING_PERIOD'
      | 'PROPOSAL_STATUS_PASSED'
      | 'PROPOSAL_STATUS_REJECTED'
      | 'PROPOSAL_STATUS_FAILED';
    /** TallyResult defines a standard tally for a governance proposal. */
    final_tally_result?: {
      yes?: string;
      abstain?: string;
      no?: string;
      no_with_veto?: string;
    };
    /** @format date-time */
    submit_time?: string;
    /** @format date-time */
    deposit_end_time?: string;
    total_deposit?: {
      denom?: string;
      amount?: string;
    }[];
    /** @format date-time */
    voting_start_time?: string;
    /** @format date-time */
    voting_end_time?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface ProposalData {
  /** Proposal defines the core field members of a governance proposal. */
  proposal?: {
    /** @format uint64 */
    proposal_id?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    content?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * ProposalStatus enumerates the valid statuses of a proposal.
     *
     *  - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
     *  - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *  - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *  - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *  - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *  - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     * @default "PROPOSAL_STATUS_UNSPECIFIED"
     */
    status?:
      | 'PROPOSAL_STATUS_UNSPECIFIED'
      | 'PROPOSAL_STATUS_DEPOSIT_PERIOD'
      | 'PROPOSAL_STATUS_VOTING_PERIOD'
      | 'PROPOSAL_STATUS_PASSED'
      | 'PROPOSAL_STATUS_REJECTED'
      | 'PROPOSAL_STATUS_FAILED';
    /** TallyResult defines a standard tally for a governance proposal. */
    final_tally_result?: {
      yes?: string;
      abstain?: string;
      no?: string;
      no_with_veto?: string;
    };
    /** @format date-time */
    submit_time?: string;
    /** @format date-time */
    deposit_end_time?: string;
    total_deposit?: {
      denom?: string;
      amount?: string;
    }[];
    /** @format date-time */
    voting_start_time?: string;
    /** @format date-time */
    voting_end_time?: string;
  };
}

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface DepositsData {
  deposits?: {
    /** @format uint64 */
    proposal_id?: string;
    depositor?: string;
    amount?: {
      denom?: string;
      amount?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface DepositData {
  /**
   * Deposit defines an amount deposited by an account address to an active
   * proposal.
   */
  deposit?: {
    /** @format uint64 */
    proposal_id?: string;
    depositor?: string;
    amount?: {
      denom?: string;
      amount?: string;
    }[];
  };
}

/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface TallyResultData {
  /** TallyResult defines a standard tally for a governance proposal. */
  tally?: {
    yes?: string;
    abstain?: string;
    no?: string;
    no_with_veto?: string;
  };
}

/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface VotesData {
  /** votes defined the queried votes. */
  votes?: {
    /** @format uint64 */
    proposal_id?: string;
    voter?: string;
    /**
     * VoteOption enumerates the valid vote options for a given governance proposal.
     *
     *  - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *  - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
     *  - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *  - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
     *  - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     * @default "VOTE_OPTION_UNSPECIFIED"
     */
    option?:
      | 'VOTE_OPTION_UNSPECIFIED'
      | 'VOTE_OPTION_YES'
      | 'VOTE_OPTION_ABSTAIN'
      | 'VOTE_OPTION_NO'
      | 'VOTE_OPTION_NO_WITH_VETO';
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface VoteData {
  /**
   * Vote defines a vote on a governance proposal.
   * A Vote consists of a proposal ID, the voter, and the vote option.
   */
  vote?: {
    /** @format uint64 */
    proposal_id?: string;
    voter?: string;
    /**
     * VoteOption enumerates the valid vote options for a given governance proposal.
     *
     *  - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *  - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
     *  - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *  - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
     *  - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     * @default "VOTE_OPTION_UNSPECIFIED"
     */
    option?:
      | 'VOTE_OPTION_UNSPECIFIED'
      | 'VOTE_OPTION_YES'
      | 'VOTE_OPTION_ABSTAIN'
      | 'VOTE_OPTION_NO'
      | 'VOTE_OPTION_NO_WITH_VETO';
  };
}

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface AnnualProvisionsData {
  /**
   * annual_provisions is the current minting annual provisions value.
   * @format byte
   */
  annual_provisions?: string;
}

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface InflationData {
  /**
   * inflation is the current minting inflation value.
   * @format byte
   */
  inflation?: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface MintParamsData {
  /** params defines the parameters of the module. */
  params?: {
    /** type of coin to mint */
    mint_denom?: string;
    /** maximum annual change in inflation rate */
    inflation_rate_change?: string;
    /** maximum inflation rate */
    inflation_max?: string;
    /** minimum inflation rate */
    inflation_min?: string;
    /** goal of percent bonded atoms */
    goal_bonded?: string;
    /**
     * expected blocks per year
     * @format uint64
     */
    blocks_per_year?: string;
  };
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsData {
  /** param defines the queried parameter. */
  param?: {
    subspace?: string;
    key?: string;
    value?: string;
  };
}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface SlashingParamsData {
  /** Params represents the parameters used for by the slashing module. */
  params?: {
    /** @format int64 */
    signed_blocks_window?: string;
    /** @format byte */
    min_signed_per_window?: string;
    downtime_jail_duration?: string;
    /** @format byte */
    slash_fraction_double_sign?: string;
    /** @format byte */
    slash_fraction_downtime?: string;
  };
}

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface SigningInfosData {
  /** info is the signing info of all validators */
  info?: {
    address?: string;
    /**
     * height at which validator was first a candidate OR was unjailed
     * @format int64
     */
    start_height?: string;
    /**
     * index offset into signed block bit array
     * @format int64
     */
    index_offset?: string;
    /**
     * timestamp validator cannot be unjailed until
     * @format date-time
     */
    jailed_until?: string;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned?: boolean;
    /**
     * missed blocks counter (to avoid scanning the array every time)
     * @format int64
     */
    missed_blocks_counter?: string;
  }[];
  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface SigningInfoData {
  /**
   * val_signing_info is the signing info of requested val cons address
   * ValidatorSigningInfo defines a validator's signing info for monitoring their
   * liveness activity.
   */
  val_signing_info?: {
    address?: string;
    /**
     * height at which validator was first a candidate OR was unjailed
     * @format int64
     */
    start_height?: string;
    /**
     * index offset into signed block bit array
     * @format int64
     */
    index_offset?: string;
    /**
     * timestamp validator cannot be unjailed until
     * @format date-time
     */
    jailed_until?: string;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned?: boolean;
    /**
     * missed blocks counter (to avoid scanning the array every time)
     * @format int64
     */
    missed_blocks_counter?: string;
  };
}

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface DelegatorDelegationsData {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses?: {
    /**
     * Delegation represents the bond with tokens held by an account. It is
     * owned by one delegator, and is associated with the voting power of one
     * validator.
     */
    delegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_address is the bech32-encoded address of the validator. */
      validator_address?: string;
      /** shares define the delegation shares received. */
      shares?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    balance?: {
      denom?: string;
      amount?: string;
    };
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface RedelegationsData {
  redelegation_responses?: {
    /**
     * Redelegation contains the list of a particular delegator's redelegating bonds
     * from a particular source validator to a particular destination validator.
     */
    redelegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_src_address is the validator redelegation source operator address. */
      validator_src_address?: string;
      /** validator_dst_address is the validator redelegation destination operator address. */
      validator_dst_address?: string;
      /** entries are the redelegation entries. */
      entries?: {
        /**
         * creation_height  defines the height which the redelegation took place.
         * @format int64
         */
        creation_height?: string;
        /**
         * completion_time defines the unix time for redelegation completion.
         * @format date-time
         */
        completion_time?: string;
        /** initial_balance defines the initial balance when redelegation started. */
        initial_balance?: string;
        /** shares_dst is the amount of destination-validator shares created by redelegation. */
        shares_dst?: string;
      }[];
    };
    entries?: {
      /** RedelegationEntry defines a redelegation object with relevant metadata. */
      redelegation_entry?: {
        /**
         * creation_height  defines the height which the redelegation took place.
         * @format int64
         */
        creation_height?: string;
        /**
         * completion_time defines the unix time for redelegation completion.
         * @format date-time
         */
        completion_time?: string;
        /** initial_balance defines the initial balance when redelegation started. */
        initial_balance?: string;
        /** shares_dst is the amount of destination-validator shares created by redelegation. */
        shares_dst?: string;
      };
      balance?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface DelegatorUnbondingDelegationsData {
  unbonding_responses?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** entries are the unbonding delegation entries. */
    entries?: {
      /**
       * creation_height is the height which the unbonding took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time is the unix time for unbonding completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the tokens initially scheduled to receive at completion. */
      initial_balance?: string;
      /** balance defines the tokens to receive at completion. */
      balance?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface StakingDelegatorValidatorsData {
  /** validators defines the the validators' info of a delegator. */
  validators?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface DelegatorValidatorData {
  /**
   * Validator defines a validator, together with the total amount of the
   * Validator's bond shares and their exchange rate to coins. Slashing results in
   * a decrease in the exchange rate, allowing correct calculation of future
   * undelegations without iterating over delegators. When coins are delegated to
   * this validator, the validator is credited with a delegation whose number of
   * bond shares is based on the amount of coins delegated divided by the current
   * exchange rate. Voting power can be calculated as total bonded shares
   * multiplied by exchange rate.
   */
  validator?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  };
}

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface HistoricalInfoData {
  /** hist defines the historical info at the given height. */
  hist?: {
    /** Header defines the structure of a Tendermint block header. */
    header?: {
      /**
       * basic block info
       * Consensus captures the consensus rules for processing a block in the blockchain,
       * including all blockchain data structures and the rules of the application's
       * state transition machine.
       */
      version?: {
        /** @format uint64 */
        block?: string;
        /** @format uint64 */
        app?: string;
      };
      chain_id?: string;
      /** @format int64 */
      height?: string;
      /** @format date-time */
      time?: string;
      /** prev block info */
      last_block_id?: {
        /** @format byte */
        hash?: string;
        /** PartsetHeader */
        part_set_header?: {
          /** @format int64 */
          total?: number;
          /** @format byte */
          hash?: string;
        };
      };
      /**
       * hashes of block data
       * @format byte
       */
      last_commit_hash?: string;
      /** @format byte */
      data_hash?: string;
      /**
       * hashes from the app output from the prev block
       * @format byte
       */
      validators_hash?: string;
      /** @format byte */
      next_validators_hash?: string;
      /** @format byte */
      consensus_hash?: string;
      /** @format byte */
      app_hash?: string;
      /** @format byte */
      last_results_hash?: string;
      /**
       * consensus info
       * @format byte
       */
      evidence_hash?: string;
      /** @format byte */
      proposer_address?: string;
    };
    valset?: {
      /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
      operator_address?: string;
      /**
       * `Any` contains an arbitrary serialized protocol buffer message along with a
       * URL that describes the type of the serialized message.
       *
       * Protobuf library provides support to pack/unpack Any values in the form
       * of utility functions or additional generated methods of the Any type.
       *
       * Example 1: Pack and unpack a message in C++.
       *
       *     Foo foo = ...;
       *     Any any;
       *     any.PackFrom(foo);
       *     ...
       *     if (any.UnpackTo(&foo)) {
       *       ...
       *     }
       *
       * Example 2: Pack and unpack a message in Java.
       *
       *     Foo foo = ...;
       *     Any any = Any.pack(foo);
       *     ...
       *     if (any.is(Foo.class)) {
       *       foo = any.unpack(Foo.class);
       *     }
       *
       *  Example 3: Pack and unpack a message in Python.
       *
       *     foo = Foo(...)
       *     any = Any()
       *     any.Pack(foo)
       *     ...
       *     if any.Is(Foo.DESCRIPTOR):
       *       any.Unpack(foo)
       *       ...
       *
       *  Example 4: Pack and unpack a message in Go
       *
       *      foo := &pb.Foo{...}
       *      any, err := ptypes.MarshalAny(foo)
       *      ...
       *      foo := &pb.Foo{}
       *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
       *        ...
       *      }
       *
       * The pack methods provided by protobuf library will by default use
       * 'type.googleapis.com/full.type.name' as the type URL and the unpack
       * methods only use the fully qualified type name after the last '/'
       * in the type URL, for example "foo.bar.com/x/y.z" will yield type
       * name "y.z".
       *
       *
       * JSON
       * ====
       * The JSON representation of an `Any` value uses the regular
       * representation of the deserialized, embedded message, with an
       * additional field `@type` which contains the type URL. Example:
       *
       *     package google.profile;
       *     message Person {
       *       string first_name = 1;
       *       string last_name = 2;
       *     }
       *
       *     {
       *       "@type": "type.googleapis.com/google.profile.Person",
       *       "firstName": <string>,
       *       "lastName": <string>
       *     }
       *
       * If the embedded message type is well-known and has a custom JSON
       * representation, that representation will be embedded adding a field
       * `value` which holds the custom JSON in addition to the `@type`
       * field. Example (for message [google.protobuf.Duration][]):
       *
       *     {
       *       "@type": "type.googleapis.com/google.protobuf.Duration",
       *       "value": "1.212s"
       *     }
       */
      consensus_pubkey?: {
        /**
         * A URL/resource name that uniquely identifies the type of the serialized
         * protocol buffer message. This string must contain at least
         * one "/" character. The last segment of the URL's path must represent
         * the fully qualified name of the type (as in
         * `path/google.protobuf.Duration`). The name should be in a canonical form
         * (e.g., leading "." is not accepted).
         *
         * In practice, teams usually precompile into the binary all types that they
         * expect it to use in the context of Any. However, for URLs which use the
         * scheme `http`, `https`, or no scheme, one can optionally set up a type
         * server that maps type URLs to message definitions as follows:
         *
         * * If no scheme is provided, `https` is assumed.
         * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
         *   value in binary format, or produce an error.
         * * Applications are allowed to cache lookup results based on the
         *   URL, or have them precompiled into a binary to avoid any
         *   lookup. Therefore, binary compatibility needs to be preserved
         *   on changes to types. (Use versioned type names to manage
         *   breaking changes.)
         *
         * Note: this functionality is not currently available in the official
         * protobuf release, and it is not used for type URLs beginning with
         * type.googleapis.com.
         *
         * Schemes other than `http`, `https` (or the empty scheme) might be
         * used with implementation specific semantics.
         */
        type_url?: string;
        /**
         * Must be a valid serialized protocol buffer of the above specified type.
         * @format byte
         */
        value?: string;
      };
      /** jailed defined whether the validator has been jailed from bonded status or not. */
      jailed?: boolean;
      /**
       * status is the validator status (bonded/unbonding/unbonded).
       * @default "BOND_STATUS_UNSPECIFIED"
       */
      status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
      /** tokens define the delegated tokens (incl. self-delegation). */
      tokens?: string;
      /** delegator_shares defines total shares issued to a validator's delegators. */
      delegator_shares?: string;
      /** description defines the description terms for the validator. */
      description?: {
        /** moniker defines a human-readable name for the validator. */
        moniker?: string;
        /** identity defines an optional identity signature (ex. UPort or Keybase). */
        identity?: string;
        /** website defines an optional website link. */
        website?: string;
        /** security_contact defines an optional email for security contact. */
        security_contact?: string;
        /** details define other optional details. */
        details?: string;
      };
      /**
       * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
       * @format int64
       */
      unbonding_height?: string;
      /**
       * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
       * @format date-time
       */
      unbonding_time?: string;
      /** commission defines the commission parameters. */
      commission?: {
        /** commission_rates defines the initial commission rates to be used for creating a validator. */
        commission_rates?: {
          /** rate is the commission rate charged to delegators, as a fraction. */
          rate?: string;
          /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
          max_rate?: string;
          /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
          max_change_rate?: string;
        };
        /**
         * update_time is the last time the commission rate was changed.
         * @format date-time
         */
        update_time?: string;
      };
      /** min_self_delegation is the validator's self declared minimum self delegation. */
      min_self_delegation?: string;
    }[];
  };
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface StakingParamsData {
  /** params holds all the parameters of this module. */
  params?: {
    /** unbonding_time is the time duration of unbonding. */
    unbonding_time?: string;
    /**
     * max_validators is the maximum number of validators.
     * @format int64
     */
    max_validators?: number;
    /**
     * max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
     * @format int64
     */
    max_entries?: number;
    /**
     * historical_entries is the number of historical entries to persist.
     * @format int64
     */
    historical_entries?: number;
    /** bond_denom defines the bondable coin denomination. */
    bond_denom?: string;
  };
}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface PoolData {
  /** pool defines the pool info. */
  pool?: {
    not_bonded_tokens?: string;
    bonded_tokens?: string;
  };
}

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface ValidatorsData {
  /** validators contains all the queried validators. */
  validators?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface ValidatorData {
  /**
   * Validator defines a validator, together with the total amount of the
   * Validator's bond shares and their exchange rate to coins. Slashing results in
   * a decrease in the exchange rate, allowing correct calculation of future
   * undelegations without iterating over delegators. When coins are delegated to
   * this validator, the validator is credited with a delegation whose number of
   * bond shares is based on the amount of coins delegated divided by the current
   * exchange rate. Voting power can be calculated as total bonded shares
   * multiplied by exchange rate.
   */
  validator?: {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_pubkey?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed?: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     * @default "BOND_STATUS_UNSPECIFIED"
     */
    status?: 'BOND_STATUS_UNSPECIFIED' | 'BOND_STATUS_UNBONDED' | 'BOND_STATUS_UNBONDING' | 'BOND_STATUS_BONDED';
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: {
      /** moniker defines a human-readable name for the validator. */
      moniker?: string;
      /** identity defines an optional identity signature (ex. UPort or Keybase). */
      identity?: string;
      /** website defines an optional website link. */
      website?: string;
      /** security_contact defines an optional email for security contact. */
      security_contact?: string;
      /** details define other optional details. */
      details?: string;
    };
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * @format int64
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * @format date-time
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: {
      /** commission_rates defines the initial commission rates to be used for creating a validator. */
      commission_rates?: {
        /** rate is the commission rate charged to delegators, as a fraction. */
        rate?: string;
        /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
        max_rate?: string;
        /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
        max_change_rate?: string;
      };
      /**
       * update_time is the last time the commission rate was changed.
       * @format date-time
       */
      update_time?: string;
    };
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation?: string;
  };
}

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface ValidatorDelegationsData {
  delegation_responses?: {
    /**
     * Delegation represents the bond with tokens held by an account. It is
     * owned by one delegator, and is associated with the voting power of one
     * validator.
     */
    delegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_address is the bech32-encoded address of the validator. */
      validator_address?: string;
      /** shares define the delegation shares received. */
      shares?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    balance?: {
      denom?: string;
      amount?: string;
    };
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface DelegationData {
  /**
   * DelegationResponse is equivalent to Delegation except that it contains a
   * balance in addition to shares which is more suitable for client responses.
   */
  delegation_response?: {
    /**
     * Delegation represents the bond with tokens held by an account. It is
     * owned by one delegator, and is associated with the voting power of one
     * validator.
     */
    delegation?: {
      /** delegator_address is the bech32-encoded address of the delegator. */
      delegator_address?: string;
      /** validator_address is the bech32-encoded address of the validator. */
      validator_address?: string;
      /** shares define the delegation shares received. */
      shares?: string;
    };
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    balance?: {
      denom?: string;
      amount?: string;
    };
  };
}

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface UnbondingDelegationData {
  /**
   * UnbondingDelegation stores all of a single delegator's unbonding bonds
   * for a single validator in an time-ordered list.
   */
  unbond?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** entries are the unbonding delegation entries. */
    entries?: {
      /**
       * creation_height is the height which the unbonding took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time is the unix time for unbonding completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the tokens initially scheduled to receive at completion. */
      initial_balance?: string;
      /** balance defines the tokens to receive at completion. */
      balance?: string;
    }[];
  };
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface ValidatorUnbondingDelegationsData {
  unbonding_responses?: {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address?: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address?: string;
    /** entries are the unbonding delegation entries. */
    entries?: {
      /**
       * creation_height is the height which the unbonding took place.
       * @format int64
       */
      creation_height?: string;
      /**
       * completion_time is the unix time for unbonding completion.
       * @format date-time
       */
      completion_time?: string;
      /** initial_balance defines the tokens initially scheduled to receive at completion. */
      initial_balance?: string;
      /** balance defines the tokens to receive at completion. */
      balance?: string;
    }[];
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateData {
  /** gas_info is the information about gas used in the simulation. */
  gas_info?: {
    /**
     * GasWanted is the maximum units of work we allow this tx to perform.
     * @format uint64
     */
    gas_wanted?: string;
    /**
     * GasUsed is the amount of gas actually consumed.
     * @format uint64
     */
    gas_used?: string;
  };
  /** result is the result of the simulation. */
  result?: {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     * @format byte
     */
    data?: string;
    /** Log contains the log information from message or handler execution. */
    log?: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     */
    events?: {
      type?: string;
      attributes?: {
        /** @format byte */
        key?: string;
        /** @format byte */
        value?: string;
        index?: boolean;
      }[];
    }[];
  };
}

export type GetTxsEventData = CosmosTxV1Beta1GetTxsEventResponse;

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxData {
  /**
   * TxResponse defines a structure containing relevant tx data and metadata. The
   * tags are stringified and the log is JSON decoded.
   */
  tx_response?: {
    /**
     * The block height
     * @format int64
     */
    height?: string;
    /** The transaction hash. */
    txhash?: string;
    /** Namespace for the Code */
    codespace?: string;
    /**
     * Response code.
     * @format int64
     */
    code?: number;
    /** Result bytes, if any. */
    data?: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    raw_log?: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs?: {
      /** @format int64 */
      msg_index?: number;
      log?: string;
      /**
       * Events contains a slice of Event objects that were emitted during some
       * execution.
       */
      events?: {
        type?: string;
        attributes?: {
          key?: string;
          value?: string;
        }[];
      }[];
    }[];
    /** Additional information. May be non-deterministic. */
    info?: string;
    /**
     * Amount of gas requested for transaction.
     * @format int64
     */
    gas_wanted?: string;
    /**
     * Amount of gas consumed by transaction.
     * @format int64
     */
    gas_used?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    tx?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp?: string;
  };
}

export type GetTxData = CosmosTxV1Beta1GetTxResponse;

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface AppliedPlanData {
  /**
   * height is the block height at which the plan was applied.
   * @format int64
   */
  height?: string;
}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface CurrentPlanData {
  /** plan is the current upgrade plan. */
  plan?: {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name?: string;
    /**
     * The time after which the upgrade must be performed.
     * Leave set to its zero value to use a pre-defined Height instead.
     * @format date-time
     */
    time?: string;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     * @format int64
     */
    height?: string;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info?: string;
    /**
     * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
     * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
     * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
     * previous version of the chain.
     * This will allow IBC connections to persist smoothly across planned chain upgrades
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    upgraded_client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface UpgradedConsensusStateData {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  upgraded_consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
}

/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface CodesData {
  code_infos?: {
    /** @format uint64 */
    code_id?: string;
    creator?: string;
    /** @format byte */
    data_hash?: string;
    source?: string;
    builder?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface CodeData {
  /** CodeInfoResponse contains code meta data from CodeInfo */
  code_info?: {
    /** @format uint64 */
    code_id?: string;
    creator?: string;
    /** @format byte */
    data_hash?: string;
    source?: string;
    builder?: string;
  };
  /** @format byte */
  data?: string;
}

/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface ContractsByCodeData {
  /** contracts are a set of contract addresses */
  contracts?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface ContractInfoData {
  /** address is the address of the contract */
  address?: string;
  /** ContractInfo stores a WASM contract instance */
  contract_info?: {
    /**
     * CodeID is the reference to the stored Wasm code
     * @format uint64
     */
    code_id?: string;
    /** Creator address who initially instantiated the contract */
    creator?: string;
    /** Admin is an optional address that can execute migrations */
    admin?: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label?: string;
    /**
     * Created Tx position when the contract was instantiated.
     * This data should kept internal and not be exposed via query results. Just
     * use for sorting
     * AbsoluteTxPosition is a unique transaction position that allows for global
     * ordering of transactions.
     */
    created?: {
      /**
       * BlockHeight is the block the contract was created at
       * @format uint64
       */
      block_height?: string;
      /**
       * TxIndex is a monotonic counter within the block (actual transaction index,
       * or gas consumed)
       * @format uint64
       */
      tx_index?: string;
    };
    ibc_port_id?: string;
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    extension?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
}

/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface ContractHistoryData {
  entries?: {
    /**
     * ContractCodeHistoryOperationType actions that caused a code change
     * - CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
     *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation
     *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration
     *  - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data
     * @default "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"
     */
    operation?:
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED'
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT'
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE'
      | 'CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS';
    /**
     * CodeID is the reference to the stored WASM code
     * @format uint64
     */
    code_id?: string;
    /** Updated Tx position when the operation was executed. */
    updated?: {
      /**
       * BlockHeight is the block the contract was created at
       * @format uint64
       */
      block_height?: string;
      /**
       * TxIndex is a monotonic counter within the block (actual transaction index,
       * or gas consumed)
       * @format uint64
       */
      tx_index?: string;
    };
    /** @format byte */
    msg?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface RawContractStateData {
  /**
   * Data contains the raw store data
   * @format byte
   */
  data?: string;
}

/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface SmartContractStateData {
  /**
   * Data contains the json data returned from the smart contract
   * @format byte
   */
  data?: string;
}

/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface AllContractStateData {
  models?: {
    /**
     * hex-encode key to read it better (this is often ascii)
     * @format byte
     */
    key?: string;
    /**
     * base64-encode raw value
     * @format byte
     */
    value?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface DenomTracesData {
  /** denom_traces returns all denominations trace information. */
  denom_traces?: {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path?: string;
    /** base denomination of the relayed fungible token. */
    base_denom?: string;
  }[];
  /** pagination defines the pagination in the response. */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface DenomTraceData {
  /**
   * DenomTrace contains the base denomination for ICS20 fungible tokens and the
   * source tracing information path.
   */
  denom_trace?: {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path?: string;
    /** base denomination of the relayed fungible token. */
    base_denom?: string;
  };
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface IbcTransferParamsData {
  /** params defines the parameters of the module. */
  params?: {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    send_enabled?: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receive_enabled?: boolean;
  };
}

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface ChannelsData {
  /** list of stored channels of the chain. */
  channels?: {
    /**
     * current state of the channel end
     * State defines if a channel is in one of the following states:
     * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
     *
     *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
     *  - STATE_INIT: A channel has just started the opening handshake.
     *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
     *  - STATE_OPEN: A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
     * packets.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
    /**
     * whether the channel is ordered or unordered
     * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
     *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
     * @default "ORDER_NONE_UNSPECIFIED"
     */
    ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
    /** counterparty channel end */
    counterparty?: {
      /** port on the counterparty chain which owns the other end of the channel. */
      port_id?: string;
      /** channel end on the counterparty chain */
      channel_id?: string;
    };
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops?: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version?: string;
    /** port identifier */
    port_id?: string;
    /** channel identifier */
    channel_id?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface ChannelData {
  /**
   * channel associated with the request identifiers
   * Channel defines pipeline for exactly-once packet delivery between specific
   * modules on separate blockchains, which has at least one end capable of
   * sending packets and one end capable of receiving packets.
   */
  channel?: {
    /**
     * current state of the channel end
     * State defines if a channel is in one of the following states:
     * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
     *
     *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
     *  - STATE_INIT: A channel has just started the opening handshake.
     *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
     *  - STATE_OPEN: A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
     * packets.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
    /**
     * whether the channel is ordered or unordered
     * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
     *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
     * @default "ORDER_NONE_UNSPECIFIED"
     */
    ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
    /** counterparty channel end */
    counterparty?: {
      /** port on the counterparty chain which owns the other end of the channel. */
      port_id?: string;
      /** channel end on the counterparty chain */
      channel_id?: string;
    };
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops?: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface ChannelClientStateData {
  /**
   * client state associated with the channel
   * IdentifiedClientState defines a client state with an additional client
   * identifier field.
   */
  identified_client_state?: {
    /** client identifier */
    client_id?: string;
    /**
     * client state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface ChannelConsensusStateData {
  /**
   * consensus state associated with the channel
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /** client ID associated with the consensus state */
  client_id?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface NextSequenceReceiveData {
  /**
   * next sequence receive number
   * @format uint64
   */
  next_sequence_receive?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface PacketAcknowledgementsData {
  acknowledgements?: {
    /** channel port identifier. */
    port_id?: string;
    /** channel unique identifier. */
    channel_id?: string;
    /**
     * packet sequence.
     * @format uint64
     */
    sequence?: string;
    /**
     * embedded data that represents packet state.
     * @format byte
     */
    data?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface PacketAcknowledgementData {
  /**
   * packet associated with the request fields
   * @format byte
   */
  acknowledgement?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface PacketCommitmentsData {
  commitments?: {
    /** channel port identifier. */
    port_id?: string;
    /** channel unique identifier. */
    channel_id?: string;
    /**
     * packet sequence.
     * @format uint64
     */
    sequence?: string;
    /**
     * embedded data that represents packet state.
     * @format byte
     */
    data?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface UnreceivedAcksData {
  /** list of unreceived acknowledgement sequences */
  sequences?: string[];
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface UnreceivedPacketsData {
  /** list of unreceived packet sequences */
  sequences?: string[];
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface PacketCommitmentData {
  /**
   * packet associated with the request fields
   * @format byte
   */
  commitment?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet receipt
 * which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface PacketReceiptData {
  /** success flag for if receipt exists */
  received?: boolean;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface ConnectionChannelsData {
  /** list of channels associated with a connection. */
  channels?: {
    /**
     * current state of the channel end
     * State defines if a channel is in one of the following states:
     * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
     *
     *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
     *  - STATE_INIT: A channel has just started the opening handshake.
     *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
     *  - STATE_OPEN: A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
     * packets.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN' | 'STATE_CLOSED';
    /**
     * whether the channel is ordered or unordered
     * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
     *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
     * @default "ORDER_NONE_UNSPECIFIED"
     */
    ordering?: 'ORDER_NONE_UNSPECIFIED' | 'ORDER_UNORDERED' | 'ORDER_ORDERED';
    /** counterparty channel end */
    counterparty?: {
      /** port on the counterparty chain which owns the other end of the channel. */
      port_id?: string;
      /** channel end on the counterparty chain */
      channel_id?: string;
    };
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops?: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version?: string;
    /** port identifier */
    port_id?: string;
    /** channel identifier */
    channel_id?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/** QueryClientParamsResponse is the response type for the Query/ClientParams RPC method. */
export interface ClientParamsData {
  /** params defines the parameters of the module. */
  params?: {
    /** allowed_clients defines the list of allowed client state types. */
    allowed_clients?: string[];
  };
}

/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface ClientStatesData {
  /** list of stored ClientStates of the chain. */
  client_states?: {
    /** client identifier */
    client_id?: string;
    /**
     * client state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface ClientStateData {
  /**
   * client state associated with the request identifier
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  client_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface ConsensusStatesData {
  /** consensus states associated with the identifier */
  consensus_states?: {
    /**
     * consensus state height
     * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
     * the same. However some consensus algorithms may choose to reset the
     * height in certain conditions e.g. hard forks, state-machine breaking changes
     * In these cases, the RevisionNumber is incremented so that height continues to
     * be monitonically increasing even as the RevisionHeight gets reset
     */
    height?: {
      /**
       * the revision that the client is currently on
       * @format uint64
       */
      revision_number?: string;
      /**
       * the height within the given revision
       * @format uint64
       */
      revision_height?: string;
    };
    /**
     * consensus state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    consensus_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
}

/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface ConsensusStateData {
  /**
   * consensus state associated with the client identifier at the given height
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface ClientConnectionsData {
  /** slice of all the connection paths associated with a client. */
  connection_paths?: string[];
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was generated
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface ConnectionsData {
  /** list of stored connections of the chain. */
  connections?: {
    /** connection identifier. */
    id?: string;
    /** client associated with this connection. */
    client_id?: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     */
    versions?: {
      /** unique version identifier */
      identifier?: string;
      /** list of features compatible with the specified identifier */
      features?: string[];
    }[];
    /**
     * current state of the connection end.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN';
    /** counterparty chain associated with this connection. */
    counterparty?: {
      /**
       * identifies the client on the counterparty chain associated with a given
       * connection.
       */
      client_id?: string;
      /**
       * identifies the connection end on the counterparty chain associated with a
       * given connection.
       */
      connection_id?: string;
      /**
       * MerklePrefix is merkle path prefixed to the key.
       * The constructed key from the Path and the key will be append(Path.KeyPath,
       * append(Path.KeyPrefix, key...))
       * commitment merkle prefix of the counterparty chain.
       */
      prefix?: {
        /** @format byte */
        key_prefix?: string;
      };
    };
    /**
     * delay period associated with this connection.
     * @format uint64
     */
    delay_period?: string;
  }[];
  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     * @format byte
     */
    next_key?: string;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     * @format uint64
     */
    total?: string;
  };
  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface ConnectionData {
  /**
   * connection associated with the request identifier
   * ConnectionEnd defines a stateful object on a chain connected to another
   * separate one.
   * NOTE: there must only be 2 defined ConnectionEnds to establish
   * a connection between two chains.
   */
  connection?: {
    /** client associated with this connection. */
    client_id?: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions?: {
      /** unique version identifier */
      identifier?: string;
      /** list of features compatible with the specified identifier */
      features?: string[];
    }[];
    /**
     * current state of the connection end.
     * @default "STATE_UNINITIALIZED_UNSPECIFIED"
     */
    state?: 'STATE_UNINITIALIZED_UNSPECIFIED' | 'STATE_INIT' | 'STATE_TRYOPEN' | 'STATE_OPEN';
    /** counterparty chain associated with this connection. */
    counterparty?: {
      /**
       * identifies the client on the counterparty chain associated with a given
       * connection.
       */
      client_id?: string;
      /**
       * identifies the connection end on the counterparty chain associated with a
       * given connection.
       */
      connection_id?: string;
      /**
       * MerklePrefix is merkle path prefixed to the key.
       * The constructed key from the Path and the key will be append(Path.KeyPath,
       * append(Path.KeyPrefix, key...))
       * commitment merkle prefix of the counterparty chain.
       */
      prefix?: {
        /** @format byte */
        key_prefix?: string;
      };
    };
    /**
     * delay period that must pass before a consensus state can be used for packet-verification
     * NOTE: delay period logic is only implemented by some clients.
     * @format uint64
     */
    delay_period?: string;
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface ConnectionClientStateData {
  /**
   * client state associated with the channel
   * IdentifiedClientState defines a client state with an additional client
   * identifier field.
   */
  identified_client_state?: {
    /** client identifier */
    client_id?: string;
    /**
     * client state
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := ptypes.MarshalAny(foo)
     *      ...
     *      foo := &pb.Foo{}
     *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    client_state?: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /**
       * Must be a valid serialized protocol buffer of the above specified type.
       * @format byte
       */
      value?: string;
    };
  };
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}

/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface ConnectionConsensusStateData {
  /**
   * consensus state associated with the channel
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   *  Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   *  Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := ptypes.MarshalAny(foo)
   *      ...
   *      foo := &pb.Foo{}
   *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  consensus_state?: {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @format byte
     */
    value?: string;
  };
  /** client ID associated with the consensus state */
  client_id?: string;
  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
   * the same. However some consensus algorithms may choose to reset the
   * height in certain conditions e.g. hard forks, state-machine breaking changes
   * In these cases, the RevisionNumber is incremented so that height continues to
   * be monitonically increasing even as the RevisionHeight gets reset
   */
  proof_height?: {
    /**
     * the revision that the client is currently on
     * @format uint64
     */
    revision_number?: string;
    /**
     * the height within the given revision
     * @format uint64
     */
    revision_height?: string;
  };
}
