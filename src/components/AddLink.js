import React from 'react';

const AddLink = ({
  toggleTextModal,
  updateInfos,
  selected,
  setSelected,
}) => {
  const callback = (value) => {
    updateInfos(
      'aUrl',
      value,
      selected,
    );
    setTimeout(() => setSelected(null, selected), 0);
  };

  return (
    <div className="link-button">
      <button
        onClick={() => toggleTextModal(
          'enter link url',
          callback,
        )}
      > <i className="fa fa-link" aria-hidden="true" />
      </button>
    </div>
  );
};

export default AddLink;
