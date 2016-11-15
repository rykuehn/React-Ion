import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../actions/selected';

const Text = ({
  content,
  id,
  setSelected,
  selected,
}) => {
  const textStyle = {
    width: 'calc(100% - 0px)',
    padding: '10px',
    flexWrap: 'wrap',
    whiteSpace: 'initial',
    boxShadow: selected === id ? 'inset 0 0 0 1px #93FE3F' : 'inset 0 0 0 1px coral',
  };

  return (
    <div
      style={textStyle}
      onClick={e => setSelected(e, id)}
    >
      {content}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelected }, dispatch);
}

export default connect(null, mapDispatchToProps)(Text);
