import { connect } from 'react-redux';
import React from 'react';
import ForgotPasswordForm from '../../components/users/ForgotPasswordForm';
// import { updateUser } from '../../actions/session';

function ForgotPassword(props) {
  return <ForgotPasswordForm {...props} />;
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => ({
//   handleChange({ target }) {
//     dispatch(updateUser({ [target.name]: target.value }));
//   },

//   handleSubmit(error, event) {
//     event.preventDefault();
//   }
// });

export default connect(

)(ForgotPassword);
