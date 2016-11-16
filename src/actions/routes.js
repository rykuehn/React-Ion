export const UPDATE_PROPS = 'UPDATE_PROPS';
export const ADD_CHILD = 'ADD_CHILD';
export const GET_VALUE = 'GET_VALUE';
export const REMOVE_CHILD = 'REMOVE_CHILD';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export function updateProps(key, value, id, complete) {
  return {
    type: UPDATE_PROPS,
    key,
    value,
    id,
    complete,
  };
}

export function addChild(componentType, props, id, nextId) {
  return {
    type: ADD_CHILD,
    componentType,
    props,
    id,
    nextId,
  };
}

export function removeChild(id) {
  return {
    type: REMOVE_CHILD,
    id,
  };
}

export function getValue(key, id) {
  return {
    type: GET_VALUE,
    key,
    id,
  };
}

export function onUndo() {
  console.log('undo clicked')
  return {
    type: UNDO,
  };
}

export function onRedo() {
  console.log('redo clicked')
  return {
    type: REDO,
  };
}