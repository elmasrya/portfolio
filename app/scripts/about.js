(function(){

  App.Views.About = Backbone.View.extend({

    el                : '#middle',


    template        : _.template($('#aboutTemp').html()),

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
