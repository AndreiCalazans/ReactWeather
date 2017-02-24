import React from 'react';
import {Link, IndexLink} from 'react-router';
require('../styles/nav.css');


var Nav = React.createClass({
  onSearch:function(e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    if( location.length > 0){
      this.refs.search.value = "";
      window.location.hash = '#/?location='+ encodedLocation;
    }
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink activeClassName='active' to='/'>Get Weather</IndexLink></li>
            <li><Link activeClassName='active' to="/about">About</Link></li>
            <li><Link activeClassName='active'  to="/examples">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" ref='search' placeholder='Search weather by city'/>
                </li>
                <li>
                  <input type="submit" className='button' value='Get Weather'/>
                </li>
              </ul>
            </form>
        </div>
      </div>
    );
  }
});


module.exports = Nav;
