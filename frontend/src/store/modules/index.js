import { combineReducers } from "redux";
import formModule from './form';
import userModule from './user';

const form = formModule.getReducers();
const user = userModule.getReducers();
const saga = userModule.saga;

const main = {
    reducers: () => combineReducers({form,user}),
    saga: () => saga,
    actions: () => ({user:userModule.getActions(),form:formModule.getActions()})
}


export default main;