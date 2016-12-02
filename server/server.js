const express = require('express');

const app = express();

require('./config/middleware')(app, express);
require('./config/routes')(app, express);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
