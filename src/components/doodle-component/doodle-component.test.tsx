import React, { MutableRefObject, createRef } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getByTextContent } from '../../utils';

import DoodleComponent from './doodle-component';
import { DoodleHTMLElement } from './types';

describe('Doodle component', () => {
  it('should render a css-doodle element with the rules received', () => {
    const rules = `
      :doodle {
        @grid: 5x5 / 10px;
        grid-gap: 2x;
      }
      background: red;
    `;

    render(<DoodleComponent rules={rules} />);

    expect(getByTextContent(rules)).toBeInTheDocument();
  });

  it('should use the props passed to it to render the doodle correctly', () => {
    const rules = `
      :doodle {
        @size: 300px;
        grid-gap: 20x;
      }
      background: red;
    `;
    const gridSize = '5';
    const seed = '2021';
    const useStr = 'var(--rule)';
    const { container } = render(
      <DoodleComponent rules={rules} grid={gridSize} seed={seed} use={useStr} />
    );
    const doodleElement = container.children[0];
    const gridAttribute = doodleElement.getAttribute('grid');
    const seedAttribute = doodleElement.getAttribute('seed');
    const useAttribute = doodleElement.getAttribute('use');

    expect(gridAttribute).toEqual(gridSize);
    expect(seedAttribute).toEqual(seed);
    expect(useAttribute).toEqual(useStr);
  });

  it('should pass refs to access the js api', () => {
    const ref = createRef() as MutableRefObject<DoodleHTMLElement>;
    const rules = `
      :doodle {
        @grid: 5x5 / 10px;
        grid-gap: 20x;
      }
      background: red;
    `;
    const gridValue = { count: 25, x: 5, y: 5, z: 1 };
    const useStr = 'var(--test)';

    render(
      <DoodleComponent rules={rules} ref={ref} use={useStr} seed={'2021'} />
    );
    expect(ref.current.export).toBeDefined();
    expect(ref.current.grid).toMatchObject(gridValue);
    expect(ref.current.use).toEqual(useStr);
    expect(ref.current.seed).toEqual('2021');
    expect(ref.current.update).toBeDefined();
  });
});
