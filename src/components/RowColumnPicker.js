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
        false,
        'onClick',
      )}
    > ROW
    </button>
    <button
      onClick={() => updateProps(
        'flexDirection',
        'column',
        selected,
        false,
        'onClick',
      )}
    > COLUMN
    </button>
  </div>
);

export default RowColumnPicker;
