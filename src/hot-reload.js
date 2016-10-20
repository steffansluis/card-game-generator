const PORT = 42824

const page = `
  <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          overflow-x: auto;
        }

        #frame {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe id="frame" style=></iframe>

      <script>
        var url = window.location.hostname;
        var ws;
        var opened = false;

        var frameUrl = window.location.toString()
          .replace(new RegExp("([?&]no_reload(?=[=&#]|$)[^#&]*|(?=#|$))"), "&no_reload=1")
          .replace(/^([^?&]+)&/, "$1?");

        document.getElementById('frame').setAttribute('src', frameUrl);

        function poll() {
          setTimeout(poll, 500);
          if (ws && ws.readyState !== 3) return;

          ws = new WebSocket('ws://' + url + ':${PORT}');

          window.ws = ws;

          ws.onopen = function() {

            if (opened) {
              location.reload();
            }
            opened = true;
          };
        }

        poll();
      </script>
    </body>

  </html>
`;

const WebSocketServer = require('ws').Server;

let server;

module.exports = enabled => {
  if (enabled) startServer();
  return (req, res, next) => {
    console.log(req.query);
    if (!enabled || req.query.no_reload) return next();
    res.set({'content-type': 'text/html'}).send(page);
  }
}

function startServer() {
  if (server) return;
  console.log('starting server');
  server = new WebSocketServer({ port: PORT });
}
