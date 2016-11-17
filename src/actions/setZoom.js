export const SET_ZOOM = 'SET_ZOOM';

export function setZoom(plusOrMinus) {
  return {
    type: SET_ZOOM,
    plusOrMinus,
  };
}
