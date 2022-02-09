console.log("Starting lib_chasm debug session:\n\tVersion: " + _CHASM_VERSION_MAJOR + "." + _CHASM_VERSION_MINOR + "." + _CHASM_VERSION_BUILD + "\n\tBuild Time: " + _CHASM_BUILD_TIME.toLocaleString());

// Resource Initialization
var resource = new chasm_resource("chasm_resource");
resource.option_unlocked = true;
resource.option_cap = true;
resource.cap = BigNumber(10);

var resource_small = new chasm_resource_small("chasm_resource_small");
resource_small.option_unlocked = true;

function chasm_test() {
	draw_resources();
	chasm_timing_init(chasm_tick, 100);

	// Set breakpoint here to catch initialized library
	console.log("\tlib_chasm initialized\n\n");
}

function chasm_tick(scalar) {
	resource_small.gain(1 * scalar);
	draw_resources(); // Move to animation loop later
}

function draw_resources() {
	document.getElementById("chasm_resource").innerHTML = resource.toString();
	document.getElementById("chasm_resource_small").innerHTML = resource_small.toString();
}

// Button handling
function click_resource() {
	resource.gain(1);
}

function click_resource_expand() {
	if (resource.spend(10)) {
		resource.cap = resource.cap.plus(10);
	}
}

function click_resource_small() {
	resource_small.gain(1);
}