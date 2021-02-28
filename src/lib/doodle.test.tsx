import React from 'react';
import renderer from 'react-test-renderer';

import { findInChildren } from '../utils';

import doodle from './doodle';

describe('the doodle function', () => {
  it('should render a doodle correctly', () => {
    const TwoByTwoGrid = doodle`
      :doodle {
        @grid: 2 / 200px;
        grid-gap: 1px;
      }
    `;
    const doodleTree = renderer.create(<TwoByTwoGrid />).toJSON();
    expect(doodleTree).toMatchSnapshot();
  });

  it('should render variables passed to the template string correctly', () => {
    const dimension = 4;
    const GridNumber = doodle`
      :doodle {
        @grid: ${dimension} / 200px;
        grid-gap: 1px;
      }
    `;
    const str = 'pink';
    const GridString = doodle`
      :doodle {
        @grid: ${dimension} / 200px;
        grid-gap: 1px;
      }
      background: ${str};
    `;
    const template = `background: @pick(red, ${str});`;
    const GridTemplate = doodle`
      :doodle {
        @grid: ${dimension} / 200px;
        grid-gap: 1px;
      }
      ${template}
    `;
    const GridFunction = doodle`
      :doodle {
        @grid: ${() => dimension * dimension} / 200px;
        grid-gap: 1px;
      }
    `;
    const numberJson = renderer.create(<GridNumber />).toJSON();
    const stringJson = renderer.create(<GridString />).toJSON();
    const templateJson = renderer.create(<GridTemplate />).toJSON();
    const functionJson = renderer.create(<GridFunction />).toJSON();

    expect(findInChildren(numberJson, dimension)).toEqual(true);
    expect(findInChildren(stringJson, str)).toEqual(true);
    expect(findInChildren(templateJson, str)).toEqual(true);
    expect(findInChildren(functionJson, dimension * dimension)).toEqual(true);
  });
});