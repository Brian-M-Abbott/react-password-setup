# react-password-setup

> React Component providing password input with validation. Also supports custom validation via passed props.

## Install



## Usage

```jsx
import React, { Component } from 'react'

import PasswordValidation from 'react-password-setup'
import 'react-password-setup/dist/index.css'

class Example extends Component {
  render() {
    return (
      <PasswordValidation
        primaryLabelText="Please enter a password:"
        confirmationLabelText="Please confirm your password:"
        isMasked={false}
        validations={[regex: /[A-Z]/, error: "Must include an Uppercase character"]}
      />
    )
  }
}
```

### Select Props

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| primaryLabelText | string | Please enter a password: | The label shown on top of the first password input |
| confirmationLabelText | string | Please confirm your password: | The label shown on top of the confirmation password input |
| validations | array | Default validations: Length >5, 1 Uppercase, 1 Lowercase, 1 Special Char | What validations are performed the passwords |
| isMasked | boolean | false | Whether the text is hidden or shown to user |


## License

MIT © [Brian-M-Abbott](https://github.com/Brian-M-Abbott)
