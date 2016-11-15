import React from 'react';

export default class NameInput extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="text-input">
        <input
          type="text"
          placeholder="Component Name"
          ref={i => this.componentName = i}
        />
        <button
          onClick={() => updateProps(
            'name',
            this.componentName.value,
            selected,
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> NAME
        </button>
      </div>
    );
  }
}
