import { TOGGLE_CONTROLS } from '../actions/toggleControls';

const controlsShowing = (controlsShowing = false, action) => {
  console.log(action)
  switch (action.type) {
    case 'TOGGLE_CONTROLS':
      return !controlsShowing;
    default:
      return controlsShowing;
  }
};

export default controlsShowing;
