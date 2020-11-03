import * as TYPES from "./authTypes";

const initState = {
  authToken: { "": undefined },
  loggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      console.log("login success, token:", action.payload);
      return {
        ...state,
        loggedIn: true,
        authToken: action.payload,
      };

    case TYPES.LOGIN_ERROR:
      console.log("login error");
      return { ...state, loggedIn: false };

    case TYPES.SIGNOUT_SUCCESS:
      console.log("signout success");
      return { ...state, loggedIn: false };

    default:
      return state;
  }
};

export default authReducer;
