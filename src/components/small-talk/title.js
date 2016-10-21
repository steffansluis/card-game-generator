const React = require('react');

const splitText = require('../../split-text');

const Ace   = require('../ace');
const Text   = require('../text');
const Element = require('../element');

const FONT_SIZE = 32;
const MAX_TITLE_LENGTH = 40;

const Title = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      title: 'probability and statistics',
      color: '#09AF28'
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'Papyrus, fantasy',
      fontSize: `${FONT_SIZE}px`
    };

    let lines = splitText(this.props.title, MAX_TITLE_LENGTH);

    return (
      <g id="Title">
        <g>
          <rect x="2.5" y="2.5" style={{ fill: this.props.color }} width="648" height="151.5"/>
          <path d="M648,5v146.5H5V5H648 M653,0H0v156.5h653V0L653,0z"/>
        </g>
        <rect x="0" y="31.7" style={{ fill:'none' }} width="647" height="93.3"/>
        {lines.map((line, i) => {
          let yAnchor = lines.length > 1 ? 35 : 70;
          let transform = `translate(170, ${yAnchor}) translate(200, ${i*FONT_SIZE})`;
          return (<Element transform={transform}><Text text={line.toUpperCase()} tspanStyle={tspanStyle}/></Element>);
        })}
      </g>
    );
  }
});

module.exports = Title;
