export const CLOSE_ALERT = "CLOSE_ALERT";

export const SHOW_ALERT = "SHOW_ALERT";

export function closeAlert(payload) {
  return {
    type: CLOSE_ALERT,
    payload: payload,
  };
}

export function showAlert(payload) {
  return {
    type: SHOW_ALERT,
    payload: payload,
  };
}
