const React = require('react');

const Background = require('../background');
const Title = require('../title');
const Type  = require('../type');

const ConceptLeft = require('./left');
const ConceptRight = require('./right');

const Text   = require('../../../text');
const Element = require('../../../element');

const FONT_SIZE = 32;

const SmallTalkConceptCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    type: React.PropTypes.string,
    dependencies: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps() {
    return {
      title: 'Probability and Statistics',
      dependencies: ['Calculus', 'Graphs']
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'Papyrus, fantasy',
      fontSize: `${FONT_SIZE}px`
    };

    let type = this.props.type || (this.props.dependencies.length ? 'personal concept' : 'general concept');

    return (
      <g>
        <style type="text/css">{
          `
          .st0{fill:#79CAF2;}
          .st1{fill:none;}
          .st2{font-family: Papyrus, fantasy;}
          .st3{font-size:30px;}
          .st4{fill:#FFFFFF;stroke:#000000;stroke-width:3;}
          .st5{fill:#B9F9A7;}
          .st6{fill:#09AF28;}
          .st7{font-size:48px;}
          `
        }
        </style>

        <Background />
        <Title title={this.props.title} />
        <Type  type={type} />

        <g>
          { this.props.dependencies.length ? (

            <g id="Concepts">
              <ConceptLeft concept={(this.props.dependencies[0] || '').toUpperCase()} />
              <ConceptRight concept={(this.props.dependencies[1] || '').toUpperCase()} />
            </g>
          ) : ''}
        </g>

      </g>
    );
  }
});

module.exports = SmallTalkConceptCard;
