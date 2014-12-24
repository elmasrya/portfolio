
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

var Mailgun = require('mailgun');
Mailgun.initialize('sandboxd9441a65297a43d6bb54feea67e506f6.mailgun.org', 'key-ef9d5ddd5e74b17dad90d51da90668b7');

Parse.Cloud.afterSave("Message", function(request, response) {

  var text = "Comment Email\n" +
  "From: "+request.object.get("name") + "\n"+
  "Email: "+request.object.get("email") + "\n"+
  "Subject: "+request.object.get("subject") + "\n\n"+
  "Message:\n" + request.object.get("message");

  Mailgun.sendEmail({
    to: "andrewelmasry@gmail.com",
    from: request.object.get("email"),
    subject: "Comment Form - " + request.object.get("subject"),
    text: text
  }, {
    success: function(httpResponse) {
      response.success();
    },
    error: function(httpResponse) {
      console.error(httpResponse);
      response.error("Uh oh, something went wrong");
    }
  });

});
