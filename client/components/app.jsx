App = React.createClass({
  //TODO: Create a decorator for this mixin
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      posts: Posts.find({}).fetch()
    }
  },

  render() {
    return (
      <div className='container'>
        <Header />

        <PostsList posts={this.data.posts} />
      </div>
    );
  }
});
