import { ADD_CHILD } from '../actions/routes';
import { ADD_PAGE } from '../actions/routes';

const initialState = 1;

export default function nextId(nextId = initialState, action) {
  switch (action.type) {
    case ADD_CHILD :
    console.log('next ID', nextId)
      return nextId + 1;
    case ADD_PAGE:
      return nextId + 1;
    default:
      return nextId;
  }
}
