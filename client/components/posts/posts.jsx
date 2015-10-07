PostsContainer = React.createClass({
  //TODO: Create a decorator for this mixin
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      posts: Posts.find({}).fetch()
    }
  },

  render() {
    return (
      <PostsList posts={this.data.posts} />
    );
  }
});
