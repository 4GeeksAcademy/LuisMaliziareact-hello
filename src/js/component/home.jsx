import React from "react";

import Navbar from "./navbar";

import Footer from "./footer";

import Jumbotron from "./jumbotron";

import GridCards from "./gridcard";


const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<GridCards />
			<Footer />
		</>
	);
};



export default Home;
