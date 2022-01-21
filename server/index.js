const express = require('express');
const server = express();
const path = require('path');
const port = 3000;

server.use(express.static(path.join(__dirname, '../client/dist')));
server.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});