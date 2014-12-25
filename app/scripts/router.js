(function () {


  App.Routers.AppRouter = Parse.Router.extend({


    initialize: function () {

    },

    routes: {
      ''                  : 'home',
      'projects'          : 'projects',
      'contact'           : 'contact',
      'book'              : 'book',
      'game'              : 'game',
      'bricks'            : 'bricks',
      'wilma'             : 'wilma',
      'blog'              : 'blog',
      'spiked'            : 'spiked',
      'surf'              : 'surf'

    },

    home: function () {
      new App.Views.Home();
    },


    projects: function () {
      new App.Views.Projects();
    },

    contact: function () {
      $('.messSent').css("display","none");
      new App.Views.Contact();
    },

    book: function () {
      new App.Views.Book();
    },

    game: function () {
      new App.Views.Game();
    },

    bricks: function () {
      new App.Views.Bricks();
    },

    wilma: function () {
      new App.Views.Wilma();
    },

    blog: function () {
      new App.Views.Blog();
    },

    spiked: function () {
      new App.Views.Spiked();
    },

    surf: function () {
      new App.Views.Surf();
    }




  });

}());
