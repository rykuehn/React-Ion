import React from 'react';

export default class NameInput extends React.Component {
  render() {
    const { toggleTextModal, updateProps, selected } = this.props;

    const callback = (context) => {
      updateProps(
        'name',
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
            'enter component name',
            callback,
          )}
        > <i className="fa fa-pencil" aria-hidden="true" /> COMPONENT NAME
        </button>
      </div>
    );
  }
}
