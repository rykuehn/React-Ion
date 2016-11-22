import { connect } from 'react-redux';
import ZoomPercent from '../../../components/tool_component/inspector/ZoomPercent';

const mapStateToProps = state => (
  {
    zoom: state.zoom,
  }
);

export default connect(mapStateToProps)(ZoomPercent);
