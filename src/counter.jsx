var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return { data: '', label: this.props.label };
  },
  componentWillMount: function () {
    this.fetchISSData();
  },
  componentDidMount: function() {
    setInterval(function() {
      this.fetchISSData();
    }.bind(this), 2000);
  },
  fetchISSData :function () {
    $.ajax({
       url: 'https://api.wheretheiss.at/v1/satellites/25544',
       dataType: 'json',
       data: { format: 'json' },
       success: function (result) {
         this.setState({ data: result[this.props.param] });
       }.bind(this),
       error: function () {
         alert('error getting ISS data. please try again later');
       }
    });
  },
  render: function() {
    return <div className="cw_comp_counter">
      <h1 className="text-center">{this.state.data}</h1>
      <p className="text-center">{this.state.label}</p>
    </div>
  }
});
