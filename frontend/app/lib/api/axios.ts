import axios from "axios";
import { API_BASE_URL } from "../config/config";
import Cookies from "js-cookie";

const axiosInstance = axios.create(
    {
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }
);

axiosInstance.interceptors.request.use((config) => {
    config.headers["X-CSRF-Token"] = Cookies.get("csrf_token") || "";
    return config;
});

export default axiosInstance;