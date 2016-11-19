import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../actions/routes';
import FontSize from '../components/FontSize';

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

export default connect(mapStateToProps, mapDispatchToProps)(FontSize);
