import _ from 'lodash';
import { UPDATE_PROPS, ADD_CHILD, REMOVE_CHILD, UNDO, REDO } from '../actions/routes';

const initialState = {
  past: [],
  present: [{
    id: 0,
    props: {
      backgroundColor: 'rgba(255,255,255,.1)',
      flex: 1,
      height: [1080, 'px'],
      width: null,
      flexDirection: 'column',
    },
    children: [],
    componentType: 'Block',
    parent: null,
    name: 'Index',
  }],
  future: [],
};

const routes = (routes = initialState, action) => {
  const { actionType, value, key, id, type } = action;
  const newTree = _.cloneDeep(routes);
  let parent;

const moveToPast = (tree, routes, actionType) => {
  if (actionType !== 'onChange') {
    tree.past.push(_.cloneDeep(routes.present[0]));
    if (tree.past.length >= 5) {
      tree.past.shift();
    }
  }
};

  switch (type) {

    case UPDATE_PROPS:
      if (actionType === 'onMouseUp') {
        if (_.isEqual(newTree.past[newTree.past.length - 1], newTree.present[0])) {
          newTree.past.pop();
        }
      } else {
        moveToPast(newTree, routes, actionType);
        function update(tree) {
          if (tree.id === id) {
            tree.props[key] = value;
          } else {
            tree.children.forEach(child => update(child));
          }
        }
        update(newTree.present[0]);
      }
      return newTree;

    case ADD_CHILD:

      moveToPast(newTree, routes, true);
      (function add(tree, id) {
        if (tree.id === id) {
          tree.children.push({
            id: action.nextId,
            props: action.props,
            children: [],
            componentType: action.componentType,
            parent: tree,
          });
        } else { tree.children.forEach(child => add(child, id)); }
      }(newTree.present[0], id));

      return newTree;

    case REMOVE_CHILD:

      moveToPast(newTree, routes, true);
      (function search(tree) {
        if (tree.id === id) {
          parent.children = parent.children.filter(t => t.id !== id);
        } else if (tree.children.length) {
          parent = tree;
          tree.children.forEach(child => search(child));
        }
      }(newTree.present[0]));

      return newTree;

    case UNDO:

      newTree.future.push(_.cloneDeep(newTree.present.pop()));
      newTree.present.push(_.cloneDeep(newTree.past.pop()));
      return newTree;

    case REDO:

      newTree.past.push(_.cloneDeep(newTree.present.pop()));
      newTree.present.push(_.cloneDeep(newTree.future.pop()));
      return newTree;

    default:
      return routes;
  }
};


export default routes;
