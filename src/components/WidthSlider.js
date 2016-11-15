import React from 'react';
import { getValue } from '../lib/helpers';

export default class WidthSlider extends React.Component {

  componentDidMount() {
    this.updateWidth();
  }

  updateWidth() {
    const context = this;
    const width = getValue('width', context.props.selected, context.props.routes);

    if (width) {
      setTimeout(() => {
        context.width.value = width[0];
      });
    }
  }

  render() {
    const { updateProps, selected } = this.props;
    this.updateWidth();
    return (
      <div
        className={selected === 0
          ? 'hidden'
          : 'slider'
        }
      > WIDTH
        <input
          type="range"
          min={0}
          max={100}
          step={10}
          ref={i => this.width = i}
          onChange={() => updateProps(
            'width',
            [this.width.value, '%'],
            selected,
          )}
        />
      </div>
    );
  }
}
