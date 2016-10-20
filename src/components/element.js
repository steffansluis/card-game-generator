const React = require('react');
const qs = require('qs');
const componentFor = require('../component-for');

const Element = React.createClass({
  propTypes: {
    transform: React.PropTypes.string,
    children: React.PropTypes.node,
    append: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps() {
    return {
      append: []
    }
  },

  render() {
    return (
      <g transform={this.props.transform}>
        {this.props.children}
        {this.props.append.map(child => {
          let [ component, query ] = child.split('?');
          let params = qs.parse(query);
          let Component = componentFor(component);
          return <Component {...params} />
        })}
      </g>
    );
  }
});

module.exports = Element;
