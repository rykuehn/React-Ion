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
  const newTree = _.cloneDeep(routes);
  let parent;

const moveToPast = (tree, routes) => {
  tree.past.push(_.cloneDeep(routes.present[0]));
};

  switch (action.type) {
    
    case UPDATE_PROPS:
      moveToPast(newTree, routes);
      function update(tree) {
        if (tree.id === action.id) {
          tree.props[action.key] = action.value;
        } else {
          tree.children.forEach(child => update(child));
        }
      }
      update(newTree.present[0]);
      return newTree;

    case ADD_CHILD:
      moveToPast(newTree, routes);
      (function add(tree, id) {
        if (tree.id === action.id) {
          tree.children.push({
            id: action.nextId,
            props: action.props,
            children: [],
            componentType: action.componentType,
            parent: tree,
          });
        } else { tree.children.forEach(child => add(child, id)); }
      }(newTree.present[0], action.id));

      return newTree;

    case REMOVE_CHILD:
      moveToPast(newTree, routes);
      (function search(tree) {
        if (tree.id === action.id) {
          parent.children = parent.children.filter(t => t.id !== action.id);
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
