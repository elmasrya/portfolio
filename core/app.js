var appId = "pusDm6j1oV9U3Im5Yj0tFBozS982NcJmqHT4hm5R";
var jsId = "ZbnPUnuT6K0AMc8NjMzNWeFe4JhUjT2lybR0GewJ"

Parse.initialize(appId, jsId);


(function () {

  App.router = new App.Routers.AppRouter();
  Parse.history.start();

  new App.Views.Nav();
  new App.Views.Footer();
}());
