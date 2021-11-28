export const REQUEST_LOGIN = "REQUEST_LOGIN";

export const REQUEST_GUESTLOGIN = "REQUEST_GUEST_LOGIN";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";

export const SET_LOGIN_REQUEST_OBJ = "SET_LOGIN_REQUEST_OBJ";

export function requestLogin(payload) {
  return {
    type: REQUEST_LOGIN,
    payload: payload,
  };
}

export function requestGuestLogin(payload) {
  return {
    type: REQUEST_GUESTLOGIN,
    payload: payload,
  };
}

export function onLoginSucess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function onLoginError(payload) {
  return {
    type: LOGIN_ERROR,
    payload,
  };
}

export function onLogoutRequest(payload) {
  return {
    type: LOGOUT,
    payload,
  };
}

export function setLoginRequest(payload) {
  return {
    type: SET_LOGIN_REQUEST_OBJ,
    payload,
  };
}
