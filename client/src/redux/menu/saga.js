import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { setAuthToken } from '../../helpers/Utils';
import axios from 'axios';
import {
    MENU_GET_LATEST_PROJECTS
} from '../actions';

import {
    setProjectMenuItemsSuccess,
    setProjectMenuItemsError,
} from './actions';

export function* watchsetProjectMenuItems() {
  yield takeEvery(MENU_GET_LATEST_PROJECTS, setProjectMenuItemsMenu);
}

const setProjectMenuItemsAsync = async (userId, role) =>
  await axios
  .post(`/api/projects/get-latest`, {user_id: userId, role: role})
  .then(res => res.data)
  .catch(error => error.response.data);

function* setProjectMenuItemsMenu({ payload }) {
  const { userId, role } = payload;
  try {
    const res = yield call(setProjectMenuItemsAsync, userId, role);
    yield put(setProjectMenuItemsSuccess(res));
  } catch (error) {
    yield put(setProjectMenuItemsError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchsetProjectMenuItems),
  ]);
}
