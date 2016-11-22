import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../../../actions/routes';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import BackgroundImageInput from '../../../components/tool_component/adjustor/BackgroundImageInput';

const mapStateToProps = state => (
  {
    selected: state.selected,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateProps,
    toggleTextModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundImageInput);
