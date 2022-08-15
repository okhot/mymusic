
import './App.css';
import { BrowserRouter as Router, Routers, Routes } from 'react-router-dom';
import SideBar from './Components/sidebar/SideBar';
import Login from './Components/screens/auths/Login';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
   <Router>
    <NavBar />
    <Login />
    <SideBar />

   </Router>
  );
}

export default App;
