import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChild } from '../../../actions/routes';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import TextInput from '../../../components/tool_component/text/TextInput';

const mapStateToProps = state => (
  {
    selected: state.selected,
    nextId: state.nextId,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addChild,
    toggleTextModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
