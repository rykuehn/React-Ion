import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../../../actions/routes';
import ColorPicker from '../../../components/tool_component/adjustor/ColorPicker';

const mapStateToProps = state => (
  {
    selected: state.selected,
    info: state.info,
  }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateProps,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
