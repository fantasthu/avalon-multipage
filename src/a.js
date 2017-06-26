import * as avalon from 'avalon2';
require('components/header');
const $ = require('jquery');
const eventbus = require('plugins/EventBus.js');

const model = avalon.define({
  $id: 'start',
  name: '12',
  onReady: () => {
    eventbus.on('pdo',(params)=>{
      console.log(params);
    });
    console.log('ready');
  },
  getRootFun: () => {
    avalon.log('Root|' + model.name);
  }
})
