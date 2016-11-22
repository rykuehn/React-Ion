import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../../../actions/routes';
import WidthSlider from '../../../components/tool_component/adjustor/WidthSlider';

const mapStateToProps = state => (
  {
    selected: state.selected,
    store: state.routes,
    info: state.info,
  }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateProps,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WidthSlider);
