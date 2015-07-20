Meteor.startup(function () {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
});

Template.body.events({

});

Template.body.helpers({
  messages: function () {
    return Messages.find({}, { sort: { createdAt: 1 } });
  },
  users: function () {
    return Meteor.users.find();
  }
});

Template.body.onRendered(function () {
  var self = this;
  self.autorun(function () {
    Messages.find();
    $('.chat-discussion').scrollTop(Infinity);
  });
});