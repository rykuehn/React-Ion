import React, { PropTypes } from 'react';

const AddPhotoCarousel = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (value) => {
    addChild(
      'Carousels',
      { urls: value,
        settings: {
          autoplay: true,
          wrapAround: true,
        },
        height: [50, '%'],
        width: [20, '%'],
      },
      `carousels${nextId}`,
      selected,
      nextId,
    );
  };

  return (
    <div className="add-text">
      <button
        onClick={() => toggleTextModal(
          'Add Picture URL',
          'list',
          callback,
        )}
      > <i className="fa fa-circle-thin" aria-hidden="true" /> CAROUSEL
      </button>
    </div>
  );
};

AddPhotoCarousel.propTypes = {
  selected: PropTypes.number.isRequired,
  nextId: PropTypes.number.isRequired,
  addChild: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
};

export default AddPhotoCarousel;
