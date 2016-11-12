import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../actions/selected';

class Block extends React.Component {
  render() {
    const { color, height, id, setSelected, selected, flex } = this.props;

    const boxStyle = {
      flex,
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: `${height}%`,
      padding: '20px',
      margin: '20px',
      position: 'relative',
      flexWrap: 'wrap',
      cursor: 'pointer',
      boxSizing: 'border-box',
      boxShadow: selected === id ? 'inset 0 0 0 6px red' : null,
    };

    return (
      <div
        style={boxStyle}
        onClick={e => setSelected(e, id)}
      >
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelected }, dispatch);
}

export default connect(null, mapDispatchToProps)(Block);
