const React = require('react');
const Card = require('./playing-card');

const PlayingCard = React.createClass({
  propTypes: {
    cards: React.PropTypes.arrayOf(React.PropTypes.shape({
      color: React.PropTypes.string,
      symbol: React.PropTypes.string,
      text: React.PropTypes.string
    }))
  },

  getDefaultProps() {
    return {
      cards: Array(52).fill(null).map((v, i) => {
        let text = ['2', '3', '4', '5', '6', '7', '8', '9', '10',' J', 'Q', 'K', 'A'][i%13];
        let symbol = ['♠︎', '♣︎', '♥︎', '♦︎'][Math.floor(i/13)];
        let color = ['black', 'red'][Math.floor(i/26)];

        return { text, symbol, color };
      })
    }
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

    let n = this.props.cards.length;
    let cols = Math.ceil(Math.sqrt(n));
    let scale = 1 / cols;

    return (
      <g transform={`scale(${scale})`}>
      {this.props.cards.map((card, i) => {
        return (<g transform={`translate(${1000 * (i % cols)}, ${1200 * Math.floor(i / (Math.ceil(n / cols) + 1))})`}>
            <Card {...card} />
          </g>);
      })}
      </g>
    );
  }
});

module.exports = PlayingCard;
