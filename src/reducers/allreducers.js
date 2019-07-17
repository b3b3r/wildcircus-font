import { combineReducers } from 'redux';
import user from './user';
import circus from './circus';
import themes from './theme';
import admin from './admin';

const allReducers = combineReducers({
  user,
  circus,
  themes,
  admin,
})

export default allReducers;
