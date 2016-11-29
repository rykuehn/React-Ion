import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../../actions/selected';
import PhotoCarousel from '../../components/user_component/PhotoCarousel';

const mapDispatchToProps = dispatch => bindActionCreators({ setSelected }, dispatch);

export default connect(null, mapDispatchToProps)(PhotoCarousel);
