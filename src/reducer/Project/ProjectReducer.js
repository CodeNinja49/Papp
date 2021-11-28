import {
  PROJECTS_SUCCESS,
  PROJECTS_ERROR,
  ON_PROJECT_CITATION_SUCCESS,
  ON_PROJECT_CITATION_ERROR,
  SET_FORM_STATE,
  REQUEST_MAKE_URL,
  SET_LOADING,
  PATENT_SHARE_SUCCESS,
  SET_SELECTED_PATENT,
  EXPORT_LOADING,
  ON_IMAGES_SUCCESS,
} from "./ProjectActions";

const initialState = {
  projectList: [],
  loginError: null,
  searchResult: [],
  searchResultError: null,
  msg_string: "",
  formState: {},
  loading: false,
  template_completeData: [],
  patentShareUrl: "",
  selectedPatent: [],
  exportloading: false,
  source_of_origin: "",
  patentImages: {},
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECTS_SUCCESS:
      return {
        ...state,
        projectList: action.payload.data_array ? action.payload.data_array : [],
        loginError: "",
      };
    case PROJECTS_ERROR:
      return {
        ...state,
        loginError: action.payload,
        loading: false,
      };
    case ON_PROJECT_CITATION_SUCCESS:
      return {
        ...state,
        searchResult: action.payload.data,
        msg_string: action.payload.msg_string,
        totalCount: action.payload.totalCount,
        template_completeData: action.payload.template_completeData,
        source_of_origin: action.payload.source_of_origin,
      };
    case ON_PROJECT_CITATION_ERROR:
      return { ...state, searchResultError: action.payload };
    case SET_FORM_STATE:
      return { ...state, formState: action.payload };
    case REQUEST_MAKE_URL:
      return { ...state, loading: true };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case PATENT_SHARE_SUCCESS:
      return { ...state, patentShareUrl: action.payload };
    case SET_SELECTED_PATENT:
      return { ...state, selectedPatent: action.payload };
    case EXPORT_LOADING:
      return { ...state, exportloading: action.payload };
    case ON_IMAGES_SUCCESS:
      return {
        ...state,
        patentImages: { ...state.patentImages, ...action.payload },
      };
    default:
      return state;
  }
}
