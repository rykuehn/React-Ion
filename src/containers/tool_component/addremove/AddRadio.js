import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import { addChild, removeChild } from '../../../actions/routes';
import AddRadio from '../../../components/tool_component/addremove/AddRadio';

const mapStateToProps = state => (
  {
    selected: state.selected,
    nextId: state.nextId,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleTextModal,
    addChild,
    removeChild,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddRadio);
