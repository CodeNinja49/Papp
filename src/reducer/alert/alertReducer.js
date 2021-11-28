import { CLOSE_ALERT, SHOW_ALERT } from "./alertActions";

const initialState = {
  title: "",
  body: "",
  btnText1: "Cancel",
  btnText2: "Ok",
  handleBtn1: () => {},
  handleBtn2: () => {},
  openAlert: false,
  handleClose: () => {},
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_ALERT:
      return {
        ...state,
        openAlert: action.payload,
      };
    case SHOW_ALERT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
