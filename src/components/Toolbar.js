import React from 'react';
import _ from 'lodash';

import '../scss/toolbar.scss';
import { download } from '../lib/api-methods';

const f = (routes, totalComponents) => {
  const newRoutes = _.cloneDeep(routes);
  const removeParents = (route) => {
    route.parent = null;
    // if (route.props.name) {
    //   route.name = route.props.name;
    // }
    for (let i = 0; i < route.children.length; i++) {
      removeParents(route.children[i]);
    }
  };
  for (let i = 0; i < newRoutes.length; i++) {
    removeParents(newRoutes[i]);
  }
  const treeData = {
    total: totalComponents,
    router: 1,
    routes: newRoutes,
  };
  console.log('routes', newRoutes);
  download(treeData);
};

const Toolbar = ({
  onUndo,
  canUndo,
  onRedo,
  canRedo,
  setZoom,
  routes,
  store,
}) => (
  <div className="toolbar">
    <button onClick={canUndo ? onUndo : null}>
      <i className="fa fa-undo" aria-hidden="true" />
    </button>
    <button onClick={canRedo ? onRedo : null}>
      <i className="fa fa-repeat" aria-hidden="true" />
    </button>
    <button onClick={() => setZoom('plus')}>
      <i className="fa fa-search-plus" aria-hidden="true" />
    </button>
    <button onClick={() => setZoom('minus')}>
      <i className="fa fa-search-minus" aria-hidden="true" />
    </button>
    <button onClick={() => {}}>
      <i className="fa fa-save" aria-hidden="true" />
    </button>
    <button onClick={() => { f(routes, store.totalComponents); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </button>
  </div>
);

export default Toolbar;
