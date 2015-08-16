/**
   Object that describes the basic functionlaities of a model 
**/
define([
  'jquery',
  'core.helpers'  
], function($, Helpers){

  var ModelObject = function(options)
  {
    this.url = "";
    this.attributes = {};
  };

  /**
    @description: Base Model object that defines methods each model object in the application should have
  **/
  var BaseModel = $.extend(ModelObject, {
    
    initialize: function(options)
    {
      this.options = (options)? options: {};
    }, 

    setUrl: function(url)
    {
      this.url = url;
    },

    getUrl: function()
    {
      return this.url;
    },


    parse: function()
    {
      return this.attributes;
    },

    fetch: function(callbacks)
    {

    }
  });

  return {
    "BaseModel": BaseModel
  };
});