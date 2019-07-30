const { parse } = require('../js/utils/parse.util')

test('should output value converted to number', () => {
  let output = parse('20.00')
  expect(output).toBe(20.00)
})