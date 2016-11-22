import { connect } from 'react-redux';
import Editor from '../../app/Editor';

const mapStateToProps = state => ({
  routes: state.routes.appPages,
  selected: state.selected,
  pageSelected: state.pageSelected,
  zoom: state.zoom,
});

export default connect(mapStateToProps)(Editor);
