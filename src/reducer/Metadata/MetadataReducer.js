import {
  PREVIOUS_METADATA_SUCCESS,
  PREVIOUS_METADATA_ERROR,
  HIGHLIGHTES_KEYWORDS,
  SHOW_LOADING,
} from "./MetaDataActions";

const initialState = {
  previousMetaData: null,
  loading: false,
  metaDataError: null,
  highlightsKeywords: [],
};

export default function metaDataReducer(state = initialState, action) {
  switch (action.type) {
    case PREVIOUS_METADATA_SUCCESS:
      return { ...state, previousMetaData: action.payload };
    case PREVIOUS_METADATA_ERROR:
      return { ...state, metaDataError: action.payload };
    case HIGHLIGHTES_KEYWORDS:
      return { ...state, highlightsKeywords: action.payload };
    case SHOW_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
