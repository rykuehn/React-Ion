import React from 'react';

const NameInput = ({ toggleTextModal, updateInfos, selected, setSelected }) => {
  const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);
  const makeComponentName = string => string.split(' ').map(word => capitalizeFirstLetter(word)).join('');

  const callback = (context) => {
    const componentName = makeComponentName(context.text.value);
    updateInfos(
      'name',
      componentName,
      selected,
    );
    setTimeout(() => setSelected(null, selected), 0);
  };

  return (
    <div>
      <button
        onClick={() => toggleTextModal(
          'enter component name',
          callback,
        )}
      > COMPONENT NAME <i className="fa fa-pencil" aria-hidden="true" />
      </button>
    </div>
  );
};

export default NameInput;
