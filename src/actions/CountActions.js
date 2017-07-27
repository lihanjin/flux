var CountDispatcher = require('../dispatcher/CountDispatcher');

var CountActions = {

  addCount: function (text) {
    CountDispatcher.dispatch({
      actionType: 'ADD_COUNT',
      text: text
    });
  },

};

module.exports = CountActions;
