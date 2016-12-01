const path = require('path');
const request = require('request');
const { host } = require('../../src/lib/api-config');

module.exports = (app) => {
  app.get('/editor', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/editor.html'));
  });

  app.get('/editor/[0-9]+', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/editor.html'));
  });

  app.get('/dashboard', (req, res) => {
    const token = req.cookies.access_token;
    const options = {
      method: 'GET',
      uri: `${host}/authenticate`,
      json: {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    request(options, (err, res2, body) => {
      console.log('err', err);
      if (body.data) {
        res.sendFile(path.join(__dirname, '../../dist/dashboard.html'));
      } else {
        res.sendFile(path.join(__dirname, '../../dist/404.html'));
      }
    });
  });

  app.get('/*', (req, res) => { res.status(404).send('404 Invalid Request'); });
};
