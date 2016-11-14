import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../actions/selected';

const Block = ({
  backgroundColor,
  height,
  width,
  id,
  setSelected,
  selected,
  flex,
  flexDirection,
  children,
}) => {
  const boxStyle = {
    flex,
    flexDirection,
    backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${height}px`,
    width: `${width}%`,
    maxHeight: '100%',
    padding: '20px',
    margin: '20px',
    position: 'relative',
    flexWrap: 'wrap',
    cursor: 'pointer',
    boxSizing: 'border-box',
    overflow: 'auto',
    boxShadow: selected === id ? 'inset 0 0 0 6px red' : null,
  };

  return (
    <div 
      style={boxStyle}
      onClick={e => setSelected(e, id)}
    >
      {children}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelected }, dispatch);
}

export default connect(null, mapDispatchToProps)(Block);
