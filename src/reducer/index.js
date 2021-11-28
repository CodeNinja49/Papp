import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from "./Login/LoginReducer";
import userReducer from "./User/UserReducer";
import projectReducer from "./Project/ProjectReducer";
import patentUpload from "./Upload/UploadReducer";
import metaDataReducer from "./Metadata/MetadataReducer";
import commonReducer from "./common/commonReducer";
import alertReducer from "./alert/alertReducer";

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer,
  user: userReducer,
  project: projectReducer,
  patentUpload: patentUpload,
  metaData: metaDataReducer,
  common: commonReducer,
  alert: alertReducer,
});

export default rootReducer;
