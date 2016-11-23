import React, { PropTypes } from 'react';

const DropDown = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (value) => {
    addChild(
      'DropDown',
      { content: value, fontSize: 12, color: 'white' },
      `dropdown${nextId}`,
      selected,
      nextId,
    );
  };

  return (
    <div className="add-text">
      <button
        onClick={() => toggleTextModal(
          'enter dropdown option',
          'list',
          callback,
        )}
      > <i className="fa fa-sort-desc" aria-hidden="true" /> DropDown
      </button>
    </div>
  );
};

DropDown.propTypes = {
  selected: PropTypes.number.isRequired,
  nextId: PropTypes.number.isRequired,
  addChild: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
};

export default DropDown;
