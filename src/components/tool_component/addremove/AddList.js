import React from 'react';

const ListInput = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (value) => {
    addChild(
      'List',
      { content: value, fontSize: 12, color: 'white' },
      `list${nextId}`,
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
      > <i className="fa fa-list-alt" aria-hidden="true" /> List
      </button>
    </div>
  );
};

export default ListInput;
