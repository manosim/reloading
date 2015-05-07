/**
 * @jsx React.DOM
 */

var App = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a React thing.
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
