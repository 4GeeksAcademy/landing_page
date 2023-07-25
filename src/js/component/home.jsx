import React from "react";

import Navbar from "./navbar"
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex justify-content-center my-5">
				<Card img={"https://m.media-amazon.com/images/I/71kT2yfNZHL.jpg"}/>
				<Card text={"this guy is cool"}/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
