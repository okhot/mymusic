
import './App.css';
import { BrowserRouter as Router, Routers, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/sidebar/SideBar';

function App() {
  return (
   <Router>
    <SideBar/>
   </Router>
  );
}

export default App;
