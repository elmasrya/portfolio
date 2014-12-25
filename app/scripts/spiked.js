(function(){

  App.Views.Spiked = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#spikedTemp').html()),

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
