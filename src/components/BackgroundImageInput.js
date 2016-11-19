import React from 'react';

const BackgroundImageInput = ({ updateProps, selected, toggleTextModal }) => {
  const callback = (context) => {
    updateProps(
      'backgroundImage',
      context.text.value,
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
      > <i className="fa fa-plus" aria-hidden="true" /> BG IMAGE
      </button>
    </div>
  );
};

export default BackgroundImageInput;
