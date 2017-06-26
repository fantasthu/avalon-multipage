const str = require('./index.html');
const eventbus = require('plugins/EventBus.js');
console.log(str);
const $ = require('jquery');
avalon.component('ms-view', {
  template: str,
  defaults: {
    content: "",
    doclick() {
      // 此处触发父组件事件
      console.log(eventbus);
      eventbus.emit('pdo', '11');
    },
  },

})
