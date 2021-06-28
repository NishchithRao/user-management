import {put, takeEvery} from 'redux-saga/effects';
import { actions } from '../../..';
import { addUser, deleteUserById, getUserById } from './admin';
import { creatNewUser, loginUser } from './auth';
import { getAllUsers, getProfile, setProfilePicture, udpateUser } from './user';

export function* userSaga() {
    console.log('enter');
    yield takeEvery("GET_PROFILE",getProfile);
    yield takeEvery("CREATE_USER",creatNewUser);
    yield takeEvery("LOGIN_USER",loginUser);
    yield takeEvery("SET_PICTURE",setProfilePicture);
    yield takeEvery("GET_ALL_USERS",getAllUsers);
    yield takeEvery("ADD_USER",addUser);
    yield takeEvery("UPDATE_USER",udpateUser);
    yield takeEvery("DELETE_USER",deleteUserById);
    yield takeEvery("GET_USER",getUserById);
}


export function* InitRequest() {
    const {user} = actions;
    yield put(user.START_LOADING(true));
    yield put(user.ERROR(""));
}