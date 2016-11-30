import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTreeInfo } from '../../../actions/routes';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import ProjectInfo from '../../../components/tool_component/toolbar/ProjectInfo';

const mapStateToProps = state => (
  {
    routes: state.routes,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateTreeInfo,
    toggleTextModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInfo);
