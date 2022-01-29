// Includes
var fs = require("fs");
var http = require("http");

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

library = library.replace(/var _CHASM_VERSION_MAJOR.*;/, "var _CHASM_VERSION_MAJOR = " + version_major + ";");
library = library.replace(/var _CHASM_VERSION_MINOR.*;/, "var _CHASM_VERSION_MINOR = " + version_minor + ";");
library = library.replace(/var _CHASM_VERSION_BUILD.*;/, "var _CHASM_VERSION_BUILD = " + version_build + ";");

fs.writeFileSync(library_file, library);
console.log("\t+ library info loaded");

// Launch web server
//const host = "localhost";
//const port = 8000;
//var html_file = "./index.html";
//
//const requestListener = function (req, res) {
//	var serving = fs.readFileSync(html_file, "utf-8");
//    res.setHeader("Content-Type", "text/html");
//	res.writeHead(200);
//	res.end(serving);
//};
//
//const server = http.createServer(requestListener);
//server.listen(port, host, () => {
//	console.log("\t+ server: http://" + host + ":" + port);
//});

console.log("\t+ build complete");

