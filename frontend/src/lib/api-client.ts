import Axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }
  return config;
}

export const api = Axios.create({
  baseURL: import.meta.env.IS_DEVELOPMENT
    ? `http://localhost:3000/api/v1`
    : `${import.meta.env.API_BASE_URL}`,
  withCredentials: false,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error("API Error:", message);
    return Promise.reject(error);
  }
);

export const adminApi = Axios.create({
  baseURL: import.meta.env.IS_DEVELOPMENT
    ? `http://localhost:3000/admin/v1`
    : `${import.meta.env.ADMIN_API_BASE_URL}`,
  withCredentials: true,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error("API Error:", message);
    return Promise.reject(error);
  }
);
