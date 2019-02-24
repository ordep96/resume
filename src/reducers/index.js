import { combineReducers } from 'redux';
import color from './color';
import personalDetails from './personalDetails';
import modal from './modal';
import imgProfile from './imgProfile';
import profile from './profile';

const reducers = combineReducers({
  color,
  personalDetails,
  imgProfile,
  modal,
  profile,
})

export default reducers;