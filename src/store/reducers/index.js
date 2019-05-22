import { combineReducers } from 'redux';

import ui from './ui';
import mahjong from './mahjong';

export default combineReducers({
  ui,
  mahjong,
});
