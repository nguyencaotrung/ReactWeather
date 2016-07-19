var React = require('react');

var WeatherMessage = ({temp,location}) => {
	
		return (
			<h1>The temperature at  {location} is {temp} </h1>
		)
};

module.exports = WeatherMessage;