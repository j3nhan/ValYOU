import { connect } from 'react-redux';
import SigninForm from './signin_form';
import { signinUser , receiveSesErrors, removeSesErrors } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'signin'
})

const mapDispatchToProps = dispatch => ({
    signinUser: user => dispatch(signinUser(user)),
    receiveSesErrors: errors => dispatch(receiveSesErrors(errors)),
    removeSesErrors: () => dispatch(removeSesErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);