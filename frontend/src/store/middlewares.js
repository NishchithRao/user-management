import { checkIfLoggedIn } from "../helpers/methods";

export const isLoggedIn =
    (store) =>
        (next) =>
            (action) => {
                let {type} = action;
                if (!(type === "CREATE_USER" || type == "LOGIN_USER"
                    || type === "ERROR" || type === "SUCCESS" || type === "START_LOADING")
                ) {
                    if (!checkIfLoggedIn()) {
                        window.location.href="/login"
                        return;
                    }
                }
                next(action);
                return;
            };

export const logState = (store) => (next) => (action) => {
  next(action);
  console.log(store.getState());
  return;
};
