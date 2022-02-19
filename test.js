console.log("Starting lib_chasm debug session:\n\tVersion: " + _CHASM_VERSION_MAJOR + "." + _CHASM_VERSION_MINOR + "." + _CHASM_VERSION_BUILD + "\n\tBuild Time: " + _CHASM_BUILD_TIME.toLocaleString());

// Resource Initialization
var resource = new chasm_resource("chasm_resource");
resource.option_cap = true;
resource.cap = BigNumber(10);

var resource_small = new chasm_resource_small("chasm_resource_small");

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

// Input handling
function checkbox_resource_unlocked() {
	if(document.getElementById("resource_unlocked").checked) resource.option_unlocked = true;
	else resource.option_unlocked = false;
}

function checkbox_resource_cap() {
	if(document.getElementById("resource_cap").checked) resource.option_cap = true;
	else resource.option_cap = false;
}

function click_resource() {
	resource.gain(document.getElementById("resource_gain").value);
}

function click_resource_set() {
	resource.set(document.getElementById("resource_set").value);
}

function checkbox_resource_small_unlocked() {
	if(document.getElementById("resource_small_unlocked").checked) resource_small.option_unlocked = true;
	else resource_small.option_unlocked = false;
}

function checkbox_resource_small_cap() {
	if(document.getElementById("resource_small_cap").checked) resource_small.option_cap = true;
	else resource_small.option_cap = false;
}

function click_resource_small() {
	resource_small.gain(document.getElementById("resource_small_gain").value);
}

function click_resource_small_set() {
	resource_small.set(document.getElementById("resource_small_set").value);
}