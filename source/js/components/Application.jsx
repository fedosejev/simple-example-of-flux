var React = require('react');
var MessageStore = require('../stores/MessageStore');
var Button = require('./Button.jsx');

var Application = React.createClass({

  getInitialState: function () {
    return {
      message: MessageStore.getMessage()
    };
  },

  setMessage: function () {
    this.setState({
      message: MessageStore.getMessage()
    });
  },

  componentDidMount: function () {
    MessageStore.addChangeListener(this.setMessage);
  },

  componentWillUnmount: function () {
    MessageStore.removeChangeListener(this.setMessage);
  },

  render: function () {
    return <section>
            <h1>{this.state.message}</h1>
            <Button />
          </section>;
  }
});

module.exports = Application;