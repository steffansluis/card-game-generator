const PORT = 42824

const page = `
  <html>
    <script>
      new Websocket('/socket:${PORT}').onclose = function(event) {
        console.log(event.data);
      };


    </script>

    <iframe id="frame"></iframe>
  </html>
`;

const WebSocketServer = require('ws').Server;

let server;

module.exports = (req, res, next) => {
  startServer();
  if (!process.env.HOT_RELOAD || req.query.no_reload) next();
  res.set({'content-type': 'text/html'}).send(page);
}

function startServer() {
  if (server) return;
  server = new WebSocketServer({ port: PORT });
}
