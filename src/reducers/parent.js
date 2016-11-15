import { ADD_CHILD } from '../actions/routes';
import store from '../js/App';

const initialState = {};

const parent = (parent = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD:
      const parentState = store.getState();
      const parentInfo = parentState;
      //console.log(parentInfo);
    default:
      return parent;
  }
};

export default parent;
