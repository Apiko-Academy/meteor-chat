Template.ChatMessage.helpers({
  author: function () {
    return Meteor.users.findOne({ _id: this.userId });
  },
  timeFromNow: function() {
    return moment(this.createdAt).fromNow();
  },
  floatСlass: function () {
    return Meteor.userId() === this.userId ? 'right' : 'left'
  }
});

Template.ChatMessage.onRendered(function () {
  $('.chat-discussion').scrollTop(Infinity);
});