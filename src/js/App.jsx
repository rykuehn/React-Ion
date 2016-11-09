import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Index from './index';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index} />
        <Route path="/Home" component={Home} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

const Home = () => <h1>Hello from Home!</h1>;


ReactDOM.render(<App />, document.getElementById('App'));

