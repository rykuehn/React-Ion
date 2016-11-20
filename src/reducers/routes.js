import _ from 'lodash';
import { UPDATE_PROPS, UPDATE_INFOS, ADD_CHILD, REMOVE_CHILD, UNDO, REDO, ADD_PAGE } from '../actions/routes';
import store from '../store/store';

const initialState = {
  projectPages: [{
    past: [],
    present: {
      id: 0,
      props: {
        backgroundColor: 'rgba(255,255,255,.1)',
        flex: 1,
        height: [1080, 'px'],
        width: null,
        flexDirection: 'column',
        margin: '0px',
      },
      children: [],
      componentType: 'Block',
      parent: null,
      name: 'Index',
    },
    future: [],
  }],
  projectPageIds: [0],
  totalComponents: 1,
};

const routes = (routes = initialState, action) => {
  const { actionType, value, key, id, type, pageSelected, name, nextId } = action;
  const newTree = _.cloneDeep(routes);
  const currentPage = store ? store.getState().pageSelected : 0;
  let parent;


  const moveToPast = (tree, routes, actionType) => {
    if (actionType !== 'onChange') {
      tree.past.push(_.cloneDeep(routes.projectPages[currentPage].present));
      if (tree.past.length >= 5) {
        tree.past.shift();
      }
    }
  };
  
  switch (type) {

    // case UPDATE_PROPS:

    //   if (actionType === 'onMouseUp') {
    //     if (_.isEqual(newTree.past[newTree.past.length - 1].pageSelected, newTree.present[currentPage])) {
    //       newTree.past.pop();
    //     }
    //   } else {
    //     moveToPast(newTree, routes, actionType);
    //     const update = (tree) => {
    //       if (tree.id === id) {
    //         tree.props[key] = value;
    //       } else {
    //         tree.children.forEach(child => update(child));
    //       }
    //     };
    //     update(newTree.present[currentPage]);
    //   }
    //   return newTree;

    // case UPDATE_INFOS:

    //   moveToPast(newTree, routes);
    //   const updateInfo = (tree) => {
    //     if (tree.id === id) {
    //       tree[key] = value;
    //     } else {
    //       tree.children.forEach(child => updateInfo(child));
    //     }
    //   };
    //   updateInfo(newTree.present[currentPage]);

    //   return newTree;

    case ADD_CHILD:
      moveToPast(newTree.projectPages[currentPage], routes);

      function add(tree, id) {
        console.log('ADD', id)
        if (tree.id === id) {
          tree.children.push({
            id: action.nextId,
            props: action.props,
            children: [],
            componentType: action.componentType,
            parent: tree,
            name: action.name,
          });
        } else { tree.present.children.forEach(child => add(child, id)); }
      }
      add(newTree.projectPages[currentPage].present, id);

      if (action.componentType !== 'Text') {
        newTree.totalComponents += 1;
      }

      return newTree;

    // case ADD_PAGE:
    //   //moveToPast(newTree, routes);

    //   newTree.present.push({
    //     past: [],
    //     present: {
    //       id: 0,
    //       props: {
    //         backgroundColor: 'rgba(255,255,255,.1)',
    //         flex: 1,
    //         height: [1080, 'px'],
    //         width: null,
    //         flexDirection: 'column',
    //         margin: '0px',
    //       },
    //       children: [],
    //       componentType: 'Block',
    //       parent: null,
    //       name: 'Index',
    //     },
    //     future: [],
    //   });

    //   if (action.componentType !== 'Text') {
    //     newTree.totalComponents += 1;
    //   }

    //   newTree.pages.push(action.nextId);

    //   return newTree;

    // case REMOVE_CHILD:
    //   //moveToPast(newTree, routes, true);
    //   (function search(tree) {
    //     if (tree.id === id) {
    //       parent.children = parent.children.filter(t => t.id !== id);
    //     } else if (tree.children.length) {
    //       parent = tree;
    //       tree.children.forEach(child => search(child));
    //     }
    //   }(newTree.projectPages[store.getState().pageSelected].present[0]));

    //   if (action.componentType !== 'Text') {
    //     newTree.totalComponents -= 1;
    //   }

    //   return newTree;

    case UNDO:
      newTree.projectPages[currentPage].future.push(_.cloneDeep(newTree.projectPages[currentPage].present));
      newTree.projectPages[currentPage].present = (_.cloneDeep(newTree.projectPages[currentPage].past.pop()));
      console.log(newTree.projectPages[currentPage]);
      return newTree;

    case REDO:

      newTree.projectPages[currentPage].past.push(_.cloneDeep(newTree.present));
      newTree.present = (_.cloneDeep(newTree.future.pop()));
      console.log(newTree.projectPages[currentPage]);
      return newTree;

    default:
      return routes;
  }
};


export default routes;
