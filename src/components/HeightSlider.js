import React from 'react';
import { getValue } from '../lib/helpers';

export default class HeightSlider extends React.Component {

  componentDidMount() {
    this.updateHeight();
  }

  updateHeight() {
    const context = this;
    const height = getValue('height', context.props.selected, context.props.routes);

    setTimeout(() => {
      context.height.value = height[0];
    });
  }

  render() {
    const { updateProps, selected } = this.props;
    this.updateHeight();
    return (
      <div className="slider">
        HEIGHT
        <input
          type="range"
          min={0}
          max={selected === 0 ? 10000 : 100}
          step={selected === 0 ? 100 : 10}
          ref={i => this.height = i}
          onChange={() => {
            updateProps(
              'height',
              [this.height.value, selected == 0 ? 'px' : '%'],
              selected,
            );
          }}
        />
      </div>
    );
  }
}
