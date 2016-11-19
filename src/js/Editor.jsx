import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Draggable from 'react-draggable';
import { mapComponents, getValue } from '../lib/helpers';
import { setSelected, setPageSelected, setSelector } from '../actions/selected';
import { updateProps, updateInfos, addChild, removeChild, onRedo, onUndo, addPage } from '../actions/routes';
import { setZoom } from '../actions/setZoom';
import { toggleControls } from '../actions/toggleControls';
import { toggleTextModal, closeTextModal } from '../actions/toggleTextModal';
import EditorControls from '../components/EditorControls';
import Toolbar from '../components/Toolbar';
import ZoomPercent from '../components/ZoomPercent';
import TextInputModal from '../components/TextInputModal';
import CurrentComponent from '../components/CurrentComponent';
import '../scss/toolbar.scss';
import '../scss/canvas.scss';
import '../scss/editor.scss';

class Editor extends Component {
  render() {
    const {
      routes,
      selected,
      pageSelected,
      zoom,
      info,
    } = this.props;

    //const pageRoute = [routes[pageSelected]];
    console.log('PAGE ROUTE', info)
    // console.log('PAGE ROUTE STORE', this.props.store)
    return (
      <div className="editor">
        <TextInputModal {...this.props} />
        <Toolbar {...this.props} />
        <EditorControls {...this.props} />
        <ZoomPercent zoom={zoom} />
        <CurrentComponent name={info.name} />
        <div style={{ transform: `scale(${zoom})` }}>
          <Draggable>
            <div className="canvas">
              {mapComponents(this.props.routes, selected)}
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state.routes.projectPages[0],
    routes: state.routes.projectPages[0],
    nextId: state.nextId,
    selected: state.selected,
    pageSelected: state.pageSelected,
    controlsShowing: state.controlsShowing,
    info: state.info.present,
    canUndo: state.routes.projectPages[0].past.length > 0,
    canRedo: state.routes.projectPages[0].future.length > 0,
    zoom: state.zoom,
    textModal: state.textModal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUndo,
    onRedo,
    updateProps,
    updateInfos,
    addChild,
    removeChild,
    getValue,
    toggleControls,
    setZoom,
    toggleTextModal,
    closeTextModal,
    addPage,
    setPageSelected,
    setSelected,
    setSelector,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
