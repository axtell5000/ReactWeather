let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let ErrorModal = require('ErrorModal');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({

  getInitialState: function () { // getInitialState - built in function

    return {
      isLoading: false
    };

  },

  handleSearch: function (location) {

    let that = this;



    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    //return in openWeatherMap is important, this wont work otherwise
    openWeatherMap.getTemp(location).then(function (objData) {

      that.setState({
        isLoading: false,
        location: objData.location,
        temp: objData.temp
      });

    }, function (e) {

      that.setState({
        isLoading: false,
        errorMessage: e.message
      });

    });

  },

  render: function () {

    let {location, temp, isLoading, errorMessage} = this.state;
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

    function renderError() {
      if(typeof errorMessage === 'string'){
        return (
          <errorModal/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );

  }

});

module.exports = Weather;
