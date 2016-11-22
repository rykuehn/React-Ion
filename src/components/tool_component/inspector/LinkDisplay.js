import React from 'react';

const LinkDisplay = ({ url }) => {
  if (url) {
    return (
      <span className="link-display">
        <i className="fa fa-link" aria-hidden="true" /> {url}
      </span>
    );
  } return null;
};

export default LinkDisplay;
