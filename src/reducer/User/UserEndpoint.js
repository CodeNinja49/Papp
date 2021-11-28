import axios from "../../utils/axios";

export function requestUserInfoEndpoint() {
  return axios({
    method: "GET",
    url: "/profile",
  });
}
