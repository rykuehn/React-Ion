import React from 'react';

const AddSubtractBlock = ({
  addChild,
  selected,
  removeChild,
  nextId,
  pageSelected
}) => (
  <div>
    <button
      onClick={() => {
        addChild('Block', {
          backgroundColor: 'rgba(255,255,255,.1)',
          flex: 1,
          height: [50, '%'],
          width: [20, '%'],
          flexDirection: 'row' },
          selected,
          nextId,
          pageSelected,
        );
      }}
    > <i className="fa fa-plus" aria-hidden="true" /> BLOCK
    </button>
    <button
      onClick={() => removeChild(selected)}
    > <i className="fa fa-minus" aria-hidden="true" /> BLOCK
    </button>
  </div>
);

export default AddSubtractBlock;
