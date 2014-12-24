(function(){

  App.Views.Contact = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#contactTemp').html()),

    events: {
        'click .submit'     :   'submit',
        'click .clear'      :   'clear',
        'click .contact'    :   'reinitialize'
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
      $( '.contactForm' ).fadeOut(500);
      $( '.messSent').delay(500);
      $( ".messSent" ).fadeIn( 500);


      // var message = new App.Models.Message({
      //   name: $('.nameVal').val(),
      //   email: $('.emailVal').val(),
      //   subject: $('.subVal').val(),
      //   message:$('.messVal').val(),
      // });
      //
      // message.save(null, {
      //   success:function() {
      //     console.log("Success");
      //     //Alerts are lame - but quick and easy
      //     $( ".contactForm" ).fadeOut( "slow", function() {
      //       // Animation complete.
      //     });
      //
      //   },
      //   error:function(e) {
      //     console.dir(e);
      //   }
      // });

    },

    clear     : function (e) {
      e.preventDefault();
      $('.nameVal').val('');
      $('.emailVal').val('');
      $('.subVal').val('');
      $('.messVal').val('');

    },

    reinitialize    : function (e) {
      e.preventDefault();
      location.reload();

    }

  });

}());
