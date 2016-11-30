import React, { PropTypes } from 'react';

const AddBtn = ({ toggleDraggableModal }) => (
  <div className="add-btn">
    <button
      onClick={() => {
        toggleDraggableModal();
      }}
    > <i className="fa fa-plus" aria-hidden="true" /> Components
    </button>
  </div>
);

AddBtn.propTypes = {
  toggleDraggableModal: PropTypes.func.isRequired,
};

export default AddBtn;
