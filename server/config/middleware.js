const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '/../../dist'));
  app.use(express.static(path.join(__dirname, '/../../dist')));
};
