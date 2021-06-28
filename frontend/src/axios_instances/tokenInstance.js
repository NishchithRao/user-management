import axios from "axios";
import { baseUrl } from "../helpers/constants";


export const tokenInstance = axios.create({
    baseURL: baseUrl,
    timeout: 50000
});


tokenInstance.interceptors.request.use(config => {
    let token = localStorage.getItem("token");
    console.log(token);
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["content-type"] = "application/json";
    return config;
});

