// src/components/common/Header.js
import React, { PropTypes } from 'react';  
import { Link, IndexLink } from 'react-router';

require('../scss/header.scss');

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {' | '}
      <Link to="/Home" activeClassName="active">Cats</Link>
    </nav>
  );
};

export default Header;
