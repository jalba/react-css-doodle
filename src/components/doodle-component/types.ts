export type ExportOptions = {
  scale?: number;
  detail?: boolean;
  download?: boolean;
  name?: string;
};

type GridObject = {
  x: number;
  y: number;
  size: number;
};

export interface DoodleHTMLElement extends HTMLElement {
  export: (options: ExportOptions) => Promise<void>;
  update: (styles?: string) => void;
  seed: string;
  use: string;
  grid: string | GridObject;
}
