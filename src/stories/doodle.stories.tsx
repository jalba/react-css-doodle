import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import doodle from '../lib';

type WrapperProps = {
  backgroundColor: string;
  rows: number;
  columns: number;
  gridSize: number;
  gridGap: number;
};

const Wrapper: React.FC<WrapperProps> = ({
  backgroundColor,
  gridSize,
  columns,
  rows,
  gridGap
}) => {
  const Doodle = doodle`
    :doodle {
      @grid: ${rows}x${columns} / ${gridSize}px;
      grid-gap: ${gridGap}px;
    }
    background: ${backgroundColor};
  `;

  return <Doodle />;
};

const Template: Story<WrapperProps> = args => <Wrapper {...args} />;

export const DoodleWithControls = Template.bind({});
DoodleWithControls.args = {
  backgroundColor: 'red',
  gridSize: 200,
  columns: 2,
  rows: 2,
  gridGap: 1
};

export default {
  title: 'react-css-doodle/doodle',
  component: Wrapper,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;
