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
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application, built on React</p>
      <ul>
        <li>
          <a href="https://facrbook.github.io">React</a> - This was the JavaScript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
