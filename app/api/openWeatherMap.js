import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=68dbecf712125dc81f22e6efb64d1fd3&units=metric';

// 68dbecf712125dc81f22e6efb64d1fd3
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requiresUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requiresUrl).then(function(res){
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        var result = {
          name: res.data.name,
          temp: res.data.main.temp
        };
        return result;
      }
    }, function(res){
      throw new Error(res.data.message);
    })
  }
}
