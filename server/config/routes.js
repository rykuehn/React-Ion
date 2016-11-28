const path = require('path');

module.exports = (app) => {
  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../dist/editor.html'));
  // });
  app.get('/editor/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/editor.html'));
  });
  app.get('/*', (req, res) => { res.status(404).send('404 Invalid Request'); });
};
