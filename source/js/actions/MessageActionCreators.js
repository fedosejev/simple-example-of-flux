var Dispatcher = require('../dispatcher/Dispatcher');

function changeMessage() {
  var action = {
    type: 'change_message',
    message: 'Putting in more effort actually matters.'
  };

  Dispatcher.dispatch(action);
}

module.exports = {
  changeMessage: changeMessage
};