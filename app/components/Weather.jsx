let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({

  getInitialState: function () { // getInitialState - built in function

    return {
      isLoading: false
    };

  },

  handleSearch: function (location) {

    let that = this;



    this.setState({isLoading: true});

    //return in openWeatherMap is important, this wont work otherwise
    openWeatherMap.getTemp(location).then(function (temp) {

      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });

    }, function (errorMessage) {

      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });

  },

  render: function () {

    let {location, temp, isLoading} = this.state;
    //
    // let location = this.state.location;
    // let temp = this.state.temp;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {//checking if there are values in temp and location
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );

  }

});

module.exports = Weather;
