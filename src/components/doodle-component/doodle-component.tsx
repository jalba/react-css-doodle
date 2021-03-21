import React, { RefObject } from 'react';
import 'css-doodle';

import { DoodleHTMLElement } from './types';

interface DoodleBaseProps {
  rules?: string;
  use?: string;
  grid?: string;
  seed?: string;
  ref?: RefObject<DoodleHTMLElement>;
}

type MergeElementProps<
  T extends React.ElementType,
  P extends DoodleBaseProps
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

export type DoodleProps = MergeElementProps<'div', DoodleBaseProps>;

const DoodleComponent = React.forwardRef<DoodleHTMLElement, DoodleProps>(
  function DoodleComponent({ rules, ...otherProps }, forwardRef) {
    return (
      <css-doodle ref={forwardRef} {...otherProps}>
        {rules}
      </css-doodle>
    );
  }
);

export default DoodleComponent;
