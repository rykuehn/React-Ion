import { connect } from 'react-redux';
import Editor from '../js/Editor';
import store from '../store/store';

const mapStateToProps = state => ({
  routes: state.routes.projectPages[state.pageSelected].present,
  selected: state.selected,
  pageSelected: state.pageSelected,
  zoom: state.zoom,
});

export default connect(mapStateToProps)(Editor);
