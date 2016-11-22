import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import { updateProps } from '../../../actions/routes';
import UpdateText from '../../../components/tool_component/text/UpdateText';

const mapStateToProps = state => (
  {
    selected: state.selected,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleTextModal,
    updateProps,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateText);
