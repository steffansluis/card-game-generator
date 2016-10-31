const React = require('react');

const splitText = require('../../../split-text');

const Text   = require('../../text');
const Element = require('../../element');

const FONT_SIZE = 32;
const MAX_TITLE_LENGTH = 20;

const Type = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    color: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      type: 'general concept',
      color: '#B9F9A7'
    };
  },

  render() {
    let tspanStyle = {
      fontFamily: 'Papyrus, fantasy',
      fontSize: `${FONT_SIZE}px`
    };

    let lines = splitText(this.props.type);
    console.log(lines);

    return (<g id="Type">
    	<g>
    		<polygon className={"st0"} points="667.1,14.1 667.1,314.5 772.8,418 774.2,15.2 		"/>
    	</g>

    	<rect x="704" y="25.6" style={{ fill:'none' }} width="33" height="309.5"/>
    	<text transform="matrix(0 1 -1 0 704.8262 55.2136) translate(120, -10)" style={{ textAnchor: "middle" }} className={"st6 st7"}>{this.props.type}</text>
    	<g>
    		<line className={"st12"} x1="769" y1="414" x2="667" y2="313.4"/>
    	</g>

    	<line className={"st12"} x1="667.4" y1="17.9" x2="667.4" y2="314.4"/>

    </g>);
  }
});

// <g id="Type">
// 	<g>
// 		<polygon class="st0" points="667.1,14.1 667.1,314.5 772.8,418 774.2,15.2 		"/>
// 	</g>
// 	<rect x="704" y="25.6" class="st5" width="33" height="309.5"/>
// 	<text transform="matrix(0 1 -1 0 704.8262 55.2136)" class="st6 st7">algemene kaart</text>
// 	<g>
// 		<line class="st12" x1="769" y1="414" x2="667" y2="313.4"/>
// 	</g>
// 	<line class="st12" x1="667.4" y1="17.9" x2="667.4" y2="314.4"/>
// </g>

module.exports = Type;
