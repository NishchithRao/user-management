import { call,put } from "redux-saga/effects";
import { InitRequest } from ".";
import { actions } from "../../.."
import { authorizedDeleteCall, authorizedGetCall, plainPostCall } from "../../../../helpers/api-calls";
import { userEndpoint,authEndpoint } from "../../../../helpers/constants";
import { processError } from "../../../../helpers/methods";

export function* addUser(action) {
    let {user} = actions;
    yield call(InitRequest);
    try {
    let {data} = yield call(plainPostCall,`${authEndpoint}/signup`,action.value);
    if(data.error) {
        throw new Error(data.error.code);
    }
    else {
        yield put(user.GET_ALL_USERS());
        yield put(user.SUCCESS(true));
    }
    }
    catch(error) {
        console.log(error);
        yield put(user.SUCCESS(false));
        yield put(user.ERROR(processError(error)));
    }
    finally {
        yield put({type:user.START_LOADING(false)});
    }
}

export function* getUserById(action) {
    let {user} = actions;
    try {
        let {data} = yield call(authorizedGetCall,`${userEndpoint}/${action.value}`);
        if(data.error) {
            throw new Error(data.error.code);
        }
        else {
            yield put(user.SUCCESS(true));
            yield put(user.SET_ANOTHER_USER(data));
            console.log(data);
        }
    } catch (error) {
        console.log(error);
        yield put(user.SUCCESS(false));
        yield put(user.ERROR(processError(error)));
    }
    finally {
        yield put({type:user.START_LOADING(false)});
    }
}

export function* deleteUserById(action) {
    let {user} = actions;
    try {
        let {data} = yield call(authorizedDeleteCall,`${userEndpoint}/${action.value}`);
        if(data.error) {
            throw new Error(data.error.code);
        }
        else {
            yield put(user.SUCCESS(true));
            yield put(user.GET_ALL_USERS());
            console.log(data);
        }
    } catch (error) {
        console.log(error);
        yield put(user.SUCCESS(false));
        yield put(user.ERROR(processError(error)));
    }
    finally {
        yield put({type:user.START_LOADING(false)});
    }
}