var React = require('react');
var Counter = require('./counter');

module.exports = React.createClass({
  render: function() {
    return <div className="chart-wrapper">
      <div className="chart-title text-center">
        {this.props.title}
      </div>
      <div className="chart-stage " id="altitude">
      {this.props.widget}
      </div>
      <div className="chart-notes text-center">
        {this.props.caption}
      </div>
    </div>
  }
});
