import { combineReducers } from 'redux';
import color from './color';
import personalDetails from './personalDetails';
import modal from './modal';

const reducers = combineReducers({
  color,
  personalDetails,
  modal
})

export default reducers;