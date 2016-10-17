const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');

const SVG = require('./components/svg');
const PlayingCard = require('./components/playing-card');
const SmallTalkConceptCard = require('./components/small-talk/concept-card');

const PORT = process.env.PORT || 3000;
const XML_TAG = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n";

const server = express();

const DEFAULT_COMPONENT = 'playing-card';

server.get('/favicon.ico', (req, res) => res.status(404).end());

server.get('/:component?', (req, res) => {
  let component = req.params.component || DEFAULT_COMPONENT;
  let SVGString;

  console.log(`Rendering ${component} component with: `, req.query);

  switch (component) {
    case 'small-talk-concept-card':
      SVGString = ReactDOMServer.renderToString(<SVG><SmallTalkConceptCard {...req.query} /></SVG>);
    break;
    case 'playing-card':
    default:
      SVGString = ReactDOMServer.renderToString(<SVG><PlayingCard {...req.query} /></SVG>);
  }


  res.set({
    'Content-Type': 'image/svg+xml',
    'Content-Disposition': `filename="${component}.svg"`
  });

  console.log(`SVGString: `, SVGString);

  res.send(XML_TAG + SVGString);
});

server.listen(PORT);
