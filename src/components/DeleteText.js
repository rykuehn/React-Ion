import React from 'react';

const DeleteText = ({
  selected,
  removeChild,
}) => (
  <div>
    <button
      onClick={() => removeChild(selected)}
    > <i className="fa fa-trash" aria-hidden="true" />
    </button>
  </div>
);

export default DeleteText;
