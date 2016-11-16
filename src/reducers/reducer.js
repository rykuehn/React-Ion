import { combineReducers } from 'redux';
import user from './header';
import selected from './selected';
import nextId from './nextId';
import routes from './routes';
import controlsShowing from './controlsModal';
import info from './getInfo';

export default combineReducers({
  user,
  selected,
  nextId,
  routes,
  controlsShowing,
  info,
});
