(function(){

  App.Views.Bricks = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#bricksTemp').html()),

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
