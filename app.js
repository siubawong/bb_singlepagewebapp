// Filename: app.js
define([
  'jquery',
  'basemodel'
], function($, BaseModel){
  
  var initialize = function(){
    var model = new BaseModel.BaseModel({ model: 'test', parent: 'hello' });
  }

  return {
    initialize: initialize
  };
});
