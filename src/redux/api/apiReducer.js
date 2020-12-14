import * as TYPES from "./apiTypes";

const initState = {
  authToken: { "": undefined },
  loggedIn: false,
  user: { images: [{}] },
  myPlaylist: [],
  recentlyPlayed: [],
  newReleases: [],
  topTracks: [],
  artists: [],
  currentPlaylist: {
    owner: { display_name: "" },
    name: "",
    images: [{}],
    tracks: {
      items: [
        {
          added_at: "",
          track: {
            album: { name: "" },
            artists: [{ name: "" }],
            name: "",
            duration_ms: "",
          },
        },
      ],
      total: 0,
    },
  },
};

const apiReducer = (state = initState, action) => {
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
      return { ...state, loggedIn: false, user: { images: [{}] } };
    case TYPES.SET_USER:
      console.log("user info:", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.SET_MYPLAYLIST:
      console.log("my playlist:", action.payload);
      return {
        ...state,
        myPlaylist: action.payload,
      };
    case TYPES.SET_RECENTLY_PLAYED:
      console.log("my recently played:", action.payload);
      return {
        ...state,
        recentlyPlayed: action.payload,
      };

    case TYPES.SET_NEW_RELEASES_BROWSE:
      console.log("my new releases:", action.payload);
      return {
        ...state,
        newReleases: action.payload,
      };
    case TYPES.SET_TOP_TRACKS:
      console.log("my top tracks:", action.payload);
      return {
        ...state,
        topTracks: action.payload,
      };
    case TYPES.SET_TOP_ARTISTS_BROWSE:
      console.log("artists:", action.payload);
      return {
        ...state,
        artists: action.payload,
      };
    case TYPES.SET_CURRENT_PLAYLIST:
      console.log("current playlist:", action.payload);
      return {
        ...state,
        currentPlaylist: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
