import React, { PropTypes } from 'react';
import { handleProjectCreate, handleProjectSave, handleProjectDownload } from '../../../lib/api-handlers';
import ToolbarButton from './ToolbarButton';
import '../../../scss/toolbar.scss';

const Toolbar = ({
  onUndo,
  canUndo,
  onRedo,
  canRedo,
  setZoom,
  routes,
}) => (
  <div className="toolbar">
    <ToolbarButton click={canUndo ? onUndo : null}>
      <i className="fa fa-undo" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={canRedo ? onRedo : null}>
      <i className="fa fa-repeat" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => setZoom('plus')}>
      <i className="fa fa-search-plus" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => setZoom('minus')}>
      <i className="fa fa-search-minus" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { handleProjectCreate(1, 'notImportant', routes); }}>
      <i className="fa fa-plus-circle" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { handleProjectSave('notImportant', routes); }}>
      <i className="fa fa-floppy-o" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { handleProjectDownload(routes); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
  </div>
);

Toolbar.propTypes = {
  onUndo: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
  onRedo: PropTypes.func.isRequired,
  canRedo: PropTypes.bool.isRequired,
  setZoom: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
};

export default Toolbar;
