const React = require('react');

const SVG = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render() {
    return (<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="scale(0.8)">{this.props.children}</g></svg>);
  }
});

module.exports = SVG;
