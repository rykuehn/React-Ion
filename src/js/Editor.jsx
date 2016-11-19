import React from 'react';
import Draggable from 'react-draggable';
import { mapComponents } from '../lib/helpers';
import TextInputModal from '../containers/TextInputModal';
import Toolbar from '../containers/Toolbar';
import EditorControls from '../containers/EditorControls';
import ZoomPercent from '../containers/ZoomPercent';
import CurrentComponent from '../containers/CurrentComponent';
import '../scss/toolbar.scss';
import '../scss/canvas.scss';
import '../scss/editor.scss';

const Editor = ({ routes, selected, pageSelected, zoom }) => {
  const pageRoute = [routes[pageSelected]];
  return (
    <div className="editor">
      <TextInputModal />
      <Toolbar />
      <EditorControls />
      <ZoomPercent />
      <CurrentComponent />
      <div style={{ transform: `scale(${zoom})` }}>
        <Draggable>
          <div className="canvas">
            {mapComponents(pageRoute, selected)}
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Editor;
