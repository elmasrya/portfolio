(function(){

  App.Views.Home = Backbone.View.extend({

    el                : '#middle',


    template        : _.template($('#homeTemp').html()),

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
