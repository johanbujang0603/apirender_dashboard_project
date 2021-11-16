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
  message: '',
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
        message: '',
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {},
        isAuthenticated: false,
        loginError: action.payload.message,
        registerError: null,
        message: '',
      };
    case REGISTER_USER:
      return { ...state, loading: true, loginError: null, registerError: null, message: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: "", loginError: null, registerError: null, message: 'Thank you - Please check your email inbox to complete your registration.' };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: "",
        registerError: action.payload.message,
        loginError: null,
        message: '',
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
