import React from 'react';

const Delete = ({
  selected,
  removeChild,
}) => (
  <div className="delete">
    <button
      onClick={() => removeChild(selected)}
    > <i className="fa fa-trash" aria-hidden="true" />
    </button>
  </div>
);

export default Delete;
