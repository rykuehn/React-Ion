import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

require('../scss/index.scss');

export default class App extends Component {
  render() {
    return (
      <div className="test">Test</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
