(function () {


  App.Routers.AppRouter = Backbone.Router.extend({


    initialize: function () {
      Backbone.history.start();

    },

    routes: {
      ''                  : 'home',
      'projects'          : 'projects',
      'contact'           : 'contact'

    },

    home: function () {
      new App.Views.Home();
    },


    projects: function () {
      new App.Views.Projects();
    },

    contact: function () {
      new App.Views.Contact();
    }


  });

}());
