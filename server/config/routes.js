const userRouter = require('./routers/userRouter');
const projectRouter = require('./routers/projectRouter');
const authRouter = require('./routers/authRouter');
const path = require('path');

module.exports = (app) => {
  app.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });
  app.get('/editor', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/editor.html'));
  });
  app.use('/api/user', userRouter);
  app.use('/api/project', projectRouter);
  app.use('/', authRouter);
  app.get('/*', (req, res) => { res.status(404).send('404 Invalid Request'); });
};
