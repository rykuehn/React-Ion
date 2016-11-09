import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>Test</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
