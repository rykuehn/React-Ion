import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeChild } from '../../../actions/routes';
import Delete from '../../../components/tool_component/addremove/Delete';

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

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
