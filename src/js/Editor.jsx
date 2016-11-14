import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapComponents, getValue } from '../lib/helpers';
import { updateProps, addChild } from '../actions/routes';
import EditorControls from '../components/EditorControls';

class Editor extends Component {
  render() {
    const { routes, selected } = this.props;

    return (
      <div style={{ minHeight: '100vh', flexDirection: 'column' }}>
        <EditorControls {...this.props} />
        {mapComponents(routes, selected)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes,
    nextId: state.nextId,
    selected: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateProps, addChild, getValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
