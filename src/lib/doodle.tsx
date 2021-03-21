import React from 'react';

import DoodleComponent, { DoodleProps } from '../components/doodle-component';

import { Vars } from './types';
import { valueToString } from '../utils';

export default function doodle(
  stringArray: TemplateStringsArray,
  ...vars: Vars[]
): (props: DoodleProps) => JSX.Element {
  const computedRules: string = stringArray
    .map((str, idx) => `${str}${vars[idx] ? valueToString(vars[idx]) : ''}`)
    .join('');

  const Doodle = (props: DoodleProps) => (
    <DoodleComponent {...props} rules={computedRules} />
  );

  return Doodle;
}
