import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router";
import Home from './Components/Home';
import Blog from './Components/Blog';



function App() {
  return (
    <>
      <div className="App">


      <Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
			</Routes>

      </div>
    </>
  );
}

export default App;
