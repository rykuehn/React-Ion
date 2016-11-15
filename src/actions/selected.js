export const SET_SELECTED = 'SET_SELECTED';

export function setSelected(e, id) {
  e.preventDefault();
  e.stopPropagation();
  return {
    type: SET_SELECTED,
    id,
  };
}
