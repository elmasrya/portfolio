(function(){

  var count=1;

  App.Views.Book = Parse.View.extend({


    el                : '#middle',


    template        : _.template($('#bookTemp').html()),

    events: {

    },

    initialize   : function () {
      this.render();
      $('.left').css("display","none");
      count=1
      console.log(count);

    },

    render  : function () {
      this.$el.html(this.template);
      this.leftS();
      this.rightS();


    },

    leftS : function () {
      $('.left').on('click', function(e) {
        e.preventDefault();
        count--;
        console.log(count);
          $('.slides').animate({'margin-left':'+=720'});
          if (count===1) {
            $('.left').css("display","none");
          };
          if (count === 5) {
            $('.right').css("display","inline");
          }
      });
    },

    rightS : function () {
      $('.right').on('click', function(e) {
      e.preventDefault();
      count++;
      console.log(count);
      if (count > 1){
        $('.left').css("display","inline");
        $('.slides').animate({'margin-left':'-=720'});
      }
      if (count===6) {
        $('.right').css("display","none")
      }
    });
  }

  });

}());
