import formReducer from './reducers';
import actions from './actions'

const formModule = {
    getReducers: () => formReducer,
    getActions: () => actions
}
export default formModule;