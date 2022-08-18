
import './App.css';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import './Pages/auths/Login';
import SideBar from './Components/sidebar/SideBar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './Pages/Home'
import Login from './Pages/auths/Login';


const unAuthenticatedUrls = ['login', 'callback'];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const access_token = useSelector(state => state.login.access_token);
  console.log(access_token);
  useEffect(() => {
    if(!access_token && !unAuthenticatedUrls.includes(location.pathname)) {
      navigate('/login', {replace: true});
    }
  }, [access_token]);

  return (
   <>
    
    <Routes>
    <Route element={<Login />} path="/login" exact />
    <Route element={<Login />} path="/callback" exact />
    <Route element={<Home />} path="/" exact />
    </Routes>
   
  </>
  );
}

export default App;
