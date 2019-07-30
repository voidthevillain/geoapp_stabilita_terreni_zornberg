/**
 * Checks whether a value is valid
 * @param {*} value 
 */
export function isValid(value) {
  if (typeof value === 'number' && !isNaN(value)) {
    return true
  } else {
    return false
  }
}