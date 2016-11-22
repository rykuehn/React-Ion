import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected, setPageSelected } from '../../../actions/selected';
import { addPage } from '../../../actions/routes';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import AddPage from '../../../components/tool_component/addremove/AddPage';

const mapStateToProps = state => (
  {
    store: state.routes,
    routes: state.routes.present,
    selected: state.selected,
    pageSelected: state.pageSelected,
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
