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

// Load Version into lib_chasm.js
var library_file = "./source/lib_chasm.js";
var library = fs.readFileSync(library_file, "utf-8");

library = library.replace(/const _CHASM_VERSION_MAJOR.*;/, "const _CHASM_VERSION_MAJOR = " + version_major + ";");
library = library.replace(/const _CHASM_VERSION_MINOR.*;/, "const _CHASM_VERSION_MINOR = " + version_minor + ";");
library = library.replace(/const _CHASM_VERSION_BUILD.*;/, "const _CHASM_VERSION_BUILD = " + version_build + ";");
library = library.replace(/const _CHASM_BUILD_TIME.*;/, "const _CHASM_BUILD_TIME = new Date(" + Date.now() + ");");

fs.writeFileSync(library_file, library);
console.log("\t+ library info loaded");

console.log("\t+ build complete");