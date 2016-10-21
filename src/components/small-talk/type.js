const React = require('react');

const splitText = require('../../split-text');

const Ace   = require('../ace');
const Text   = require('../text');
const Element = require('../element');

const FONT_SIZE = 32;
const MAX_TITLE_LENGTH = 20;

const Type = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    color: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      type: 'general concept',
      color: '#B9F9A7'
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'Papyrus, fantasy',
      fontSize: `${FONT_SIZE}px`
    };

    let lines = splitText(this.props.type);
    console.log(lines);

    return (
      <g id="Type">
        <g>
          <polygon style={{ fill: this.props.color }} points="650,297.1 650,2.5 749,3.5 747.8,394.8 		"/>
          <path d="M652.5,5.1l94,0.9l-1.2,382.8L652.5,296L652.5,5.1 M647.5,0l0,298.1l102.7,102.7L751.5,1L647.5,0L647.5,0z"/>
        </g>
        <rect x="684.2" y="22" style={{ fill:'none' }} width="33" height="273.5"/>
        {lines.map((line, i) => {
          let yAnchor = lines.length > 1 ? 35 : 70;
          let transform = `rotate(90) translate(150, -700)`;
          return (<Element transform={transform}><Text text={line.toUpperCase()} tspanStyle={tspanStyle}/></Element>);
        })}

      </g>
    );
  }
});

module.exports = Type;
