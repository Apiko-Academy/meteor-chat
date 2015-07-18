// keyup validation
e.keyCode === 13 && Meteor.userId() && !e.shiftKey && e.target.value.trim()

// keydown validation
e.keyCode === 13 && !e.target.value.trim()