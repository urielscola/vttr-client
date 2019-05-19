const { createServer } = require('http');
const next = require('next');
const routes = require('./src/routes');


const app = next({ dev: process.env.NODE_ENV !== 'production '});
const handler = routes.getRequestHandler(app);

(async () => {
  await app.prepare();
  createServer(handler).listen(3001);
})();