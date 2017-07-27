var Dispatcher = require('flux').Dispatcher;
var CountDispatcher = new Dispatcher();
//引入CountStore
var CountStore = require('../stores/CountStore');

//注册监听   监听Action的操作
CountDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_COUNT':
      CountStore.addCount(action.text);  /*执行 CountStore里面的方法*/
      CountStore.emitChange();  /*广播数据   通知数据改变*/
      break;
    default:

      // no op
  }
})

module.exports = CountDispatcher;
