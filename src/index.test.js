import { PasswordValidation } from '.'

describe('PasswordValidation', () => {
  it('is truthy', () => {
    expect(PasswordValidation).toBeTruthy()
  })
})


describe('Password Regex Validation', () => {
  it('is longer than 6 characters', () => {
    let regex = /^.{6,}$/
    let actualTest = regex.test('123456')
    expect(actualTest).toBeTruthy()
  })

  it('is containing 1 uppercase', () => {
    let regex = /[A-Z]/
    let actualTest = regex.test('aA')
    expect(actualTest).toBeTruthy()
  })

  it('is containing 1 lowercase', () => {
    let regex = /[a-z]/
    let actualTest = regex.test('aA')
    expect(actualTest).toBeTruthy()
  })

  it('is containing 1 special char', () => {
    let regex = /[(!@#$%^&*()_\-+={\[}\]|:;"'<,>.)]/
    let actualTest = regex.test('!')
    expect(actualTest).toBeTruthy()
  })

  it('is containing 1 number', () => {
    let regex = /[\d]/
    let actualTest = regex.test('aczx1')
    expect(actualTest).toBeTruthy()
  })



})
