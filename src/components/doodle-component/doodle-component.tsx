import React, { ElementType, RefObject } from 'react';
import 'css-doodle';

import { DoodleHTMLElement } from './types';

export interface DoodleProps {
  rules?: string;
  use?: string;
  grid?: string;
  seed?: string;
  innerRef?: RefObject<DoodleHTMLElement>;
}

const DoodleComponent: React.FC<DoodleProps> = ({
  rules,
  innerRef,
  ...otherProps
}) => (
  <css-doodle ref={innerRef} {...otherProps}>
    {rules}
  </css-doodle>
);

export default DoodleComponent;
