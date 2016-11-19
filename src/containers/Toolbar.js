import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onRedo, onUndo } from '../actions/routes';
import { setZoom } from '../actions/setZoom';
import Toolbar from '../components/Toolbar';

const mapStateToProps = state => (
  {
    canUndo: state.canUndo,
    canRedo: state.canRedo,
    routes: state.routes.present,
    nextId: state.nextId,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onUndo,
    onRedo,
    setZoom,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
