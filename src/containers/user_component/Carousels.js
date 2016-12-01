import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../../actions/selected';
import Carousels from '../../components/user_component/Carousels';

const mapDispatchToProps = dispatch => bindActionCreators({ setSelected }, dispatch);

export default connect(null, mapDispatchToProps)(Carousels);
