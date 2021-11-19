import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Blog from "./Components/Blog";

import Navbar from "./Components/Nav/Navbar";

import Landing from "./Components/Landing";
import Footer from "./Components/Nav/Footer";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			

			<Routes>
				<Route exact path="/landing" element={<Landing />} />
				<Route exact path="/" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
				
			</Routes>

			<Footer />
		</>
	);
}

export default App;
