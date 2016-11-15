import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapComponents, getValue } from '../lib/helpers';
import { setSelected } from '../actions/selected';
import { updateProps, addChild, removeChild } from '../actions/routes';
import { toggleControls } from '../actions/toggleControls';
import EditorControls from '../components/EditorControls';
import '../scss/toolbar.scss';

class Editor extends Component {
  render() {
    const { routes, selected, toggleControls } = this.props;

    return (
      <div>
        <div className="toolbar">
          <button onClick={toggleControls}>
            <i className="fa fa-sliders" aria-hidden="true" />
          </button>
        </div>
        <EditorControls {...this.props} />
        <div style={{ minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ marginTop: 220, position: 'relative', zIndex: 0 }}>
            {mapComponents(routes, selected)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes,
    nextId: state.nextId,
    selected: state.selected,
    controlsShowing: state.controlsShowing,
    info: state.info,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateProps,
    addChild,
    removeChild,
    getValue,
    toggleControls,
    setSelected,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
