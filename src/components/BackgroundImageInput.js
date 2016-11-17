import React from 'react';

export default class BackgroundImageInput extends React.Component {
  render() {
    const { updateProps, selected, toggleTextModal } = this.props;

    const callback = (context) => {
      updateProps(
        'backgroundImage',
        context.text.value,
        selected,
      );
    };

    return (
      <div>
        <button
          onClick={() => toggleTextModal(
            'enter url',
            callback,
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> BACKGROUND IMAGE
        </button>
      </div>
    );
  }
}
