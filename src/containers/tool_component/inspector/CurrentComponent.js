import { connect } from 'react-redux';
import CurrentComponent from '../../../components/tool_component/inspector/CurrentComponent';

const mapStateToProps = state => (
  {
    name: state.info.name,
  }
);

export default connect(mapStateToProps)(CurrentComponent);
