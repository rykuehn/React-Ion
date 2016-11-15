import React from 'react';

export default class HeightSlider extends React.Component {

  componentDidMount() {
    this.updateHeight();
  }

  updateHeight() {
    const context = this;
    const height = this.props.info.props.height;
    if (height) {
      setTimeout(() => {
        context.height.value = height[0];
      });
    }
  }

  render() {
    const { updateProps, selected, info } = this.props;
    const direction = info.parent ? info.parent.props.flexDirection : null;

    this.updateHeight();
    return (
      <div
        className={direction === 'column'
          ? 'hidden'
          : 'slider'
        }
      > HEIGHT
        <input
          type="range"
          min={0}
          max={selected === 0 ? 10000 : 100}
          step={selected === 0 ? 100 : 10}
          ref={i => this.height = i}
          onChange={() => {
            updateProps(
              'height',
              [this.height.value, selected === 0 ? 'px' : '%'],
              selected,
            );
          }}
        />
      </div>
    );
  }
}
