TestUtils = React.addons.TestUtils;
Simulate = TestUtils.Simulate;

renderComponent = (component, props) => {
  return TestUtils.renderIntoDocument(
    React.createElement(component, props)
  );
};

simulateClickOn = ($el) => {
  Simulate.click($el[0]);
};
