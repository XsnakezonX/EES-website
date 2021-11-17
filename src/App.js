import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import CommunityProjects from "./Components/CommunityProjects";
import Navbar from "./Components/Nav/Navbar";
import RightNavbar from "./Components/Nav/RightNavBar";
import Landing from "./Components/Landing";
import Footer from "./Components/Nav/Footer";

function App() {
	return (
		<>
			<Navbar />
			<RightNavbar />

			<Routes>
				<Route exact path="/landing" element={<Landing />} />
				<Route exact path="/" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
				<Route
					exact
					path="/community"
					element={<CommunityProjects />}
				/>
			</Routes>

			<Footer />
		</>
	);
}

export default App;
