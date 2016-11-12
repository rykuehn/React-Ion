import { ADD_CHILD } from '../actions/routes';

const initialState = 1;

export default function nextId(nextId = initialState, action) {
  switch (action.type) {
    case ADD_CHILD :
      return nextId + 1;
    default:
      return nextId;
  }
}
