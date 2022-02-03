console.log("Starting lib_chasm debug session:\n\tVersion: " + _CHASM_VERSION_MAJOR + "." + _CHASM_VERSION_MINOR + "." + _CHASM_VERSION_BUILD + "\n\tBuild Time: " + _CHASM_BUILD_TIME.toLocaleString());

// Resource Initialization
var wood = new chasm_resource("Wood", 1);
wood.option_unlocked = true;
var stone = new chasm_resource("Stone", 2);
stone.option_unlocked = true;
var iron = new chasm_resource("Iron", 3);
iron.option_unlocked = true;

function chasm_test() {
	document.getElementById("chasm_resource_wood").innerHTML = wood.toString();
	document.getElementById("chasm_resource_stone").innerHTML = stone.toString();
	document.getElementById("chasm_resource_iron").innerHTML = iron.toString();

	// Set breakpoint here to catch final state
	console.log("\tClosing session...");
}