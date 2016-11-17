import React from 'react';

const ZoomPercent = ({ zoom }) => (
  <span className="zoom-percent">
    <i className="fa fa-search" aria-hidden="true" />
    {`${Math.round(100 * (zoom))}%`}
  </span>
);

export default ZoomPercent;
