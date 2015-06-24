var React = require('react');
var Counter = require('./counter');
var Chart = require('./chart');
var apiEndPoint = 'https://api.wheretheiss.at/v1/satellites/25544';

var altitude = React.createElement(Counter, {param: "altitude", label: "Kilometers", interval:'2000'});
var velocity = React.createElement(Counter, {param: "velocity", label: "KM/H", interval:'2000'});

var App = React.createClass({
  render: function() {
    return <div className='row'>
      <div className="col-sm-6 col-md-4">
        <Chart title="Altitude" caption="ISS Live Altitude above sea level" widget={altitude} />
      </div>
      <div className="col-sm-6 col-md-4">
        <Chart title="Velocity" caption="The Velocity of the ISS" widget={velocity} />
      </div>
      <div className="col-sm-6 col-md-4">
        <Chart title="Visibility" caption="The ISS is currently in visibility region" />
      </div>
    </div>
  }
});
var app = React.createElement(App, {});
React.render(app, document.querySelector('#react'));
