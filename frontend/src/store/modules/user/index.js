import userReducer from './reducers';
import actions from './actions';
import {userSaga} from './saga';

const userModule = {
    getReducers: () => userReducer,
    getActions: () => actions,
    saga: userSaga
}

export default userModule;