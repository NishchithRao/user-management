
const formReducer = (state={
    firstName:'',
    lastName:'',
    password:'',
    email:'',
    dob: {
        dd:'',
        mm:'',
        yy:''
    },
    gender:'',
    address:{
        line1:'',
        state:'',
        city:'',
        pincode:'',
    }
  }, {type,value}) => {
    switch (type) {
      case "FIRST_NAME": {
        return {
          ...state,
          firstName: value,
        };
      }
      case "LAST_NAME": {
          return {
            ...state,
            lastName: value,
          };
        }
      case "PASSWORD": {
          return {
              ...state,
              password: value
          }
      }
      case "EMAIL": {
          return {
              ...state,
              email: value
          }
      }
      case "DOB_DD": {
        return {
          ...state,
          dob: {...state.dob,dd:value}
        }
      }
      case "DOB_MM": {
          return {
            ...state,
            dob:{...state.dob,mm:value}
          }
        }
        case "DOB_YY": {
          return {
            ...state,
            dob: {...state.dob,yy:value}
          }
        }
      case "GENDER": {
        return {
          ...state,
          gender: value
        }
      }
      case "ADDRESS_LINE1": {
        console.log('success');
        return {
          ...state,
          address: {...state.address,line1:value}
        }
      }
      case "ADDRESS_CITY": {
          console.log('success');
          return {
            ...state,
            address: {...state.address,city:value}
          }
        }
        case "ADDRESS_STATE": {
          console.log('success');
          return {
            ...state,
            address: {...state.address,state:value}
          }
        }
        case "ADDRESS_PINCODE": {
          console.log('success');
          return {
            ...state,
            address: {...state.address,pincode:value}
          }
        }
      default: {
        return {...state}
      }
    }
  };
  
  export default formReducer;