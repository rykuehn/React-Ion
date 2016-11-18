import React from 'react';
import Slider from './Slider';

const HeightSlider = ({
  updateProps,
  selected,
  info,
}) => {
  const direction = info.parent
    ? info.parent.props.flexDirection
    : null;

  return (
    <div
      className={direction === 'column'
        ? 'hidden'
        : 'slider'
      }
    >
      <Slider
        min={0}
        max={selected === 0 ? 10000 : 100}
        step={selected === 0 ? 100 : 10}
        unit={selected === 0 ? 'px' : '%'}
        propName={'height'}
        selected={selected}
        updateProps={updateProps}
        title={'HEIGHT'}
        initialValue={info.props.height[0]}
      />
    </div>
  );
};

export default HeightSlider;
