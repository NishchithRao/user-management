import { imgInstance } from "../axios_instances/imgInstance";
import { notTokenInstance } from "../axios_instances/notTokenInstance";
import { tokenInstance } from "../axios_instances/tokenInstance";

export const plainPostCall = (url,data) => {
    console.log(url,data);
    return notTokenInstance.post(url,data);
};

export const authorizedPostCall = (url,data) => tokenInstance.post(url,data);

export const authorizedGetCall = url => tokenInstance.get(url);

export const authorizedPutCall = (url,data) => tokenInstance.put(url,data);

export const authorizedSetImgCall = (url,data) => imgInstance.put(url,data);

export const authorizedDeleteCall = (url) => tokenInstance.delete(url);