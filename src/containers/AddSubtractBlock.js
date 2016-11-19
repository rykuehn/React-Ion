import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChild, removeChild } from '../actions/routes';
import AddSubtractBlock from '../components/AddSubtractBlock';

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

export default connect(mapStateToProps, mapDispatchToProps)(AddSubtractBlock);
