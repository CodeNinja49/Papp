import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_LOGIN_REQUEST_OBJ,
} from "./LoginAction";

const initialState = { success: {}, loginError: null, loginRequestObj: null };

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: action.paylod,
        loginError: "",
        loginRequestObj: null,
      };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case SET_LOGIN_REQUEST_OBJ:
      return { ...state, loginRequestObj: action.payload };
    default:
      return state;
  }
}
