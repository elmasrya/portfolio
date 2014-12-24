(function () {


  App.Routers.AppRouter = Parse.Router.extend({


    initialize: function () {

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
      $('.messSent').css("display","none");
      new App.Views.Contact();
    }


  });

}());
