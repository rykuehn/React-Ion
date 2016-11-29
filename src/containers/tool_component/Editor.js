import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRoutes, setNextId } from '../../actions/routes';
import Editor from '../../components/tool_component/Editor';

const mapStateToProps = state => ({
  routes: state.routes.appPages,
  selected: state.selected,
  pageSelected: state.pageSelected,
  zoom: state.zoom,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateRoutes,
    setNextId,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
