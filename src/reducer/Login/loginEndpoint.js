import axios from "../../utils/axios";

export function requestLoginApi(payload) {
  return axios({
    method: "POST",
    url: "/login_user",
    data: JSON.stringify(payload),
  });
}

export function requestLogoutApi(payload) {
  return axios({
    method: "POST",
    url: "/logout",
    data: JSON.stringify(payload),
  });
}
