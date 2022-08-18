import { getFromStorage } from "./storage";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "3f9d63fa23da403689fd104cbccec2ad";
const redirectUri = "http://localhost:3000/callback";
const scopes = ["user-library-read", "playlist-read-private", ""];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export function search(searchTerm = "top") {
  const { access_token } = getFromStorage("auth") || {};
  return fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
    headers: new Headers({
      Authorization: `Bearer ${access_token}`,
    }),
  });
}
