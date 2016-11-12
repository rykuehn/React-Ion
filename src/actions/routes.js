export const UPDATE_PROPS = 'UPDATE_PROPS';
export const ADD_CHILD = 'ADD_CHILD';
export const GET_VALUE = 'GET_VALUE';

export function updateProps(key, value, id) {
  return {
    type: UPDATE_PROPS,
    key,
    value,
    id,
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

export function getValue(key, id) {
  return {
    type: GET_VALUE,
    key,
    id,
  };
}
