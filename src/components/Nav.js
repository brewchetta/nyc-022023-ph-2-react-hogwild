import React from "react";
import Sort from './Sort'
import piggy from "../assets/porco.png";

const Nav = ({ handleGreased, handleChange }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={ handleGreased }>Greasted?</button>
			<Sort handleChange={handleChange} />
		</div>
	);
};

export default Nav;
