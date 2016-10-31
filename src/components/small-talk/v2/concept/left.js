const React = require('react');

const Image = require('../image');


const Left = React.createClass({
  propTypes: {
    concept: React.PropTypes.string
  },

  render() {
      return (
        <g id="Concept_x5F_left" transform="matrix(0.1167 0 0 0.1167 97.6787 780.1014) scale(3.3) translate(-40, -20)">
          <Image name={this.props.concept} />
        </g>
      );
  }
});

module.exports = Left;
