import { SET_PAGE_SELECTED } from '../actions/selected';

const initialState = 0;

const pageSelected = (pageSelected = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_SELECTED:
      return action.id;
    default:
      return pageSelected;
  }
};

export default pageSelected;
