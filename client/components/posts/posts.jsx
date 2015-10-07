PostsContainer = React.createClass({
  //TODO: Create a decorator for this mixin
  mixins: [ReactMeteorData, SpinnerMixin],

  getMeteorData() {
    let postsSubcribe = Meteor.subscribe('posts');
    return {
      subscriptions: [postsSubcribe],
      posts: Posts.find({}).fetch()
    }
  },

  render() {
    return (
      <PostsList posts={this.data.posts} />
    );
  }
});
