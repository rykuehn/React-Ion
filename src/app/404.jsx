import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/index.scss');

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

ReactDOM.render(<NotFound />, document.getElementById('App'));
