// Auth Actions here
import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

export const login = (param) => (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });

  axios
    .post("https://reqres.in/api/login", {
      email: param.email,
      password: param.password,
    })
    .then((r) => {
      return dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      return dispatch({ type: AUTH_SIGN_IN_ERROR, payload: err.data });
    });
};

export const logout = () => ({ type: AUTH_SIGN_OUT });
