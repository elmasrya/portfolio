(function(){
  var count =1;
  App.Views.Book = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#bookTemp').html()),

    events: {
        'click .left' : 'left',
        'click .right': 'right',
    },

    initialize   : function () {
      this.render();
      $('.left').css("display","none");
      console.log(count);

    },

    render  : function () {
      this.$el.html(this.template);

    },

    left : function (e) {
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
    },

    right : function (e) {
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
    }

  });

}());
