// src/components/common/Header.js
import React, { PropTypes, Component } from 'react';  
import { Link, IndexLink } from 'react-router';

require('../scss/header.scss');

class Header extends Component {
  render() {
  	  console.log(this.props);
	  return (
	    <nav>
	      <IndexLink to="/" activeClassName="active">Home</IndexLink>
	      {' | '}
	      <Link to="/Home" activeClassName="active">Cats</Link>
	      {' | '}
	      {this.props.user.username}
	    </nav>
	  );
  }
};

export default Header;
