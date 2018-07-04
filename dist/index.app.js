/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_util_generalUtility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/util/generalUtility.js */ \"./src/scripts/util/generalUtility.js\");\n/* harmony import */ var _scripts_util_generalUtility_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_util_generalUtility_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/**\r\n * run()\r\n * Runs the app. What did you expect?\r\n *\r\n */\r\nlet run = function(){\r\n    _scripts_util_generalUtility_js__WEBPACK_IMPORTED_MODULE_0__[\"printConsoleFooter\"]();\r\n};\r\n\r\nrun();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdlbmVyYWxVdGlsaXR5IGZyb20gJy4vc2NyaXB0cy91dGlsL2dlbmVyYWxVdGlsaXR5LmpzJztcclxuXHJcbi8qKlxyXG4gKiBydW4oKVxyXG4gKiBSdW5zIHRoZSBhcHAuIFdoYXQgZGlkIHlvdSBleHBlY3Q/XHJcbiAqXHJcbiAqL1xyXG5sZXQgcnVuID0gZnVuY3Rpb24oKXtcclxuICAgIGdlbmVyYWxVdGlsaXR5LnByaW50Q29uc29sZUZvb3RlcigpO1xyXG59O1xyXG5cclxucnVuKCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/scripts/util/generalUtility.js":
/*!********************************************!*\
  !*** ./src/scripts/util/generalUtility.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * A toolbox for whacking the javascript on the head.\r\n */\r\n\r\n\r\n/**\r\n * getBrowser()\r\n * Identifies the client's browser and returns it.\r\n *\r\n * @returns {*} - The client's browser\r\n */\r\nlet getBrowser = function() {\r\n    let ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\\/))\\/?\\s*(\\d+)/i) || [];\r\n    if(/trident/i.test(M[1])){\r\n        tem=/\\brv[ :]+(\\d+)/g.exec(ua) || [];\r\n        return {name:'IE',version:(tem[1]||'')};\r\n    }\r\n    if(M[1]==='Chrome'){\r\n        tem=ua.match(/\\bOPR|Edge\\/(\\d+)/);\r\n        if(tem!==null)   {return {name:'Opera', version:tem[1]};}\r\n    }\r\n    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];\r\n    if((tem=ua.match(/version\\/(\\d+)/i))!==null) {M.splice(1,1,tem[1]);}\r\n    return {\r\n        name: M[0],\r\n        version: M[1]\r\n    };\r\n};\r\n\r\n/**\r\n * printConsoleFooter()\r\n * Prints the cute as fuck footer of mine to the client's console upon site load\r\n */\r\nlet printConsoleFooter = function () {\r\n    let style = 'color: LightSeaGreen';\r\n    let browser = getBrowser();\r\n\r\n    if(browser.name === \"IE\"){\r\n        console.log(\" _   ___               \\n\" +\r\n            \"| | / (_)              \\n\" +\r\n            \"| |/ / _ _ __ ___  ___ \\n\" +\r\n            \"|    \\\\| | '__/ _ \\\\/ _ \\\\\\n\" +\r\n            \"| |\\\\  \\\\ | | |  __/  __/\\n\" +\r\n            \"\\\\_| \\\\_/_|_|  \\\\___|\\\\___\\n\" +\r\n            \"Devausta, pelejä ja puujalkoja jo vuodesta 1992.\\n\" +\r\n            \"Business inquiries:\\n\" +\r\n            \"- Kiree#1073 (Discord)\\n\" +\r\n            \"- @PeHeri (Twitter)\\n\" +\r\n            \"- etunimi.sukunimi@hotmail.com\\n\\n\\n\" +\r\n            \"And please, älä käytä IE:tä...\");\r\n    } else {\r\n        console.log(\"%c _   ___               \\n\" +\r\n            \"| | / (_)              \\n\" +\r\n            \"| |/ / _ _ __ ___  ___ \\n\" +\r\n            \"|    \\\\| | '__/ _ \\\\/ _ \\\\\\n\" +\r\n            \"| |\\\\  \\\\ | | |  __/  __/\\n\" +\r\n            \"\\\\_| \\\\_/_|_|  \\\\___|\\\\___\\n\" +\r\n            \"Devausta, pelejä ja puujalkoja jo vuodesta 1992.\\n\" +\r\n            \"Business inquiries:\\n\" +\r\n            \"- Kiree#1073 (Discord)\\n\" +\r\n            \"- @PeHeri (Twitter)\\n\" +\r\n            \"- etunimi.sukunimi@hotmail.com\", style);\r\n    }\r\n};\r\n\r\nmodule.exports = {\r\n    printConsoleFooter: printConsoleFooter\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsL2dlbmVyYWxVdGlsaXR5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC9nZW5lcmFsVXRpbGl0eS5qcz9lZGZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBIHRvb2xib3ggZm9yIHdoYWNraW5nIHRoZSBqYXZhc2NyaXB0IG9uIHRoZSBoZWFkLlxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogZ2V0QnJvd3NlcigpXHJcbiAqIElkZW50aWZpZXMgdGhlIGNsaWVudCdzIGJyb3dzZXIgYW5kIHJldHVybnMgaXQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHsqfSAtIFRoZSBjbGllbnQncyBicm93c2VyXHJcbiAqL1xyXG5sZXQgZ2V0QnJvd3NlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHVhPW5hdmlnYXRvci51c2VyQWdlbnQsdGVtLE09dWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXTtcclxuICAgIGlmKC90cmlkZW50L2kudGVzdChNWzFdKSl7XHJcbiAgICAgICAgdGVtPS9cXGJydlsgOl0rKFxcZCspL2cuZXhlYyh1YSkgfHwgW107XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lOidJRScsdmVyc2lvbjoodGVtWzFdfHwnJyl9O1xyXG4gICAgfVxyXG4gICAgaWYoTVsxXT09PSdDaHJvbWUnKXtcclxuICAgICAgICB0ZW09dWEubWF0Y2goL1xcYk9QUnxFZGdlXFwvKFxcZCspLyk7XHJcbiAgICAgICAgaWYodGVtIT09bnVsbCkgICB7cmV0dXJuIHtuYW1lOidPcGVyYScsIHZlcnNpb246dGVtWzFdfTt9XHJcbiAgICB9XHJcbiAgICBNPU1bMl0/IFtNWzFdLCBNWzJdXTogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J107XHJcbiAgICBpZigodGVtPXVhLm1hdGNoKC92ZXJzaW9uXFwvKFxcZCspL2kpKSE9PW51bGwpIHtNLnNwbGljZSgxLDEsdGVtWzFdKTt9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IE1bMF0sXHJcbiAgICAgICAgdmVyc2lvbjogTVsxXVxyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBwcmludENvbnNvbGVGb290ZXIoKVxyXG4gKiBQcmludHMgdGhlIGN1dGUgYXMgZnVjayBmb290ZXIgb2YgbWluZSB0byB0aGUgY2xpZW50J3MgY29uc29sZSB1cG9uIHNpdGUgbG9hZFxyXG4gKi9cclxubGV0IHByaW50Q29uc29sZUZvb3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzdHlsZSA9ICdjb2xvcjogTGlnaHRTZWFHcmVlbic7XHJcbiAgICBsZXQgYnJvd3NlciA9IGdldEJyb3dzZXIoKTtcclxuXHJcbiAgICBpZihicm93c2VyLm5hbWUgPT09IFwiSUVcIil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgXyAgIF9fXyAgICAgICAgICAgICAgIFxcblwiICtcclxuICAgICAgICAgICAgXCJ8IHwgLyAoXykgICAgICAgICAgICAgIFxcblwiICtcclxuICAgICAgICAgICAgXCJ8IHwvIC8gXyBfIF9fIF9fXyAgX19fIFxcblwiICtcclxuICAgICAgICAgICAgXCJ8ICAgIFxcXFx8IHwgJ19fLyBfIFxcXFwvIF8gXFxcXFxcblwiICtcclxuICAgICAgICAgICAgXCJ8IHxcXFxcICBcXFxcIHwgfCB8ICBfXy8gIF9fL1xcblwiICtcclxuICAgICAgICAgICAgXCJcXFxcX3wgXFxcXF8vX3xffCAgXFxcXF9fX3xcXFxcX19fXFxuXCIgK1xyXG4gICAgICAgICAgICBcIkRldmF1c3RhLCBwZWxlasOkIGphIHB1dWphbGtvamEgam8gdnVvZGVzdGEgMTk5Mi5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiQnVzaW5lc3MgaW5xdWlyaWVzOlxcblwiICtcclxuICAgICAgICAgICAgXCItIEtpcmVlIzEwNzMgKERpc2NvcmQpXFxuXCIgK1xyXG4gICAgICAgICAgICBcIi0gQFBlSGVyaSAoVHdpdHRlcilcXG5cIiArXHJcbiAgICAgICAgICAgIFwiLSBldHVuaW1pLnN1a3VuaW1pQGhvdG1haWwuY29tXFxuXFxuXFxuXCIgK1xyXG4gICAgICAgICAgICBcIkFuZCBwbGVhc2UsIMOkbMOkIGvDpHl0w6QgSUU6dMOkLi4uXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjIF8gICBfX18gICAgICAgICAgICAgICBcXG5cIiArXHJcbiAgICAgICAgICAgIFwifCB8IC8gKF8pICAgICAgICAgICAgICBcXG5cIiArXHJcbiAgICAgICAgICAgIFwifCB8LyAvIF8gXyBfXyBfX18gIF9fXyBcXG5cIiArXHJcbiAgICAgICAgICAgIFwifCAgICBcXFxcfCB8ICdfXy8gXyBcXFxcLyBfIFxcXFxcXG5cIiArXHJcbiAgICAgICAgICAgIFwifCB8XFxcXCAgXFxcXCB8IHwgfCAgX18vICBfXy9cXG5cIiArXHJcbiAgICAgICAgICAgIFwiXFxcXF98IFxcXFxfL198X3wgIFxcXFxfX198XFxcXF9fX1xcblwiICtcclxuICAgICAgICAgICAgXCJEZXZhdXN0YSwgcGVsZWrDpCBqYSBwdXVqYWxrb2phIGpvIHZ1b2Rlc3RhIDE5OTIuXFxuXCIgK1xyXG4gICAgICAgICAgICBcIkJ1c2luZXNzIGlucXVpcmllczpcXG5cIiArXHJcbiAgICAgICAgICAgIFwiLSBLaXJlZSMxMDczIChEaXNjb3JkKVxcblwiICtcclxuICAgICAgICAgICAgXCItIEBQZUhlcmkgKFR3aXR0ZXIpXFxuXCIgK1xyXG4gICAgICAgICAgICBcIi0gZXR1bmltaS5zdWt1bmltaUBob3RtYWlsLmNvbVwiLCBzdHlsZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByaW50Q29uc29sZUZvb3RlcjogcHJpbnRDb25zb2xlRm9vdGVyXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/util/generalUtility.js\n");

/***/ })

/******/ });