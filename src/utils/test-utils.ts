import { ReactTestRendererJSON } from 'react-test-renderer';
import { BasicTypes } from '../lib/types';
import { screen, Nullish, MatcherFunction } from '@testing-library/react';

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

// Idea from https://polvara.me/posts/five-things-you-didnt-know-about-testing-library

export const getByTextContent = (text: string): HTMLElement => {
  const { getByText } = screen;

  return getByText((_content, node) => {
    const hasText = (element: Nullish<Element>) =>
      element?.textContent?.includes(text);
    const nodeHasText = hasText(node);
    const nodeChildren = node ? node.children : [];
    const childrenDontHaveText = Array.from(nodeChildren).every(
      child => !hasText(child)
    );

    return Boolean(nodeHasText && childrenDontHaveText);
  });
};
