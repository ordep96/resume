import { combineReducers } from 'redux';
import color from './color';
import personalDetails from './personalDetails';
import modal from './modal';
import imgProfile from './imgProfile';

const reducers = combineReducers({
  color,
  personalDetails,
  imgProfile,
  modal,
})

export default reducers;