const React = require('react');

const Text   = require('../../../text');
const Element = require('../../../element');

const FONT_SIZE = 32;

const Left = React.createClass({
  propTypes: {
    concept: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      concept: 'calculus',
      color: '#79CAF2'
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'Papyrus, fantasy',
      fontSize: `${FONT_SIZE}px`
    };

    return (
      <g id="Concept_x5F_left">
        <g>
          <polygon style={{ fill: this.props.color }} points="2.5,997.5 2.5,736.2 376.5,651.1 376.5,997.5 		"/>
          <path d="M374,654.3V995H5l0-256.8L374,654.3 M379,648L0,734.2L0,1000h379V648L379,648z"/>
        </g>
        <rect x="51" y="950.3" style={{ fill:'none' }} width="274.6" height="29.3"/>
        <Element transform={"matrix(1 0 0 1 100.5059 977.9912) translate(85, -10)"}><Text text={this.props.concept} tspanStyle={tspanStyle}/></Element>
        <g id="Image_x5F_left">
          <rect x="51" y="748.3" style={{ fill: '#FFFFFF', stroke: '#000000', strokeWidth: 3 }} width="274.6" height="186.5"/>
        </g>
      </g>
    );
  }
});

module.exports = Left;
