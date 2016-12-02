import React, { PropTypes } from 'react';

class ColorPicker extends React.Component {
  render() {
    const { info, updateProps, selected } = this.props;
    const action = () => updateProps(
      'backgroundColor',
      this.backgroundColor.value,
      selected,
    );

    return (
      <div className="color-picker">
        <input
          type="color"
          ref={i => (this.backgroundColor = i)}
          onClick={action}
          onInput={action}
          value={info.props.backgroundColor}
        />
      </div>
    );
  }
}

ColorPicker.propTypes = {
  selected: PropTypes.number.isRequired,
  updateProps: PropTypes.func.isRequired,
};

export default ColorPicker;
