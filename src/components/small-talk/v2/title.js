const React = require('react');

const splitText = require('../../../split-text');
const Image = require('./image');

const FONT_SIZE = 44;
const MAX_TITLE_LENGTH = 16;

const Title = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    field: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      title: 'inductie',
      field: 'Lucht en ruimtevaart',
      color: '#09AF28'
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'FuturaLight',
      fontSize: `${FONT_SIZE}px`
    };

    let title = this.props.title;
    let field = this.props.field;
    let lines = splitText(title, MAX_TITLE_LENGTH);

    return (
      <g id="titel" transform="translate(0, 20)">
      	<rect x="256" y="55.7" style={{ fill:'none' }} width="391.5" height="250.5"/>
        <g transform="scale(0.3) translate(100, 100)">
          <Image name={field} />
        </g>
      	<text transform="matrix(1 0 0 1 255.972 105.1758)">
          {lines.map((line, i) => {
            let yAnchor = i*72;
            return (<tspan style={tspanStyle} x={0} y={yAnchor}>{line.toUpperCase()}</tspan>);
          })}
        </text>
      </g>
    );
  }
});

module.exports = Title;
