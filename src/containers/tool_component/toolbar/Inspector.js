import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProps } from '../../../actions/routes';
import Inspector from '../../../components/tool_component/toolbar/Inspector';

const mapStateToProps = state => (
  {
    pageSelected: state.pageSelected,
    info: state.info,
    selected: state.selected,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateProps,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Inspector);
