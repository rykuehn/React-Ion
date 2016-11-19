import React from 'react';

class ColorPicker extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="color-picker">
        <input
          type="color"
          ref={i => (this.backgroundColor = i)}
          onInput={() => updateProps(
            'backgroundColor',
            this.backgroundColor.value,
            selected,
          )}
        />
      </div>
    );
  }
}

export default ColorPicker;
