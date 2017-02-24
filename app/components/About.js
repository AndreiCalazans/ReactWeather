import React from 'react';

var About = (props)=>{
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a weather app, built on React. I have built this app to learn how to use React</p>
      <p>Here are some tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
