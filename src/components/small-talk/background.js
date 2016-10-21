const React = require('react');

const Background = React.createClass({
  render() {
    return (
      <g id="Background">
        <g>
          <path d="M745.5,5v990H5V5H745.5 M750.5,0H0v1000h750.5V0L750.5,0z"/>
        </g>
      </g>
    );
  }
});

module.exports = Background;
