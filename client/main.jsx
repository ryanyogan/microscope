Meteor.subscribe('posts');

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<Routes />, document.getElementById('app'));
  });
}
