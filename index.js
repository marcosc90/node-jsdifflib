var diffview = require("./lib/diffview");
var difflib = require("./lib/difflib");

/**
*	@param {string} baseText - The original string value
*	@param {string} newText - The new string value
*	@param {object} options:
*		 - baseTextName: the title to be displayed above the base text listing in the diff view; defaults
*			   to "Base Text"
*		 - newTextName: the title to be displayed above the new text listing in the diff view; defaults
*			   to "New Text"
*		 - contextSize: the number of lines of context to show around differences; by default, all lines
*			   are shown
*		 - viewType: if 0, a side-by-side diff view is generated (default); if 1, an inline diff view is
*	   		generated
*
*/


module.exports = function(baseText, newText, options) {
	"use strict";
	var base = difflib.stringAsLines(baseText),
		newtxt = difflib.stringAsLines(newText),
		sm = new difflib.SequenceMatcher(base, newtxt),
		opcodes = sm.get_opcodes();

	var settings = {
		baseTextLines: base,
		newTextLines: newtxt,
		opcodes: opcodes,
	};
	
	options = merge(options || {}, settings);

	return diffview.buildView(options);
};

function merge() {
	var obj = {},
		i = 0,
		il = arguments.length,
		key;
	for (; i < il; i++) {
		for (key in arguments[i]) {
			if (arguments[i].hasOwnProperty(key)) {
				obj[key] = arguments[i][key];
			}
		}
	}
	return obj;
}