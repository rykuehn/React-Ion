import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChild, removeChild } from '../../../actions/routes';
import AddBlock from '../../../components/tool_component/addremove/AddBlock';

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
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddBlock);
