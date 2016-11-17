import React from 'react';

export default class UpdateText extends React.Component {
  render() {
    const { toggleTextModal, updateProps, selected } = this.props;
    const callback = (context) => {
      updateProps(
        'content',
        context.text.value,
        selected,
        true,
        'onClick',
      );
    };

    return (
      <div>
        <button
          onClick={() => toggleTextModal(
            'new text',
            callback,
          )}
        > <i className="fa fa-pencil" aria-hidden="true" /> UPDATE TEXT
        </button>
      </div>
    );
  }
}
