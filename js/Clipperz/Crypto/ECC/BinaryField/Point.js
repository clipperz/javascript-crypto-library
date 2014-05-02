/*

Copyright 2008-2014 Clipperz Srl - All rights reserved.

This file is part of Clipperz's Javascript Crypto Library.

The Javascript Crypto Library provides web developers with an extensive 
and efficient set of cryptographic functions.
For further information about its features and functionalities please
refer to https://clipperz.is

* The Javascript Crypto Library is free software: you can redistribute
  it and/or modify it under the terms of the BSD 3-Clause License
  as published by the Free Software Foundation.

* You should have received a copy of the BSD 3-Clause License
  along with the Javascript Crypto Library in the LICENSE.TXT file. 
  If not, see <http://www.gnu.org/licenses/>.

*/


//try { if (typeof(Clipperz.ByteArray) == 'undefined') { throw ""; }} catch (e) {
//	throw "Clipperz.Crypto.ECC depends on Clipperz.ByteArray!";
//}  
if (typeof(Clipperz.Crypto.ECC) == 'undefined') { Clipperz.Crypto.ECC = {}; }
if (typeof(Clipperz.Crypto.ECC.BinaryField) == 'undefined') { Clipperz.Crypto.ECC.BinaryField = {}; }

Clipperz.Crypto.ECC.BinaryField.Point = function(args) {
	args = args || {};
	this._x = args.x;
	this._y = args.y;
	
	return this;
}

Clipperz.Crypto.ECC.BinaryField.Point.prototype = MochiKit.Base.update(null, {

	'asString': function() {
		return "Clipperz.Crypto.ECC.BinaryField.Point (" + this.x() + ", " + this.y() + ")";
	},

	//-----------------------------------------------------------------------------

	'x': function() {
		return this._x;
	},
	
	'y': function() {
		return this._y;
	},

	//-----------------------------------------------------------------------------

	'isZero': function() {
		return (this.x().isZero() && this.y().isZero())
	},
	
	//-----------------------------------------------------------------------------
	__syntaxFix__: "syntax fix"
});
