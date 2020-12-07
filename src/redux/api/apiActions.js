import * as TYPES from "./apiTypes";
import SpotifyWebApi from "spotify-web-api-js";

const s = new SpotifyWebApi();

export const fetchTokenSuccess = (token) => {
  return { type: TYPES.LOGIN_SUCCESS, payload: token };
};

export const fetchTokenFailure = (token) => {
  return { type: TYPES.LOGIN_ERROR };
};

export const signOutSuccess = () => {
  return { type: TYPES.SIGNOUT_SUCCESS };
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

export const setRecentlyPlayed = (recentlyPlayed) => {
  return { type: TYPES.SET_RECENTLY_PLAYED, payload: recentlyPlayed };
};

export const setTopTracks = (topTracks) => {
  return { type: TYPES.SET_TOP_TRACKS, payload: topTracks };
};

export const setArtists = (artists) => {
  return { type: TYPES.SET_TOP_ARTISTS_BROWSE, payload: artists };
};

export const setCurretPaylist = (playlist) => {
  return { type: TYPES.SET_CURRENT_PLAYLIST, payload: playlist };
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
        s.getMe()
          .then((user) => {
            console.log("user", user);
            dispatch(setUserInfo(user));
          })
          .catch(() => {
            console.log("error in user");
          });

        s.getUserPlaylists()
          .then((playlist) => {
            console.log("userplaylist", playlist);
            dispatch(setMyPlaylist(playlist.items));
          })
          .catch(() => {
            console.log("error in userplaylist");
          });

        s.getMyRecentlyPlayedTracks()
          .then((recently) => {
            console.log("recently", recently);
            dispatch(setRecentlyPlayed(recently.items));
          })
          .catch(() => {
            console.log("error in recently");
          });

        s.getNewReleases()
          .then((release) => {
            console.log("new release", release);
            dispatch(setNewReleases(release.albums.items));
          })
          .catch(() => {
            console.log("error in new releases");
          });

        s.getMyTopTracks()
          .then((topTracks) => {
            console.log("toptracks", topTracks);
            dispatch(setTopTracks(topTracks.items));
          })
          .catch(() => {
            console.log("error in topTracks");
          });

        s.getArtistRelatedArtists("4DAcJXcjX0zlQAZAPAx4Zb")
          .then((data) => {
            console.log("artist", data);
            dispatch(setArtists(data.artists));
          })
          .catch(() => {
            console.log("error in artist");
          });
      }

      window.location.hash = "";
    }
  };
};

export const navigateToCurrentPlaylist = (playlistId) => {
  return (dispatch) => {
    s.getPlaylist(playlistId)
      .then((data) => {
        console.log("current playlist", data);
        dispatch(setCurretPaylist(data));
      })
      .catch(() => {
        console.log("error in current playlist");
      });
  };
};
