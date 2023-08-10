/* eslint-disable import/no-unused-modules */

import { Meta, StoryObj } from '@storybook/react';
import Saber from './Saber';
import { Positions, Colors } from '../../types';
import styles from './storybook.module.scss';
import { figmaDisplayUrl } from '../../Display/storybook.temp';

const meta: Meta<typeof Saber> = {
  component: Saber,
  title: 'atoms/Saber',
  parameters: {
    design: {
      type: 'figma',
      url: figmaDisplayUrl,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Saber>;

export const Main: Story = {
  args: {
    color: 'green',
    position: Positions.LEFT,
  },
};

export const Group: Story = {
  render: () => (
    <div className={styles.group}>
      <div>
        <h3>Colors:</h3>
        {Object.keys(Colors).map((color) => (
          <Saber color={Colors[color]} position={Positions.RIGHT} />
        ))}
      </div>

      <div>
        <h3>Positions:</h3>
        {Object.keys(Positions).map((position) => (
          <Saber position={Positions[position]} />
        ))}
      </div>
    </div>
  ),
};
