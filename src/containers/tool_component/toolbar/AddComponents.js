import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDraggableModal, closeDraggableModal } from '../../../actions/toggleDraggable';
import AddComponents from '../../../components/tool_component/toolbar/AddComponents';

const mapStateToProps = state => (
  {
    draggable: state.draggable,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleDraggableModal,
    closeDraggableModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddComponents);
