var React = require('react');

module.exports = React.createClass({

  displayName: 'Reloading',

  render: function () {
    var content = this.props.text ? this.props.text : 'Loading...';
    content = this.props.faIcon ? React.createElement("i", {className: this.props.faIcon}, '') : content;

    return (
      React.createElement("div", {
        className: this.props.className,
        style: {
          display: this.props.shouldShow ? 'block' : 'none'
        }
      }, this.props.children ? this.props.children : content)
    );

  }

});
