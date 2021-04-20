import React from 'react';
import PropTypes from 'prop-types';
import PasswordInput from "./password-input";

class PasswordCreationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryPassword: "",
            confirmationPassword: "",
            passwordValidationErrorMessages: [],
            validated: false
        }
    }

    handleSubmit = () => {
        const { primaryPassword } = this.state;
        if(primaryPassword.length === 0) return;
        if (!this.isPasswordValid()) {
            this.setState({ validated: false })
        } else {
            this.setState({ validated: true, passwordValidationErrorMessages: [] })
        }
    }

    handlePrimaryPasswordChange = (e) => {
        this.setState({primaryPassword: e.target.value, validated: false})
    }

    handleConfirmationPasswordChange = (e) => {
        this.setState({confirmationPassword: e.target.value, validated: false})
    }

    isPasswordValid = () => {
        const { primaryPassword, confirmationPassword } = this.state;
        const { validations } = this.props;
        let errors = [];
        validations.forEach( validation => {
            if(!validation.regex.test(primaryPassword)) {
                errors.push(validation.error);
            }
        });
        if(primaryPassword !== confirmationPassword) errors.push('Both passwords must match');
        if(errors.length >= 1) {
            this.setState({passwordValidationErrorMessages: errors})
            return false;
        } else {
            return true;
        }
    }

    render() {
        const { primaryPassword, confirmationPassword, validated, passwordValidationErrorMessages} = this.state;
        const { isMasked, primaryLabelText, confirmationLabelText, divClass} = this.props;
        let submitValue = validated ? 'Successfuly Validated!' : passwordValidationErrorMessages.length === 0 ? 'Submit for Validation' : 'Resubmit for Validation';
        let submitStyle = validated ? { backgroundColor: 'green' } : null;

        return (
            <div className={divClass ? divClass: "passwordFormDiv"}>
                <form onSubmit={this.handleSubmit}>
                    <PasswordInput
                        isMasked={isMasked}
                        value={primaryPassword}
                        label={primaryLabelText}
                        handleChange={this.handlePrimaryPasswordChange}
                    />
                    <br/>
                    <PasswordInput
                        isMasked={isMasked}
                        value={confirmationPassword}
                        label={confirmationLabelText}
                        handleChange={this.handleConfirmationPasswordChange}
                    />
                    <input type='button' style={submitStyle} value={submitValue} onClick={this.handleSubmit} />
                    <ul>
                        {this.state.passwordValidationErrorMessages.map((item, i) => {
                            return <li key={'li'+i} style={{color: 'red', fontWeight: 'bold'}}>{item}</li>
                        })}
                    </ul>
                </form>
            </div>
        );
    }
}

PasswordCreationForm.defaultProps = {
    validations: [
        {regex: /^.{6,}$/, error: 'Must be 6 Characters'},
        {regex: /[A-Z]/, error: 'Must have at least 1 uppercase character'},
        {regex: /[a-z]/, error: 'Must have at least 1 lowercase character'},
        {regex: /[\d]/, error: 'Must have at least 1 number'},
        {regex: /[(!@#$%^&*()_\-+={\[}\]|:;"'<,>.)]/, error: 'Must have at least one special character'}
    ],
    primaryLabelText: "Please create a password:",
    confirmationLabelText: "Please confirm your password:",
}

PasswordCreationForm.propTypes = {
    primaryLabelText: PropTypes.string.isRequired,
    confirmationLabelText: PropTypes.string.isRequired,
    validations: PropTypes.arrayOf(Object),
    divClass: PropTypes.string
}

export default PasswordCreationForm;