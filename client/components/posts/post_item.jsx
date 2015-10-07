PostItem = React.createClass({
  returnDomain() {
    let a = document.createElement('a');
    a.href = this.props.post.url;
    return a.hostname;
  },

  render() {
    const post = this.props.post;

    return (
      <div className='post'>
        <div className='post-content'>
          <h3><a href={post.url}>{post.title}</a><span>{this.returnDomain()}</span></h3>
        </div>
      </div>
    );
  }
});
