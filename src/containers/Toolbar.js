import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onRedo, onUndo } from '../actions/routes';
import { setZoom } from '../actions/setZoom';
import Toolbar from '../components/Toolbar';

const mapStateToProps = state => (
  {
    canUndo: state.routes.projectPages[state.pageSelected].past.length > 0,
    canRedo: state.routes.projectPages[state.pageSelected].future.length > 0,
    routes: state.routes.projectPages[state.pageSelected].present,
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
