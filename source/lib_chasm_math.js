// Library Info - DO NOT MANUALLY EDIT, BUILT BY buildscript.js
var _CHASM_MATH_VERSION_MAJOR = 0;
var _CHASM_MATH_VERSION_MINOR = 0;
var _CHASM_MATH_VERSION_BUILD = 167;
var _CHASM_MATH_BUILD_TIME = new Date(1645485663237);

// Math Module
	// Useful functions for calculating incremental math

// Exponential growth function: y = cb^x
// c: initial value at x = 0
// b: growth factor (every 1x = *b)
function chasm_math_exponential_cost(x, c, b) {
	return c * Math.pow(b, x);
}

// Linear growth function: y = mx + b
// m: slope
// b: intercept
function chasm_math_linear_cost(x, m, b) {
	return (m * x) + b;
}