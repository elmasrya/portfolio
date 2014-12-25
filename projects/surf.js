(function(){

  App.Views.Surf = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#surfTemp').html()),

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
