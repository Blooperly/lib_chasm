// Timing Module
let _CHASM_TIMING_LAST_TIMESTAMP = 0;
let _CHASM_TIMING_FRACTIONAL_TICK = 0;
let _CHASM_TIMING_CALLBACK = 0;
let _CHASM_TIMING_TICK_TIME = 100;
let _CHASM_TIMING_SCALAR = 0;

function chasm_timing_init(callback, tick_time) {
	_CHASM_TIMING_CALLBACK = callback;
	_CHASM_TIMING_TICK_TIME = tick_time;
	_CHASM_TIMING_SCALAR = tick_time / 1000;
	window.requestAnimationFrame(_CHASM_TIMING_MODULE);
}

function _CHASM_TIMING_MODULE(timestamp) {
	_CHASM_TIMING_FRACTIONAL_TICK += timestamp - _CHASM_TIMING_LAST_TIMESTAMP;
	_CHASM_TIMING_LAST_TIMESTAMP = timestamp;
	
	while (_CHASM_TIMING_FRACTIONAL_TICK > _CHASM_TIMING_TICK_TIME ) {
		_CHASM_TIMING_FRACTIONAL_TICK -= _CHASM_TIMING_TICK_TIME;
		_CHASM_TIMING_CALLBACK(_CHASM_TIMING_SCALAR);
	}

	window.requestAnimationFrame(_CHASM_TIMING_MODULE);
}