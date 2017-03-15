var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')


var ErrorModal = React.createClass({

  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  proTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () { //a provided method to do something after everythin is bootstrapped together

    var {title,message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));//new instance of Foundation Modal which is done after component is created
    modal.open();
  },
  render: function () {


    return (
      <div></div>
    );


  }

});


module.exports = ErrorModal;
