import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../actions/routes';
import FlexSlider from '../components/FlexSlider';

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

export default connect(mapStateToProps, mapDispatchToProps)(FlexSlider);
