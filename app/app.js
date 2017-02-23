import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';


//Load foundations-sites
require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Weather}></IndexRoute>
      <Route path='/about' component={About}></Route>
      <Route path='/examples' component={Examples}></Route>
    </Route>

  </Router>,
  document.getElementById('app')
);
