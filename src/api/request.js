import axios from "axios";
import store from "../store/Index";
import { baseUrl } from "../utils/data";

const token = localStorage.getItem("token");

const request = axios.create({
  baseURL: baseUrl,
});

request.interceptors.request.use((config) => {
  const newConfig = { ...config };

  if (token) {
    newConfig.headers = {
      ...newConfig.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return newConfig;
});

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response?.status === 400) {
      return Promise.reject(error.response?.data?.message);
    }

    if (error.response?.status === 403) {
      return Promise.reject(
        "Sorry! You're not authorized to perform this action"
      );
    }

    // if user's token has expired or has been blacklisted
    if (error.response?.status === 401) {
      // logout
      store.token = "";
    }
    return Promise.reject(error.response?.data?.message);
  }
);

export default request;
