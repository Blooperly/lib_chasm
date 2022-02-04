console.log("Starting lib_chasm debug session:\n\tVersion: " + _CHASM_VERSION_MAJOR + "." + _CHASM_VERSION_MINOR + "." + _CHASM_VERSION_BUILD + "\n\tBuild Time: " + _CHASM_BUILD_TIME.toLocaleString());

// Resource Initialization
var wood = new chasm_resource("Wood");
wood.option_unlocked = true;
var stone = new chasm_resource("Stone");
stone.option_unlocked = true;
var iron = new chasm_resource("Iron");
iron.option_unlocked = true;
iron.option_cap = true;
iron.cap = BigNumber(10);

function chasm_test() {
	draw_resources();
	chasm_timing_init(chasm_tick, 100);

	// Set breakpoint here to catch initialized library
	console.log("\tlib_chasm initialized\n\n");
}

function chasm_tick(scalar) {
	wood.gain(BigNumber(1).times(scalar));
	draw_resources(); // Move to animation loop later
}

function draw_resources() {
	document.getElementById("chasm_resource_wood").innerHTML = wood.toString();
	document.getElementById("chasm_resource_stone").innerHTML = stone.toString();
	document.getElementById("chasm_resource_iron").innerHTML = iron.toString();
}

function click_wood() {
	wood.gain(1);
}

function click_stone() {
	stone.gain(1);
}

function click_iron() {
	iron.gain(1);
}

function click_iron_expand() {
	if (iron.spend(10)){
		iron.cap = iron.cap.plus(10);
	}
}