import React from 'react';

const TextInput = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (context) => {
    addChild(
      'Text',
      { content: context.text.value, fontSize: 12, color: 'white' },
      `text${nextId}`,
      selected,
      nextId,
    );
  };

  return (
    <div className="add-text">
      <button
        onClick={() => toggleTextModal(
          'enter text',
          callback,
        )}
      > <i className="fa fa-plus" aria-hidden="true" /> TEXT
      </button>
    </div>
  );
};

export default TextInput;
