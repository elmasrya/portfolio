(function () {



  App.Views.Book = Parse.View.extend({


    el                : '#middle',


    template        : _.template($('#bookTemp').html()),

    events: {

    },

    initialize   : function () {
      this.render();



    },

    render  : function () {
      this.$el.html(this.template);
      this.slider();
    },

    slider : function () {
      $("#slider3").responsiveSlides({
        auto: false, 
        manualControls: '#slider3-pager',
        maxwidth: 540
      });
      console.log("yes")

    }

  });

}());
