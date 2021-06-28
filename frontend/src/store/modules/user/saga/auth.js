import {put, call, delay} from 'redux-saga/effects';
import { processError, setToken } from '../../../../helpers/methods';
import { plainPostCall } from '../../../../helpers/api-calls';
import { authEndpoint } from '../../../../helpers/constants';
import { actions } from '../../..';
import { InitRequest } from '.';

export function* creatNewUser(action) {
    const {user} = actions;
    try {
        yield call(InitRequest);
        console.log('create',action.value);
        const {data} = yield call(plainPostCall,`${authEndpoint}/signup`,action.value);
        console.log(data);
        if(data.error) {
           throw new Error(data.error.code);
        }
        else {
            console.log('yes');
            yield put(user.SET_ANOTHER_USER(data));
            yield put(user.SUCCESS(true));
            yield put(user.START_LOADING(false));
        }
    } catch (error) {
        console.log(error);
        yield put(user.ERROR(processError(error)));
        yield put(user.START_LOADING(false));
    }
}

export function* loginUser(action) {
    const {user} = actions;
        try {
            yield call(InitRequest);
            const {data} = yield call(plainPostCall,`${authEndpoint}/signin`,action.value);
            if(data.error) {
               throw new Error(data.error.code);
            }
            else {
                yield call(processAuth,data.token);
            }
        } catch (error) {
            yield put(user.ERROR(processError(error)));
        }
        finally {
            yield put({type:"START_LOADING",value:false});
        }
}

function* processAuth(token) {
    const {user} = actions;
    yield call(setToken,token);
    yield delay(100);
    console.table(localStorage.getItem("token"),100);
    yield put(user.GET_PROFILE());
    yield put(user.SUCCESS(true));
}