Meteor.subscribe('posts');

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
