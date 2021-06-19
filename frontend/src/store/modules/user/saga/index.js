import {takeEvery} from 'redux-saga/effects';
import { creatNewUser, loginUser } from './auth';
import { getProfile } from './user';


export function* userSaga() {
    console.log('enter');
    yield takeEvery("GET_PROFILE",getProfile);
    yield takeEvery("CREATE_USER",creatNewUser);
    yield takeEvery("LOGIN_USER",loginUser);
}
