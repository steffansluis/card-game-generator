const React = require('react');

const Image = require('./image');

const CardBack = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      name: 'Elektrotechniek',
      color: '#E32526'
      // dependencies: ['Onderdruk/ bovendruk', 'Gestroomlijnd']
    };
  },

  render() {
    let name = this.props.name;
    let color = this.props.color;

    return (
      <g>
        <g id="achtergrond">
        	<g>
        		<rect x="0.5" y="0.5" style={{ fill: color }} width="786.3" height="1035.3"/>
        		<path d="M786.3,1v1034.3H1V1H786.3 M787.3,0H0v1036.3h787.3V0L787.3,0z"/>
        	</g>
        </g>
        <g transform="matrix(0.59 0 0 0.8021 147.8818 184.1112) translate(100, 100)">
        	<Image name={`${name} back`} />
        </g>
      </g>
    );
  }
});

module.exports = CardBack;
