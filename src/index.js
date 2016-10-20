const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');

const hotReload = require('./hot-reload');
const componentFor = require('./component-for');

const SVG = require('./components/svg');

const PORT = process.env.PORT || 3000;
const XML_TAG = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n";

const server = express();

server.get('/favicon.ico', (req, res) => res.status(404).end());

server.get('/:component?', hotReload(true), (req, res) => {
  let { component } = req.params;
  console.log(`Rendering ${component} component with: `, req.query);

  const Component = componentFor(component);
  let SVGString = ReactDOMServer.renderToString(<SVG><Component {...req.query} /></SVG>);

  res.set({
    'Content-Type': 'image/svg+xml',
    'Content-Disposition': `filename="${component}.svg"`
  });
  res.send(XML_TAG + SVGString);
});

server.listen(PORT);
