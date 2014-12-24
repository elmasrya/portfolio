(function(){

  App.Views.Projects = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#projectsTemp').html()),

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
