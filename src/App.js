
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routers, Routes } from 'react-router-dom';
import SideBar from './Components/sidebar/SideBar';
import Login from './Components/screens/auths/Login';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
function App() {
  return (
   <Router>
    <NavBar />
    <SideBar />
    <Home/>
   </Router>
  );
}

export default App;
