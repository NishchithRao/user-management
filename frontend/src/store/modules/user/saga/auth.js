import {put, call} from 'redux-saga/effects';
import { processError, setToken } from '../../../../helpers/methods';
import { notTokenInstance } from '../../../../axios_instances/notTokenInstance';
import { plainPostCall } from '../../../../helpers/api-calls';
import { authEndpoint } from '../../../../helpers/constants';

export function* creatNewUser(action) {
    try {
        yield put({type:"START_LOADING",value:true});
        put({type:"ERROR",value:""});
        const {data} = yield call(notTokenInstance,`${authEndpoint}/signup`,action.value);
        if(data.error) {
           throw new Error(data.error.code);
        }
        else {
        yield call({type: "NEW_USER",value: data});
        yield put({type: "SUCCESS",value: true});
        }
    } catch (error) {
        yield put({type: "ERROR",value: processError(error)});
    }
    finally {
        yield put({type:"START_LOADING",value:false});
    }
}

export function* loginUser(action) {
        try {
            yield put({type:"START_LOADING",value:true});
            yield put({type:"ERROR",value:""});
            console.log('action',action.value);
            const {data} = yield call(plainPostCall,`${authEndpoint}/signin`,action.value);
            if(data.error) {
               throw new Error(data.error.code);
            }
            else {
                console.log(data.token);
                yield call(setToken,data.token);
                yield put({type:"GET_PROFILE"});
            yield put({type: "SUCCESS",value: true});
            }
        } catch (error) {
            console.log(error);
            yield put({type: "ERROR",value: processError(error)});
        }
        finally {
            yield put({type:"START_LOADING",value:false});
        }
}