import { createStore, applyMiddleware, compose } from "redux";
import {isLoggedIn,logState} from './middlewares';
import createSagaMiddleware from 'redux-saga';
import main from './modules';
import { useSelector } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const allMiddlewares = applyMiddleware(isLoggedIn,logState,sagaMiddleware);

const enhancer = compose(allMiddlewares,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(main.reducers(),enhancer);

export const actions = main.actions();

sagaMiddleware.run(main.saga());

export default store;