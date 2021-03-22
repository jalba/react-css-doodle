import React, { RefObject, useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import doodle from '../lib';
import { DoodleHTMLElement } from '../components/doodle-component';

type WrapperProps = {
  backgroundColor: string;
  rows?: number;
  columns?: number;
  gridSize?: number;
  gridGap: number;
  innerRef?: RefObject<DoodleHTMLElement>;
  grid?: string;
  seed?: string;
};

const Wrapper: React.FC<WrapperProps> = ({
  backgroundColor,
  gridSize = 200,
  columns = 5,
  rows = 5,
  gridGap,
  innerRef
}) => {
  const Doodle = doodle`
    :doodle {
      @grid: ${rows}x${columns} / ${gridSize}px;
      grid-gap: ${gridGap}px;
    }
    background: ${backgroundColor};
  `;

  return <Doodle innerRef={innerRef} />;
};

export const DoodleWithControls: Story<WrapperProps> = args => (
  <Wrapper {...args} />
);
DoodleWithControls.args = {
  backgroundColor: 'red',
  gridSize: 200,
  columns: 2,
  rows: 2,
  gridGap: 1
};

export const DoodleWitRefs: Story<WrapperProps> = args => {
  const ref = React.createRef<DoodleHTMLElement>();
  const handleClick = async () => {
    await ref.current?.export({
      scale: 6,
      download: true
    });
  };
  return (
    <React.Fragment>
      <Wrapper {...args} innerRef={ref} />
      <div style={{ fontFamily: 'sans-serif' }}>
        <p>Passing a ref as an innerRef prop to the Doodle Element:</p>
        <div
          style={{
            marginTop: '20px'
          }}
        >
          <p>
            {'The ref will give you access to the '}
            <a href="https://css-doodle.com/#js-api-grid">css-doodle js api</a>
            {', so you can do stuff like:'}
          </p>
          <button onClick={handleClick}>Download doodle as png</button>
        </div>
      </div>
    </React.Fragment>
  );
};

DoodleWitRefs.args = {
  backgroundColor: 'red',
  gridSize: 200,
  columns: 2,
  rows: 2,
  gridGap: 1
};

interface DoodleWithPropsProps {
  backgroundColor: string;
  gridSize: number;
  gridGap: number;
  grid: string;
  seed: string;
}

export const DoodleWitProps: Story<DoodleWithPropsProps> = ({
  backgroundColor,
  gridSize,
  gridGap,
  grid,
  seed
}) => {
  const Doodle = doodle`
    :doodle {
      @size: ${gridSize}px;
      grid-gap: ${gridGap}px;
    }
    background: ${backgroundColor};
  `;
  return (
    <React.Fragment>
      <Doodle grid={grid} seed={seed} />
      <div style={{ fontFamily: 'sans-serif' }}>
        <p>
          You can also pass props to the doodle component, as specified in the
          <a href="https://css-doodle.com/#attributes">
            attributes api of css-doodle
          </a>
        </p>
        <p>You can play with the seed and grid properties below</p>
      </div>
    </React.Fragment>
  );
};

DoodleWitProps.args = {
  backgroundColor: 'blue',
  gridSize: 200,
  gridGap: 10,
  grid: '5',
  seed: '2020'
};

export default {
  title: 'react-css-doodle/doodle',
  component: Wrapper,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;
