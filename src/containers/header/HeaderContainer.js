import { connect } from 'react-redux';
import React from 'react';
import Header from '../../components/header/Header';
import { getToken } from '../../selectors/session';
import { signOutSession } from '../../actions/session';

function HeaderContainer(props) {
  return <Header {...props} />;
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleSignOut() {
    dispatch(signOutSession());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
