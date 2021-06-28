import { verify } from "jsonwebtoken";
import { secret, possibleErrors } from "./constants";

export const addUser = (state,user) => {
    let currentState = {...state};
    console.log(currentState);
    currentState.users.unshift(user);
    return currentState.users
}
export const removeCurrentUser = (state) => {
    let {_id} = decodeToken();
    let currentState = [...state];
    return currentState.filter(user => user._id!==_id)||[];
}

export const deleteUser = (state,user) => {
    let currentState = {...state};
    let currentUserID = currentState.users.findIndex(existingUser => existingUser._id === user._id);
    currentState.users.splice(currentUserID,1);
    return currentState.users;
}


export const checkIfLoggedIn = () => {
    let token = localStorage.getItem("token");
    if(!token) {
        return false;
    }
    try {
        verify(token,secret);
    } catch (error) {
        return false;
    }
    return true;
}

export const setToken = token => {
    localStorage.setItem('token',token);
};

export const decodeToken = () => {
    let token = localStorage.getItem("token");
    let check;
    if(!token) {
        return false;
    }
    try {
        check = verify(token,secret);
    } catch (error) {
        console.log(error);
        return false;
    }
    return check || JSON.parse(check.data);
}

export const processError = err => {
    let apiError = err.code || err.message || err;
    return possibleErrors.find(error => error.code === apiError)?.message || apiError;
};

export const formValidation = data => {
    let validate = Object.keys(data).find(item => data[item]==="") ? true:false;
    return validate;
}
export const finalName = (firstName,lastName) => `${firstName} ${lastName}`;

export const finalDOB = ({dd,mm,yy}) => `${dd} ${mm} ${yy}`;

export const returnRole= role => role===0 ? 'regular' : (role===2 ? 'admin':'manager');

export const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.href="/login";
}