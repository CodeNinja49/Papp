export const FETCH_USER_INFO = "FETCH_USER_INFO";

export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";

export const USER_INFO_ERROR = "USER_INFO_ERROR";

export function requestUserInfo(payload) {
  return {
    type: FETCH_USER_INFO,
    payload: payload,
  };
}

export function onUserInfoSuccess(payload) {
  return {
    type: USER_INFO_SUCCESS,
    payload,
  };
}

export function onUserInfoError(payload) {
  return {
    type: USER_INFO_ERROR,
    payload,
  };
}
