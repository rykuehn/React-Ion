import React from 'react';

export default class TextColor extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="color-picker">
        <input
          type="color"
          ref={i => this.textColor = i}
        />
        <button
          onClick={() => updateProps(
            'color',
            this.textColor.value,
            selected,
            true,
            'onClick',
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> TEXT COLOR
        </button>
      </div>
    );
  }
}
