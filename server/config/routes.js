const path = require('path');
const { getProjectOwner, getUserInfo, authenticate } = require('./helpers');

module.exports = (app) => {
  app.get('/editor', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/editor.html'));
  });

  app.get('/editor/(([0-9]+))', (req, res) => {
    const token = req.cookies.access_token;
    const projectId = req.params[0];
    getProjectOwner(token, projectId, (ownerInfo) => {
      getUserInfo(token, (userInfo) => {
        if (userInfo && ownerInfo && userInfo.username === ownerInfo.username) {
          res.sendFile(path.join(__dirname, '../../dist/editor.html'));
        } else {
          res.sendFile(path.join(__dirname, '../../dist/404.html'));
        }
      });
    });
  });

  app.get('/dashboard', (req, res) => {
    const token = req.cookies.access_token;
    authenticate(token, (userInfo) => {
      if (userInfo) {
        res.sendFile(path.join(__dirname, '../../dist/dashboard.html'));
      } else {
        res.sendFile(path.join(__dirname, '../../dist/404.html'));
      }
    });
  });

  app.get('/*', (req, res) => { res.status(404).send('404 Invalid Request'); });
};
