import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  GET_ME_SUCCESS,
} from "../actions";

const isEmpty = require("is-empty");
const token = localStorage.getItem("token");

const INIT_STATE = {
  isAuthenticated: !!token,
  user: {},
  jwtToken: token,
  loading: false,
  loginError: null,
  registerError: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, loginError: null, registerError: null };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {},
        isAuthenticated: false,
        loginError: action.payload.message,
        registerError: null,
      };
    case REGISTER_USER:
      return { ...state, loading: true, loginError: null, registerError: null };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: "", loginError: null, registerError: null };
    case REGISTER_USER_ERROR:
      console.log(action.payload.message);
      return {
        ...state,
        loading: false,
        user: "",
        registerError: action.payload.message,
        loginError: null,
      };
    case GET_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case LOGOUT_USER:
      return {
        ...state,
        // user: {},
        jwtToken: null,
        isAuthenticated: false,
        loginError: null,
        registerError: null,
      };
    default:
      return { ...state };
  }
};
