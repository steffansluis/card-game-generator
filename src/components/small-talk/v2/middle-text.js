const React = require('react');

const splitText = require('../../../split-text');

const FONT_SIZE = 48;
const MAX_TEXT_LENGTH = 32;

const MiddleText = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      text: 'De motoren van de windmolen werkt aan de hand van inductie.'
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'FuturaLight',
      fontSize: `${FONT_SIZE}px`
    };

    let text = this.props.text;
    let lines = splitText(text, MAX_TEXT_LENGTH);

    return (
      <g id="tekst_concept">
        <text style={{ textAnchor: "middle" }} transform="matrix(1 0 0 1 46.8754 477.155) translate(350, -50)">
          {lines.map((line, i) => {
            let yAnchor = i*58;
            return (<tspan style={tspanStyle} x={0} y={yAnchor}>{line}</tspan>);
          })}
        </text>
      </g>
    );
  }
});

module.exports = MiddleText;
