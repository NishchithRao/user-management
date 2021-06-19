import { verify } from "jsonwebtoken";
import { secret, possibleErrors } from "./constants";
import history from "../history";

export const addUser = (state,user) => {
    let currentState = {...state};
    console.log(currentState);
    currentState.users.unshift(user);
    return currentState.users
}

export const udpateUser = (state,user) => {
    let currentState = {...state};
    let currentUserID = currentState.users.findIndex(existingUser => existingUser._id === user._id);
    currentState.users[currentUserID] = user;
    return currentState.users;
}

export const deleteUser = (state,user) => {
    let currentState = {...state};
    let currentUserID = currentState.users.findIndex(existingUser => existingUser._id === user._id);
    currentState.users.splice(currentUserID,1);
    return currentState.users;
}

export const getUser = (state,id) => {
    //TODO: fetch user
    let currentState = {...state};
    currentState.anotherUser = {name:'Nireekhsa'}
    return currentState.anotherUser;
}

export const checkIfLoggedIn = () => {
    let token = localStorage.getItem("token");
    let check;
    if(!token) {
        return false;
    }
    try {
        check = verify(token,secret);
        console.log(check);
    } catch (error) {
        return false;
    }
    return check;
}

export const setToken = token => {
    console.log(token);
    localStorage.setItem('token',token);
};

export const processError = err => {
    let apiError = err.message || err.code || err;
    return possibleErrors.find(error => error.code == apiError)?.message || apiError;
};

export const redirectTo = url => history.push(url);

export const formValidation = data => {
    let clear=false;
    let validate = Object.keys(data).map(item => {
        console.log(data[item].toString()==="");
        if(data[item].toString()==="") {
            return false;
        }
        return true;
    });
    return validate[validate.length-1];
}