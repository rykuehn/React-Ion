import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as HeaderActions from '../actions/header';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HeaderActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);