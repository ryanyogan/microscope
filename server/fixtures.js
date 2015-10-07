if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'React is fun with Meteor',
    url: 'http://meteor.com/tutorial'
  });

  Posts.insert({
    title: 'Meteor is awesome',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'Normally I use Immutable.js',
    url: 'http://code.facebook.com/immutable'
  });
}
