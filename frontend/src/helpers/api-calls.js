import axios from "axios";
import { notTokenInstance } from "../axios_instances/notTokenInstance";
import { tokenInstance } from "../axios_instances/tokenInstance";

export const plainPostCall = (url,data) => {
    console.log(url,data);
    return notTokenInstance.post(url,data);
};

export const authorizedPostCall = (url,data) => tokenInstance.post(url,data);


export const authorizedGetCall = url => tokenInstance.get(url);