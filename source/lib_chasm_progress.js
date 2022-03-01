// Library Info - DO NOT MANUALLY EDIT, BUILT BY buildscript.js
var _CHASM_PROGRESS_VERSION_MAJOR = 0;
var _CHASM_PROGRESS_VERSION_MINOR = 0;
var _CHASM_PROGRESS_VERSION_BUILD = 167;
var _CHASM_PROGRESS_BUILD_TIME = new Date(1645485663237);

// Progress Module
	// Chasm Gates are a state-based method for tracking objectives. A gate can represent an achievement, game progress,
	// or feature unlocks. Gates can only be unlocked when all associated keys are acquired.

class chasm_key {
	x = 0;
}

class chasm_gate {
	// Resource Info
	name = "";
	state = 0;
	keys = new Array();
	keyCount = 0;

	// Constructor
	// To do: add keys on object initialization
	constructor(name) {
		this.name = name;
	}

	// Add key
	addKey(key, value, ) {
		if (key != null) {
			
		}
	}

	// Rattle gate (check if unlocked)
	rattle() {

	}
}