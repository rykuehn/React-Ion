import { connect } from 'react-redux';
import LinkDisplay from '../components/LinkDisplay';

const mapStateToProps = state => (
  {
    url: state.info.aUrl,
  }
);

export default connect(mapStateToProps)(LinkDisplay);
