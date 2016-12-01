import { TOGGLE_TEXT_MODAL, CLOSE_TEXT_MODAL, TOGGLE_CAROUSEL_MODAL } from '../actions/toggleTextModal';

const TEXT = 'text';
const LIST = 'List';

const initialState = { showing: false, prop: 'name', placeholder: 'enter component name' };

export default function textModal(textModal = initialState, action) {
  switch (action.type) {
    case TOGGLE_TEXT_MODAL:
      return {
        callback: action.callback,
        placeholder: action.placeholder,
        action: action.action,
        showing: true,
      };
    case TOGGLE_CAROUSEL_MODAL:
      return {
        callback: action.callback,
        placeholder: action.placeholder,
        placeholder2: action.placeholder2,
        action: action.action,
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
