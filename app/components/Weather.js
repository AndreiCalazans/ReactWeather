import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMsg from 'WeatherMsg';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

require('../styles/GetWeather.scss');

var Weather = React.createClass({
  getInitialState:function(){
    return {
      isLoading: false

      }
  },
  handleSearch: function(location){
    var that  = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (result){
      var {temp, name} = result;
      that.setState({
        location: name,
        temp: temp,
        isLoading: false
      });
    }, function (errorMsg){
      that.setState({
        isLoading:false,
        errorMessage: errorMsg.message
      });

    });
  },
  componentDidMount:function(){
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var {isLoading , temp , location, errorMessage} = this.state;

    function renderMsg (){
      if(isLoading){
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMsg temp={temp} location={location}></WeatherMsg> ;
      }
    }

    function renderError(){

      if (typeof errorMessage === 'string'){

        return (

          <ErrorModal message={errorMessage} ></ErrorModal>
        )
      }
    }

    return (
      <div className="getWeather">
        <h1 className='text-center page-title'>Get Wheather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMsg()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
