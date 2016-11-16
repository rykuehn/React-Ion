import { SET_SELECTED } from '../actions/selected';
import store from '../js/App';

const initialState = {
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
};

const info = (info = initialState, action) => {
  let information = Object.assign({}, info);

  switch (action.type) {
    case SET_SELECTED:
      (function getInfo(tree) {
        if (tree.id === action.id) {
          information = tree;
        } else {
          tree.children.forEach(child => getInfo(child));
        }
      }(store.getState().routes[0]));

      return information;

    default:
      return info;
  }
};

export default info;
