const { isValid } = require('../js/utils/validate.util')

test('should return true', () => {
  let output = isValid(parseFloat('20.00'))
  expect(output).toBe(true)
})

test('should return false', () => {
  let output = isValid(parseFloat(''))
  expect(output).toBe(false)
})

test('should return false', () => {
  let output = isValid(parseFloat('aa20.00'))
  expect(output).toBe(false)
})