import { USER_INFO_SUCCESS, USER_INFO_ERROR } from "./UserActions";
import { LOGOUT } from "../Login/LoginAction";
const initialState = { user: {}, loginError: null };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload.data_array ? action.payload.data_array : {},
        loginError: "",
      };
    case USER_INFO_ERROR:
      return { ...state, loginError: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
