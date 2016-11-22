import { connect } from 'react-redux';
import Editor from '../../app/Editor';

const mapStateToProps = state => ({
  routes: state.routes.present,
  selected: state.selected,
  pageSelected: state.pageSelected,
  zoom: state.zoom,
});

export default connect(mapStateToProps)(Editor);
