import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    };

    componentWillUnmount() {
        this.props.receiveSesErrors([])
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signupUser(user)
        .then(() => this.props.history.push('/'))
    }
    
    handleUpdate(type) {
        return e => this.setState({ 
            [type]: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.props.removeSesErrors();
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>{ error }</li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.formType === 'signup') {
            return(
                <div className="register">
                    <Link to="/">
                    <img className="login-logo" 
                        src="images/user_logo.png"
                        alt="valyou-logo" 
                    />
                    </Link>
                
                    <div className="register-container">
                        <h1 className="title-name">Create Account</h1>
                    
                        <form onSubmit={this.handleSubmit}>
                            <h5 className="sub-title">Name</h5>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleUpdate("name")}
                            />
                            <h5 className="sub-title">Email</h5>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={this.handleUpdate("email")}
                            />
                            <h5 className="sub-title">Password</h5>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleUpdate("password")}
                                placeholder="At least 6 characters"
                            />
                            <div className="error-message">
                                {this.renderErrors()}
                            </div>
                            <button type="submit" value={this.props.formType} className="continue">
                                Create your ValYOU account
                            </button>
                            <span className="private-condition">By creating an account, you agree to ValYOU's Conditions of Use and Privacy Notice.</span>

                            <div className="detail">
                                <p>Already have an account?</p>
                                <Link to="/signin" className="signin-link">
                                    <p>Sign-In</p>
                                </Link>
                            </div>
                    
                        </form> 
                    </div>
                </div>
            );
        }
    }    
};

export default SignupForm;