import React from 'react';

const List = ({
  content,
  id,
  setSelected,
  selected,
  color,
  fontSize,
  fontFamily,
  textAlign,
  padding,
}) => {
  const textStyle = {
    textAlign,
    fontFamily,
    fontSize,
    color,
    width: 'calc(100% - 0px)',
    padding,
    flexWrap: 'wrap',
    whiteSpace: 'initial',
    boxShadow: selected === id ? 'inset 0 0 0 1px #93FE3F' : 'inset 0 0 0 1px coral',
  };

  const listStyle = {
    display: 'inline-block'
  };

  return (
    <div
      style={textStyle}
      onClick={e => setSelected(e, id)}
    >
      <ul style={listStyle}>
      {content.map((item, index) => {
        return (
          <li key={index} >{item}</li>
        );
      })}
      </ul>
    </div>
  );
};

export default List;
