import { connect } from 'react-redux';
import { logout, login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( {session, errors} ) => {
  return {
    loggedIn: Boolean(session.currentUser),
    session: session,
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, {location} ) => {
  // const formType = location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;
  return {
    // processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
