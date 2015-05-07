var React = require('react');

var loadingStyle = {
    textAlign: 'center',
    padding: '5px 0',
    fontSize: '30px'
};

var Loading = React.createClass({

  getInitialState: function () {
    return {
      show: this.props.shouldShow,
      text: this.props.text || "Loading..."
    };
  },

  componentWillReceiveProps: function (newProps) {
    this.replaceState({
      show: newProps.shouldShow
    });
  },

  render: function () {
    var loading;
    if (!this.state.show) {
      loadingStyle.display = 'none';
    } else {
      loadingStyle.display = 'block';
    }
    return (
      <div style={loadingStyle}>{this.state.text}</div>
    );
  }
});

module.exports = Loading;
