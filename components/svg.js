const React = require('react');

const SVG = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="750" height="1000" viewBox="0 0 750 1000">{this.props.children}</svg>);
  }
});

module.exports = SVG;
