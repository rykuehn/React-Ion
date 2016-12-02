import { TOGGLE_DRAGGABLE, CLOSE_DRAGGABLE } from '../actions/toggleDraggable';

const initialState = { showing: false };

export default function draggable(draggable = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAGGABLE:
      return {
        showing: true,
      };
    case CLOSE_DRAGGABLE:
      return {
        showing: false,
      };
    default:
      return draggable;
  }
}
