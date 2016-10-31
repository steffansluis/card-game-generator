const React = require('react');

const imageFor = require('./image-for');

const Image = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render() {
      let data = imageFor(this.props.name);
      return (
          <image width="600" height="600" xlinkHref={data}></image>
      );
  }
});


module.exports = Image;
