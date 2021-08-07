import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './Session_form';
import { signupUser } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'signup',
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signupUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);