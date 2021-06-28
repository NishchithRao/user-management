import form from './reducers';
import actions from './actions'

const formModule = {
    getReducers: () => form,
    getActions: () => actions
}
export default formModule;