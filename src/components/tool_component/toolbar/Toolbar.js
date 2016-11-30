import React, { PropTypes } from 'react';
import { formTreeData, handleProjectCreate, handleProjectSave, handleProjectDownload } from '../../../lib/api-handlers';
import { linkTo } from '../../../lib/helpers';
import { host } from '../../../lib/api-config';
import ToolbarButton from './ToolbarButton';
import '../../../scss/toolbar.scss';

const Toolbar = ({
  onUndo,
  canUndo,
  onRedo,
  canRedo,
  setZoom,
  routes,
  nextId,
  store,
}) => {
  const tree = JSON.stringify(formTreeData(routes, nextId));

  return (
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
      <ToolbarButton click={() => { handleProjectSave(store.projectName, routes, nextId); }}>
        <i className="fa fa-floppy-o" aria-hidden="true" />
      </ToolbarButton>
      <ToolbarButton click={() => { linkTo('dashboard'); }}>
        <i className="fa fa-th" aria-hidden="true" />
      </ToolbarButton>
      <form method="POST" action={`${host}/api/project/generate`}>
        <input type="hidden" id="myName" name="tree" value={tree} />
        <button className="toolbar-button" type="submit" ><i className="fa fa-download" aria-hidden="true" /></button>
      </form>
    </div>
  );
}
Toolbar.propTypes = {
  onUndo: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
  onRedo: PropTypes.func.isRequired,
  canRedo: PropTypes.bool.isRequired,
  setZoom: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
  nextId: PropTypes.number.isRequired,
};

export default Toolbar;
