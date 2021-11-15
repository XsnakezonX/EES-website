import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router";
import Home from './Components/Home';
import Blog from './Components/Blog';
import CommunityProjects from './Components/CommunityProjects';



function App() {
  return (
    <>
      <div className="App">


      <Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
        <Route exact path="/community" element={<CommunityProjects />} />
			</Routes>

      </div>
    </>
  );
}

export default App;
