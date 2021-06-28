const initialState = {
    users: [],
    profile: {},
    anotherUser: {
      firstName: '',
    lastName: '',
    password: '',
    email: '',
    dob: {
        dd: '',
        mm: '',
        yy: ''
    },
    gender: '',
    address: {
        line1: '',
        state: '',
        city: '',
        pincode: '',
    }
    },
    isLoggedIn: false,
    isLoading: false,
    isSuccess: false,
    error: "",
  }

  export default initialState;