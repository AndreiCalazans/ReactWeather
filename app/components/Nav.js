import React from 'react';
import {Link, IndexLink} from 'react-router';
require('../styles/nav.css');


var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h1>NavComponent</h1>
        <IndexLink activeClassName='active' to='/'>Get Weather</IndexLink>
        <Link activeClassName='active' to="/about">About</Link>
        <Link activeClassName='active'  to="/examples">Examples</Link>
      </div>
    );
  }
});


module.exports = Nav;
