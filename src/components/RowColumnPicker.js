import React from 'react';

const RowColumnPicker = ({ updateProps, selected }) => (
  <div className="row-column-picker">
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
