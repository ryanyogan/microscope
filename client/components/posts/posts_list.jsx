PostsList = React.createClass({
  renderPosts() {
    return this.props.posts.map((post) => {
      return <PostItem key={post._id} post={post} />;
    });
  },

  render() {
    const posts = this.props.post;

    return (
      <div className='posts'>
        {this.renderPosts()}
      </div>
    );
  }
});
