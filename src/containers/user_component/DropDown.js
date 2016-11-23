import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../../actions/selected';
import DropDown from '../../components/user_component/DropDown';

const mapDispatchToProps = dispatch => bindActionCreators({ setSelected }, dispatch);

export default connect(null, mapDispatchToProps)(DropDown);
