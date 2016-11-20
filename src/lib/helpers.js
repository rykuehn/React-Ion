import React from 'react';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';
import { setSelected } from '../actions/selected';
import Block from '../components/Block';
import Text from '../components/Text';
import Menu from '../components/Menu';

const BLOCK_COMPONENT = 'Block';
const TEXT_COMPONENT = 'Text';
const MENU_COMPONENT = 'Menu';

export function getValue(key, id, routes) {
  let value;

  (function search(tree) {
    if (tree.id === id) {
      value = tree.props[key];
    } else { tree.children.forEach(child => search(child)); }
  }(routes));

  return value;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function makeComponentName(string) {
  return string.split(' ').map(word => capitalizeFirstLetter(word)).join('');
}

export function mapComponents(c, selected) {
  console.log('MAP COMPONENTS', c , selected)
  const mapped = [];

  switch (c.componentType) {
    case BLOCK_COMPONENT:
    // console.log('in BLOCK', c.children)
      mapped.push(
        <Block
          setSelected={() => setSelected()}
          key={c.id}
          id={c.id}
          selected={selected}
          {...c.props}
        >
          {c.children ? _.each(c.children, (child) => { mapComponents(child, selected); }) : null }
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
          {c.children ? _.each(c.children, (child) => { mapComponents(child, selected); }) : null}
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
    default:
      break;
  }

  return mapped;
}
