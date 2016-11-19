import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTextModal } from '../actions/toggleTextModal';
import { updateProps } from '../actions/routes';
import Toolbar from '../components/Toolbar';

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

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
