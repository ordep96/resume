import { combineReducers } from 'redux';
import color from './color';
import personalDetails from './personalDetails';

const reducers = combineReducers({
  color,
  personalDetails
})

export default reducers;