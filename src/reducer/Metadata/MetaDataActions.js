export const FETCH_PREVIOUS_METADATA = "FETCH_PREVIOUS_METADATA";

export const PREVIOUS_METADATA_SUCCESS = "PREVIOUS_METADATA_SUCCESS";

export const PREVIOUS_METADATA_ERROR = "PREVIOUS_METADATA_ERROR";

export const INIT_TEMPLATE_CHANGES = "INIT_TEMPLATE_CHANGES";

export const INIT_METADATA_ON_PATENT = "INIT_METADATA_ON_PATENT";

export const HIGHLIGHTES_KEYWORDS = "HIGHLIGHTES_KEYWORDS";

export const SHOW_LOADING = "SHOW_LOADING";

export function fetchPreviousMetadata(payload) {
  return {
    type: FETCH_PREVIOUS_METADATA,
    payload: payload,
  };
}

export function onPreviousMetadataSuccess(payload) {
  return {
    type: PREVIOUS_METADATA_SUCCESS,
    payload: payload,
  };
}

export function onPreviousMetadataError(payload) {
  return {
    type: PREVIOUS_METADATA_ERROR,
    payload: payload,
  };
}

export function initMetaDataChanges(payload) {
  return {
    type: INIT_TEMPLATE_CHANGES,
    payload: payload,
  };
}

export function initMetaDataOnPatent(payload) {
  return {
    type: INIT_METADATA_ON_PATENT,
    payload: payload,
  };
}

export function setHighlightKeywords(payload) {
  return {
    type: HIGHLIGHTES_KEYWORDS,
    payload: payload,
  };
}

export function showLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload: payload,
  };
}
