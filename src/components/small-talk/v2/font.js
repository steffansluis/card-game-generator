const React = require('react');
const base64Img = require('base64-img');

const imageFor = require('./image-for');

const Image = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render() {
      let name = this.props.name;
      let href = `src/components/small-talk/v2/fonts/${name}.ttf`;
      let data = base64Img.base64Sync(href);
      return (
          <style>{`
          @font-face {
              font-family: ${name};
              src: url(${data});
          }
          `}</style>
      );
  }
});


module.exports = Image;
