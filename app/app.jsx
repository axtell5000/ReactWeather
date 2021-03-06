
var React = require('react');
var ReactDOM = require('react-dom');

//Using destructuring syntax - es6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//The es5 equivalent of above is, we have to do it three additional times for Router, IndexRoute, hashHistory
//var Route = require('react-router').Route;

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation.need to use those style and css loader modules,to help app to use the file properly
require('style!css!foundation-sites/dist/css/foundation.min.css');
//To start foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


//<Router> is available because of our require above
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,

  document.getElementById('app')
);
