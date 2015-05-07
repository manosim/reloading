/**
 * @jsx React.DOM
 */

var React = require('react');
var Loading = require('../');

var App = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a React thing.
        <Loading shouldShow={true} text='Loading... Give it a minute!' />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
