const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');

const SVG = require('./components/svg');
const Card = require('./components/card');

const PORT = 3000;
const XML_TAG = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n";

const server = express();

server.get('/', (req, res) => {
  res.send(XML_TAG + ReactDOMServer.renderToString(<SVG><Card {...req.query} /></SVG>));
});

server.listen(PORT);
