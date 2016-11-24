import React, { PropTypes } from 'react';

const AddBtn = ({
  toggleDraggableModal,
}) => (
  <div className="add-btn">
    <button
      onClick={() => {
        toggleDraggableModal();
      }}
    > <i className="fa fa-plus" aria-hidden="true" /> Components
    </button>
  </div>
);


export default AddBtn;
