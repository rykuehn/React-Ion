import React from 'react';

const ZoomPercent = ({ zoom }) => (
  <span className="zoom-percent">
    {`${Math.round(100 * (zoom))}%`}
  </span>
);

export default ZoomPercent;
