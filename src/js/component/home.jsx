import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="counter-box text-center">
			<div className="clock"><i class="fa-regular fa-clock"></i></div>
			<div className="one">{props.digitOne}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="three">{props.digitThree}</div>
			<div className="four">{props.digitFour}</div>
			<div className="five">{props.digitFive}</div>
			<div className="six">{props.digitSix}</div>
		</div>
	);
};

SimpleCounter.PropTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter/1000);
	const three = Math.floor(counter/100);
	const two = Math.floor(counter/10);
	const one = Math.floor(counter/1);
	counter++;
	ReactDOM.render(
		<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
		document.querySelector('#app')
	)
}, 1000);

export default SimpleCounter;
