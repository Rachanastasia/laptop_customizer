import React from 'react';
import ReactDOM from 'react-dom';

import Specs from './Specs';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Specs/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
