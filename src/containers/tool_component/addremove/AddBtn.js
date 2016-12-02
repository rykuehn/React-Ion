import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDraggableModal, closeDraggableModal } from '../../../actions/toggleDraggable';
import AddBtn from '../../../components/tool_component/addremove/AddBtn';

const mapStateToProps = state => (
  {
    selected: state.selected,
    nextId: state.nextId,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleDraggableModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddBtn);
