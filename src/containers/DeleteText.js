import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeChild } from '../actions/routes';
import DeleteText from '../components/DeleteText';

const mapStateToProps = state => (
  {
    selected: state.selected,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeChild,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteText);
