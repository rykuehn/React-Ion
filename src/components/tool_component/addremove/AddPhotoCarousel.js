import React, { PropTypes } from 'react';

const AddPhotoCarousel = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (value) => {
    addChild(
      'PhotoCarousel',
      { content: value,
        height: [50, '%'],
        width: [20, '%'],
      },
      `photoCarousel${nextId}`,
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
      > <i className="fa fa-sort-desc" aria-hidden="true" /> Add Photo Carousel
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
