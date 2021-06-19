import axios from "axios";
import { baseUrl } from "../helpers/constants";

let token = localStorage.getItem("token");

export const tokenInstance = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
});


tokenInstance.interceptors.request.use(config => {
    return config;
});