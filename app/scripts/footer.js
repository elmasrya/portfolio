(function(){

  App.Views.Footer = Backbone.View.extend({

    el                : '#bottom',


    template        : _.template($('#footerTemp').html()),

    events: {

    },

    initialize   : function () {
      this.render();

    },

    render  : function () {
      this.$el.html(this.template);

    }

  });

}());
