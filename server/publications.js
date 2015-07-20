Meteor.publish(null, function () {
  return Meteor.users.find({}, { fields: { color: 1, username: 1 } })
});