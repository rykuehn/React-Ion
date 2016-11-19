import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateInfos } from '../actions/routes';
import { setSelected } from '../actions/selected';
import { toggleTextModal } from '../actions/toggleTextModal';
import NameInput from '../components/NameInput';

const mapStateToProps = state => (
  {
    selected: state.selected,
  }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSelected,
    updateInfos,
    toggleTextModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);
