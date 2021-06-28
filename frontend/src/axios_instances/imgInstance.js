import axios from "axios";
import { baseUrl } from "../helpers/constants";

let token = localStorage.getItem("token");

export const imgInstance = axios.create({
    baseURL: baseUrl,
    timeout: 50000
});


imgInstance.interceptors.request.use(config => {
    config.headers["authorization"] = `Bearer ${token}`;
    return config;
});

