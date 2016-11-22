import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onRedo, onUndo } from '../../../actions/routes';
import { setZoom } from '../../../actions/setZoom';
import Toolbar from '../../../components/tool_component/toolbar/Toolbar';

const mapStateToProps = state => (
  {
    canUndo: state.routes.appPages[state.pageSelected].past.length > 0,
    canRedo: state.routes.appPages[state.pageSelected].future.length > 0,
    routes: state.routes.appPages[state.pageSelected].present,
    nextId: state.nextId,
    pageSelected: state.pageSelected,
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
