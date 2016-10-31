const React = require('react');

const Image = require('../image');

const Right = React.createClass({
  propTypes: {
    concept: React.PropTypes.string
  },

  render() {
    return (
      <g id="Concept_x5F_right" transform="matrix(6.240354e-002 0 0 6.240354e-002 468.3441 805.3373) scale(6) translate(0, -80)">
        <Image name={this.props.concept} />
      </g>
    );
  }
});

module.exports = Right;
