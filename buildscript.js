// Includes
var fs = require("fs");

console.log("Building lib_chasm");

// Increment Build in Metadata
var metadata_file = "./metadata.json";
var version_major;
var version_minor;
var version_build;
var metadata = JSON.parse(fs.readFileSync(metadata_file));

metadata.versionBuild = metadata.versionBuild + 1;
version_major = metadata.versionMajor;
version_minor = metadata.versionMinor;
version_build = metadata.versionBuild;

fs.writeFileSync(metadata_file, JSON.stringify(metadata));
console.log("\t+ build incremented");

var build_time = Date.now();

// Load Version into lib_chasm.js
var library_file = "./source/lib_chasm.js";
var library = fs.readFileSync(library_file, "utf-8");
library_fill(library);
fs.writeFileSync(library_file, library);
console.log("\t+ library info loaded (" + library_file + ")");

// Load Version into lib_chasm_timing.js
library_file = "./source/lib_chasm.js";
library = fs.readFileSync(library_file, "utf-8");
library_fill(library);
fs.writeFileSync(library_file, library);
console.log("\t+ library info loaded (" + library_file + ")");

// Load Version into lib_chasm_math.js
library_file = "./source/lib_chasm_math.js";
library = fs.readFileSync(library_file, "utf-8");
library_fill(library);
fs.writeFileSync(library_file, library);
console.log("\t+ library info loaded (" + library_file + ")");

// Load Version into lib_chasm_logging.js
library_file = "./source/lib_chasm_logging.js";
library = fs.readFileSync(library_file, "utf-8");
library_fill(library);
fs.writeFileSync(library_file, library);
console.log("\t+ library info loaded (" + library_file + ")");

// This is currently broken. Regex issue?
function library_fill(library) {
	library = library.replace(/_VERSION_MAJOR.*;/, "_VERSION_MAJOR = " + version_major + ";");
	library = library.replace(/_VERSION_MINOR.*;/, "_VERSION_MINOR = " + version_minor + ";");
	library = library.replace(/_VERSION_BUILD.*;/, "_VERSION_BUILD = " + version_build + ";");
	library = library.replace(/_BUILD_TIME.*;/, "_BUILD_TIME = new Date(" + build_time + ");");
}