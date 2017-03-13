var React = require('react');
var {Link} = require('react-router');

//As long as the component has no state change and is just rendering we can render component like this:

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Cairo'>Cairo</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
        <li>
          <Link to='/?location=Cape Town'>Cape Town</Link>
        </li>
      </ol>
    </div>
  );

};

module.exports = Examples;
