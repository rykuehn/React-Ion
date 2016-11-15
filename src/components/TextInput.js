import React from 'react';

export default class TextInput extends React.Component {
  render() {
    const { selected, nextId, addChild } = this.props;

    return (
      <div className="text-input">
        <input
          type="text"
          placeholder="Enter Text Here"
          ref={i => this.text = i}
        />
        <button
          onClick={() => addChild(
            'Text',
            { content: this.text.value },
            selected,
            nextId,
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> TEXT
        </button>
      </div>
    );
  }
}
