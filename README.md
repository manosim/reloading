# Reloading

[![npm version](https://badge.fury.io/js/reloading.svg)](http://badge.fury.io/js/reloading)
[![Build Status](https://travis-ci.org/ekonstantinidis/reloading.svg?branch=master)](https://travis-ci.org/ekonstantinidis/reloading)

> A Loading component for [React](http://facebook.github.io/react/).

### [Demo](https://ekonstantinidis.github.io/reloading)

### Installation

    npm install --save reloading


### Usage

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
            <Loading shouldShow={this.state.loading} />
          </div>
        );
      }
    });


### Properties

##### Custom Content
    <Loading shouldShow={this.state.loading}>Your content - images, text, whatever!</Loading>

##### Loading Text
    <Loading shouldShow={this.state.loading} text='Checking your details...' />

##### CSS Class
    <Loading shouldShow={this.state.loading} className='loading-wrapper' />

##### Font Awesome Icon
    <Loading shouldShow={this.state.loading} faIcon='fa fa-refresh fa-spin' />


### Development
Install `http-server` from npm, run it and go to http://127.0.0.1:8080/

    npm install -g http-server
    npm run serve

In another tab:

    npm run watch
