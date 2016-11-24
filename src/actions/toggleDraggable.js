export const TOGGLE_DRAGGABLE = 'TOGGLE_DRAGGABLE';
export const CLOSE_DRAGGABLE = 'CLOSE_DRAGGABLE';

export function toggleDraggableModal() {
  return {
    type: TOGGLE_DRAGGABLE,
  };
}

export function closeDraggableModal() {
  return {
    type: CLOSE_DRAGGABLE,
  };
}
