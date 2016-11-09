import { SHOW_USER, HIDE_USER } from '../actions/header';


const initialState = {
  username: "Andrew",
  visibility: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SHOW_USER:
      return state.visibility = true;
    case HIDE_USER:
      return state.visibility = false;
    default:
      return state;
  }
}