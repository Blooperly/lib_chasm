// Library Info - DO NOT MANUALLY EDIT, BUILT BY buildscript.js
const _CHASM_VERSION_MAJOR = 0;
const _CHASM_VERSION_MINOR = 0;
const _CHASM_VERSION_BUILD = 94;
const _CHASM_BUILD_TIME = new Date(1644373397895);

// Resource Module
	// Chasm Resources are the primary objects for storing player inventory and statistics. Resources are an
	// abstract concept that represent anything the player can generate, collect, or spend.

class _CHASM_RESOURCE_TEMPLATE {
	// Resource Info
	name = "";

	// Resource Options
	option_unlocked = false;
	option_cap = false;
	option_buyable = false;

	// Constructor
	constructor(name) {
		this.name = name;
	}
}

class chasm_resource extends _CHASM_RESOURCE_TEMPLATE {
	// Resource Stats
	current = new BigNumber(0);
	cap = new BigNumber(0);
	alltime = new BigNumber(0);

	// Constructor
	constructor(name) {
		super(name);
	}

	// Gain resource
	gain(amount) {
		if (this.option_unlocked) {
			this.current = this.current.plus(amount);
			this.alltime = this.alltime.plus(amount);

			if (this.option_cap && this.current.gt(this.cap)) {
				this.current = BigNumber(this.cap);
			}

			return true;
		}
		else {
			return false;
		}
	}

	// Spend resource
	spend(amount) {
		if (this.current.gte(amount)) {
			this.current = this.current.minus(amount);
			return true;
		}
		else {
			return false;
		}
	}

	// Print resource values. Useful for debugging, less useful for displaying in game.
	// Format:
	// 		[id] name: (current) (cap) (alltime)
	toString() {
		let string = 						" " + this.name + ":";
		string +=							" (current = " + this.current.toFixed(0) + ")";
		if (this.option_cap) string +=		" (cap = " + this.cap.toFixed(0) + ")";
		string +=							" (alltime = " + this.alltime.toFixed(0) + ")";
		return string;
	}
}

class chasm_resource_small extends _CHASM_RESOURCE_TEMPLATE {
	// Resource Stats
	current = 0;
	cap = 0;
	alltime = 0;

	// Constructor
	constructor(name) {
		super(name);
	}

	// Gain resource
	gain(amount) {
		if (this.option_unlocked) {
			this.current += amount;
			this.alltime += amount;

			if (this.option_cap && this.current > this.cap) {
				this.current = this.cap;
			}

			return true;
		}
		else {
			return false;
		}
	}

	// Spend resource
	spend(amount) {
		if (this.current >= amount) {
			this.current -= amount;
			return true;
		}
		else {
			return false;
		}
	}

	// Print resource values. Useful for debugging, less useful for displaying in game.
	// Format:
	// 		[id] name: (current) (cap) (alltime)
	toString() {
		let string = 						" " + this.name + ":";
		string +=							" (current = " + this.current.toFixed(0) + ")";
		if (this.option_cap) string +=		" (cap = " + this.cap.toFixed(0) + ")";
		string +=							" (alltime = " + this.alltime.toFixed(0) + ")";
		return string;
	}
}

// Price Module

// Returns price for one resource
function chasm_price_flat(bnCurrent, bnPriceBase, bnPriceChange) {
	return (bnPriceBase.plus(bnCurrent.times(bnPriceChange)));
}

// Progress Module
	// Chasm Gates are state

// Task Module
	// Chasm Tasks are state-driven actions. Tasks are gathered into "Task Stacks", which are groups of tasks
	// that know each other's states. This can be used to implement mutually-exclusive task groups, task flows,
	// and compounding tasks.
class chasm_task {
	// Task Info
	name = "";
	id = 0;
	unlocked = 0;

	constructor(name, id) {
		this.name
	}
}

// Devtools Module
// Tool for graphing exponential progress in relation to upgrades & time