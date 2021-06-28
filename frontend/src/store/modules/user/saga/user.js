import { call, put } from "redux-saga/effects";
import { InitRequest } from ".";
import { actions } from "../../..";
import { authorizedGetCall, authorizedPutCall, authorizedSetImgCall } from "../../../../helpers/api-calls";
import { imgUrl, userEndpoint } from "../../../../helpers/constants";
import { decodeToken, processError, removeCurrentUser } from "../../../../helpers/methods";

export function* getProfile(action) {
    let {user} = actions;
    try {
        yield call(InitRequest);
        let {_id} = decodeToken();
        const {data} = yield call(authorizedGetCall,`${userEndpoint}/`+_id);
        if(data.error) {
           throw new Error(data.error.code);
        }
        else {
            yield put(user.PROFILE(data));
            yield put(user.SUCCESS(true));
        }
    } catch (error) {
        yield put(user.SUCCESS(false));
        yield put(user.ERROR(processError(error)));
    }
    finally {
        yield put({type:"START_LOADING",value:false});
    }
}

export function* setProfilePicture(action) {
    const {user} = actions;
    try {
        yield call(InitRequest);
        let {data} = yield call(authorizedSetImgCall,userEndpoint+'/picture/'+action.value.id,action.value.formData);
        if(data.error) {
            throw new Error(data.error.code);
        }
        else {
            yield put(user.SET_ANOTHER_USER(data));
            yield put(user.SUCCESS(true));
        }
    } catch (error) {
        yield put(user.SUCCESS(false));
        yield put(user.ERROR(processError(error)));
    }
    finally {
        yield put(user.START_LOADING(false));
    }
}

export function* getAllUsers() {
    const {user} = actions;
    try {
        yield call(InitRequest);
        let {data} = yield call(authorizedGetCall,userEndpoint);
        if(data.error) {
            throw new Error(data.error.code);
        }
        else {
            console.log(data);
            yield put(user.ALL_USERS(data));
            yield put(user.SUCCESS(true));
        }
    } catch (error) {
        yield put(user.SUCCESS(false));
        yield put(user.ERROR(processError(error)));
    }
    finally {
        yield put({type:user.START_LOADING(false)});
    }
}

export function* processUser(data) {
    const {user} = actions;
    yield put(user.SET_ANOTHER_USER(data));
    yield put(user.SUCCESS(true));
}
export function* udpateUser(action) {
    const {user} = actions;
    try {
        yield call(InitRequest);
        console.log(action.value);
        let {data} = yield call(authorizedPutCall,userEndpoint+'/'+action.value._id,action.value.formData);
        if(data.error) {
            throw new Error(data.error.code);
        }
        else {
            yield put(user.GET_ALL_USERS());
            yield put(user.SUCCESS(true));
        }
    } catch (error) {
        console.log(error);
        yield put(user.SUCCESS(false));
        yield put(user.ERROR(processError(error)));
    }
    finally {
        yield put(user.START_LOADING(false));
    }
}