import React from 'react';

const RowColumnPicker = ({
  updateProps,
  selected,
}) => (
  <div>
    <button
      onClick={() => updateProps(
        'flexDirection',
        'row',
        selected,
      )}
    > ROW
    </button>
    <button
      onClick={() => updateProps(
        'flexDirection',
        'column',
        selected,
      )}
    > COLUMN
    </button>
  </div>
);

export default RowColumnPicker;
