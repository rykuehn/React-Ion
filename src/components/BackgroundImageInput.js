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
      <div className="bg-image">
        <button
          onClick={() => toggleTextModal(
            'enter url',
            callback,
          )}
        > <i className="fa fa-photo" aria-hidden="true" /> BG IMAGE
        </button>
      </div>
    );
  }
}
