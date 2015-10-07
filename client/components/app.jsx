App = React.createClass({
  render() {
    return (
      <div className='container'>
        <Header />

        {/* Render the react childen */}
        {this.props.children}

      </div>
    );
  }
});
