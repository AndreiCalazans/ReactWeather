import React from 'react';
import Nav from 'Nav';

// var Main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <Nav></Nav>
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//
//     );
//   }
// });


var Main = (props) => {
    return(
      <div>
        <Nav></Nav>
        <div className="row">
          <div className='columns medium-6 large-4 small-centered'>
            {props.children}
          </div>
        </div>
      </div>

    );
  }

module.exports  = Main;
