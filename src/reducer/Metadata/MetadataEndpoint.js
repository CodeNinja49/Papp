import axios from "../../utils/axios";

export function requestPreviousMetadata(data) {
  return axios({
    method: "GET",
    url: "/metadatatemplates",
  });
}

export function requestMetadataChanges(data) {
  return axios({
    method: "POST",
    url: "/addAndModifyMetadataFields",
    data: JSON.stringify(data),
  });
}

export function requestMetadataOnPatent(data) {
  return axios({
    method: "POST",
    url: "/addAndModifyMetadatatoPatent",
    data: JSON.stringify(data),
  });
}
