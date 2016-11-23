import React from 'react';

const DropDown = ({
  content,
  id,
  setSelected,
  selected,
  color,
  fontSize,
  fontFamily,
  textAlign,
  width,
  height,
}) => {
  const textStyle = {
    textAlign,
    fontFamily,
    fontSize,
    color,
    width: 'calc(100% - 0px)',
    padding: '10px',
    flexWrap: 'wrap',
    whiteSpace: 'initial',
    boxShadow: selected === id ? 'inset 0 0 0 1px #93FE3F' : 'inset 0 0 0 1px coral',
  };

  const listStyle = {
    display: 'inline-block'
  };

  console.log('that is a nice looking drop down menu!!');
  return (
    <div
      style={textStyle}
      onClick={e => setSelected(e, id)}
    >
      <select style={listStyle}>
      {content.map((item, index) => {
        return (
          <option key={index} >{item}</option>
        );
      })}
      </select>
    </div>
  );
};

export default DropDown;
