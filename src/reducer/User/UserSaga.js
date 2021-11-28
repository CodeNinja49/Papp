import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER_INFO,
  onUserInfoSuccess,
  onUserInfoError,
} from "./UserActions";
import { onLoginError } from "../Login/LoginAction";
import history from "../../utils/history";
import { requestUserInfoEndpoint } from "./UserEndpoint";
import { checkIsValidUser } from "../../utils/commonUtils";

function* fetchUserInfo() {
  try {
    const result = yield call(requestUserInfoEndpoint);
    const { request_status, reason } = result.data;
    // if (request_status === "failed" && !checkIsValidUser(reason)) {
    //   yield put(onLoginError(reason));
    //   history.replace("/");
    //   return;
    // }
    yield put(onUserInfoSuccess(result.data));
  } catch (e) {
    yield put(onUserInfoError(e.message));
  }
}

function* userSaga() {
  yield takeLatest(FETCH_USER_INFO, fetchUserInfo);
}

export default userSaga;
