import { addUser, deleteUser, getUser, removeCurrentUser, udpateUser } from "../../../../helpers/methods";
import initialState from '../state';
const user = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER": {
      return {
        ...state,
        users: deleteUser(state, action.value)
      }
    }
    case "SET_ANOTHER_USER": {
      console.log('yy');
      return {
        ...state,
        anotherUser: action.value
      }
    }
    case "ALL_USERS": {
      return {
        ...state,
        users: removeCurrentUser(action.value)
      }
    }
    
    case "PROFILE": {
      return {
        ...state,
        profile: action.value
      }
    }
    case "START_LOADING": {
      return {
        ...state,
        isLoading: action.value
      }
    }
    case "SUCCESS": {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        error: ''
      }
    }
    case "ERROR": {
      return {
        ...state,
        error: action.value,
        isLoading: false,
        isSuccess: false
      }
    }
    default: return state
  }
};

export default user;