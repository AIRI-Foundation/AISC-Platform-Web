import axios from "axios";
import { getToken, clearSession } from "./auth";

const BASE_URL = import.meta.env.DEV
  ? ""
  : import.meta.env.VITE_API_BASE_URL || "https://aisc-platform-api.fly.dev";
// const BASE_URL = "http://localhost:5044"


// One axios object we use for all our requests.
export const api = axios.create({
  baseURL: BASE_URL,
});

// Plumbing code mainly boilerplate things
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      clearSession();
    }
    return Promise.reject(error);
  },
);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getErrorMessage(error: any): string {
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  if (error.code === "ERR_NETWORK") {
    return "Cannot reach the server ";
  }
  return "Something went wrong. Please try again.";
}
