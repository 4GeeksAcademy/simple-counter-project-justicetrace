//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import PropTypes from "prop-types";

//include images into your bundle
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

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 50;
setInterval(function() {
    const six = Math.floor(counter/100000).toString().split('').reverse()[0]
    const five = Math.floor(counter/10000).toString().split('').reverse()[0]
	const four = Math.floor(counter/1000).toString().split('').reverse()[0]
	const three = Math.floor(counter/100).toString().split('').reverse()[0]
	const two = Math.floor(counter/10).toString().split('').reverse()[0]
	const one = Math.floor(counter/1).toString().split('').reverse()[0]
	counter++;
	ReactDOM.createRoot(
		document.querySelector('#app')).render(
        <SimpleCounter digitSix={one} digitFive={two} digitFour={three} digitThree={four} digitTwo={five} digitOne={six}/>
	)
}, 1000);

export default SimpleCounter;

//render your react application
//ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

