import React from 'react';

export default class WidthSlider extends React.Component {

  componentDidMount() {
    this.updateWidth();
  }

  updateWidth() {
    const context = this;
    console.log(this.props.info.props.width);
    const width = this.props.info.props.width;

    if (width) {
      setTimeout(() => {
        context.width.value = width[0];
      });
    }
  }

  render() {
    const { updateProps, selected, info } = this.props;
    const direction = info.parent ? info.parent.props.flexDirection : null;

    this.updateWidth();
    return (
      <div
        className={selected === 0 || direction === 'row'
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
            false
          )}
          onMouseUp={() => updateProps(
            'width',
            [this.width.value, '%'],
            selected,
            true,
          )}
        />
      </div>
    );
  }
}
