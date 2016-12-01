export const TOGGLE_TEXT_MODAL = 'TOGGLE_TEXT_MODAL';
export const CLOSE_TEXT_MODAL = 'CLOSE_TEXT_MODAL';
export const TOGGLE_CAROUSEL_MODAL = 'TOGGLE_CAROUSEL_MODAL';

export function toggleTextModal(placeholder, action, callback) {
  return {
    type: TOGGLE_TEXT_MODAL,
    placeholder,
    action,
    callback,
  };
}

export function toggleCarouselModal(placeholder, placeholder2, action, callback) {
  console.log('IN TOGGLE CAROUSEL', placeholder, placeholder2, action, callback)
  return {
    type: TOGGLE_CAROUSEL_MODAL,
    placeholder,
    placeholder2,
    action,
    callback,
  };
}

export function closeTextModal() {
  return {
    type: CLOSE_TEXT_MODAL,
  };
}
