import React from 'react'

import { PasswordValidation } from 'react-password-setup'
import 'react-password-setup/dist/index.css'

const App = () => {
  return (
    <div>
      <h2>Sample App Page with Password Validation</h2>
      <div style={{width: '75%'}}>
        <PasswordValidation
          primaryLabelText="Please enter a password:"
          confirmationLabelText="Please confirm your password:"
          isMasked={false}
        />
      </div>
    </div>
  )
}

export default App
