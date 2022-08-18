import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage, saveToStorage } from "./storage";

export const loginSlice = createSlice ({
    name: "Login",
    initialState: getFromStorage("auth") || {
       access_token: null,
       token_type: null,
       expires_in: 0,
    },
    reducers: {
      login: (state, action) => {
        state.access_token = action.payload.access_token;
        state.token_type = action.payload.token_type;
        state.expires_in = action.payload.expires_in;
        saveToStorage("auth", action.payload)
      },
      logout(state) {
        state.access_token = null;
        state.token_type = null;
        state.expires_in = 0;
        saveToStorage("auth", null);
      }

    }
})

export default loginSlice.reducer;
const {login, logout} = loginSlice.actions;

export {login, logout}