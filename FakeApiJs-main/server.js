const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use('/api', router);

const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
