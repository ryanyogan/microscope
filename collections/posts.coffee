@Posts = new Meteor.Collection 'posts'

Meteor.methods
  post: (postAttributes) ->
    user = Meteor.user()
    postWithSameLink = Posts.findOne url: postAttributes.url

    # Ensure that the user is logged in
    if not user
      throw new Meteor.Error 401, "You need to login to post new stories"

    # Ensure the post has a title
    if not postAttributes.title
      throw new Meteor.Error 422, "Please fill in a headline"

    # Check that there are no previous posts with same link
    if postAttributes.url and postWithSameLink
      throw new Meteor.Error 302, "This link has already been posted", postWithSameLink._id

    # Pick out the whitelisted keys
    post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'),
      userId: user._id
      author: user.username
      submitted: new Date().getTime()
    )

    Posts.insert post


