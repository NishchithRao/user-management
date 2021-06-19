import { combineReducers } from "redux";
import formModule from './form';
import userModule from './user';

const formReducer = formModule.getReducers();
const userReducer = userModule.getReducers();
const saga = userModule.saga;

const main = {
    reducers: () => combineReducers({formReducer,userReducer}),
    saga: () => saga,
    actions: () => {userModule.getActions(),formModule.getActions()}
}


export default main;