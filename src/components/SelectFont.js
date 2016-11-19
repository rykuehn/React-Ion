import React from 'react';

class SelectFont extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder="Enter Font Family"
          ref={i => (this.font = i)}
        />
        <button
          onClick={() => updateProps(
            'fontFamily',
            this.font.value,
            selected,
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> FONT
        </button>
      </div>
    );
  }
}

export default SelectFont;
