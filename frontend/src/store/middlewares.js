import { allowedActions } from "../helpers/constants";
import { checkIfLoggedIn } from "../helpers/methods";

export const isLoggedIn =
    (store) =>
        (next) =>
            (action) => {
                console.log(action.type);
                if (!(allowedActions.includes(action.type))) {
                    console.log('yes');
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
  console.log("STATE UPDATE:",action.type);
  return;
};
