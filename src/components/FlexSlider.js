import React from 'react';

export default class FlexSlider extends React.Component {
  componentDidMount() {
    this.updateFlex();
  }

  updateFlex() {
    const context = this;
    const flex = this.props.info.props.flex;

    if (flex) {
      setTimeout(() => {
        context.flex.value = flex;
      });
    }
  }

  render() {
    const { updateProps, selected } = this.props;
    this.updateFlex();
    return (
      <div
        className={selected === 0
          ? 'hidden'
          : 'slider'
        }
      > FLEX
        <input
          type="range"
          min={0}
          max={10}
          ref={i => this.flex = i}
          onChange={() => updateProps(
            'flex', this.flex.value, selected, 'onChange',
          )}
          onMouseDown={() => updateProps(
            'flex', this.flex.value, selected, 'onMouseDown',
          )}
          onMouseUp={() => updateProps(
            'flex', this.flex.value, selected, 'onMouseUp',
          )}

        />
      </div>
    );
  }
}
