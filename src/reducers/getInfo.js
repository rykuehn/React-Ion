import { SET_SELECTED } from '../actions/selected';
import store from '../js/App';

const initialState = {};

const info = (info = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED:
      let information = Object.assign({}, info);
      (function getInfo(tree) {
        if (tree.id === action.id) {
          information = tree;
        } else {
          tree.children.forEach(child => getInfo(child));
        }
      }(store.getState().routes[0]));

      console.log('info', information);
      return information;
    default:
      return info;
  }
};

export default info;
