console.log("Starting lib_chasm debug session:\n\tVersion: " + _CHASM_VERSION_MAJOR + "." + _CHASM_VERSION_MINOR + "." + _CHASM_VERSION_BUILD + "\n\tBuild Time: " + _CHASM_BUILD_TIME.toLocaleString());

// Resource Initialization
var wood = new chasm_resource("Wood", 1);

var bnFormat = {
	prefix: "",
	decimalSeparator: ".",
	groupSeparator: ",",
	groupSize: 3,
	secondaryGroupSize: 0,
	fractionGroupSeparator: " ",
	suffix: ""
}

function chasm_test() {

	// Set breakpoint here to catch final state
	console.log("\tClosing session...");
}