const React = require('react');

const SVG = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render() {
    return (<svg xmlns="http://www.w3.org/2000/svg">{this.props.children}</svg>);
  }
});

module.exports = SVG;
