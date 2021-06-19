import axios from "axios";
import { baseUrl } from "../helpers/constants";


export const notTokenInstance = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    headers: {
        "Content-Type":"application/json"
    }
});


notTokenInstance.interceptors.request.use(config => {
    config.headers["Content-Type"] = "application/json";
    return config
});