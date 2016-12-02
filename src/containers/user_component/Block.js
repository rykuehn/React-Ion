import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelected } from '../../actions/selected';
import Block from '../../components/user_component/Block';

const mapDispatchToProps = dispatch => bindActionCreators({ setSelected }, dispatch);

export default connect(null, mapDispatchToProps)(Block);
