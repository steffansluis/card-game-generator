const MAX_LENGTH = 30;

module.exports = (text, maxLength = MAX_LENGTH) => {
  let res = [];
  while(text.length > maxLength){
      let pos = text.substring(0, maxLength).lastIndexOf(' ');

      pos = pos <= 0 ? maxLength : pos;
      res.push(text.substring(0, pos));

      let i = text.indexOf(' ', pos)+1;
      if(i < pos || i > pos + maxLength) i = pos;

      text = text.substring(i);
  }
  res.push(text);

  console.log(`Splitting text from '${text}' to: `, res);

  return res;
}
