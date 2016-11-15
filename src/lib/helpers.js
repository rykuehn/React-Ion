import React from 'react';
import _ from 'lodash';
import { setSelected } from '../actions/selected';
import Block from '../components/Block';
import Text from '../components/Text';

export function getValue(key, id, routes) {
  let value;

  (function search(tree) {
    if (tree.id === id) {
      value = tree.props[key];
    } else { tree.children.forEach(child => search(child)); }
  }(routes[0]));

  return value;
}

export function randomColor() {
  let color = '';

  while (color.length < 7) {
    color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
  }
  return color;
}

export function mapComponents(components, selected) {
  const mapped = [];

  _.each(components, (c) => {
    if (c.componentType === 'Block') {
      mapped.push(
        <Block
          setSelected={() => setSelected()}
          key={c.id}
          id={c.id}
          selected={selected}
          {...c.props}
        >
          {c.children ? mapComponents(c.children, selected) : null}
        </Block>,
      );
    } else if (c.componentType === 'Text') {
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
    }
  });

  return mapped;
}
