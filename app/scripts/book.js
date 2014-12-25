(function(){

  App.Views.Book = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#bookTemp').html()),

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
