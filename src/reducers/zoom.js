import { SET_ZOOM } from '../actions/setZoom';

const initialState = 0.5;

const zoom = (zoom = initialState, action) => {
  switch (action.type) {
    case SET_ZOOM:
      return action.plusOrMinus === 'minus'
        ? zoom - 0.1
        : zoom + 0.1;
    default:
      return zoom;
  }
};

export default zoom;
