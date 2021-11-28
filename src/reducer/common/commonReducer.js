import {
  SHOW_LOADER,
  HIDE_LOADER,
  LIST_LOADER,
  META_LOADING,
  OPEN_DRAWER,
} from "./commonActions";

const initialState = {
  loading: false,
  listLoading: false,
  metaLoading: false,
  drawer: true,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case HIDE_LOADER:
      return { ...state, loading: action.payload };
    case LIST_LOADER:
      return { ...state, listLoading: action.payload };
    case META_LOADING:
      return { ...state, metaLoading: action.payload };
    case OPEN_DRAWER:
      return { ...state, drawer: action.payload };
    default:
      return state;
  }
}
