import { call, put } from "redux-saga/effects";
import { authorizedGetCall } from "../../../../helpers/api-calls";
import { userEndpoint } from "../../../../helpers/constants";
import { checkIfLoggedIn, processError } from "../../../../helpers/methods";

export function* getProfile(action) {
    try {
        yield put({type:"START_LOADING",value:true});
        yield put({type:"ERROR",value:""});
        console.log('11');
        let {_id} = checkIfLoggedIn();
        const {data} = yield call(authorizedGetCall,`${userEndpoint}/`+_id);
        console.log(data);
        if(data.error) {
           throw new Error(data.error.code);
        }
        else {
        yield put({type:"PROFILE",value: data});
        yield put({type: "SUCCESS",value: true});
        }
    } catch (error) {
        yield put({type: "ERROR",value: processError(error)});
    }
    finally {
        yield put({type:"START_LOADING",value:false});
    }
}