import { connect } from 'react-redux';
import EditorControls from '../components/EditorControls';

const mapStateToProps = state => ({
  info: state.info,
});

export default connect(mapStateToProps)(EditorControls);
