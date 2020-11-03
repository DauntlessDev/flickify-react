import * as TYPES from "./authTypes";

const initState = {
  authToken: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      console.log("login success, token:", action.payload);
      return {
        ...state,
        authToken: action.payload,
      };

    case TYPES.SIGNOUT_SUCCESS:
      console.log("signout success");
      return state;

    default:
      return state;
  }
};

export default authReducer;
