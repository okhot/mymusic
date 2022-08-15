const authEndpoint ="https://accounts.spotify.com/authorize?"
const clientId = '7fa73c6f089e40b4b21698c9baf269d6'
const redirectUri = "http://localhost:3333"
const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;