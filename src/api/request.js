import axios from "axios";
import { useSnapshot } from "valtio";
import state from "../store/Index";
import { baseUrl } from "../utils/data";

const request = axios.create({
  baseURL: baseUrl,
});

request.interceptors.request.use((config) => {
  const snap = useSnapshot(state);
  const accessToken = snap.token;

  const newConfig = { ...config };

  if (accessToken) {
    newConfig.headers = {
      ...newConfig.headers,
      Authorization: `Bearer ${accessToken}`,
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
    const snap = useSnapshot(state);
    if (error.response?.status === 400) {
      console.log("error", error.response);
      return Promise.reject(error.response);
    }

    if (error.response?.status === 403) {
      return Promise.reject(
        "Sorry! You're not authorized to perform this action"
      );
    }

    // if user's token has expired or has been blacklisted
    if (error.response?.status === 401) {
      // logout
      snap.token = "";
    }
    return Promise.reject(error);
  }
);

export default request;
