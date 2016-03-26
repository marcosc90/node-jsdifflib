/**
 * 	Simple & fast DOM implementation for diffview
 *		@author Marcos Casagrande
 *
 */

function TextNode(text) {
	this.textContent = text;
}

function Element(name) {
	this.name = name;
	this.childs = [];
};

Element.prototype.appendChild = function(element) {
	this.childs.push(element);
};

Element.prototype.getOpeningTag = function() {
	return "<" + this.name + this.getAttrs() + ">";
};

Element.prototype.getClosingTag = function() {
	return "</" + this.name + ">";
};

Element.prototype.getAttrs = function() {
	var attrs = "";

	if (this.className)
		attrs += "class=\"" + this.className + "\"";

	return attrs ? " " + attrs : attrs;
};

Object.defineProperty(Element.prototype, 'outerHTML', {
	get: function() {
		var outerHTML = this.getOpeningTag();

		for (var i = 0, len = this.childs.length; i < len; i++) {
			if (this.childs[i] instanceof Element)
				outerHTML += this.childs[i].outerHTML;
			else if (this.childs[i] instanceof TextNode)
				outerHTML += this.childs[i].textContent;
		}

		return outerHTML += this.getClosingTag();
	}
});

module.exports = document = {

	createElement: function(name) {
		return new Element(name);
	},

	createTextNode: function(text) {
		return new TextNode(text);
	}

};

