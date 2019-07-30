/**
 * Checks whether a value is valid
 * @param {*} value 
 */
function isValid(value) {
  if (typeof value === 'number' && !isNaN(value)) {
    return true
  } else {
    return false
  }
}

exports.isValid = isValid