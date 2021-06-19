import { addUser, deleteUser, getUser, udpateUser } from "../../../../helpers/methods";

const userReducer = (state = {
  users: [],
  profile: {},
  anotherUser: {},
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  error: ""
}, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        user: addUser(state, action.value),
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
        user: udpateUser(state, action.value)
      }
    }
    case "DELETE_USER": {
      return {
        ...state,
        users: deleteUser(state, action.value)
      }
    }
    case "GET_USER": {
      return {
        ...state,
        anotherUser: getUser(state, 1)
      }
    }
    case "PROFILE": {
      console.log("profile");
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
      console.log('success');
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        error: ''
      }
    }
    case "ERROR": {
      console.log('hello', action.value);
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

export default userReducer;