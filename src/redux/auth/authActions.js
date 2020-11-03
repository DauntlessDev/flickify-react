import * as TYPES from "./authTypes";

export const fetchTokenSuccess = (token) => {
  return { type: TYPES.LOGIN_SUCCESS, payload: token };
};

export const getTokenFromResponse = () => {
  return (dispatch) => {
    const token = window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});

    console.log("Current Auth Token:", token);
    dispatch(fetchTokenSuccess(token));
  };
};
