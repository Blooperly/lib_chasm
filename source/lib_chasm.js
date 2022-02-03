// Library Info - DO NOT MANUALLY EDIT, BUILT BY buildscript.js
const _CHASM_VERSION_MAJOR = 0;
const _CHASM_VERSION_MINOR = 0;
const _CHASM_VERSION_BUILD = 70;
const _CHASM_BUILD_TIME = new Date(1643885246619);

// Resource Module
	// Chasm Resources are the primary objects for storing player inventory and statistics. Resources are an
	// abstract concept that represent anything the player can generate, collect, or spend.
class chasm_resource {
	// Resource Info
	name = "";
	id = 0;

	// Resource Stats
	current = new BigNumber(0);
	cap = new BigNumber(0);
	alltime = new BigNumber(0);

	// Resource Options
	option_unlocked = false;
	option_cap = false;

	// Constructor
	constructor(name) {
		this.name = name;
	}

	// Gain resource
	gain(amount) {
		if (this.option_unlocked) {
			this.current = this.current.plus(amount);
			this.alltime = this.alltime.plus(amount);

			if (this.option_cap && this.current.gt(this.cap)) {
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
		let string = 						"[" + this.id + "]";
		string +=							" " + this.name + ":";
		string +=							" (current = " + this.current + ")";
		if (this.option_cap) string +=		" (cap = " + this.cap + ")";
		string +=							" (alltime = " + this.alltime + ")";
		return string;
	}
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