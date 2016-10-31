const React = require('react');

const ConceptLeft = require('./concept/left');
const ConceptRight = require('./concept/right');

const Concepts = React.createClass({
  propTypes: {
    concepts: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps() {
    return {
      text: 'De motoren van de windmolen werkt aan de hand van inductie.'
    };
  },

  render() {
    return (
      <g id="Concepts">
        <ConceptLeft concept={(this.props.concepts[0] || '').toUpperCase()} />
        <ConceptRight concept={(this.props.concepts[1] || '').toUpperCase()} />

        <g id="personal_rand">
          <g className={"st4"}>
            <rect x="16.6" y="727.7" className={"st0"} width="760.9" height="14.3"/>
          </g>
          <line className={"st13"} x1="18.8" y1="728.1" x2="769.3" y2="728.1"/>
          <line className={"st13"} x1="18.8" y1="742.1" x2="769.3" y2="742.1"/>
          <rect x="388.9" y="737.1" className={"st14"} width="15.5" height="284.5"/>
          <line className={"st13"} x1="388.9" y1="740.6" x2="389" y2="1017.8"/>
          <line className={"st13"} x1="404.4" y1="740.6" x2="404.4" y2="1017.7"/>
        </g>
      </g>
    );
  }
});

module.exports = Concepts;
