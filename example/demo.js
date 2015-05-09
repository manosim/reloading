var React = require('react');
var Loading = require('../');

var loadingStyle = {
  textAlign: 'center',
  padding: '10px 0'
};

var Example1 = React.createClass({
  getInitialState: function () {
    return {
      loading: true
    };
  },

  toggleLoading: function () {
    this.setState({
      loading: !this.state.loading
    });
  },

  render: function() {
    return (
      <div className='row'>
        <h4>Example</h4>
        <div className='col-md-8' style={loadingStyle}>
          <Loading shouldShow={this.state.loading}>Loading... Give it a minute! - </Loading>
        </div>
        <div className='col-md-4'><button className='btn btn-block btn-default' onClick={this.toggleLoading}>Toggle</button></div>
      </div>
    );
  }
});

React.render(<Example1 />, document.getElementById('example1'));


var Example2 = React.createClass({
  getInitialState: function () {
    return {
      loading: true
    };
  },

  toggleLoading: function () {
    this.setState({
      loading: !this.state.loading
    });
  },

  render: function() {
    return (
      <div className='row'>
        <h4>Example</h4>
        <div className='col-md-8' style={loadingStyle}>
          <Loading shouldShow={this.state.loading} text='Checking your details...' />
        </div>
        <div className='col-md-4'><button className='btn btn-block btn-default' onClick={this.toggleLoading}>Toggle</button></div>
      </div>
    );
  }
});

React.render(<Example2 />, document.getElementById('example2'));


var Example3 = React.createClass({
  getInitialState: function () {
    return {
      loading: true
    };
  },

  toggleLoading: function () {
    this.setState({
      loading: !this.state.loading
    });
  },

  render: function() {
    return (
      <div className='row'>
        <h4>Example</h4>
        <div className='col-md-8' style={loadingStyle}>
          <Loading shouldShow={this.state.loading} className='example3-loading' />
        </div>
        <div className='col-md-4'><button className='btn btn-block btn-default' onClick={this.toggleLoading}>Toggle</button></div>
      </div>
    );
  }
});

React.render(<Example3 />, document.getElementById('example3'));


var Example4 = React.createClass({
  getInitialState: function () {
    return {
      loading: true
    };
  },

  toggleLoading: function () {
    this.setState({
      loading: !this.state.loading
    });
  },

  render: function() {
    return (
      <div className='row'>
        <h4>Example</h4>
        <div className='col-md-8' style={loadingStyle}>
          <Loading shouldShow={this.state.loading} faIcon='fa fa-refresh fa-spin' />
        </div>
        <div className='col-md-4'><button className='btn btn-block btn-default' onClick={this.toggleLoading}>Toggle</button></div>
      </div>
    );
  }
});

React.render(<Example4 />, document.getElementById('example4'));
