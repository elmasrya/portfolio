Parse.initialize("2fJtmGo25VhG6f8veV632mmw2tYDFXaHeL3QQZ5x", "bzcKJOZdwXHnIrNwOrYROW13PNiGPyQlZXNKnDFX");


(function () {

  App.router = new App.Routers.AppRouter();
  Parse.history.start();

  new App.Views.Nav();
  new App.Views.Footer();
}());
