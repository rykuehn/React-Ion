import React from 'react';

export default class UpdateText extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="text-input">
        <input
          type="text"
          placeholder="Edit Text"
          ref={i => this.text = i}
        />
        <button
          onClick={() => updateProps(
            'content',
            this.text.value,
            selected,
            true,
            'onClick',
          )}
        > <i className="fa fa-pencil" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
