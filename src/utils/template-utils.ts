import { Func, Vars } from '../lib';

function isFunc(arg: Vars): arg is Func {
  return (arg as Func).call !== undefined;
}

export function valueToString(value: Vars): string {
  if (typeof value === 'number') {
    return value.toString();
  }

  if (typeof value === 'string') {
    return value;
  }

  if (isFunc(value)) {
    return valueToString(value());
  }

  return '';
}
