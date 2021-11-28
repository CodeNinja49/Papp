import { call, put, takeLatest, fork, all, select } from "redux-saga/effects";
import {
  REQUEST_LOGIN,
  onLoginSucess,
  onLoginError,
  LOGOUT,
  REQUEST_GUESTLOGIN,
} from "./LoginAction";
import { requestLoginApi, requestLogoutApi } from "./loginEndpoint";
import history from "../../utils/history";
import { toastError } from "../toast/toastActions";

function* loginUser(action) {
  try {
    const result = yield call(requestLoginApi, action.payload);
    const { request_status, login_message } = result.data;
    // if (request_status === "failed") {
    //   yield put(onLoginError(login_message));
    //   return;
    // }
    // yield put(onLoginSucess(result.data));
    history.push("/home");
  } catch (e) {
    yield put(onLoginError(e.message));
    history.push("/home");
  }
}

function* loginGuestUser(action) {
  try {
    const result = yield call(requestLoginApi, action.payload);
    const { request_status, reason, login_message } = result.data;
    // if (request_status === "failed") {
    //   yield put(onLoginError(login_message));
    //   // yield put(toastError(reason || login_message, "top-right", 4000));
    //   history.push("/");
    //   return;
    // }
    // yield put(onLoginSucess(result.data));
    history.push("/home");
  } catch (e) {
    yield put(onLoginError(e.message));
    history.push("/home");
  }
}

function* logoutUser() {
  try {
    const userObj = yield select((state) => state.user.user);
    const payload = {
      user_id: userObj.user_id,
      app_id: "2",
    };
    yield call(requestLogoutApi, payload);
    history.push("/");
  } catch (e) {
    yield put(onLoginError(e.message));
  }
}

function* loginSaga() {
  yield takeLatest(REQUEST_LOGIN, loginUser);
}

function* logoutSaga() {
  yield takeLatest(LOGOUT, logoutUser);
}

function* loginGuestSaga() {
  yield takeLatest(REQUEST_GUESTLOGIN, loginGuestUser);
}

function* root() {
  yield all([fork(loginSaga), fork(logoutSaga), fork(loginGuestSaga)]);
}

export default root;
