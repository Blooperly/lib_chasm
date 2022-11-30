// Library Info - DO NOT MANUALLY EDIT, BUILT BY buildscript.js
var _CHASM_SAVE_VERSION_MAJOR = 0;
var _CHASM_SAVE_VERSION_MINOR = 0;
var _CHASM_SAVE_VERSION_BUILD = 167;
var _CHASM_SAVE_BUILD_TIME = new Date(1645485663237);

// Save Module
	// Useful functions for saving game data and migrating save files across versions
	//
	// Steps to save:
	// 1. Load all persistant data from your game into a save object
	// 2. Pass the save object to lib_chasm_store_save() along with a file name to save to local storage
	//
	// Steps to load a save:
	// 1. Populate a fresh save object with all values assigned to their default
	// 2. Call lib_chasm_load_save() with the previously used filename to retrieve stored save object
	// 3. Custom save version handling: manually delete any parameters that you want to reset to default
	// 4. Call lib_chasm_merge_save() to merge your default save object with your incoming save object.
	//		- Parameters in the default save which do not appear in the incoming save will keep their current value
	//		- Parameters in the default save which share a name with a parameter in the incoming save will be overwritten with the incoming value
	//		- Parameters that do not appear in the default save but do appear in the incoming save will be deleted
	// 5. Use merged save to populate persistant data

function lib_chasm_store_save(file, object) {
	localStorage.setItem(file, JSON.stringify(object));
}

function lib_chasm_load_save(file) {
	return JSON.parse(localStorage.getItem(file));
}

function lib_chasm_merge_save(base_layer, incoming_layer) {
	for (var prop in incoming_layer) {
		if (base_layer.hasOwnProperty(prop)) {
			if (typeof base_layer[prop] === "object") {
				lib_chasm_merge_save(base_layer[prop], incoming_layer[prop]);
			} else {
				base_layer[prop] = incoming_layer[prop];
			}
		}
	}
}
 
function lib_chasm_pack_resource(resource) {
	let packed_object = {};
	packed_object["option_unlocked"] = resource.option_unlocked;
	packed_object["option_cap"] = resource.option_cap;
	packed_object["current"] = resource.current.toString();
	packed_object["alltime"] = resource.alltime.toString();
	packed_object["cap"] = resource.cap.toString();
	return packed_object;
}

function lib_chasm_unpack_resource(name, packed_object) {
	let resource = new chasm_resource(name);
	resource.option_unlocked = packed_object["option_unlocked"];
	resource.option_cap = packed_object["option_cap"];
	resource.current = new BigNumber(packed_object["current"]);
	resource.alltime = new BigNumber(packed_object["alltime"]);
	resource.cap = new BigNumber(packed_object["cap"]);
	return resource;
}