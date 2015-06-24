var React = require('react');
var Counter = require('./counter');

var apiEndPoint = 'https://api.wheretheiss.at/v1/satellites/25544';

// var ajax_call = function() {
//   $.ajax({
//      type: "GET",
//      dataType: "json",
//      url: apiEndPoint,
//      async: false,
//      success: function(data){
//         console.log(data);
//      }
//   });
// }
//
// var interval = 1000 * 2;
// setInterval(ajax_call, interval);


var App = React.createClass({
  updateData: function() {

  },
  render: function() {
    return <Counter param="altitude" label="miles"/>
  }
});

var counter = React.createElement(App);
React.render(counter, document.querySelector('#altitude'));
