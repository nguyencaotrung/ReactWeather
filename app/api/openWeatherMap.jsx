var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=54e849bf6a667950e7aaad76b14bda2b&units=metric';

	
// ef584fc03439bb9cfb54e70e18c70a8c
	 
// 54e849bf6a667950e7aaad76b14bda2b
module.exports = {

	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestURL).then(function (res) {
			
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else {
				return res.data.main.temp;
			}
		},function (res) {
			throw new Error(res.data.message);
		});
	}
}