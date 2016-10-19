const React = require('react');
const Ace   = require('../ace');
const Text   = require('../text');
const Element = require('../element');

const MAX_TITLE_LENGTH = 20;
const MAX_TEXT_LENGTH = 41;

const SmallTalkGoalCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    type: React.PropTypes.string,
    dependencies: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      title: "Windmolen paradox",
      text: 'Een paradox met  windmolens is dat veel mensen deze duurzame energiebron steunen maar wel de "not in my backyard concept" handhaven.',
      type: "goal",
      dependencies: "calculus, graphs"
    };
  },

  render() {
    const textStyle = {
      fontSize: "15px",
      fill: this.props.color
    };

    const tspanStyle = {
      alignmentBaseline: "middle"
    };

    let title = this.props.title;
    let titleTop = title.slice(0, MAX_TITLE_LENGTH);
    let titleBottom = title.length > MAX_TITLE_LENGTH ? title.slice(MAX_TITLE_LENGTH, title.length) : '';


    let text = this.props.text;
    let textTop = text.slice(0, MAX_TEXT_LENGTH);
    let textMiddle = text.length % MAX_TEXT_LENGTH ? text.slice(MAX_TEXT_LENGTH, 2*MAX_TEXT_LENGTH) : '';
    let textBottom = (text.length % MAX_TEXT_LENGTH) - 1 ? text.slice(2*MAX_TEXT_LENGTH, text.length) : '';

    return (
      <g>
        <style type="text/css">{
          `
          .st7{font-size:48px;}
          .st1{fill:none;}
          .st3{font-size:30px;}
          .st4{fill:#FFFFFF;stroke:#000000;stroke-width:3;}

          .st2{font-family: Papyrus, fantasy;}

          .st6{fill: lightblue;} /* Title color */
          .st5{fill: gold;} /* Type color */
          .st0{fill: tomato;} /* Dependencies color */

          `
        }
        </style>
        <g id="Background">
        	<g>
        		<path d="M745.5,5v990H5V5H745.5 M750.5,0H0v1000h750.5V0L750.5,0z"/>
            <Element transform="matrix(1.6809 0 0 1.9023 123.1151 200.4246) translate(150, 120)">
              <Text text={textTop} style={textStyle}/>
            </Element>
            <Element transform="matrix(1.6809 0 0 1.9023 123.1151 200.4246) translate(150, 140)">
              <Text text={textMiddle} style={textStyle}/>
            </Element>
            <Element transform="matrix(1.6809 0 0 1.9023 123.1151 200.4246) translate(150, 160)">
              <Text text={textBottom} style={textStyle}/>
            </Element>
        	</g>
        </g>
        <g id="Concept_x5F_left">
          <g>
            <polygon className={"st0"} points="2.5,997.5 2.5,736.2 376.5,651.1 376.5,997.5 		"/>
            <path d="M374,654.3V995H5l0-256.8L374,654.3 M379,648L0,734.2L0,1000h379V648L379,648z"/>
          </g>
          <rect x="51" y="950.3" className={"st1"} width="274.6" height="29.3"/>
          <text transform="matrix(1 0 0 1 100.5059 977.9912)" className={"st2 st3"}>{this.props.dependencies.split(',')[0].toUpperCase()}</text>
          <g id="Image_x5F_left">
            <rect x="51" y="748.3" className={"st4"} width="274.6" height="186.5"/>
          </g>
        </g>
        <g id="Concept_x5F_right">
        	<g>
        		<polygon className={"st0"} points="381.5,997.5 381.5,651.1 748,736.2 748,997.5 		"/>
        		<path d="M384,654.3l361.5,83.8l0,256.9H384V654.3 M379,648v352h371.5l0-265.8L379,648L379,648z"/>
        	</g>
        	<rect x="429" y="950.6" className={"st1"} width="270.4" height="28.7"/>
        	<text transform="matrix(1 0 0 1 496.4951 978.3255)" className={"st2 st3"}>{this.props.dependencies.split(',')[1].toUpperCase()}</text>
        	<g id="Image_x5F_right">
        		<rect x="429" y="748.3" className={"st4"} width="270" height="186.5"/>
        	</g>
        </g>
        <g id="Type">
        	<g>
        		<polygon className={"st5"} points="650,297.1 650,2.5 749,3.5 747.8,394.8 		"/>
        		<path d="M652.5,5.1l94,0.9l-1.2,382.8L652.5,296L652.5,5.1 M647.5,0l0,298.1l102.7,102.7L751.5,1L647.5,0L647.5,0z"/>
        	</g>
        	<rect x="684.2" y="22" className={"st1"} width="33" height="273.5"/>
        	<text transform="matrix(0 1 -1 0 689.4365 24.9626) translate(90)" className={"st2 st3"}>
            <tspan style={tspanStyle} id="tspan3067">{this.props.type.toUpperCase()}</tspan>
          </text>
        </g>
        <g id="Title">
        	<g>
        		<rect x="2.5" y="2.5" className={"st6"} width="648" height="151.5"/>
        		<path d="M648,5v146.5H5V5H648 M653,0H0v156.5h653V0L653,0z"/>
        	</g>
        	<rect x="0" y="31.7" className={"st1"} width="647" height="93.3"/>
        	<text transform="matrix(1 0 0 1 141.3176 65.7463)">
            <tspan x="0" y="0" className={"st2 st7"}>{titleTop.toUpperCase()}</tspan>
            <tspan x="65.7" y="57.6" className={"st2 st7"}>{titleBottom.toUpperCase()}</tspan>
          </text>
        </g>
      </g>
    );
  }
});

module.exports = SmallTalkGoalCard;
