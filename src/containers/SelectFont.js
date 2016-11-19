import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../actions/routes';
import SelectFont from '../components/SelectFont';

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

export default connect(mapStateToProps, mapDispatchToProps)(SelectFont);
