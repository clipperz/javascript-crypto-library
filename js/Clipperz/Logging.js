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


Clipperz.Base.module('Clipperz');

if (typeof console == 'undefined') {
	Clipperz.log = MochiKit.Logging.logDebug;
// Safari/WebKit 4
} else if (navigator.userAgent.match(/WebKit/)) {
//	Clipperz.log = console.log;
	Clipperz.log = MochiKit.Logging.logDebug;
} else if (navigator.userAgent.match(/Gecko/)) {
	Clipperz.log = function () { 
//	firebug 1.3 bug see http://code.google.com/p/fbug/issues/detail?id=1347		
		console.log.apply(window._firebug, arguments);
	};
}