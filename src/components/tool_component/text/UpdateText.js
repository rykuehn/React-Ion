import React from 'react';

const UpdateText = ({ toggleTextModal, updateProps, selected }) => {
  const callback = (value) => {
    updateProps(
      'content',
      value,
      selected,
    );
  };

  return (
    <div>
      <button
        onClick={() => toggleTextModal(
          'new text',
          callback,
        )}
      > <i className="fa fa-pencil" aria-hidden="true" /> UPDATE TEXT
      </button>
    </div>
  );
};

export default UpdateText;
