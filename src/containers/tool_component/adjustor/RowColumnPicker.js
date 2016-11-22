import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../../../actions/routes';
import RowColumnPicker from '../../../components/tool_component/adjustor/RowColumnPicker';

const mapStateToProps = state => (
  {
    selected: state.selected,
  }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateProps,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RowColumnPicker);
