import axios from "axios";
import {
  apiConfig,
  requestInterceptor,
  responseInterceptor,
} from "../config/api";

// Create axios instance
const api = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
  withCredentials: apiConfig.withCredentials,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(requestInterceptor, (error) =>
  Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  responseInterceptor.success,
  responseInterceptor.error
);

export default api;
