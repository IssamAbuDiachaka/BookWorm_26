import axios, { type AxiosError } from "axios";
import { useAuthStore } from "@/stores/authStore";

const baseURL =
  import.meta.env.VITE_API_URL ?? "http://localhost:5000/api/v1";

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const LOGIN_PATH = "/login";

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      const path = typeof window !== "undefined" ? window.location.pathname : "";
      if (!path.toLowerCase().startsWith(LOGIN_PATH)) {
        window.location.href = LOGIN_PATH;
      }
    }
    const message =
      error.response && typeof error.response.data === "object" && error.response.data !== null && "message" in error.response.data
        ? String((error.response.data as { message?: unknown }).message)
        : error.message ?? "Something went wrong";
    return Promise.reject(new Error(message));
  }
);
