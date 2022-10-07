import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react';
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Blog from "./Components/Blog";

import Navbar from "./Components/Nav/Navbar";

// import Landing from "./Components/Landing";


function App() {
	return (
		<>
			{/*<Navbar />*/}
			

			<Routes>
				
				<Route exact path="/" element={<Home />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
				{/* <Route exact path="/landing" element={<Landing />} /> */}
				
			</Routes>

			
		</>
	);
}

export default App;
