import React from 'react';
import _ from 'lodash';

export default class FlexSlider extends React.Component {
  componentDidMount() {
    this.updateFlex();
    console.log('FlexSlider', this.props)
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
    const { updateProps, selected, store } = this.props;
    this.updateFlex();
    return (
      <div
        className={_.includes(store.pages, selected)
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
          onMouseUp={() => updateProps(
            'flex', this.flex.value, selected, 'onMouseUp',
          )}

        />
      </div>
    );
  }
}
