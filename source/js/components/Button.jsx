var React = require('react');
var MessageActionCreators = require('../actions/MessageActionCreators');

var Button = React.createClass({

  handleClick: function () {
    MessageActionCreators.changeMessage();
  },

  render: function () {
    return <button onClick={this.handleClick}>Change message</button>;
  }
});

module.exports = Button;