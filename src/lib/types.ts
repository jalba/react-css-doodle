export type BasicTypes = number | string | TemplateStringsArray;

export type Func = () => BasicTypes;

export type Vars = BasicTypes | Func;
