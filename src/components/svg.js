const React = require('react');

const SVG = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000">{this.props.children}</svg>);
  }
});

module.exports = SVG;
