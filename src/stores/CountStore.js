var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


//object-assign表示 EventEmitter.prototype对象和自定的对象合并成一个对象赋值给 CountStore
var CountStore = assign({},   
  EventEmitter.prototype,    /*对象*/
   {
    count:0,

    getCount: function () {
      return this.count;
    },

    addCount: function (text) {
      // this.items.push(arr);

      this.count++;
    },


    /*事件驱动 增加数据以后要执行广播告诉视图数据发生变化了*/

    emitChange: function () {

      console.log('emitChange');
      this.emit('change');
    },

    //注册监听数据改变的事件
    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    //取消事件监听change
    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }
});

module.exports = CountStore;
