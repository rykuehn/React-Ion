import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../../actions/selected';
import List from '../../components/user_component/List';

const mapDispatchToProps = dispatch => bindActionCreators({ setSelected }, dispatch);

export default connect(null, mapDispatchToProps)(List);
