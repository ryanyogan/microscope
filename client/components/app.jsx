App = React.createClass({
  render() {
    const posts = [{
      _id: 1,
      url: 'http://google.com',
      title: 'Google'
    }, {
      _id: 2,
      url: 'http://ryanyogan.com',
      title: 'Ryan Yogan'
    }, {
      _id: 3,
      url: 'http://meteor.com',
      title: 'Meteor'
    }];

    return (
      <div className='container'>
        <Header />

        <PostsList posts={posts} />
      </div>
    );
  }
});
