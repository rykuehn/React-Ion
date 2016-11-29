import React, { PropTypes } from 'react';
import Draggable from 'react-draggable';
import { mapComponents, rebuildTree } from '../../lib/helpers';
import { getProject } from '../../lib/api-methods';
import TextInputModal from '../../containers/tool_component/text/TextInputModal';
import TextListInputModal from '../../containers/tool_component/text/TextListInputModal';
import PreviewModal from '../../containers/tool_component/modals/PreviewModal';
import Toolbar from '../../containers/tool_component/toolbar/Toolbar';
import EditorControls from '../../containers/tool_component/toolbar/EditorControls';
import ZoomPercent from '../../containers/tool_component/inspector/ZoomPercent';
import CurrentComponent from '../../containers/tool_component/inspector/CurrentComponent';
import LinkDisplay from '../../containers/tool_component/inspector/LinkDisplay';
import PreviewDisplay from '../../containers/tool_component/inspector/PreviewDisplay';
import AddComponents from '../../containers/tool_component/toolbar/AddComponents';
import Shortcut from '../../containers/tool_component/toolbar/Shortcuts';
import Inspector from '../../containers/tool_component/toolbar/Inspector';

import '../../scss/toolbar.scss';
import '../../scss/canvas.scss';
import '../../scss/editor.scss';
import '../../scss/index.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.deconstructTreeData = this.deconstructTreeData.bind(this);
  }

  componentWillMount() {
    let projectId = window.location.href.match(/\/[^/]*$/)[0].slice(1);
    if (projectId !== 'editor' && projectId !== '') {
      projectId = +projectId;
      getProject(projectId).then((project) => {
        if (project.data) {
          this.deconstructTreeData(project.data.project_tree);
        }
      }).catch(err => console.error(err));
    }
  }

  deconstructTreeData(treeData) {
    const treeObj = JSON.parse(treeData);
    const nextId = treeObj.nextId;
    const totalComponents = treeObj.total;
    const route = {
      appPages: [],
      pages: [0],
      totalComponents,
    };
    route.appPages = treeObj.routes
      .map(presentTree => rebuildTree(presentTree))
      .map(rebuiltTrees => ({
        past: [],
        present: rebuiltTrees,
        future: [],
      }));
    this.props.setNextId(nextId);
    this.props.updateRoutes(route);
  }

  render() {
    const { routes, selected, pageSelected, zoom } = this.props;
    const pageRoute = [routes[pageSelected].present];
    return (
      <div className="editor">
        <AddComponents />
        <TextInputModal />
        <TextListInputModal />
        <PreviewModal />
        <Toolbar />
        <Inspector />
        <EditorControls />
        <PreviewDisplay />
        <ZoomPercent />
        <CurrentComponent />
        <LinkDisplay />
        <Shortcut />
        <div
          className="canvas-wrapper"
          style={{
            transition: 'all .3s',
            transform: `scale(${zoom})`,
          }}
        >
          <Draggable>
            <div className="canvas">
              {mapComponents(pageRoute, selected)}
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  routes: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  pageSelected: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Editor;
// export default store;
