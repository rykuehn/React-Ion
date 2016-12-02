import React from 'react';

const Image = ({
  backgroundColor,
  height,
  width,
  id,
  setSelected,
  selected,
  flex,
  flexDirection,
  backgroundImage,
  margin,
  padding,
  url,
}) => {
  const boxStyle = {
    flex,
    flexDirection,
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height ? height[0] + height[1] : null,
    width: width ? width[0] + width[1] : null,
    maxHeight: '100%',
    maxWidth: '100%',
    padding: '2px',
    margin,
    flexWrap: 'wrap',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: 2,
    boxShadow: selected === id ? 'inset 0 0 0 2px #93FE3F' : 'inset 0 0 0 2px coral',
  };

  return (
    <img
      style={boxStyle}
      onClick={e => setSelected(e, id)}
      src={url}
      alt="`img{id}`"
    />
  );
};

export default Image;
