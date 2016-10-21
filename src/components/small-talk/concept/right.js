const React = require('react');

const Text   = require('../../text');
const Element = require('../../element');

const FONT_SIZE = 32;

const Right = React.createClass({
  propTypes: {
    concept: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      concept: 'graphs',
      color: '#79CAF2'
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'Papyrus, fantasy',
      fontSize: `${FONT_SIZE}px`
    };

    return (
      <g id="Concept_x5F_right">
        <g>
          <polygon style={{ fill:this.props.color }} points="381.5,997.5 381.5,651.1 748,736.2 748,997.5 		"/>
          <path d="M384,654.3l361.5,83.8l0,256.9H384V654.3 M379,648v352h371.5l0-265.8L379,648L379,648z"/>
        </g>
        <rect x="429" y="950.6" style={{ fill:'none' }} width="270.4" height="28.7"/>
        <Element transform={"matrix(1 0 0 1 496.4951 978.3255) translate(85, -10)"}><Text text={this.props.concept} tspanStyle={tspanStyle}/></Element>
        <g id="Image_x5F_right">
          <rect x="429" y="748.3" style={{ fill: '#FFFFFF', stroke: '#000000', strokeWidth: 3 }} width="270" height="186.5"/>
        </g>
      </g>
    );
  }
});

module.exports = Right;
