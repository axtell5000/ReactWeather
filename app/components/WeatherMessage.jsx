var React = require('react');

// var WeatherMessage = React.createClass({
//
//
//
//   render: function () {
//
//     var {location, temp} = this.props;
//
//     // let location = this.props.location;
//     // let temp = this.props.temp;
//
//     return (
//       <h3>It's {temp} in {location}.</h3>
//     )
//   }
// });

//instead
//ES 6 we can destructure in parameter, this is the same as line 24
var WeatherMessage = ({location, temp}) => {

  // var {location, temp} = props;

  return (
    <h3>It's {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
