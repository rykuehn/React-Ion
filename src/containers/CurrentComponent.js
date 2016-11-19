import { connect } from 'react-redux';
import CurrentComponent from '../components/CurrentComponent';

const mapStateToProps = state => (
  {
    name: state.info.name,
  }
);

export default connect(mapStateToProps)(CurrentComponent);
