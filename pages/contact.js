(function(){

  App.Views.Contact = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#contactTemp').html()),

    events: {
      'click .clear'      :   'clear',
    },

    initialize   : function () {
      this.render();
      $('.messSent').css("display","none");

    },

    render  : function () {
      this.$el.html(this.template);
      this.sendMessage();


    },

    sendMessage    : function () {

      $('.submit').on('click', function(){

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
        } else {

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

          error:function() {
            alert('There was an error in sending the message');
          }

        });
      };/*end of else*/
    }); /*end of jquery submit*/

    }/*end of send message*/,

    clear     : function (e) {
      e.preventDefault();
      $('.nameVal').val('');
      $('.emailVal').val('');
      $('.subVal').val('');
      $('.messVal').val('');

    }

  });

}());
