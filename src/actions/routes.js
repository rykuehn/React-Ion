export const UPDATE_PROPS = 'UPDATE_PROPS';
export const UPDATE_INFOS = 'UPDATE_INFOS';
export const ADD_CHILD = 'ADD_CHILD';
export const GET_VALUE = 'GET_VALUE';
export const REMOVE_CHILD = 'REMOVE_CHILD';
export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const ADD_PAGE = 'ADD_PAGE';


export function updateProps(key, value, id, actionType) {
  return {
    type: UPDATE_PROPS,
    key,
    value,
    id,
    actionType,
  };
}

export function updateInfos(key, value, id, actionType) {
  return {
    type: UPDATE_INFOS,
    key,
    value,
    id,
    actionType,
  };
}

export function addChild(componentType, props, id, nextId, pageSelected) {
  return {
    type: ADD_CHILD,
    componentType,
    props,
    id,
    nextId,
    pageSelected,
  };
}

export function addPage(name, nextId) {
  return {
    type: ADD_PAGE,
    name,
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
  return {
    type: UNDO,
  };
}

export function onRedo() {
  return {
    type: REDO,
  };
}
