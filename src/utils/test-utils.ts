import { ReactTestRendererJSON } from 'react-test-renderer';
import { BasicTypes } from '../lib/types';

type Renderer = ReactTestRendererJSON | ReactTestRendererJSON[] | null;

function isRenderer(arg: Renderer): arg is ReactTestRendererJSON {
  return (<ReactTestRendererJSON>arg).children !== undefined;
}

export const findInChildren = (json: Renderer, value: BasicTypes): boolean => {
  let found;

  if (isRenderer(json)) {
    found = json.children?.find(child =>
      child.toString().includes(value.toString())
    );
  }

  return Boolean(found);
};
