export const INIT_PATENT_VALIDATE = "INIT_PATENT_VALIDATE";

export const PATENT_VALIDATE_SUCCESS = "PATENT_VALIDATE_SUCCESS";

export const PATENT_VALIDATE_ERROR = "PATENT_VALIDATE_ERROR";

export const INIT_PATENT_UPLOAD = "INIT_PATENT_UPLOAD";

export const PATENT_UPLOAD_SUCCESS = "PATENT_UPLOAD_SUCCESS";

export const PATENT_UPLOAD_ERROR = "PATENT_UPLOAD_ERROR";

export const CLEAR_UPLOAD_DATA = "CLEAR_UPLOAD_DATA";

export const UPLOAD_REVALIDATE_LOADING = "UPLOAD_REVALIDATE_LOADING";

export const UPLOAD_VALIDATE_LOADING = "UPLOAD_VALIDATE_LOADING";

export function initPatentUpload(payload, modalCloseHandler) {
  return {
    type: INIT_PATENT_VALIDATE,
    payload: payload,
    modalCloseHandler: modalCloseHandler,
  };
}

export function initUpload(payload, handleClose) {
  return {
    type: INIT_PATENT_UPLOAD,
    payload: payload,
    handleClose: handleClose,
  };
}

export function onPatentValidateSuccess(payload) {
  return {
    type: PATENT_VALIDATE_SUCCESS,
    payload: payload,
  };
}

export function onPatentValidateError(payload) {
  return {
    type: PATENT_VALIDATE_ERROR,
    payload: payload,
  };
}

export function onPatentUploadSuccess(payload) {
  return {
    type: PATENT_UPLOAD_SUCCESS,
    payload: payload,
  };
}

export function onPatentUploadError(payload) {
  return {
    type: PATENT_UPLOAD_ERROR,
    payload: payload,
  };
}

export function reValidateLoading(payload) {
  return {
    type: UPLOAD_REVALIDATE_LOADING,
    payload: payload,
  };
}

export function validateLoading(payload) {
  return {
    type: UPLOAD_VALIDATE_LOADING,
    payload: payload,
  };
}

export function clearUploadData() {
  return {
    type: CLEAR_UPLOAD_DATA,
  };
}
