import React from 'react';
import {Link} from 'react-router';

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Welcome to examples page</p>
      <ol>
        <li>
          <Link to='/?location=newyork'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
