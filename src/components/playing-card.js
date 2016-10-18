const React = require('react');
const Ace   = require('./ace');
const Text   = require('./text');
const Element = require('./element');

const borderStyle = {
  "color": "#000000",
  "fill": "#ffffff",
  "fillOpacity": "1",
  "fillRule": "nonzero",
  "stroke": "#000000",
  "strokeWidth": "5.0000000",
  "strokeLinecap": "butt",
  "strokeLinejoin": "miter",
  "strokeMiterlimit": "4.0000000",
  "strokeDashoffset": "0.0000000",
  "strokeOpacity": "1.0000000",
  "marker": "none",
  "markerStart": "none",
  "markerMid": "none",
  "markerEnd": "none",
  "visibility": "visible",
  "display": "block",
  "overflow": "visible"
};

const PlayingCard = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    symbol: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      text: "Yo",
      symbol: "♠︎"
    };
  },

  render() {
    const symbolStyle = {
      fontSize: "120px"
    };

    const textStyle = {
      fontSize: "50px"
    };

    return (
      <g>
        <rect
           rx="17.142857"
           ry="17.142857"
           width="740"
           height="990"
           x="5"
           y="5"
           id="rect1291"
           style={borderStyle}
        />

        <Element transform="translate(80, 80)">
          <Text text={this.props.text} style={textStyle}/>
        </Element>

        <Element transform="translate(80, 250) scale(1.5)">
          <Text text={this.props.symbol} style={symbolStyle}/>
        </Element>

        <Element transform="translate(600, 850) scale(-1.5)">
          <Text text={this.props.symbol} style={symbolStyle}/>
        </Element>

        <Element transform="translate(668, 825) scale(-1)">
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
