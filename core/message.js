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
