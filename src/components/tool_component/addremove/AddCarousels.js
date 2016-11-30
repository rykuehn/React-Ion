import React, { PropTypes } from 'react';

const AddCarousels = ({ selected, nextId, addChild, toggleTextModal }) => {
  const callback = (value) => {
    addChild(
      'Carousels',
      { content: value,
        height: [50, '%'],
        width: [20, '%'],
        settings: {
          slideInterval: 2000,
          infinite: true,
          disableThumbnailScroll: true,
          showBullets: true,
          showFullscreenButton: true,
          showPlayButton: true,
          showIndex: true,
          autoPlay: true,
          slideOnThumbnailHover: false,
          disableArrowKeys: false,
          startIndex: 0,
        },
      },
      `Carousels${nextId}`,
      selected,
      nextId,
    );
  };

  return (
    <div className="add-text">
      <button
        onClick={() => toggleTextModal(
          'Add Main Picture URL',
          'list',
          callback,
        )}
      > <i className="fa fa-circle-thin" aria-hidden="true" /> CAROUSEL
      </button>
    </div>
  );
};

AddCarousels.propTypes = {
  selected: PropTypes.number.isRequired,
  nextId: PropTypes.number.isRequired,
  addChild: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
};

export default AddCarousels;
