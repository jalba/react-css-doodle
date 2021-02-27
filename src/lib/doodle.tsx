import React from 'react';

import DoodleComponent from '../components/doodle-component';

import { Vars } from './types';
import { valueToString } from '../utils';

export default function doodle(
  stringArray: TemplateStringsArray,
  ...vars: Vars[]
): () => JSX.Element {
  const computedRules: string = stringArray
    .map((str, idx) => `${str}${vars[idx] ? valueToString(vars[idx]) : ''}`)
    .join('');

  const Doodle = () => <DoodleComponent rules={computedRules} />;

  return Doodle;
}
