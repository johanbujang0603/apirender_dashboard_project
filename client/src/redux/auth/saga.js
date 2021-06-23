import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { setAuthToken } from "../../helpers/Utils";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, GET_ME, FORGOT_PASSWORD } from "../actions";

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  receiveAuthUserSuccess,
  forgotPasswordSuccess,
  forgotPasswordError
} from "./actions";

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) =>
  await axios
    .post("/api/users/login", {
      email: email,
      password: password,
    })
    .then((res) => res.data)
    .catch((error) => { throw error.response.data });

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const data = yield call(loginWithEmailPasswordAsync, email, password);
    // Set token to localStorage
    const { token, user } = data;
    if (token && user) {
      localStorage.setItem("token", token);
      localStorage.setItem("current_user", JSON.stringify(user));
      setAuthToken(token);
      yield put(loginUserSuccess(user));
      if (user.role === 'admin') history.push("/admin");
      else history.push("/");
    }
    else {
      yield put(loginUserError("Login Failed!"));
    }
  } catch (error) {
    localStorage.clear();
    yield put(loginUserError(error.message));
  }
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (userInfo) =>
  await axios
    .post("/api/users/register", userInfo)
    .then((user) => user)
    .catch((error) => error.response.data);

function* registerWithEmailPassword({ payload }) {
  const userInfo = payload.user;
  const { history } = payload;
  try {
    yield call(registerWithEmailPasswordAsync, userInfo);
    yield put(registerUserSuccess());
    history.push("/");
  } catch (error) {
    yield put(registerUserError(error));
  }
}

export function* watchReceiveAuthUser() {
  yield takeEvery(GET_ME, receiveAuthUser);
}

const getAuthUserAsync = async (id) =>
  await axios
    .post(`/api/users/detail?id=${id}`)
    .then((res) => res.data)
    .catch((error) => { throw error.response.data });

function* receiveAuthUser({ payload }) {
  const history = payload;
  try {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token).id;
    const user = yield call(getAuthUserAsync, id);
    localStorage.setItem("current_user", JSON.stringify(user));
    yield put(receiveAuthUserSuccess(user));
  } catch (error) {
    console.log("GET_ME_ERROR: ", error);
    localStorage.clear();
    history.push("/");
  }
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async () => {
  localStorage.clear();
  setAuthToken(false);
};

function* logout() {
  try {
    yield call(logoutAsync);
  } catch (error) {}
}

export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  await axios
    .post("/api/users/forgot-password", { email })
    .then((data) => data)
    .catch((error) => error.response.data);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    console.log(forgotPasswordStatus);
    // if (!forgotPasswordStatus) {
    //   yield put(forgotPasswordSuccess('success'));
    // } else {
    //   yield put(forgotPasswordError(forgotPasswordStatus.message));
    // }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}


export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchReceiveAuthUser),
    fork(watchForgotPassword),
  ]);
}
