import { fork, all } from "redux-saga/effects";

import loginSaga from "./Login/LoginSaga";
import userSaga from "./User/UserSaga";
import projectSaga from "./Project/ProjectSaga";
import patentUploadSaga from "./Upload/UploadSaga";
import metaDataSaga from "./Metadata/MetadataSaga";
import {
  watchNotificationWarn,
  watchNotificationError,
  watchNotificationInfo,
  watchNotificationSuccess,
} from "./toast/toastSaga";
export default function* root() {
  yield all([
    fork(loginSaga),
    fork(userSaga),
    fork(projectSaga),
    fork(patentUploadSaga),
    fork(metaDataSaga),
    fork(watchNotificationWarn),
    fork(watchNotificationError),
    fork(watchNotificationInfo),
    fork(watchNotificationSuccess),
  ]);
}
