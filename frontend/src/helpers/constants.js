
export const baseUrl = process.env.REACT_APP_BACKEND;

export const userEndpoint = `/user`;

export const authEndpoint = `/auth`;

export const secret = process.env.REACT_APP_SECRET;

export const possibleErrors = [
    {
        code: "auth/no-account-found",
        message: "No account found, please try with a different email"
    }, {
        code: "auth/invalid-password",
        message: "The Password is incorrect, please try again"
    },
    {
        code: "auth/account-exists",
        message: "Account already exists, please login or try with a different email"
    }
]

export const months = ["January", "February", "March", "April", "May"
    , "June", "July", "August", "September", "October", "November", "December"];

export const allowedActions = ["CREATE_USER", "SET_ANOTHER_USER","LOGIN_USER", "ERROR", "SUCCESS", "START_LOADING", "FIRST_NAME",
    "LAST_NAME", "PASSWORD", "EMAIL", "DOB_DD", "DOB_MM", "DOB_YY", "GENDER", "ADDRESS_LINE1", 
    "ADDRESS_CITY", "ADDRESS_STATE", "ADDRESS_PINCODE", "LOGIN_USER"];

    export const imgUrl = id => `${baseUrl}${userEndpoint}/picture/${id}`;