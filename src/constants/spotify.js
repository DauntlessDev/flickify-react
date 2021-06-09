export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "https://flickify.netlify.app/";
const redirectUri = "http://localhost:3000";
const clientId = "ef7f7c0211f24baf99e8f8de93c4b91e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
