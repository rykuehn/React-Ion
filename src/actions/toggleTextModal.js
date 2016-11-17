export const TOGGLE_TEXT_MODAL = 'TOGGLE_TEXT_MODAL';
export const CLOSE_TEXT_MODAL = 'CLOSE_TEXT_MODAL';

export function toggleTextModal(placeholder, callback) {
  return {
    type: TOGGLE_TEXT_MODAL,
    placeholder,
    callback,
  };
}

export function closeTextModal() {
  return {
    type: CLOSE_TEXT_MODAL,
  };
}
