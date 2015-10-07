PostItem = React.createClass({
  render() {
    const post = this.props.post;

    return (
      <div className='post'>
        <div className='post-content'>
          <h3><a href={post.url}>{post.title}</a><span>{post.domain}</span></h3>
        </div>
      </div>
    );
  }
});
