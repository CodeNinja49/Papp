export const REQUEST_PROJECTS = "REQUEST_PROJECTS";

export const PROJECTS_SUCCESS = "PROJECTS_SUCCESS";

export const PROJECTS_ERROR = "PROJECTS_ERROR";

export const REQUEST_MAKE_URL = "REQUEST_MAKE_URL";

export const FETCH_PROJECT_OR_CITATION_DETAILS =
  "FETCH_PROJECT_OR_CITATION_DETAILS";

export const ON_PROJECT_CITATION_SUCCESS = "ON_PROJECT_CITATION_SUCCESS";

export const ON_PROJECT_CITATION_ERROR = "ON_PROJECT_CITATION_ERROR";

export const SET_FORM_STATE = "SET_FORM_STATE";

export const SET_LOADING = "SET_LOADING";

export const INIT_CREATE_NEW_PROJECT = "INIT_CREATE_NEW_PROJECT";

export const INIT_UPDATE_PROJECT_CITATION_NAMES =
  "INIT_UPDATE_PROJECT_CITATION_NAMES";

export const REQUEST_SHARE_URL = "REQUEST_SHARE_URL";

export const REQUEST_SORT_BY = "REQUEST_SORT_BY";

export const PATENT_EXPORT = "PATENT_EXPORT";

export const INIT_PATENT_SHARE = "INIT_PATENT_SHARE";

export const PATENT_SHARE_SUCCESS = "PATENT_SHARE_SUCCESS";

export const SET_SELECTED_PATENT = "SET_SELECTED_PATENT";

export const INIT_PATENT_ACTION = "INIT_PATENT_ACTION";

export const EXPORT_LOADING = "EXPORT_LOADING";

export const FETCH_IMAGES = "FETCH_IMAGES";

export const ON_IMAGES_SUCCESS = "ON_IMAGES_SUCCESS";

export function requestProjectsList(payload) {
  return {
    type: REQUEST_PROJECTS,
    payload: payload,
  };
}

export function onProjectSuccess(payload) {
  return {
    type: PROJECTS_SUCCESS,
    payload: payload,
  };
}

export function onProjectError(payload) {
  return {
    type: PROJECTS_ERROR,
    payload: payload,
  };
}

export function requestMakeUrl(payload) {
  return {
    type: REQUEST_MAKE_URL,
    payload: payload,
  };
}

export function requestProjectOrCitationDetails(payload) {
  return {
    type: FETCH_PROJECT_OR_CITATION_DETAILS,
    payload: payload,
  };
}

export function onProjectCitationDetailsSuccess(payload) {
  return {
    type: ON_PROJECT_CITATION_SUCCESS,
    payload: payload,
  };
}

export function onProjectCitationDetailsError(payload) {
  return {
    type: ON_PROJECT_CITATION_ERROR,
    payload: payload,
  };
}

export function setFormState(payload) {
  return {
    type: SET_FORM_STATE,
    payload: payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload: payload,
  };
}

export function initCreateNewProject(payload, closeModalFunction) {
  return {
    type: INIT_CREATE_NEW_PROJECT,
    payload: payload,
    closeModalFunction: closeModalFunction,
  };
}

export function initUpdateProjectCitationNames(payload, closeModalFunction) {
  return {
    type: INIT_UPDATE_PROJECT_CITATION_NAMES,
    payload: payload,
    closeModalFunction: closeModalFunction,
  };
}

export function requestShareUrl(payload) {
  return {
    type: REQUEST_SHARE_URL,
    payload: payload,
  };
}

export function requestSortBy(payload) {
  return {
    type: REQUEST_SORT_BY,
    payload: payload,
  };
}

export function requestPatentExport(payload, closeModalFunction) {
  return {
    type: PATENT_EXPORT,
    payload: payload,
    closeModalFunction: closeModalFunction,
  };
}

export function initPatentShare(payload) {
  return {
    type: INIT_PATENT_SHARE,
    payload: payload,
  };
}

export function patentShareSuccess(payload) {
  return {
    type: PATENT_SHARE_SUCCESS,
    payload: payload,
  };
}

export function setSelectedPatent(payload) {
  return {
    type: SET_SELECTED_PATENT,
    payload: payload,
  };
}

export function initPatentAction(payload) {
  return {
    type: INIT_PATENT_ACTION,
    payload: payload,
  };
}

export function showExportLoading(payload) {
  return {
    type: EXPORT_LOADING,
    payload: payload,
  };
}

export function fetchImagesAction(payload) {
  return {
    type: FETCH_IMAGES,
    payload: payload,
  };
}

export function onImagesSuccessAction(payload) {
  return {
    type: ON_IMAGES_SUCCESS,
    payload: payload,
  };
}
