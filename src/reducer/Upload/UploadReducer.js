import {
  PATENT_VALIDATE_SUCCESS,
  PATENT_VALIDATE_ERROR,
  PATENT_UPLOAD_SUCCESS,
  PATENT_UPLOAD_ERROR,
  CLEAR_UPLOAD_DATA,
  INIT_PATENT_UPLOAD,
  UPLOAD_REVALIDATE_LOADING,
  UPLOAD_VALIDATE_LOADING,
} from "./UploadActions";

const initialState = {
  patents: null,
  patentValidateError: null,
  patentUploadError: null,
  loading: false,
  validateLoading: false,
  reValidateLoading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_VALIDATE_LOADING:
      return { ...state, validateLoading: true };
    case INIT_PATENT_UPLOAD:
      return { ...state, loading: true };
    case PATENT_VALIDATE_SUCCESS:
      return {
        ...state,
        patents: action.payload,
        validateLoading: false,
      };
    case PATENT_VALIDATE_ERROR:
      return {
        ...state,
        patentValidateError: action.payload,
        validateLoading: false,
      };
    case PATENT_UPLOAD_SUCCESS:
      return {
        ...state,
        status: action.payload,
        loading: false,
      };
    case PATENT_UPLOAD_ERROR:
      return { ...state, patentUploadError: action.payload, loading: false };
    case UPLOAD_REVALIDATE_LOADING:
      return { ...state, reValidateLoading: action.payload };
    case CLEAR_UPLOAD_DATA:
      return { ...initialState };
    default:
      return state;
  }
}
