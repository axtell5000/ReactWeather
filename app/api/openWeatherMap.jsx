var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9dba313d6b1b726cf959617d7ed78b15&units=imperial';


module.exports = {
  getTemp: function (location) {

    var encodedLocation = encodeURIComponent(location); //this cleans the input to avoid things like %20 etc in the url
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //axios uses promises
    //return is important leaving it out will make the promise in Weather.jsx not work - undefined
    return axios.get(requestUrl).then(function (res) {


      if(res.data.cod && res.data.message){

        throw new Error(res.data.message);

      } else {

        return {
           location: `${res.data.name}, ${res.data.sys.country}`,
           temp: Math.floor(res.data.main.temp)
        }

      }

    }, function (error) {
      throw new Error(error.response.data.message);
    });

  }
};
