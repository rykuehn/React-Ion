import _ from 'lodash';
import { download, createProject, updateProject } from './api-methods';

const formTreeData = (routes) => {
  const newRoutes = _.cloneDeep(routes);
  const newTree = [];
  let totalComponents = 0;

  const countComponents = (route) => {
    route.parent = null;
    if (route.componentType !== 'Text' && route.componentType !== 'List') { totalComponents += 1; }
    route.children.forEach(child => countComponents(child));
  };

  newRoutes.forEach((route) => {
    countComponents(route.present);
    newTree.push(route.present);
  });
  const treeData = {
    total: totalComponents,
    router: 1,
    routes: newTree,
  };

  return treeData;
};

export function handleProjectDownload(routes) {
  const treeData = formTreeData(routes);
  download(treeData);
}

export function handleProjectCreate(permissionId, name, routes) {
  const projectProps = {
    name,
    project_tree: JSON.stringify(formTreeData(routes)),
  };
  createProject(permissionId, projectProps)
    .then((project) => {
      if (project.data) {
        console.log('Project Created');
      } else {
        console.log('Error creating project');
      }
    }).catch(err => console.log(err));
}

export function handleProjectSave(name, routes) {
  const projectId = window.location.href.match(/\/[^/]+$/)[0].slice(1);
  const projectProps = {
    name,
    project_tree: JSON.stringify(formTreeData(routes)),
  };
  updateProject(projectId, projectProps)
    .then((project) => {
      if (project.data) {
        console.log('Project saved');
      } else {
        console.log('Error saving project');
      }
    }).catch(err => console.log(err));
}
