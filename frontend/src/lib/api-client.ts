import Axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }

  config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    // 認証エラー時処理
    if (error.response?.status === 401) {
      alert(`認証エラー: ${message}`);
      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  }
);
