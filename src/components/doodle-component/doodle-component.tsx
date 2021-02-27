import React from 'react';
import 'css-doodle';

import './doodle-declaration';

const DoodleComponent: React.FC<{ rules: string }> = ({ rules }) => {
  return <css-doodle>{rules}</css-doodle>;
};

export default DoodleComponent;
