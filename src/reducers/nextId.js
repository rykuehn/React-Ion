import { ADD_CHILD, ADD_PAGE, SET_NEXTID } from '../actions/routes';

const initialState = 1;

export default function nextId(nextId = initialState, action) {
  switch (action.type) {
    case ADD_CHILD :
      return nextId + 1;
    case ADD_PAGE:
      return nextId + 1;
    case SET_NEXTID:
      return action.nextId;
    default:
      return nextId;
  }
}
