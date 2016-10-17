const React = require('react');

const Element = React.createClass({
  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    transform: React.PropTypes.string,
    children: React.PropTypes.node
  },

  render() {
    return (
      <g x={this.props.x} y={this.props.y} transform={this.props.transform}>
        {this.props.children}
      </g>
    );
  }
});

module.exports = Element;
