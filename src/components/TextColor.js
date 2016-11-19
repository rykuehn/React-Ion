import React from 'react';

class TextColor extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="color-picker">
        <input
          type="color"
          ref={i => (this.textColor = i)}
          onInput={() => updateProps(
            'color',
            this.textColor.value,
            selected,
          )}
        />
      </div>
    );
  }
}

export default TextColor;
