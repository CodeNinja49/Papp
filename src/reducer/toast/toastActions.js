export const SHOW_NOTIFICATION_WARN = "SHOW_NOTIFICATION_WARN";
export const SHOW_NOTIFICATION_SUCCESS = "SHOW_NOTIFICATION_SUCCESS";
export const SHOW_NOTIFICATION_ERROR = "SHOW_NOTIFICATION_ERROR";
export const SHOW_NOTIFICATION_INFO = "SHOW_NOTIFICATION_INFO";

export const toastWarn = (message, position, duration) => ({
  type: SHOW_NOTIFICATION_WARN,
  message,
  position,
  duration,
});

export const toastSuccess = (message, position, duration) => ({
  type: SHOW_NOTIFICATION_SUCCESS,
  message,
  position,
  duration,
});

export const toastError = (message, position, duration) => ({
  type: SHOW_NOTIFICATION_ERROR,
  message,
  position,
  duration,
});

export const toastInfo = (message, position, duration, closeButton = true) => ({
  type: SHOW_NOTIFICATION_INFO,
  message,
  position,
  duration,
  closeButton,
});
