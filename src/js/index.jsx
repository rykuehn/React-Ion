import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router';

require('../scss/index.scss');

export default class Index extends Component {
  render() {
    return (
      <div className="test">
        <Link to='/Test'>Home</Link>
      </div>
    );
  }
}

