const base64Img = require('base64-img');

module.exports = (name) => {
  console.log(`Finding image href for ${name}`);
  let path = name
    .toLowerCase()
    .replace(/\//, ' ')
    .split(' ')
    .join('-');
  let href = name == null  ? `src/components/small-talk/v2/images/electro.png` : `src/components/small-talk/v2/images/${path}.png`;
  console.log(`Returning image for ${name}: `, href);

  try {
    let data = base64Img.base64Sync(href);
    return data;
  }
  catch(e) {
    console.error(e);
    return '';
  }
}
