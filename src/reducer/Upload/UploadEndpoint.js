import axios from "../../utils/axios";

export function requestPatentValidate(data) {
  return axios({
    method: "POST",
    url: "/patentValidate",
    data: data,
  });
}

export function requestPatentUpload(data) {
  return axios({
    method: "POST",
    url: "/patentUpload",
    data: data,
  });
}
