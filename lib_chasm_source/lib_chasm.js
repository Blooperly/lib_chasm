// @ts-check
console.log("Test");

// Resource Object
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

	// Add resource to stash
	add(i) {
		this.current += i;
		this.alltime += i;
	}

	// Print resource info
	infodump() {
		console.log(this.current);
	}
}

var iron = new chasm_resource("iron", 1);
iron.add(1);
iron.infodump();

iron.infodump();