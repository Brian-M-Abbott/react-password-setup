import React from 'react';
import PasswordCreationForm from './components/password-creation-form';

export const PasswordValidation = ({ primaryLabelText, confirmationLabelText, isMasked }) => {
  return (
    <div>
      <PasswordCreationForm
          primaryLabelText= {primaryLabelText}
          confirmationLabelText={confirmationLabelText}
          isMasked={isMasked}
      />
    </div>
  )
}
