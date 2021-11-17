import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router";
import Home from './Components/Home';
import Blog from './Components/Blog';
import CommunityProjects from './Components/CommunityProjects';
import Navbar from './Components/Nav/Navbar';
import RightNavbar from './Components/Nav/RightNavBar';
import Landing from './Components/Landing';



function App() {
  return (
    <>
      

      

      <Routes>
        <Route exact path="/" element={<Landing />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
        <Route exact path="/community" element={<CommunityProjects />} />
			</Routes>
      
     
    </>
  );
}

export default App;
