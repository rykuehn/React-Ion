import React, { PropTypes } from 'react';

const RowColumnPicker = ({
  updateProps,
  selected,
  direction,
}) => (
  <div className="row-column-picker">
    <button
      className={direction === 'row'
        ? 'row-column-selected'
        : null
      }
      onClick={() => updateProps(
        'flexDirection',
        'row',
        selected,
      )}
    > ROW
    </button>
    <button
      className={direction === 'column'
        ? 'row-column-selected'
        : null
      }
      onClick={() => updateProps(
        'flexDirection',
        'column',
        selected,
      )}
    > COLUMN
    </button>
  </div>
);

RowColumnPicker.propTypes = {
  selected: PropTypes.number.isRequired,
  updateProps: PropTypes.func.isRequired,
};

export default RowColumnPicker;
