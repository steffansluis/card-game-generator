const React = require('react');
const qs = require('qs');
const Element = require('./element');

const Deck = React.createClass({
  propTypes: {
    cards: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps() {
    return {
      cards: Array(52).fill(null).map((v, i) => {
        let text = ['2', '3', '4', '5', '6', '7', '8', '9', '10',' J', 'Q', 'K', 'A'][i%13];
        let symbol = ['♠︎', '♣︎', '♥︎', '♦︎'][Math.floor(i/13)];
        let color = ['black', 'red'][Math.floor(i/26)];
        let card = { text, symbol, color };

        return `playing-card?${qs.stringify(card)}`;

      })
    }
  },
  render() {
    let cards = this.props.cards;
    let n = cards.length;
    let cols = Math.ceil(Math.sqrt(n));
    let scale = (1000/1200) * 1 / cols;

    return (
      <Element transform={`scale(${scale})`}>
      {cards.map((card, i) => {
        let transform = `translate(${1000 * (i % cols)}, ${100 + 1100 * Math.floor(i / (Math.ceil(n / cols) + 1))})`;
        return (<Element transform={transform} append={[card]}></Element>);
      })}
      </Element>
    );
  }
});

module.exports = Deck;
