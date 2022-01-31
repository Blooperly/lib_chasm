// Library Info - DO NOT MANUALLY EDIT, BUILT BY buildscript.js
const _CHASM_VERSION_MAJOR = 0;
const _CHASM_VERSION_MINOR = 0;
const _CHASM_VERSION_BUILD = 51;
const _CHASM_BUILD_TIME = new Date(1643539826771);

// Resource Module
	// Chasm Resources are the primary objects for storing player inventory and statistics. Resources are an
	// abstract concept that represent anything the player can generate, collect, or spend.
class chasm_resource {
	// Resource Info
	name = "";
	id = 0;
	unlocked = 0;

	// Resource Stats
	current = new BigNumber(0);
	cap = new BigNumber(0);
	alltime = new BigNumber(0);

	// Resource Options
	option_cap = false;

	constructor(name, id) {
		this.name = name;
		this.id = id;
	}

	// Add resource
	add(i) {
		if (this.unlocked) {
			this.current.add(i);
			this.alltime.add(i);
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