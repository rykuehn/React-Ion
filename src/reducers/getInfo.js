import _ from 'lodash';
import { SET_SELECTED } from '../actions/selected';
import { UPDATE_PROPS, UPDATE_INFOS } from '../actions/routes';
import store from '../store/store';

const initialState = {
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
};

const info = (info = initialState, action) => {
  let information = _.cloneDeep(info);

  function getInfo(tree) {
    if (tree.id === action.id) {
      information = tree;
    } else {
      tree.children.forEach(child => getInfo(child));
    }
  }

  switch (action.type) {
    case SET_SELECTED:
      getInfo(store.getState().routes.appPages[store.getState().pageSelected].present);
      return information;

    case UPDATE_PROPS:
      getInfo(store.getState().routes.appPages[store.getState().pageSelected].present);
      return information;

    case UPDATE_INFOS:
      getInfo(store.getState().routes.appPages[store.getState().pageSelected].present);
      return information;

    default:
      return info;
  }
};

export default info;
