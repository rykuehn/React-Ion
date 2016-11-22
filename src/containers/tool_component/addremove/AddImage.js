import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChild, removeChild } from '../../../actions/routes';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import AddImage from '../../../components/tool_component/addremove/AddImage';

const mapStateToProps = state => (
  {
    selected: state.selected,
    nextId: state.nextId,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addChild,
    removeChild,
    toggleTextModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
