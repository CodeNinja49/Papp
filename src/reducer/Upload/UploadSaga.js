import {
  call,
  put,
  takeLatest,
  fork,
  all,
  select,
  delay,
} from "redux-saga/effects";
import {
  INIT_PATENT_VALIDATE,
  onPatentValidateSuccess,
  onPatentValidateError,
  INIT_PATENT_UPLOAD,
  onPatentUploadError,
  onPatentUploadSuccess,
  reValidateLoading,
} from "./UploadActions";
import { onLoginError } from "../Login/LoginAction";
import {
  requestShareUrl,
  requestProjectsList,
} from "../Project/ProjectActions";
import history from "../../utils/history";
import { requestPatentUpload, requestPatentValidate } from "./UploadEndpoint";
import { checkIsValidUser } from "../../utils/commonUtils";
import { toastError } from "../toast/toastActions";

const toastPosition = "top-right";
const toastDuration = 4000;

function* requestPatents({ payload, modalCloseHandler }) {
  try {
    const result = yield call(requestPatentValidate, payload);
    const { request_status, reason, data_array } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.replace("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onPatentValidateError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    yield put(onPatentValidateSuccess(data_array));
    yield put(reValidateLoading(false));
    if (modalCloseHandler) {
      modalCloseHandler();
    }
  } catch (e) {
    yield put(onPatentValidateError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
    yield put(reValidateLoading(false));
  }
}

function* requestUpload({ payload, handleClose }) {
  try {
    const result = yield call(requestPatentUpload, payload);
    const { request_status, reason } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.replace("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onPatentUploadError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    const { selectedPatents = [] } = payload;
    const user = yield select((state) => state.user.user);
    const queryPayload = {
      app_id: "2",
      family: "0",
      user_id: user.user_id,
      selectedPatents: selectedPatents.join(","),
      sharecase: "",
      share_to: "0",
      share_from: "0",
      sharecomments: "",
      from: "patent_upload",
      search_url: "",
      sortBy: "pub_date",
      order: "desc",
      projectId: payload.projectId,
    };
    yield put(requestShareUrl(queryPayload));
    yield put(onPatentUploadSuccess(reason));
    handleClose();
    yield delay(1000);
    yield put(requestProjectsList());
  } catch (e) {
    yield put(onPatentUploadError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* patentUploadSaga() {
  yield takeLatest(INIT_PATENT_VALIDATE, requestPatents);
}

function* patentUpload() {
  yield takeLatest(INIT_PATENT_UPLOAD, requestUpload);
}

function* rootSaga() {
  yield all([fork(patentUploadSaga), fork(patentUpload)]);
}
export default rootSaga;
