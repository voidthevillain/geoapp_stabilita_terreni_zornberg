const { calcoloW, calcoloFSTot, calcoloTamm, calcoloTp, calcoloN, calcoloS, calcoloFSr } = require('../js/functions/zornberg.func')

test('should output W', () => {
  let output = calcoloW(18.00, 20, 0.30)
  expect(output).toBe(18.00 * 20 * 0.30)
})

test('should output FS_tot', () => {
  let output = calcoloFSTot(1.1, 1.2, 1.3, 1.3)
  expect(output).toBe(1.1 * 1.2 * 1.3 * 1.3)
})

test('should output t_amm', () => {
  let output = calcoloTamm(35, 2.2)
  expect(output).toBe(35 / 2.2)
})

test('should output tp', () => {
  let output = calcoloTp(15.69, 20)
  expect(output).toBe(15.69 / 20)
})

test('should output N', () => {
  let output = calcoloN(108.00, 20)
  expect(output).toBe(108.00 * Math.cos(20 * Math.PI / 180))
})

test('should output S', () => {
  let output = calcoloS(108.00, 20, 0.8, 20)
  expect(output).toBe(108.00 * Math.sin(20 * Math.PI / 180) - 0.8 * 20)
})

test('should output FSr', () => {
  let output = calcoloFSr(0.00, 18.00, 0.30, 20, 20, 0.8)
  expect(output).toBe(((0.00 / 18.00 * 0.30 * Math.sin(20 * Math.PI / 180) + Math.tan(20 * Math.PI / 180) / Math.tan(20 * Math.PI / 180)) / (1 - (0.8 / (18.00 * 0.30 * Math.sin(20 * Math.PI / 180))))))
})