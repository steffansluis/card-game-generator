const React = require('react');

const Font = require('./font');
const Background = require('./background');
const Title = require('./title');
const Type  = require('./type');
const MiddleText = require('./middle-text');
const Image  = require('./image');

const GeneralCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    field: React.PropTypes.string,
    text: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      title: 'Aerodynamicus',
      field: 'Aerodynamisch rendement',
      type: 'vakgebied kaart',
      color: '#E32526'
    };
  },

  render() {
    let color = this.props.color;

    return (
      <g>
      <style type="text/css">{
        `
        .st0{fill: #ffffff;}
        .st1{fill:#FFFFFF;}
        .st2{fill: ${color};}
        .st3{display:none;}
        .st4{display:inline;}
        .st5{fill:none;}
        .st6{font-family:'FuturaLight';}
        .st7{font-size:39px;}
        .st8{fill:#D7DF23;}
        .st9{font-size:120px;}
        .st10{font-size:60px;}
        .st11{font-size:48px;}
        .st12{fill:none;stroke: ${color};stroke-width:3;stroke-miterlimit:10;}
        .st13{display:inline;fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
        .st14{display:inline;fill: #ffffff;}
        `
      }
      </style>
        <Background />
        <Type type={this.props.type} />
        <Title title={this.props.title} field={this.props.field} />
        <MiddleText text={this.props.text} />
      </g>
    );
  }
});

module.exports = GeneralCard;
