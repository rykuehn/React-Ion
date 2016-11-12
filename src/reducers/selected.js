import { SET_SELECTED } from '../actions/selected';

const initialState = 0;

const selected = (selected = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return action.id;
    default:
      return selected;
  }
};

export default selected;
