import React from 'react';

export default class TextAlign extends React.Component {
  render() {
    const { updateProps, selected } = this.props;

    return (
      <div className="color-picker">
        <button
          onClick={() => updateProps(
            'textAlign',
            'left',
            selected,
            true,
            'onclick',
          )}
        > <i className="fa fa-align-left" aria-hidden="true" />
        </button>
        <button
          onClick={() => updateProps(
            'textAlign',
            'center',
            selected,
            true,
            'onclick',
          )}
        > <i className="fa fa-align-center" aria-hidden="true" />
        </button>
        <button
          onClick={() => updateProps(
            'textAlign',
            'right',
            selected,
            true,
            'onclick',
          )}
        > <i className="fa fa-align-right" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
