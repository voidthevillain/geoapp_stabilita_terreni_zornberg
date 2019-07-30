const { parse } = require('../js/utils/parse.util')

test('should output number', () => {
  let output = parse('20.00')
  expect(output).toBe(20.00)
})

test('should output text converted to number', () => {
  let output = parse('30.00')
  expect(typeof output).toBe('number')
})

test('should output NaN', () => {
  let output = parse('')
  expect(output).toBe(NaN)
})

test('should output NaN', () => {
  let output = parse('')
  expect(output).toBe(NaN)
})