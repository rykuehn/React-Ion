import React from 'react';
import { getValue } from '../lib/helpers';

export default class FlexSlider extends React.Component {

  componentDidMount() {
    this.updateFlex();
  }

  updateFlex() {
    const context = this;
    const flex = getValue('flex', context.props.selected, context.props.routes);

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
            'flex', this.flex.value, selected,
          )}
        />
      </div>
    );
  }
}
