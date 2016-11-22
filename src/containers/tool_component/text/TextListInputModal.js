import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeTextModal } from '../../../actions/toggleTextModal';
import TextListInputModal from '../../../components/tool_component/text/TextListInputModal';

const mapStateToProps = state => (
  { textModal: state.textModal }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({ closeTextModal }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TextListInputModal);
