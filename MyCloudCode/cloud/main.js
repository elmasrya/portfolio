var Mailgun = require('mailgun');

var domain = "sandboxd9441a65297a43d6bb54feea67e506f6.mailgun.org";
var apiKey = "key-369bf5a24ae9fa35ea583a9ca8b75ed0";

Mailgun.initialize(domain, apiKey);

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
