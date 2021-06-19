
export const baseUrl = process.env.REACT_APP_BACKEND;

export const userEndpoint = `/user`;

export const authEndpoint = `/auth`;

export const secret = process.env.REACT_APP_SECRET;

export const possibleErrors = [
    {
        code: "auth/no-account-found",
        "message": "No account found, please try with a different email"
    },{
        code: "auth/invalid-password",
        "message": "The Password is incorrect, please try again"
    }
]

export const months = ["January","February","March","April","May"
,"June","July","August","September","October","November","December"];