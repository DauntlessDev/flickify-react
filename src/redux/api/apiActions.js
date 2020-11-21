import * as TYPES from "./apiTypes";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export const fetchTokenSuccess = (token) => {
  return { type: TYPES.LOGIN_SUCCESS, payload: token };
};

export const fetchTokenFailure = (token) => {
  return { type: TYPES.LOGIN_ERROR };
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

    console.log('authtoken === "" ', token.access_token);
    console.log('token.access_token === "" ', token.access_token === "");

    if (typeof token.access_token === "undefined") {
      dispatch(fetchTokenFailure());
      spotify.setAccessToken(null);
    } else {
      dispatch(fetchTokenSuccess(token));

      spotify.setAccessToken(token);
      console.log('im')
      spotify.getMe().then((user) => {
        console.log("current user:", user);
      });
    }
  };
};
