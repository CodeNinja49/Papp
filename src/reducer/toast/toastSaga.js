import React from "react";
import {
  SHOW_NOTIFICATION_WARN,
  SHOW_NOTIFICATION_SUCCESS,
  SHOW_NOTIFICATION_ERROR,
  SHOW_NOTIFICATION_INFO,
} from "./toastActions";
import { toast } from "react-toastify";
import { takeLatest } from "redux-saga/effects";
import ToastWrapperComponent from "../../Components/ToastWrapper/ToastWrapperComponent";

const toastConfig = (toastPosition, toastDuration, closeButton = true) => {
  return {
    position: toastPosition || toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
    pauseOnHover: true,
    autoClose: toastDuration || 2500,
    closeButton: closeButton,
  };
};

export function showToastWarn(action) {
  toast.warn(
    <ToastWrapperComponent
      toastMessage={action.message}
      toastIcon="warning-icon"
    />,
    toastConfig(action.position, action.duration)
  );
}

export function showToastSuccess(action) {
  toast.success(
    <ToastWrapperComponent
      toastMessage={action.message}
      toastIcon="success-thumb-icon"
    />,
    toastConfig(action.position, action.duration)
  );
}

export function showToastError(action) {
  toast.error(
    <ToastWrapperComponent
      toastMessage={action.message}
      toastIcon="danger-icon"
    />,
    toastConfig(action.position, action.duration)
  );
}

export function showToastInfo(action) {
  toast.info(
    <ToastWrapperComponent
      toastMessage={action.message}
      toastIcon="information-icon"
    />,
    toastConfig(action.position, action.duration, action.closeButton)
  );
}

export function* watchNotificationWarn() {
  yield takeLatest(SHOW_NOTIFICATION_WARN, showToastWarn);
}

export function* watchNotificationSuccess() {
  yield takeLatest(SHOW_NOTIFICATION_SUCCESS, showToastSuccess);
}

export function* watchNotificationError() {
  yield takeLatest(SHOW_NOTIFICATION_ERROR, showToastError);
}

export function* watchNotificationInfo() {
  yield takeLatest(SHOW_NOTIFICATION_INFO, showToastInfo);
}
