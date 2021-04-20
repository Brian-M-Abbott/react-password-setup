import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ label, isMasked, value, handleChange }) => {
    return (
        <label>
            {label}
            <input type={isMasked ? 'password' : 'text'} value={value} onChange={handleChange} />
        </label>
    );
}

PasswordInput.propTypes = {
    label: PropTypes.string.isRequired,
    isMasked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default PasswordInput
