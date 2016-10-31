const React = require('react');

const Background = React.createClass({
  render() {
    return (
      <g id="achtergrond">
      	<g>
      		<rect x="0.5" y="0.5" className={"st0"} width="786.3" height="1035.3"/>
      		<path d="M786.3,1v1034.3H1V1H786.3 M787.3,0H0v1036.3h787.3V0L787.3,0z"/>
      	</g>
      	<g>
      		<rect x="20.3" y="19.4" style={{ fill:'#FFFFFF' }} width="747.5" height="997"/>
      		<path className={"st2"} d="M766.3,20.9v994H21.8v-994H766.3 M769.3,17.9H18.8v1000h750.5V17.9L769.3,17.9z"/>
      	</g>
      </g>

    );
  }
});

module.exports = Background;
