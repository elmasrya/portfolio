(function() {

  App.Models.Message = Parse.Object.extend({

    className: 'Message',

    idAttribute: 'objectId',

    defaults: {
      name    : '',
      email  : '',
      subject : '',
      message : ''
    }

  });

}()); // end of IIF

(function(){

  App.Views.Contact = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#contactTemp').html()),

    events: {
      'click .submit'     :   'submit',
      'click .clear'      :   'clear',
    },

    initialize   : function () {
      this.render();
      $('.messSent').css("display","none");

    },

    render  : function () {
      this.$el.html(this.template);


    },

    submit    : function (e) {
      e.preventDefault();

      if($('.nameVal').val() === ""){
        $('.label1').empty();
        $('.label1').html('Please put a name').css("color","red");

        $('.label2').empty();
        $('.label2').html('Your E-mail:').css("color","black");
        $('.label3').empty();
        $('.label3').html('Subject:').css("color","black");
        $('.label4').empty();
        $('.label4').html('Message:').css("color","black");

        $('.errorSubmit').empty();
        $('.errorSubmit').html('You are missing a name').css("color","red");
        console.log('working');
      }
      else if($('.emailVal').val() === ""){
        $('.label2').empty();
        $('.label2').html('Please put a valid e-mail').css("color","red");

        $('.label1').empty();
        $('.label1').html('You Name').css("color","black");
        $('.label3').empty();
        $('.label3').html('Subject:').css("color","black");
        $('.label4').empty();
        $('.label4').html('Message:').css("color","black");

        $('.errorSubmit').empty();
        $('.errorSubmit').html('You are missing a valid e-mail').css("color","red");
        console.log('working');
      }
      else if($('.subVal').val() === ""){
        $('.label3').empty();
        $('.label3').html('Please put a subject').css("color","red");

        $('.label1').empty();
        $('.label1').html('You Name').css("color","black");
        $('.label2').empty();
        $('.label2').html('Your E-mail:').css("color","black");
        $('.label4').empty();
        $('.label4').html('Message:').css("color","black");

        $('.errorSubmit').empty();
        $('.errorSubmit').html('You are missing a subject').css("color","red");
      }

      else if($('.messVal').val() === ""){
        $('.label4').empty();
        $('.label4').html('Please put a message').css("color","red");


        $('.label1').empty();
        $('.label1').html('You Name').css("color","black");
        $('.label2').empty();
        $('.label2').html('Your E-mail:').css("color","black");
        $('.label3').empty();
        $('.label3').html('Message:').css("color","black");

        $('.errorSubmit').empty();
        $('.errorSubmit').html('You are missing a message').css("color","red");
      }

      else{


        var message = new App.Models.Message({
          name: $('.nameVal').val(),
          email: $('.emailVal').val(),
          subject: $('.subVal').val(),
          message:$('.messVal').val(),
        });

        message.save(null, {
          success:function() {
            console.log("Success");
            $( '.contactForm' ).fadeOut(500);
            $( '.messSent').delay(500);
            $( ".messSent" ).fadeIn( 500);
          },

          error:function(e) {
            alert('There was an error in sending the message');
          }

        });

      }/*end of else*/

    },

    clear     : function (e) {
      e.preventDefault();
      $('.nameVal').val('');
      $('.emailVal').val('');
      $('.subVal').val('');
      $('.messVal').val('');

    }

  });

}());

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

(function(){

  App.Views.Home = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#homeTemp').html()),

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

(function(){

  App.Views.Footer = Parse.View.extend({

    el                : '#bottom',


    template        : _.template($('#footerTemp').html()),

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

(function(){

  App.Views.Nav = Parse.View.extend({

    el                : '#top',


    template        : _.template($('#navTemp').html()),

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

var appId = "pusDm6j1oV9U3Im5Yj0tFBozS982NcJmqHT4hm5R";
var jsId = "ZbnPUnuT6K0AMc8NjMzNWeFe4JhUjT2lybR0GewJ"

Parse.initialize(appId, jsId);


(function () {

  App.router = new App.Routers.AppRouter();
  Parse.history.start();

  new App.Views.Nav();
  new App.Views.Footer();
}());
