import { combineReducers } from 'redux';
import {
  AVAILABLE_CARDS,
  COLUMNS_CARDS,
  CURRENT_AREA,
  SET_FIRST_CARD,
  BEST_RESULTS,
  NEW_GAME,
} from '../../constants/mahjong.constants';

// Mahjong - InitState
export const mahjongInitState = {
  availableCards: 0,
  columnsCards: 0,
  currentArea: [],
  firstCard: {
    value: null,
    index: null,
  },
  bestResult: 0,
};

// Mahjong - reducer
export const mahjongReducer = (state = mahjongInitState, action) => {
  switch (action.type) {
    case CURRENT_AREA:
      return {
        ...state,
        currentArea: action.payload,
      };
    case AVAILABLE_CARDS:
      return {
        ...state,
        availableCards: action.payload,
      };
    case COLUMNS_CARDS:
      return {
        ...state,
        columnsCards: action.payload,
      };
    case SET_FIRST_CARD:
      return {
        ...state,
        firstCard: action.payload,
      };
    case BEST_RESULTS:
      return {
        ...state,
        bestResult: action.payload,
      };
    case NEW_GAME:
      return mahjongInitState;
    default:
      return state;
  }
};

export default combineReducers({
  mahjong: mahjongReducer,
});
