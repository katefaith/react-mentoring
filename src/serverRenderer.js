import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './components/App';

function renderHTML(html) {
  return `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
            <title>React Server Side Rendering</title>
            ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
          </head>
          <body>
            <div id="app-root">${html}</div>
            <div id="modal-root"></div>
            <script src="/js/main.js"></script>
          </body>
        </html>
    `;
}

export default function serverRenderer() {
  return (req, res) => {
    // This context object contains the results of the render
    const context = {};

    const root = (
      // eslint-disable-next-line react/jsx-filename-extension
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
      />
    );

    const htmlString = renderToString(root);

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    res.send(renderHTML(htmlString));
  };
}
