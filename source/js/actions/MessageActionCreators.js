var Dispatcher = require('../dispatcher/Dispatcher');

function updateMessage(message) {
  var action = {
    type: 'update_message',
    message: message
  };

  Dispatcher.dispatch(action);
}

module.exports = {
  updateMessage: updateMessage
};