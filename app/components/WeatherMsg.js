import React from 'react';

// var WeatherMsg = React.createClass({
//   render: function(){
//     var {temp , location} = this.props
//     return (
//       <div className="WeatherMsg">
//         <p>it is {temp} in {location}</p>
//       </div>
//     )
//   }
// });

//refactoring destructing can be done inside of the argument instead of outside var {temp , location} = props
var WeatherMsg = ({temp , location})=> {
  return (
    <div className="WeatherMsg text-center">
      <p>it is {temp} in {location}</p>
    </div>
  )
};

module.exports  = WeatherMsg;
