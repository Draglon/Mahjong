import { combineReducers } from 'redux';
import { POPUP_TOGGLE } from '../../constants/ui.constants';

export const popupInitState = {
  title: '',
  message: '',
  btnClose: true,
  show: false,
};

// Popup
export const popupReducer = (state = popupInitState, action) => {
  switch (action.type) {
    case POPUP_TOGGLE:
      return {
        ...state,
        ...action.payload,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default combineReducers({
  popupToggle: popupReducer,
});
