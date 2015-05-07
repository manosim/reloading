var React = require('react');

var loadingStyle = {};

module.exports = React.createClass({

  displayName: 'Reloading',

  render: function () {
    var text = this.props.text ? this.props.text : 'Loading...';
    if (!this.props.shouldShow) {
      loadingStyle.display = 'none';
    } else {
      loadingStyle.display = 'block';
    }
    return (
      React.createElement("div", {style: loadingStyle}, text)
    );

  }

});
