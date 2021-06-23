import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import projectSagas from './project/saga';
import menuSagas from './menu/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    projectSagas(),
    menuSagas()
  ]);
}
