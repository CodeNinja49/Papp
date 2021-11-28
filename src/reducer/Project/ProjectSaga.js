import {
  call,
  put,
  takeLatest,
  fork,
  all,
  delay,
  select,
  takeEvery,
} from "redux-saga/effects";
import {
  REQUEST_PROJECTS,
  onProjectError,
  onProjectSuccess,
  REQUEST_MAKE_URL,
  REQUEST_SHARE_URL,
  FETCH_PROJECT_OR_CITATION_DETAILS,
  onProjectCitationDetailsSuccess,
  onProjectCitationDetailsError,
  setFormState,
  setLoading,
  INIT_CREATE_NEW_PROJECT,
  requestProjectsList,
  INIT_UPDATE_PROJECT_CITATION_NAMES,
  REQUEST_SORT_BY,
  requestProjectOrCitationDetails as requestProjectOrCitationDetailsAction,
  PATENT_EXPORT,
  INIT_PATENT_SHARE,
  patentShareSuccess,
  INIT_PATENT_ACTION,
  showExportLoading,
  FETCH_IMAGES,
  fetchImagesAction,
  onImagesSuccessAction,
} from "./ProjectActions";
import { onLoginError } from "../Login/LoginAction";
import { hideLoader, showListLoader } from "../common/commonActions";
import history from "../../utils/history";
import {
  requestMakeSearchUrl,
  requestDetails,
  requestNewProject,
  requestUpdateDetails,
  requestMakeShareUrl,
  modifySortParameters,
  requestProjectCounts,
  exportPatents,
  requestPatentAction,
  requestImages,
} from "./ProjectEndpoint";
import { baseURL } from "../../utils/axios";
import { checkIsValidUser } from "../../utils/commonUtils";
import { toastError } from "../toast/toastActions";

const ITEM_PER_PAGE = 25;
const downloadUrl = baseURL + "/downloadCSV?name=";
const toastPosition = "top-right";
const toastDuration = 4000;

function* fetchProjectList() {
  try {
    const result = yield call(requestProjectCounts);
    const { request_status, reason } = result.data;
    // if (request_status === "failed" && !checkIsValidUser(reason)) {
    //   yield put(onLoginError(reason));
    //   yield put(hideLoader(false));
    //   history.push("/");
    //   return;
    // }
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      yield put(showListLoader(false));
      return;
    }
    yield put(onProjectSuccess(result.data));
    yield put(showListLoader(false));
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(showListLoader(false));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* fetchMakeUrl({ payload }) {
  try {
    const result = yield call(requestMakeSearchUrl, payload);
    const { request_status, reason, query_id } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    yield put(setLoading(false));
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    const { projectId = 0, handleClose } = payload;
    if (handleClose) {
      handleClose();
    }
    yield put(
      onProjectCitationDetailsSuccess({
        data: [],
        msg_string: "",
        totalCount: 0,
        template_completeData: [],
      })
    );
    history.push(`/project/${query_id}/${projectId ? projectId : 0}`);
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(setLoading(false));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* fetchShareUrl({ payload }) {
  try {
    const result = yield call(requestMakeShareUrl, payload);
    const { request_status, reason, query_id } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    yield put(setLoading(false));
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    history.push(
      `/project/${query_id}/${payload.projectId ? payload.projectId : 0}`
    );
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(setLoading(false));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* fetchDetails({ payload }) {
  try {
    const dataParams = {
      app_id: "3",
      family: payload.family,
      searchfileUrl: "",
      page: payload.pageIndex,
      itemperpage: ITEM_PER_PAGE,
      query_id: payload.fileurl,
    };
    const result = yield call(requestDetails, dataParams);
    const { request_status, reason, data_array = {} } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      yield put(hideLoader(false));
      history.push("/");
      return;
    }
    const {
      data = [],
      msg_string = "",
      resultcount = 0,
      factory_variables = {},
      template_completeData = [],
      source_of_origin = "",
    } = data_array;
    if (request_status === "failed") {
      yield put(onProjectCitationDetailsError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
    }
    yield put(
      onProjectCitationDetailsSuccess({
        data: data,
        msg_string: msg_string,
        totalCount: resultcount,
        template_completeData: template_completeData,
        source_of_origin: source_of_origin,
      })
    );
    yield put(setFormState(factory_variables));
    yield put(hideLoader(false));
    if (data.length > 0) {
      const patents = data.reduce((arr, d) => {
        arr[d.ucid] = "";
        return arr;
      }, {});

      yield put(onImagesSuccessAction(patents));
      yield put(fetchImagesAction());
      for (let i = 0; i < 6; i++) {
        yield delay(10000);
        yield put(fetchImagesAction());
      }
    }
  } catch (e) {
    yield put(hideLoader(false));
    yield put(onProjectCitationDetailsError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* createNewProjects({ payload, closeModalFunction }) {
  try {
    const result = yield call(requestNewProject, payload);
    const { request_status, reason } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    if (request_status === "success") {
      yield put(requestProjectsList());
      closeModalFunction();
    }
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* updatedProjectDetails({ payload, closeModalFunction }) {
  try {
    const result = yield all(
      payload.map((data) => call(requestUpdateDetails, data))
    );
    const { request_status, reason } = result[0].data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    if (request_status === "success") {
      yield put(requestProjectsList());
      if (closeModalFunction) {
        closeModalFunction();
      }
    }
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* modifySort({ payload }) {
  try {
    const result = yield call(modifySortParameters, payload);
    const { request_status, reason, data_array = {} } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    yield put(
      requestProjectOrCitationDetailsAction({
        fileurl: payload.query_id,
        pageIndex: 1,
        family: payload.family,
      })
    );
  } catch (e) {
    yield put(onProjectCitationDetailsError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* requestPatentExport({ payload }) {
  try {
    const result = yield call(exportPatents, payload);
    const { request_status, reason, destination_file } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    yield put(showExportLoading(false));
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    window.open(
      downloadUrl + destination_file,
      "_blank" // <- This is what makes it open in a new window.
    );
    // closeModalFunction();
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(showExportLoading(false));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* patentShare({ payload }) {
  try {
    const result = yield call(requestMakeShareUrl, payload);
    const { request_status, reason, query_id } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    yield put(setLoading(false));
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    const shareFileUrl =
      window.location.origin + `/projectDetails/${query_id}/0`;
    yield put(patentShareSuccess(shareFileUrl));
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(setLoading(false));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* performPatentAction({ payload }) {
  try {
    const { pathname } = history.location;
    const result = yield call(requestPatentAction, payload);
    const { request_status, reason } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    const arr = pathname.split("/");
    yield put(
      requestProjectOrCitationDetailsAction({
        fileurl: arr[2],
        pageIndex: 1,
        family: 0,
      })
    );

    yield delay(1000);
    yield put(requestProjectsList());
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* fetchPatentImages() {
  try {
    const patentImages = yield select((state) => state.project.patentImages);
    const payload = Object.keys(patentImages).reduce((arr, p) => {
      if (
        !patentImages[p] ||
        patentImages[p] == "" ||
        patentImages[p] == "downloading"
      ) {
        arr.push(p);
      }
      return arr;
    }, []);
    if (!payload.length) {
      return;
    }
    const result = yield call(requestImages, {
      patents: JSON.stringify(payload),
    });
    const { request_status, reason, data_array } = result.data;
    if (request_status === "failed" && !checkIsValidUser(reason)) {
      yield put(onLoginError(reason));
      history.push("/");
      return;
    }
    if (request_status === "failed") {
      yield put(onProjectError(reason));
      yield put(toastError(reason, toastPosition, toastDuration));
      return;
    }
    yield put(onImagesSuccessAction(JSON.parse(data_array)));
  } catch (e) {
    yield put(onProjectError(e.message));
    yield put(toastError(e.message, toastPosition, toastDuration));
  }
}

function* projectSaga() {
  yield takeLatest(REQUEST_PROJECTS, fetchProjectList);
}

function* makeUrl() {
  yield takeLatest(REQUEST_MAKE_URL, fetchMakeUrl);
}

function* makeShareUrl() {
  yield takeLatest(REQUEST_SHARE_URL, fetchShareUrl);
}

function* requestProjectOrCitationDetails() {
  yield takeLatest(FETCH_PROJECT_OR_CITATION_DETAILS, fetchDetails);
}

function* requestCreateNewProject() {
  yield takeLatest(INIT_CREATE_NEW_PROJECT, createNewProjects);
}

function* requestUpdateProjectOrCitation() {
  yield takeLatest(INIT_UPDATE_PROJECT_CITATION_NAMES, updatedProjectDetails);
}

function* requestSortBy() {
  yield takeLatest(REQUEST_SORT_BY, modifySort);
}

function* requestExport() {
  yield takeLatest(PATENT_EXPORT, requestPatentExport);
}

function* requestPatentShare() {
  yield takeLatest(INIT_PATENT_SHARE, patentShare);
}

function* requestPatentProfileAction() {
  yield takeLatest(INIT_PATENT_ACTION, performPatentAction);
}

function* requestPatentImages() {
  yield takeLatest(FETCH_IMAGES, fetchPatentImages);
}

export default function* root() {
  yield all([
    fork(projectSaga),
    fork(makeUrl),
    fork(requestProjectOrCitationDetails),
    fork(requestCreateNewProject),
    fork(requestUpdateProjectOrCitation),
    fork(makeShareUrl),
    fork(requestSortBy),
    fork(requestExport),
    fork(requestPatentShare),
    fork(requestPatentProfileAction),
    fork(requestPatentImages),
  ]);
}
