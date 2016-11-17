import { TOGGLE_TEXT_MODAL, CLOSE_TEXT_MODAL } from '../actions/toggleTextModal';

const initialState = { showing: false, prop: 'name', placeholder: 'enter component name' };

export default function textModal(textModal = initialState, action) {
  switch (action.type) {
    case TOGGLE_TEXT_MODAL:
      return {
        callback: action.callback,
        placeholder: action.placeholder,
        showing: true,
      };
    case CLOSE_TEXT_MODAL:
      return {
        callback: action.callback,
        placeholder: textModal.placeholder,
        showing: false,
      };
    default:
      return textModal;
  }
}
