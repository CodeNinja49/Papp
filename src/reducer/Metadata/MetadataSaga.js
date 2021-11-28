import {
  call,
  put,
  takeLatest,
  fork,
  all,
  takeEvery,
} from "redux-saga/effects";
import {
  FETCH_PREVIOUS_METADATA,
  INIT_TEMPLATE_CHANGES,
  onPreviousMetadataSuccess,
  onPreviousMetadataError,
  INIT_METADATA_ON_PATENT,
  fetchPreviousMetadata,
  showLoading,
} from "./MetaDataActions";
import { onLoginError } from "../Login/LoginAction";
import history from "../../utils/history";
import {
  requestPreviousMetadata,
  requestMetadataChanges,
  requestMetadataOnPatent,
} from "./MetadataEndpoint";
import { showMetaLoading } from "../common/commonActions";
import { checkIsValidUser } from "../../utils/commonUtils";
import { toastError, toastSuccess } from "../toast/toastActions";

const toastPosition = "top-right";
const toastDuration = 4000;

function* getpeviousMetaData({ payload }) {
  try {
    const result = yield call(requestPreviousMetadata, payload);
    const { request_status, reason, data_array } = result.data;
    // if (request_status === "failed" && !checkIsValidUser(reason)) {
    //   yield put(onLoginError(reason));
    //   history.replace("/");
    //   return;
    // }
    if (request_status === "failed") {
      yield put(onPreviousMetadataSuccess(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    yield put(onPreviousMetadataSuccess(data_array));
    yield put(showMetaLoading(false));
    yield put(showLoading(false));
  } catch (e) {
    yield put(onPreviousMetadataError(e.message));
  }
}

function* applyTemplateChanges({ payload }) {
  try {
    const result = yield call(requestMetadataChanges, payload);
    const { request_status, reason, data_array } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.replace("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onPreviousMetadataError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    yield put(
      toastSuccess("Successfully updated", toastPosition, toastDuration)
    );
    yield put(fetchPreviousMetadata());
    history.push("/metafields");
  } catch (e) {
    yield put(onPreviousMetadataError(e.message));
  }
}

function* metaDataOnpatent({ payload }) {
  try {
    const result = yield call(requestMetadataOnPatent, payload);
    const { request_status, reason, data_array } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.replace("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onPreviousMetadataSuccess(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
  } catch (e) {
    yield put(onPreviousMetadataError(e.message));
  }
}

function* fetchPreviousMetaDataSaga() {
  yield takeLatest(FETCH_PREVIOUS_METADATA, getpeviousMetaData);
}

function* fetchMetaDataSaga() {
  yield takeLatest(INIT_TEMPLATE_CHANGES, applyTemplateChanges);
}

function* requestUpdateOnPatent() {
  yield takeEvery(INIT_METADATA_ON_PATENT, metaDataOnpatent);
}

function* rootSaga() {
  yield all([
    fork(fetchPreviousMetaDataSaga),
    fork(fetchMetaDataSaga),
    fork(requestUpdateOnPatent),
  ]);
}
export default rootSaga;
