import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../loginSlice";
import { loginEndpoint } from "../../spotify";
import "./Login.css";

function getParams(hash) {
  return hash.substr(1).split('&').reduce((acc, str) => {
    const [key, value] = str.split("=");
    return {
      ...acc,
      [key]: value
    }
  }, {});
}

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getParams(location.hash);
  const dispatch = useDispatch();

  useEffect(() => {
    if(auth.access_token) {
      dispatch(login(auth))
      navigate('/');
    }
  }, [auth]);

  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}  