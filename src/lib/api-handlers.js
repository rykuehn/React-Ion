import _ from 'lodash';
import {
  download,
  createProject,
  updateProject,
  removeProject,
} from './api-methods';

const formTreeData = (routes, nextId) => {
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
    nextId,
  };

  console.log('treeData', treeData);
  return treeData;
};

export function handleProjectDownload(routes, nextId) {
  const treeData = formTreeData(routes, nextId);
  download(treeData);
}

export function handleProjectCreate(permissionId, name, routes, nextId, cb) {
  const projectProps = {
    name,
    project_tree: JSON.stringify(formTreeData(routes, nextId)),
  };
  createProject(permissionId, projectProps)
    .then((project) => {
      if (project.data) {
        console.log('Project Created');
        cb();
      } else {
        console.log('Error creating project');
      }
    }).catch(err => console.log(err));
}

export function handleProjectSave(name, routes, nextId) {
  const projectId = +window.location.href.match(/\/[^/]+$/)[0].slice(1);
  const projectProps = {
    name,
    project_tree: JSON.stringify(formTreeData(routes, nextId)),
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

export function handleProjectRemove(projectId, cb) {
  removeProject(projectId)
    .then((project) => {
      if (project.data) {
        console.log('Project deleted');
        cb();
      } else {
        console.log('Error deleting project');
      }
    })
    .catch(err => err);
}
