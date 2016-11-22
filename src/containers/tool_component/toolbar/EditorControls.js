import { connect } from 'react-redux';
import EditorControls from '../../../components/tool_component/toolbar/EditorControls';

const mapStateToProps = state => ({
  info: state.info,
});

export default connect(mapStateToProps)(EditorControls);
