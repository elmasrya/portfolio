(function(){

  App.Views.Wilma = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#wilmaTemp').html()),

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
