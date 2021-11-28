export const SHOW_LOADER = "SHOW_LOADER";

export const HIDE_LOADER = "HIDE_LOADER";

export const LIST_LOADER = "LIST_LOADER";

export const META_LOADING = "META_LOADING";

export const OPEN_DRAWER = "OPEN_DRAWER";

export function showLoader(payload) {
  return {
    type: SHOW_LOADER,
    payload: payload,
  };
}

export function hideLoader(payload) {
  return {
    type: HIDE_LOADER,
    payload: payload,
  };
}

export function showListLoader(payload) {
  return {
    type: LIST_LOADER,
    payload: payload,
  };
}

export function showMetaLoading(payload) {
  return {
    type: META_LOADING,
    payload: payload,
  };
}

export function openDrawer(payload) {
  return {
    type: OPEN_DRAWER,
    payload: payload,
  };
}
