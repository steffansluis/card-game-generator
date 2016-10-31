const React = require('react');

const Font = require('./font');
const Background = require('./background');
const Title = require('./title');
const Type  = require('./type');
const Image  = require('./image');

const GeneralCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    type: React.PropTypes.string,
    text: React.PropTypes.string,
    color: React.PropTypes.string,
    dependencies: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps() {
    return {
      title: 'Aerodynamisch rendement',
      type: 'persoonlijke kaart',
      text: 'De motoren van de windmolen werkt aan de hand van inductie.',
      dependencies: [],
      color: '#E32526'
      // dependencies: ['Onderdruk/ bovendruk', 'Gestroomlijnd']
    };
  },

  render() {
    let type = this.props.type || (this.props.dependencies.length ? 'persoonlijke kaart' : 'algemene kaart');
    let color = this.props.color;

    return (
      <g>
        <Background />
        <Type type={type} />

        <g transform="matrix(0.1694 0 0 0.174 225.2887 222.3223) scale(3.5) translate(-50)">
        	<Image name={this.props.title} />
        </g>
        <g id="titel" transform="matrix(1 0 0 1 164.7387 727.8615) translate(220)">
        	<text style={{ textAnchor: "middle" }} className={"st6 st10"}>{this.props.title}</text>
        </g>
      </g>
    );
  }
});

module.exports = GeneralCard;
