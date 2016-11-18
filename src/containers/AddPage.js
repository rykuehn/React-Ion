import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected, setPageSelected } from '../actions/selected';
import { addPage } from '../actions/routes';
import { toggleTextModal } from '../actions/toggleTextModal';
import AddPage from '../components/AddPage';

const mapStateToProps = state => (
  {
    store: state.store,
    selected: state.selected,
    info: state.info,
    nextId: state.nextId,
  }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSelected,
    setPageSelected,
    addPage,
    toggleTextModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
