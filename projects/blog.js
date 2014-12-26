(function(){

  App.Views.Blog = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#blogTemp').html()),

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
