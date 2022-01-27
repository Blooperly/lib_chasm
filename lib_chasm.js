// Resource Object
class chasm_resource {
	name = "";
	current = 0;
	alltime = 0;

	constructor(name) {
		this.name = name;
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