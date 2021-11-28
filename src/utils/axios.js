import axios from "axios";

export const baseURL =
  process.env.API_BASE_URL || "https://digidash-next-api.xlpat.dev";
export default axios.create({
  baseURL: `${baseURL}/api`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
