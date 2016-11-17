import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Draggable from 'react-draggable';
import { mapComponents, getValue } from '../lib/helpers';
import { setSelected } from '../actions/selected';
import { updateProps, addChild, removeChild, onRedo, onUndo } from '../actions/routes';
import { setZoom } from '../actions/setZoom';
import { toggleControls } from '../actions/toggleControls';
import EditorControls from '../components/EditorControls';
import Toolbar from '../components/Toolbar';
import ZoomPercent from '../components/ZoomPercent';
import '../scss/toolbar.scss';
import '../scss/canvas.scss';
import '../scss/editor.scss';

class Editor extends Component {
  render() {
    const {
      routes,
      selected,
      zoom,
    } = this.props;
    console.log(this.props.store);
    return (
      <div className="editor">
        <Toolbar {...this.props} />
        <EditorControls {...this.props} />
        <ZoomPercent zoom={zoom} />
        <div style={{ transform: `scale(${zoom})` }}>
          <Draggable>
            <div className="canvas">
              {mapComponents(routes, selected)}
            </div>
          </Draggable>
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
    info: state.info,
    canUndo: state.routes.past.length > 0,
    canRedo: state.routes.future.length > 0,
    zoom: state.zoom,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUndo,
    onRedo,
    updateProps,
    addChild,
    removeChild,
    getValue,
    toggleControls,
    setZoom,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
