const React = require('react');
const Ace   = require('./ace');
const Text   = require('./text');
const Element = require('./element');

const PlayingCard = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    symbol: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      text: "Yo",
      symbol: "♠︎",
      color: "black"
    };
  },

  render() {
    const symbolStyle = {
      fontSize: "130px",
      fill: this.props.color
    };

    const textStyle = {
      fontSize: "70px",
      fill: this.props.color
    };

    const borderStyle = {
      fill: "#ffffff",
      stroke: this.props.color,
      strokeWidth: "5",
    };

    return (
      <g>
        <rect
           rx="50"
           ry="50"
           width="740"
           height="990"
           x="5"
           y="5"
           style={borderStyle}
        />

        <Element transform="translate(100, 80)">
          <Text text={this.props.text} style={textStyle}/>
        </Element>

        <Element transform="translate(100, 220) scale(1.5)">
          <Text text={this.props.symbol} style={symbolStyle}/>
        </Element>

        <Element transform="translate(650, 780) scale(-1.5)">
          <Text text={this.props.symbol} style={symbolStyle}/>
        </Element>

        <Element transform="translate(650, 920) scale(-1)">
          <Text text={this.props.text} style={textStyle}/>
        </Element>

        <Element transform="translate(375, 500) scale(5)">
          <Text text={this.props.symbol} style={symbolStyle} />
        </Element>
      </g>
    );
  }
});

// <Ace arrangement="top" />
module.exports = PlayingCard;
// <text
//    transform="scale(-1.000000,-1.000000)"
//    id="text3069"
//    y="-846.08978"
//    x="-664.06226"
//    style="font-size:95.593079;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;fill:#000000;fill-opacity:1.0000000;stroke:none;stroke-width:1.0000000pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1.0000000;font-family:Bitstream Vera Serif;text-anchor:start;writing-mode:lr-tb">
//    <tspan y="-846.08978" x="-664.06226" id="tspan3071">Haha</tspan>
// </text>
