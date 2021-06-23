import { combineReducers } from 'redux';
import menu from './menu/reducer';
import settings from './settings/reducer';
import authUser from './auth/reducer';
import projectApp from './project/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  projectApp,
});

export default reducers;
