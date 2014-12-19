(function () {


  App.Routers.AppRouter = Backbone.Router.extend({


    initialize: function () {
      Backbone.history.start();

    },

    routes: {
      ''                  : 'home',
      'about'             : 'about',
    },

    home: function () {
      new App.Views.Home();
    },

    about: function () {
      new App.Views.About();
    }



  });

}());
