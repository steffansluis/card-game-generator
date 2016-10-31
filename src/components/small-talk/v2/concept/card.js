const React = require('react');

const Font = require('../font');
const Background = require('../background');
const Title = require('../title');
const Type  = require('../type');
const MiddleText = require('../middle-text');
const Concepts = require('../concepts');
const Timestamp = require('../timestamp');

const Card = React.createClass({
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
        <Font name={ "FuturaLight" }/>

        <style type="text/css">{
          `
          .st0{fill: ${color};}
        	.st1{fill:#FFFFFF;}
        	.st2{fill:#020000;}
        	.st3{display:none;}
        	.st4{display:inline;}
        	.st5{fill:none;}
        	.st6{font-family:'FuturaLight';}
        	.st7{font-size:39px;}
        	.st8{fill:#D7DF23;}
        	.st9{font-size:120px;}
        	.st10{font-size:60px;}
        	.st11{font-size:48px;}
        	.st12{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
        	.st13{display:inline;fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
        	.st14{display:inline;fill: ${color};}
          `
        }
        </style>

        <Background />
        <Title title={this.props.title} />
        <Type type={type} />
        <MiddleText text={this.props.text} />

        <g>
          { this.props.dependencies.length ? (<Concepts concepts={this.props.dependencies} />) : ''}
        </g>

        <g>
          {
            type === 'tijdskaart' ? (<Timestamp />) : ''
          }
        </g>

      </g>
    );
  }
});

module.exports = Card;
