import * as TYPES from "./apiTypes";
import SpotifyWebApi from "spotify-web-api-js";

const s = new SpotifyWebApi();

export const fetchTokenSuccess = (token) => {
  return { type: TYPES.LOGIN_SUCCESS, payload: token };
};

export const fetchTokenFailure = (token) => {
  return { type: TYPES.LOGIN_ERROR };
};

export const setUserInfo = (user) => {
  return { type: TYPES.SET_USER, payload: user };
};

export const setMyPlaylist = (myPlaylist) => {
  return { type: TYPES.SET_MYPLAYLIST, payload: myPlaylist };
};
export const setNewReleases = (newReleases) => {
  return { type: TYPES.SET_NEW_RELEASES_BROWSE, payload: newReleases };
};
export const setRecommendations = (recommendations) => {
  return { type: TYPES.SET_RECOMMENDATIONS_BROWSE, payload: recommendations };
};
export const setRecentlyPlayed = (recentlyPlayed) => {
  return { type: TYPES.SET_RECENTLY_PLAYED, payload: recentlyPlayed };
};
export const setArtists = (artists) => {
  return { type: TYPES.SET_TOP_ARTISTS_BROWSE, payload: artists };
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
    } else {
      dispatch(fetchTokenSuccess(token));

      console.log("token", token);

      if (token) {
        s.setAccessToken(token.access_token);
        s.getMe().then((user) => {
          console.log("user", user);
        });
      }

      window.location.hash = "";
    }
  };
};
