import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChild, removeChild } from '../../../actions/routes';
import { toggleCarouselModal } from '../../../actions/toggleTextModal';
import AddCarousels from '../../../components/tool_component/addremove/AddCarousels';

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
    toggleCarouselModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddCarousels);
