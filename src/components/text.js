const React = require('react');

const textStyle = {
  textAnchor: "middle"
};

const tspanStyle = {
  alignmentBaseline: "middle"
};

const Text = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    style: React.PropTypes.object
  },

  render() {
    return (
      <text
         id="text3065"
         style={{...textStyle, ...this.props.style}}>
         <tspan style={tspanStyle} id="tspan3067">{this.props.text}</tspan>
      </text>
    );
  }
});

module.exports = Text;
