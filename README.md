# Re-loading [![Build Status](https://travis-ci.org/ekonstantinidis/reloading.svg?branch=master)](https://travis-ci.org/ekonstantinidis/re-loading)
A Loading component for ReactJS.

### Example Usage

    var React = require('react');
    var Loading = require('reloading');

    var App = React.createClass({
      getInitialState: function () {
        return {
          loading: false
        };
      },

      doRequest: function () {
        this.setState({
          loading: true
        });
      },

      completeRequest: function () {
        this.setState({
          loading: false
        });
      },

      render: function() {
        return (
          <div>
            Hello, world! I am a React Loading Component.
            <Loading shouldShow={this.state.loading} text='Loading... Wont take long!' />
          </div>
        );
      }
    });


### Options
You can set the text that you would like to display when loading by setting the `text` props. More options coming really soon...

    <Loading shouldShow={this.state.loading} text='Checking your details...' />


### Example
Install `http-server` from npm, run it and go to http://127.0.0.1:8080/

    npm install -g http-server
    npm run serve
