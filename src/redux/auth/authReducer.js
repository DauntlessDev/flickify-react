import * as TYPES from "./authTypes";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_ERROR:
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };

    case TYPES.LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: null,
      };

    case TYPES.SIGNOUT_SUCCESS:
      console.log("signout success");
      return state;

    default:
      return state;
  }
};

export default authReducer;
