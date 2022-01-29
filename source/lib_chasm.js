// Library Info
var _CHASM_VERSION_MAJOR = 0;
var _CHASM_VERSION_MINOR = 0;
var _CHASM_VERSION_BUILD = 27;

// Resource Module
	// Chasm Resources are the primary objects for storing player inventory and statistics. Resources are an
	// abstract concept that represent anything the player can generate, collect, or spend.
class chasm_resource {
	// Resource Info
	name = "";
	id = 0;
	unlocked = 0;

	// Resource Count
	current = 0;
	alltime = 0;

	constructor(name, id) {
		this.name = name;
		this.id = id;
	}

	// Add resource
	add(i) {
		if (this.unlocked) {
			this.current += i;
			this.alltime += i;
			return true;
		}
		
		return false;
	}

	// Spend resource
	spend(i) {
		if (this.current >= i) {
			this.current -= i;
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
	// Chasm Tasks are state-driven actions that a player can engage in. Tasks are gathered into "Task Stacks",
	// which are groups of tasks that know each other's states. This can be used to implement mutually-exclusive
	// task groups, task flows, and compounding tasks.
class chasm_task {
	// Task Info
	name = "";
	id = 0;
	unlocked = 0;

	constructor(name, id) {
		this.name
	}
}