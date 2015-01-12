(function(){

  App.Views.Footer = Parse.View.extend({

    el                : '#bottom',


    template        : _.template($('#footerTemp').html()),

    events: {
      'click .home'        :   'gohome',
      'click .projects'    :   'goprojects',
      'click .contact'     :   'gocontact'
    },

    initialize   : function () {
      this.render();

    },

    render  : function () {
      this.$el.html(this.template);

    },

    gohome    : function  () {
      App.router.navigate('', {trigger: true});
      new App.Views.Home();
    },

    goprojects  : function () {
      App.router.navigate('#/projects', {trigger: true});
      new App.Views.Projects();

    },

    gocontact : function () {
      App.router.navigate('#/contact', {trigger: true});
      new App.Views.Contact();
    }
    
  });

}());
