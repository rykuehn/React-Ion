import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeTextModal } from '../../../actions/toggleTextModal';
import TextInputModal from '../../../components/tool_component/text/TextInputModal';

const mapStateToProps = state => (
  { textModal: state.textModal }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({ closeTextModal }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TextInputModal);
