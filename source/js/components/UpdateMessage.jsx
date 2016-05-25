var React = require('react');
var Button = require('./Button.jsx');

var UpdateMessage = React.createClass({

  updateMessage: function () {
    console.log('Updating message...');
  },

  render: function () {
    return (
      <div>
        <textarea className="form-control" rows="3"></textarea>
        <Button onClick={this.updateMessage} />
      </div>
    );
  }
});

module.exports = UpdateMessage;