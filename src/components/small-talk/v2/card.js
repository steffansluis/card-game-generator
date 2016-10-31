const React = require('react');

const Font = require('./font');

const FieldCard = require('./field-card');
const CardBack = require('./card-back');
const TimeCard = require('./time-card');
const GeneralCard = require('./general-card');
const PersonalCard = require('./personal-card');

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

    let SmallTalkCard;

    switch(type) {
      case 'vakgebied kaart':
        SmallTalkCard = FieldCard;
      break;
      case 'achterkant':
        SmallTalkCard = CardBack;
      break;
      case 'tijdskaart':
        SmallTalkCard = TimeCard;
      break;
      case 'algemene kaart':
        SmallTalkCard = GeneralCard;
      break;
      case 'persoonlijke kaart':
      default:
        SmallTalkCard = PersonalCard;
      break;

    }

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
        <SmallTalkCard {...this.props} />
      </g>
    );
  }
});

module.exports = Card;
