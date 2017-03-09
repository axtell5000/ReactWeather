var React = require('react');

// var About = React.createClass({
//
//   render: function () {
//
//     return (
//       <h3>About Component</h3>
//     );
//
//   }
//
// });

//As long as the component has no state change and is just rendering we can render component like this:

var About = (props) => {
  return (
    <h3>About Components</h3>
  );
};

module.exports = About;
