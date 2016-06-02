/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(9);

	angular.module('dle.utilities', ['dle.calculator', 'dle.scientific-calculator']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".container {\n  width: 1060px;\n  margin: 0 auto; }\n\n.container-simple {\n  width: 436px;\n  margin: 0 auto; }\n\n.calc-box {\n  padding: 10px;\n  padding-top: 54px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  position: relative;\n  background-color: #bebebe; }\n  .calc-box form {\n    margin: 0;\n    padding: 0; }\n  .calc-box input[type=\"text\"] {\n    border: 0;\n    width: 100%;\n    outline: none;\n    text-align: right;\n    background-color: #ffffff;\n    font-size: 78px; }\n  .calc-box ul {\n    background-color: #ebebeb;\n    margin: 0;\n    padding: 0; }\n    .calc-box ul li {\n      display: inline-block;\n      vertical-align: middle;\n      margin: 0;\n      padding: 0;\n      width: 103px;\n      height: 103px;\n      overflow: hidden;\n      margin-right: -5px;\n      text-align: center;\n      border: 1px solid #bebebe; }\n    .calc-box ul li:first-child {\n      border-left: 0; }\n    .calc-box ul li:last-child button {\n      background-color: #686868;\n      font-size: 50px;\n      color: #ffffff; }\n    .calc-box ul:nth-child(3) sup {\n      font-size: 22px; }\n  .calc-box button {\n    width: 100%;\n    height: 100%;\n    border: 0;\n    position: relative;\n    background-color: transparent;\n    font-size: 36px;\n    cursor: pointer; }\n  .calc-box button.calc-number {\n    font-size: 50px;\n    background-color: #f5f3f3; }\n  .calc-box button.equally {\n    background-color: #000000;\n    color: #ffffff; }\n  .calc-box sup, .calc-box span {\n    font-size: 26px; }\n  .calc-box sub {\n    font-size: 18px; }\n  .calc-box:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 54px;\n    background-color: #6d6d6d; }\n  .calc-box .value-box {\n    padding: 10px 30px;\n    border-bottom: 1px solid #bebebe;\n    background-color: #ffffff; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var calculatorDirective = __webpack_require__(7);

	module.exports = angular.module('dle.calculator', []).directive('calculator', [calculatorDirective]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(8);

	module.exports = function () {
		return {
			restrict: 'E',
			template: template,
			replace: true,
			scope: true,
			controllerAs: 'ctrl',
			controller: function controller() {
				var _this = this;

				var operand1 = 0,
				    operator = void 0,
				    calculationMade = false;

				this.calculatorOutput = '0';

				this.appendNumber = function ($event) {
					var valueEntered = $event.currentTarget.value;

					if (valueEntered === '.' && alreadyHasDecimal(_this.calculatorOutput.toString())) {
						return;
					}

					if (_this.calculatorOutput === '0' || calculationMade) {
						_this.calculatorOutput = valueEntered;
						calculationMade = false;
					} else {
						_this.calculatorOutput += valueEntered;
					}
				};

				this.appendOperation = function ($event) {
					var operation = $event.currentTarget.value;

					if (operator !== undefined) {
						_this.performCalculation();
					}

					operator = operation;
					operand1 = _this.calculatorOutput;
					calculationMade = true;
				};

				this.performCalculation = function () {
					if (operator === undefined) {
						return;
					}

					var calculatedVal = 0;

					calculatedVal = eval(parseFloat(operand1) + operator + _this.calculatorOutput);

					if (isNaN(calculatedVal)) {
						calculatedVal = 'Error';
					}

					_this.calculatorOutput = calculatedVal;
					operand1 = 0;
					operator = undefined;
					calculationMade = true;
				};

				this.invertValue = function () {
					_this.calculatorOutput = parseFloat(_this.calculatorOutput) * -1;
					calculationMade = true;
				};

				this.squareRoot = function () {
					var calculatedVal = Math.sqrt(parseFloat(_this.calculatorOutput));
					_this.calculatorOutput = isNaN(calculatedVal) ? 'Error' : calculatedVal;
					calculationMade = true;
				};

				this.dividByHundred = function () {
					_this.calculatorOutput = parseFloat(_this.calculatorOutput) / 100;
					calculationMade = true;
				};

				this.clearEntries = function () {
					_this.calculatorOutput = '0';
					operand1 = 0;
					operator = undefined;
				};

				var alreadyHasDecimal = function alreadyHasDecimal(number) {
					return number.indexOf('.') > 0;
				};
			}
		};
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-simple\">\n\t<div class=\"calc-box\">\n\t\t<form name=\"Calculator\">\n\t\t\t<div class=\"value-box\">\n\t\t\t\t<input name=\"calcValue\" type=\"text\" ng-model=\"ctrl.calculatorOutput\" readonly=\"readonly\"/>\n\t\t\t</div>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.squareRoot();\">&radic;</button></li>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.invertValue();\">+/-</button></li>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.dividByHundred();\">%</button></li>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.clearEntries();\">c</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"7\" ng-click=\"ctrl.appendNumber($event);\">7</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"8\" ng-click=\"ctrl.appendNumber($event);\">8</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"9\" ng-click=\"ctrl.appendNumber($event);\">9</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"/\" ng-click=\"ctrl.appendOperation($event);\">&divide;</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"4\" ng-click=\"ctrl.appendNumber($event);\">4</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"5\" ng-click=\"ctrl.appendNumber($event);\">5</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"6\" ng-click=\"ctrl.appendNumber($event);\">6</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"*\" ng-click=\"ctrl.appendOperation($event);\">&times;</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"1\" ng-click=\"ctrl.appendNumber($event);\">1</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"2\" ng-click=\"ctrl.appendNumber($event);\">2</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"3\" ng-click=\"ctrl.appendNumber($event);\">3</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"-\" ng-click=\"ctrl.appendOperation($event);\">&minus;</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"0\" ng-click=\"ctrl.appendNumber($event);\">0</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\".\" ng-click=\"ctrl.appendNumber($event);\">.</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number equally\" value=\"=\" ng-click=\"ctrl.performCalculation();\">=</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"+\" ng-click=\"ctrl.appendOperation($event);\">+</button></li>\n\t\t\t</ul>\n\t\t</form>\n\t</div>\n</div>"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var scientificCalculatorDirective = __webpack_require__(10);

	module.exports = angular.module('dle.scientific-calculator', []).directive('scientificCalculator', scientificCalculatorDirective);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(11);

	module.exports = function () {
		return {
			restrict: 'E',
			template: template,
			replace: true,
			scope: true,
			controllerAs: 'ctrl',
			controller: function controller() {
				var _this = this;

				var operand1 = 0,
				    operator = void 0,
				    calculationMade = false;

				this.calculatorOutput = '0';

				this.appendNumber = function ($event) {
					var valueEntered = $event.currentTarget.value;

					if (valueEntered === '.' && alreadyHasDecimal(_this.calculatorOutput.toString())) {
						return;
					}

					if (_this.calculatorOutput === '0' || calculationMade) {
						_this.calculatorOutput = valueEntered;
						calculationMade = false;
					} else {
						_this.calculatorOutput += valueEntered;
					}
				};

				this.appendOperation = function ($event) {
					var operation = $event.currentTarget.value;

					if (operator !== undefined) {
						_this.performCalculation();
					}

					operator = operation;
					operand1 = _this.calculatorOutput;
					calculationMade = true;
				};

				this.performCalculation = function () {
					if (operator === undefined) {
						return;
					}

					var calculatedVal = 0;

					calculatedVal = eval(parseFloat(operand1) + operator + _this.calculatorOutput);

					if (isNaN(calculatedVal)) {
						calculatedVal = 'Error';
					}

					_this.calculatorOutput = calculatedVal;
					operand1 = 0;
					operator = undefined;
					calculationMade = true;
				};

				this.invertValue = function () {
					_this.calculatorOutput = parseFloat(_this.calculatorOutput) * -1;
					calculationMade = true;
				};

				this.squareRoot = function () {
					var calculatedVal = Math.sqrt(parseFloat(_this.calculatorOutput));
					_this.calculatorOutput = isNaN(calculatedVal) ? 'Error' : calculatedVal;
					calculationMade = true;
				};

				this.dividByHundred = function () {
					_this.calculatorOutput = parseFloat(_this.calculatorOutput) / 100;
					calculationMade = true;
				};

				this.clearEntries = function () {
					_this.calculatorOutput = '0';
					operand1 = 0;
					operator = undefined;
				};

				var alreadyHasDecimal = function alreadyHasDecimal(number) {
					return !!(number.indexOf('.') > 0);
				};
			}
		};
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n\t<div class=\"calc-box\">\n\t\t<form>\n\t\t\t<div class=\"value-box\">\n\t\t\t\t<input calcValue type=\"text\" ng-model=\"ctrl.calculatorOutput\" readonly=\"readonly\" />\n\t\t\t</div>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"submit\">(</button></li>\n\t\t\t\t<li><button type=\"submit\">)</button></li>\n\t\t\t\t<li><button type=\"submit\">mc</button></li>\n\t\t\t\t<li><button type=\"submit\">m+</button></li>\n\t\t\t\t<li><button type=\"submit\">m-</button></li>\n\t\t\t\t<li><button type=\"submit\">mr</button></li>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.squareRoot();\">&radic;</button></li>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.invertValue();\">+/-</button></li>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.dividByHundred();\">%</button></li>\n\t\t\t\t<li><button type=\"button\" ng-click=\"ctrl.clearEntries();\">c</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"submit\">2<sup>nd</sup></button></li>\n\t\t\t\t<li><button type=\"submit\">x<sup>2</sup></button></li>\n\t\t\t\t<li><button type=\"submit\">x<sup>3</sup></button></li>\n\t\t\t\t<li><button type=\"submit\">x<sup>y</sup></button></li>\n\t\t\t\t<li><button type=\"submit\">nPr</button></li>\n\t\t\t\t<li><button type=\"submit\">nCr</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"7\" ng-click=\"ctrl.appendNumber($event);\">7</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"8\" ng-click=\"ctrl.appendNumber($event);\">8</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"9\" ng-click=\"ctrl.appendNumber($event);\">9</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"/\" ng-click=\"ctrl.appendOperation($event);\">&divide;</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"submit\">x!</button></li>\n\t\t\t\t<li><button type=\"submit\"><sup>3</sup>&radic;<span>x</span></button></li>\n\t\t\t\t<li><button type=\"submit\"><sup>n</sup>&radic;<span>x</span></button></li>\n\t\t\t\t<li><button type=\"submit\"><sup>1</sup>/<span>x</span></button></li>\n\t\t\t\t<li><button type=\"submit\">log<sub>10</sub></button></li>\n\t\t\t\t<li><button type=\"submit\">In</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"4\" ng-click=\"ctrl.appendNumber($event);\">4</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"5\" ng-click=\"ctrl.appendNumber($event);\">5</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"6\" ng-click=\"ctrl.appendNumber($event);\">6</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"*\" ng-click=\"ctrl.appendOperation($event);\">&times;</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"submit\">Rad</button></li>\n\t\t\t\t<li><button type=\"submit\">sin</button></li>\n\t\t\t\t<li><button type=\"submit\">cos</button></li>\n\t\t\t\t<li><button type=\"submit\">tan</button></li>\n\t\t\t\t<li><button type=\"submit\">EE</button></li>\n\t\t\t\t<li><button type=\"submit\">e</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"1\" ng-click=\"ctrl.appendNumber($event);\">1</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"2\" ng-click=\"ctrl.appendNumber($event);\">2</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"3\" ng-click=\"ctrl.appendNumber($event);\">3</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"-\" ng-click=\"ctrl.appendOperation($event);\">&minus;</button></li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<li><button type=\"submit\">Deg</button></li>\n\t\t\t\t<li><button type=\"submit\">sinh</button></li>\n\t\t\t\t<li><button type=\"submit\">cosh</button></li>\n\t\t\t\t<li><button type=\"submit\">tanh</button></li>\n\t\t\t\t<li><button type=\"submit\">TT</button></li>\n\t\t\t\t<li><button type=\"submit\">Rand</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\"0\" ng-click=\"ctrl.appendNumber($event);\">0</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number\" value=\".\" ng-click=\"ctrl.appendNumber($event);\">.</button></li>\n\t\t\t\t<li><button type=\"button\" class=\"calc-number equally\" value=\"=\" ng-click=\"ctrl.performCalculation();\">=</button></li>\n\t\t\t\t<li><button type=\"button\" value=\"+\" ng-click=\"ctrl.appendOperation($event);\">+</button></li>\n\t\t\t</ul>\n\t\t</form>\n\t</div>\n</div>"

/***/ }
/******/ ]);