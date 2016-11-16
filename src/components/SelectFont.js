import React from 'react';

export default class SelectFont extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="text-input">
        <input
          type="text"
          placeholder="Enter Font Family"
          ref={i => this.font = i}
        />
        <button
          onClick={() => updateProps(
            'fontFamily',
            this.font.value,
            selected,
            true,
            'onClick',
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> FONT
        </button>
      </div>
    );
  }
}
