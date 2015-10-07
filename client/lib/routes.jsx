const {
  Router,
  Route
} = ReactRouter;

Routes = React.createClass({
  render() {
    return (
      <Router history={ReactRouter.lib.BrowserHistory.history}>
        <Route component={App}>
          <Route path='/' component={PostsContainer} />
        </Route>
      </Router>
    );
  }
});
