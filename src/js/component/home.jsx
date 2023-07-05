import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card img={"https://m.media-amazon.com/images/I/71kT2yfNZHL.jpg"} title={"This Cool Little Dude"}/>
				<Card img={"https://i.ytimg.com/vi/mAA0hJp5MvU/maxresdefault.jpg"}/>
				<Card />
				<Card />
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
