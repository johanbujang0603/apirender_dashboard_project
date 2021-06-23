import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { PROJECT_ADD_ITEM } from '../actions';

import {
  addProjectItemSuccess,
  addProjectItemError,
} from './actions';

const addProjectItemRequest = async (item) => {
    return await axios.post('/api/projects/create', item)
    .then(res => res.data)
    .catch(error => error.response.data);
};

function* addProjectItem({ payload }) {
  try {
    const response = yield call(addProjectItemRequest, payload);
    yield put(addProjectItemSuccess(response));
  } catch (error) {
    yield put(addProjectItemError(error));
  }
}


export function* wathcAddItem() {
    yield takeEvery(PROJECT_ADD_ITEM, addProjectItem);
}
  
export default function* rootSaga() {
    yield all([fork(wathcAddItem)]);
}
