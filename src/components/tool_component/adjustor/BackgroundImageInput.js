import React from 'react';

const BackgroundImageInput = ({ updateProps, selected, toggleTextModal }) => {
  const callback = (value) => {
    updateProps(
      'backgroundImage',
      value,
      selected,
    );
  };

  return (
    <div className="bg-image">
      <button
        onClick={() => toggleTextModal(
          'enter url',
          callback,
        )}
      > <i className="fa fa-image" aria-hidden="true" />
      </button>
    </div>
  );
};

export default BackgroundImageInput;
