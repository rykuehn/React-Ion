import _ from 'lodash';
import React from 'react';
import Slider from './Slider';

const WidthSlider = ({ updateProps, selected, info, store }) => {
  const direction = info.parent ? info.parent.props.flexDirection : null;
  return (
    <div
      className={_.includes(store.pages, selected) || direction === 'row'
        ? 'hidden'
        : 'slider'
      }
    >
      <Slider
        min={0}
        max={100}
        step={10}
        unit={'%'}
        propName={'width'}
        selected={selected}
        updateProps={updateProps}
        title={'WIDTH'}
        initialValue={info.props.width ? info.props.width[0] : null}
      />
    </div>
  );
};

export default WidthSlider;

