const { rad, deg, sen, cos, tan } = require('../js/utils/ang.util')

test('should output angle in radians', () => {
  let output = rad(18.00)
  expect(output).toBe(18.00 * Math.PI / 180)
})

test('should output angle in degrees', () => {
  let output = deg(0.3141592653589793)
  expect(output).toBe(0.3141592653589793 * 180 /  Math.PI)
})

test('should output sine of angle (passed in radians)', () => {
  let output = sen(rad(20))
  expect(output).toBe(Math.sin(20 * Math.PI / 180))
})

test('should output cosine of angle (in radians)', () => {
  let output = cos(rad(20))
  expect(output).toBe(Math.cos(20 * Math.PI / 180))
})

test('should output tangent of angle (passed in radians)', () => {
  let output = tan(rad(20))
  expect(output).toBe(Math.tan(20 * Math.PI / 180))
})