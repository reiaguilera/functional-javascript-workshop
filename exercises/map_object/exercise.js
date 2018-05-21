const runner = require("../runner")

const double = x => x * 2

module.exports = runner.custom(function(mapObject, double) {
  const arg = { a: 1, b: 2, c: 3 }
  try {
    return {
      result: mapObject(double, arg),
      input: arg
    }
  } catch (e) {
    return {
      result: e.message
    }
  }
})(double)
