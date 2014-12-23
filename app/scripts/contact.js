(function(){

  App.Views.Contact = Backbone.View.extend({

    el                : '#middle',


    template        : _.template($('#contactTemp').html()),

    events: {
        'click .submit'     :   'submit',
        'click .clear'      :   'clear'
    },

    initialize   : function () {
      this.render();

    },

    render  : function () {
      this.$el.html(this.template);

    },

    submit    : function () {

    },

    clear     : function () {

    }

  });

}());
