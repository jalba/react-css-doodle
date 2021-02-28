# REACT-CSS-DOODLE

A simple [styled-components](https://styled-components.com/)-esque wrapper for [css-doodle](https://css-doodle.com/) library.

## installation

`npm install -S @jalba/react-css-doodle` or `yarn add @jalba/react-css-doodle`

## usage

You can pass variables and even functions to the (tagged template literal)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates] to build your doodle's rules:

```javascript
import React from "react";
import "./styles.css";

import doodle from "./doodle";

const gridSize = 2;
const gridGap = "2";

const background = () => "red";

const FancyDoodle = doodle`
  :doodle {
    @grid: ${gridSize} / 200px;
    grid-gap: ${gridGap}px;
  }
  background: @pick(${background}, pink);
`;

export default function App() {
  return (
    <div className="App">
      <FancyDoodle />
    </div>
  );
}
```


![alt text](https://github.com/jalba/react-css-doodle/raw/master/assets/doodle.png "The result")


## Available Scripts

In the project directory, you can run:

### `yarn run storybook`

Runs storybook. Ideal to develop or play around with the possibilities of `css-doodle`\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode\
Visit [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the library for production to the `dist` folder.\

The build task uses rollup as bundler.

There is also an interactive mode, that will re-build the library after every change you save.

Run it with `yarn run build-watch`

Please visit [rollup](https://rollupjs.org/guide/en/) for more information

