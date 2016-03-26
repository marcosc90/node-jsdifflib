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
   this.attributes = {};
}

Element.prototype.appendChild = function(element) {
	this.childs.push(element);
};

Element.prototype.getOpeningTag = function() {
	return "<" + this.name + this.getAttrs() + ">";
};

Element.prototype.getClosingTag = function() {
	return "</" + this.name + ">";
};

Element.prototype.setAttribute = function(name, value){
	this.attributes[name] = value;
};

Element.prototype.getAttrs = function() {
	var attrs = [];

	for(var attr in this.attributes){
		if(this.attributes.hasOwnProperty(attr)){
			attrs.push(this._mapAttribute(attr) + "=\"" + this.attributes[attr] + "\"");
		}
	}

	return attrs.length ? " " + attrs.join(' ') : "";
};

Element.prototype._mapAttribute = function(key){

	if(key === "className")
		return "class";

	return key;
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

Object.defineProperty(Element.prototype, 'className', {
	set: function(value) {
		this.attributes['className'] = value;
	},

	get: function(){
		this.attributes['className'];
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

