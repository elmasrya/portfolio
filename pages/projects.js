(function(){

  App.Views.Projects = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#projectsTemp').html()),

    events: {
      'click .book'   : 'gobook',
      'click .game'   : 'gogame',
      'click .bricks' : 'gobricks',
      'click .wilma'  : 'gowilma',
      'click .blog'   : 'goblog',
      'click .spiked' : 'gospiked',
      'click .surf'   : 'gosurf',
    },

    initialize   : function () {
      this.render();

    },

    render  : function () {
      this.$el.html(this.template);

    },

    gobook: function () {
      App.router.navigate('#/book', {trigger: true});
      new App.Views.Book();
    },

    gogame: function () {
      App.router.navigate('#/game', {trigger: true});
      new App.Views.Game();
    },

    gobricks: function () {
      App.router.navigate('#/bricks', {trigger: true});
      new App.Views.Bricks();
    },

    gowilma: function () {
      App.router.navigate('#/wilma', {trigger: true});
      new App.Views.Wilma();
    },

    goblog: function () {
      App.router.navigate('#/blog', {trigger: true});
      new App.Views.Blog();
    },

    gospiked: function () {
      App.router.navigate('#/spiked', {trigger: true});
      new App.Views.Spiked();
    },

    gosurf: function () {
      App.router.navigate('#/surf', {trigger: true});
      new App.Views.Surf();
    }


  });

}());
