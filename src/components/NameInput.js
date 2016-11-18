import React from 'react';

export default class NameInput extends React.Component {
  render() {
    const { toggleTextModal, updateInfos, selected } = this.props;

    const callback = (context) => {
      updateInfos(
        'name',
        context.text.value,
        selected,
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
