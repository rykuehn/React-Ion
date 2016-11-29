import React, { PropTypes } from 'react';

const AddPhotoCarousel = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (value) => {
    addChild(
      'Carousels',
      { urls: value,
        settings: {
          autoplay: true,
          autoplayInterval: 1000,
          slideWith: null,
          cellSpacing: null,
          easing: null,
          framePadding: null,
          slideIndex: 0,
          vertical: false,
          wrapAround: true,
          slideWidth: 1,
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
