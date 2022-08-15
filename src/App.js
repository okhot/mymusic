
import './App.css';
import { BrowserRouter as Router, Routers, Routes } from 'react-router-dom';
import SideBar from './Components/sidebar/SideBar';
import Login from './Components/screens/auths/Login';

function App() {
  return (
   <Router>
    <Login />
    <SideBar />
   </Router>
  );
}

export default App;
