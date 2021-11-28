import axios from "../../utils/axios";

export function requestProjectList() {
  return axios({
    method: "GET",
    url: "/projects",
  });
}

export function requestProjectCounts() {
  return axios({
    method: "GET",
    url: "/getProjectPatentCount",
  });
}

export function requestMakeSearchUrl(data) {
  return axios({
    method: "POST",
    url: "/makeSearchUrl",
    data: data,
  });
}

export function requestDetails(data) {
  return axios({
    method: "POST",
    url: "/search_query_results",
    data: data,
  });
}

export function requestNewProject(data) {
  return axios({
    method: "POST",
    url: "/createproject",
    data: data,
  });
}

export function requestUpdateDetails(data) {
  return axios({
    method: "PUT",
    url: "/editNames",
    data: data,
  });
}

export function requestMakeShareUrl(data) {
  return axios({
    method: "POST",
    url: "/makeShareUrl",
    data: data,
  });
}

export function modifySortParameters(data) {
  return axios({
    method: "POST",
    url: "/modifySortParameters",
    data: data,
  });
}

export function exportPatents(data) {
  return axios({
    method: "POST",
    url: "/export_results",
    data: data,
  });
}

export function requestPatentAction(data) {
  return axios({
    method: "PUT",
    url: "/performPatentAction",
    data: data,
  });
}

export function requestImages(data) {
  return axios({
    method: "POST",
    url: "/images",
    data: data,
  });
}
