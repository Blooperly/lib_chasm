// Library Info - DO NOT MANUALLY EDIT, BUILT BY buildscript.js
const _CHASM_VERSION_MAJOR = 0;
const _CHASM_VERSION_MINOR = 0;
const _CHASM_VERSION_BUILD = 58;
const _CHASM_BUILD_TIME = new Date(1643751705917);

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

	constructor(name, id) {
		this.name = name;
		this.id = id;
	}

	// Add resource
	gain(i) {
		if (this.unlocked) {
			this.current.plus(i);
			this.alltime.plus(i);
			return true;
		}
		
		return false;
	}

	// Spend resource
	spend(i) {
		if (this.current.gte(i)) {
			this.current.minus(i);
			return true;
		}
		else {
			return false;
		}
	}

	// Print resource values. Useful for debugging, less useful for displaying in game.
	toString() {
		let string = 						"[" + this.id + "]";
		string +=							" " + this.name + ":";
		string +=							" (current = " + this.current + ")";
		if (this.option_cap) string +=		" (cap = " + this.cap + ")";
		return string;
	}
}

// Progress Module
	// Chasm Gates are 

// Task Module
	// Chasm Tasks are state-driven actions. Tasks are gathered into "Task Stacks", which are groups of tasks
	//that know each other's states. This can be used to implement mutually-exclusive task groups, task flows,
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