import React from 'react';

export default class NameInput extends React.Component {

  capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  makeComponentName(string) {
    return string.split(' ').map(word => this.capitalizeFirstLetter(word)).join('');
  }

  render() {
    const {
      toggleTextModal,
      updateInfos,
      selected,
      setSelected,
    } = this.props;

    const callback = (context) => {
      const componentName = this.makeComponentName(context.text.value);
      updateInfos(
        'name',
        componentName,
        selected,
      );
      setTimeout(() => setSelected(null, selected), 0);
    };

    return (
      <div>
        <button
          onClick={() => toggleTextModal(
            'enter component name',
            callback,
          )}
        > COMPONENT NAME <i className="fa fa-pencil" aria-hidden="true" /> 
        </button>
      </div>
    );
  }
}
