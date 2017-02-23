import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMsg from 'WeatherMsg';
import openWeatherMap from 'openWeatherMap';
require('../styles/GetWeather.css');

var Weather = React.createClass({
  getInitialState:function(){
    return {
      isLoading: false
      }
  },
  handleSearch: function(location){
    var that  = this;
    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function (result){
      var {temp, name} = result;
      that.setState({
        location: name,
        temp: temp,
        isLoading: false
      });
    }, function (errorMsg){
      that.setState({isLoading:false});
      alert(errorMsg);
    });
  },
  render: function(){
    var {isLoading , temp , location} = this.state;

    function renderMsg (){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMsg temp={temp} location={location}></WeatherMsg> ;
      }
    }

    return (
      <div className="getWeather">
        <h1>Get Wheather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMsg()}
      </div>
    )
  }
});

module.exports = Weather;
