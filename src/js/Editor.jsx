import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapComponents, getValue } from '../lib/helpers';
import { setSelected } from '../actions/selected';
import { updateProps, addChild, removeChild } from '../actions/routes';
import { toggleControls } from '../actions/toggleControls';
import EditorControls from '../components/EditorControls';

import { ActionCreators as UndoActionCreators } from 'redux-undo';
import '../scss/toolbar.scss';

class Editor extends Component {
  render() {
    console.log('*****', this.props.store)
    const { canUndo, canRedo, routes, selected, toggleControls } = this.props;
    return (
      <div>
        <div className="toolbar">
          <button onClick={toggleControls}>
            <i className="fa fa-sliders" aria-hidden="true" />
          </button>

          <button onClick={this.props.onUndo} disabled={!canUndo}>
            <i className="fa fa-undo" aria-hidden="true"></i>
          </button>

          <button onClick={this.props.onRedo} disabled={!canRedo}>
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </button>
        </div>
        <EditorControls {...this.props} />
        <div style={{ minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ marginTop: 200, position: 'relative', zIndex: 0 }}>
            {mapComponents(routes, selected)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state.routes,
    routes: state.routes.present,
    nextId: state.nextId,
    selected: state.selected,
    controlsShowing: state.controlsShowing,
    canUndo: state.routes.past.length > 0,
    canRedo: state.routes.future.length > 0,
    info: state.info,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ UndoActionCreators, updateProps, addChild, removeChild, getValue, toggleControls }, dispatch);
// }

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
  updateProps,
  addChild,
  removeChild,
  getValue,
  toggleControls,
});


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
