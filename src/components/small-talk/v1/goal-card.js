const React = require('react');

const splitText = require('../../../split-text');

const Background = require('./background');
const Title = require('./title');
const Type  = require('./type');

const ConceptLeft = require('./concept/left');
const ConceptRight = require('./concept/right');

const Text   = require('../../text');
const Element = require('../../element');

const FONT_SIZE = 26;
const MAX_TEXT_LENGTH = 41;

const SmallTalkGoalCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    type: React.PropTypes.string,
    dependencies: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps() {
    return {
      title: "Windmolen paradox",
      text: `Een paradox met  windmolens is dat veel mensen deze duurzame energiebron steunen maar wel de not in my backyard concept handhaven.`,
      type: "goal",
      dependencies: ['Calculus', 'Graphs']
    };
  },

  render() {
    const textStyle = {
      fontFamily: 'sans-serif',
      fontSize: `${FONT_SIZE}px`
    };

    let lines = splitText(this.props.text, MAX_TEXT_LENGTH);

    return (
      <g>
        <g id="Background">
        	<g>
        		<path d="M745.5,5v990H5V5H745.5 M750.5,0H0v1000h750.5V0L750.5,0z"/>
            <g transform={"translate(0, 400)"}>
              {lines.map((line, i) => {
                let yAnchor = lines.length > 1 ? 35 : 70;
                let transform = `translate(170, ${yAnchor}) translate(200, ${i*FONT_SIZE})`;
                return (<Element transform={transform}><Text text={line.toUpperCase()} tspanStyle={textStyle}/></Element>);
              })}
            </g>
        	</g>
        </g>

        <Title title={this.props.title} color={'lightblue'} />
        <Type  type={'goal'} color={'gold'} />

        <g id="Concepts">
          <ConceptLeft concept={(this.props.dependencies[0] || '').toUpperCase()} color={'tomato'} />
          <ConceptRight concept={(this.props.dependencies[1] || '').toUpperCase()} color={'tomato'} />
        </g>
      </g>
    );
  }
});

// <Element transform="matrix(1.6809 0 0 1.9023 123.1151 200.4246) translate(150, 120)">
//   <Text text={textTop} style={textStyle}/>
// </Element>
// <Element transform="matrix(1.6809 0 0 1.9023 123.1151 200.4246) translate(150, 140)">
//   <Text text={textMiddle} style={textStyle}/>
// </Element>
// <Element transform="matrix(1.6809 0 0 1.9023 123.1151 200.4246) translate(150, 160)">
//   <Text text={textBottom} style={textStyle}/>
// </Element>

module.exports = SmallTalkGoalCard;
