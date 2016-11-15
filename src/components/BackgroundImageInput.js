import React from 'react';

export default class BackgroundImageInput extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="text-input">
        <input
          type="text"
          placeholder="Background Image"
          ref={i => this.backgroundImage = i}
        />
        <button
          onClick={() => updateProps(
            'backgroundImage',
            this.backgroundImage.value,
            selected,
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> URL
        </button>
      </div>
    );
  }
}
