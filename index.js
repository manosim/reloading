var React = require('react');

var loadingStyle = {};

module.exports = React.createClass({

  displayName: 'Reloading',

  render: function () {
    var classname = this.props.className ? this.props.className : '';
    var content = this.props.text ? this.props.text : 'Loading';

    if (this.props.faIcon) {
      content = React.createElement("i", {className: this.props.faIcon}, '')
    }

    if (!this.props.shouldShow) {
      loadingStyle.display = 'none';
    } else {
      loadingStyle.display = 'block';
    }

    return (
      React.createElement("div", {className: classname, style: loadingStyle}, content)
    );

  }

});
