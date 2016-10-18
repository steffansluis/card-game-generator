const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const hotReload = require('./hot-reload');

const SVG = require('./components/svg');
const PlayingCard = require('./components/playing-card');
const SmallTalkConceptCard = require('./components/small-talk/concept-card');

const PORT = process.env.PORT || 3000;
const XML_TAG = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n";

const server = express();

const DEFAULT_COMPONENT = 'playing-card';

server.get('/favicon.ico', (req, res) => res.status(404).end());

server.get('/:component?', hotReload);
server.get('/:component?', (req, res) => {
  let component = req.params.component || DEFAULT_COMPONENT;

  console.log(`Rendering ${component} component with: `, req.query);

  const Component = require(`./components/${component}`);
  let SVGString = ReactDOMServer.renderToString(<SVG><Component {...req.query} /></SVG>);


  res.set({
    'Content-Type': 'image/svg+xml',
    'Content-Disposition': `filename="${component}.svg"`
  });

  console.log(`SVGString: `, SVGString);

  res.send(XML_TAG + SVGString);
});

server.listen(PORT);
