import React, { PropTypes } from 'react';

const RadioInput = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (value) => {
    addChild(
      'Radio',
      { content: value, fontSize: 12, color: 'white', height: [50, '%'], width: [20, '%'] },
      `radio${nextId}`,
      selected,
      nextId,
    );
  };

  return (
    <div className="add-text">
      <button
        onClick={() => toggleTextModal(
          'enter text',
          'list',
          callback,
        )}
      > <i className="fa fa-bullseye" aria-hidden="true" /> Radio
      </button>
    </div>
  );
};

RadioInput.propTypes = {
  selected: PropTypes.number.isRequired,
  nextId: PropTypes.number.isRequired,
  addChild: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
};

export default RadioInput;
