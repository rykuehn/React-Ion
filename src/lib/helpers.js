import React from 'react';
import _ from 'lodash';
import { setSelected } from '../actions/selected';
import Block from '../containers/user_component/Block';
import Text from '../containers/user_component/Text';
import Menu from '../containers/user_component/Menu';
import Image from '../containers/user_component/Image';
import List from '../containers/user_component/List';
import Radio from '../containers/user_component/Radio';
import DropDown from '../containers/user_component/DropDown';
import { download, createProject, updateProject } from './api-methods';

const BLOCK_COMPONENT = 'Block';
const TEXT_COMPONENT = 'Text';
const MENU_COMPONENT = 'Menu';
const IMAGE_COMPONENT = 'Image';
const LIST_COMPONENT = 'List';
const RADIO_COMPONENT = 'Radio';
const DROPDOWN_COMPONENT =  'DropDown';

export function getValue(key, id, routes) {
  let value;

  (function search(tree) {
    if (tree.id === id) {
      value = tree.props[key];
    } else { tree.children.forEach(child => search(child)); }
  }(routes[0]));

  return value;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function makeComponentName(string) {
  return string.split(' ').map(word => capitalizeFirstLetter(word)).join('');
}

export function mapComponents(components, selected) {
  const mapped = [];

  _.each(components, (c) => {
    switch (c.componentType) {
      case BLOCK_COMPONENT:
        mapped.push(
          <Block
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            aUrl={c.aUrl}
            tag={c.aUrl ? 'a' : 'div'}
            {...c.props}
          >
            {c.children ? mapComponents(c.children, selected) : null}
          </Block>,
        );
        break;
      case TEXT_COMPONENT:
        mapped.push(
          <Text
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          >
            {c.children ? mapComponents(c.children, selected) : null}
          </Text>,
        );
        break;
      case MENU_COMPONENT:
        mapped.push(
          <Menu
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          />,
        );
        break;
      case IMAGE_COMPONENT:
        mapped.push(
          <Image
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          />,
        );
        break;
      case LIST_COMPONENT:
        mapped.push(
          <List
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          >
            {c.children ? mapComponents(c.children, selected) : null}
          </List>,
        );
        break;
      case RADIO_COMPONENT:
        mapped.push(
          <Radio
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          >
            {c.children ? mapComponents(c.children, selected) : null}
          </Radio>,
        );
        break;
      case DROPDOWN_COMPONENT:
        mapped.push(
          <DropDown
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          >
            {c.children ? mapComponents(c.children, selected) : null}
          </DropDown>,
        );
        break;
      default:
        break;
    }
  });

  return mapped;
}

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
      console.log(project);
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
