var React = require('react');

//As long as the component has no state change and is just rendering we can render component like this:

var Examples = (props) => {
  return (
    <div>
      <h3>Examples</h3>
      <p>A list of examples</p>
    </div>
  );

};

module.exports = Examples;
