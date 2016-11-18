import _ from 'lodash';
import { UPDATE_PROPS, ADD_CHILD, REMOVE_CHILD, UNDO, REDO, ADD_PAGE } from '../actions/routes';
import store from '../store/store';

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
  pages: [0],
};

const routes = (routes = initialState, action) => {
  const { actionType, value, key, id, type } = action;
  const newTree = _.cloneDeep(routes);
  let parent;

const moveToPast = (tree, routes, actionType) => {
  if (actionType !== 'onChange') {
    tree.past.push(_.cloneDeep(routes.present[store.getState().pageSelected]));
    if (tree.past.length >= 5) {
      tree.past.shift();
    }
  }
};

  switch (type) {

    case UPDATE_PROPS:
    const currentPage = store.getState().pageSelected;

      if (actionType === 'onMouseUp') {
        if (_.isEqual(newTree.past[newTree.past.length - 1].pageSelected, newTree.present[currentPage])) {
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
        update(newTree.present[currentPage]);
      }
      return newTree;

    case ADD_CHILD:

      moveToPast(newTree, routes);
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
      }(newTree.present[store.getState().pageSelected], id));

      return newTree;

    case ADD_PAGE:
      moveToPast(newTree, routes);

      newTree.present.push({
        id: action.nextId,
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
        name: action.name,
      });

      newTree.pages.push(action.nextId);

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
      }(newTree.present[store.getState().pageSelected]));

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
