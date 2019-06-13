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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radial */ \"./src/radial.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\n\r\nwindow.state = null;\r\n\r\n_radial__WEBPACK_IMPORTED_MODULE_0__[\"init\"]();\r\n\r\nconst input = document.getElementById(\"seed\");\r\n\r\ninput.addEventListener(\"submit\", e => {\r\n\r\n    e.preventDefault();\r\n    const seed = _util__WEBPACK_IMPORTED_MODULE_1__[\"find\"](document.getElementById(\"seed-input\").value);\r\n\r\n    if (seed) {\r\n        _radial__WEBPACK_IMPORTED_MODULE_0__[\"rerender\"](seed)\r\n    } else {\r\n        alert(\"don't have that word in the database :(\")\r\n    }\r\n\r\n    document.getElementById(\"seed-input\").value = \"\";\r\n    \r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/radial.js":
/*!***********************!*\
  !*** ./src/radial.js ***!
  \***********************/
/*! exports provided: init, update, rerender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rerender\", function() { return rerender; });\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\n\r\nconst init = () => {\r\n    \r\n    window.svg = d3.select(\"svg\")\r\n        .attr(\"width\", 800)\r\n        .attr(\"height\", 800);\r\n\r\n    // const radialGradient = svg.append(\"defs\")\r\n    //     .append(\"radialGradient\")\r\n    //     .attr(\"id\", \"radial-gradient\");\r\n    \r\n    // radialGradient.append(\"stop\")\r\n    //     .attr(\"offset\", \"0%\")\r\n    //     .attr(\"stop-color\", \"#acd5b1\");\r\n\r\n    // radialGradient.append(\"stop\")\r\n    //     .attr(\"offset\", \"100%\")\r\n    //     .attr(\"stop-color\", \"#005a0b\");\r\n\r\n    d3.json(\"assets/data/by_etym.json\").then(data => {\r\n        window.state = data;\r\n        console.log(\"ready\");\r\n        \r\n        const seed = _util__WEBPACK_IMPORTED_MODULE_1__[\"find\"](\"silva\");\r\n            \r\n        rerender(seed);\r\n    });\r\n\r\n}\r\n\r\nconst update = source => {\r\n\r\n    const links = d3.select(\"svg\")\r\n        .selectAll(\"path\")\r\n        .data(source.links())\r\n        .join(\"path\")\r\n            .classed(\"path\", true)\r\n            .attr(\"d\", d3.linkRadial()\r\n                .angle(d => (d.x * Math.PI / 180))\r\n                .radius(d => d.y)\r\n            );\r\n\r\n    const nodes = d3.select(\"svg\")\r\n        .selectAll(\"g\")\r\n        .data(source.descendants())\r\n        .join(\"g\")\r\n            .classed(\"node\", true)\r\n            .attr(\"transform\", d => `\r\n                rotate(${d.x - 90})\r\n                translate(${d.y}, 0)\r\n            `);\r\n\r\n    nodes.selectAll(\"circle\")\r\n        .transition()\r\n            .duration(2000)\r\n            .attr(\"transform\", \"translate(0, 0) scale(0)\")\r\n        .remove();\r\n\r\n    nodes.selectAll(\"text\")\r\n        .transition()\r\n            .duration(2000)\r\n            .attr(\"transform\", \"translate(0, 0) scale(0)\")\r\n        .remove();\r\n\r\n    const circles = nodes.append(\"circle\")\r\n        .classed(\"circle\", true)\r\n        .attr(\"r\", d => (d.height + 5));\r\n\r\n    const words = nodes.append(\"text\")\r\n            .text(d => d.data.word)\r\n            .classed(\"text\", true)\r\n            .attr(\"font-size\", d => (8 + (3 * d.height)))\r\n            .attr(\"x\", d => ((d.x < 180) === !d.children ? (d.height + 8) : -(d.height + 8)))\r\n            .attr(\"text-anchor\", d => ((d.x < 180) === !d.children ? \"start\" : \"end\"))\r\n            .attr(\"transform\", d => {\r\n                if (d.children) {\r\n                    return `rotate(${-(d.x - 90)})`\r\n                } else {\r\n                    return (d.x >= 180 ? \"rotate(180)\" : null)\r\n                }\r\n            })\r\n        .clone(true).lower()\r\n            .classed(\"text-shadow\", true)\r\n            .attr(\"stroke-width\", d => (d.height + 1))\r\n            .attr(\"font-size\", d => (8 + (3 * d.height)));\r\n\r\n    const sources = nodes.append(\"text\")\r\n            .text(d => `(${d.data.source})`)\r\n            .classed(\"text\", true)\r\n            .attr(\"dy\", \"1em\")\r\n            .attr(\"font-size\", d => (5 + (d.height)))\r\n            .attr(\"x\", d => ((d.x < 180) === !d.children ? (d.height + 8) : -(d.height + 8)))\r\n            .attr(\"text-anchor\", d => ((d.x < 180) === !d.children ? \"start\" : \"end\"))\r\n            .attr(\"transform\", d => {\r\n                if (d.children) {\r\n                    return `rotate(${-(d.x - 90)})`\r\n                } else {\r\n                    return (d.x >= 180 ? \"rotate(180)\" : null)\r\n                }\r\n            })\r\n        .clone(true).lower()\r\n            .classed(\"text-shadow\", true)\r\n            .attr(\"stroke-width\", d => (d.height + 1))\r\n            .attr(\"font-size\", d => (5 + (d.height)))\r\n\r\n    const box = document.getElementById(\"svg\").getBBox();\r\n    svg.attr(\"viewBox\", `${box.x} ${box.y} ${box.width} ${box.height}`);\r\n\r\n}\r\n\r\nconst rerender = (seed) => {\r\n\r\n    const sizeScale = d3.scaleLinear()\r\n        .domain([0, 100])\r\n        .range([0, 500]);\r\n\r\n    const root = Object(_tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(seed, state);\r\n    const tree = d3.tree()\r\n        .size([360, sizeScale(root.descendants().length)])\r\n        .separation((a, b) => ((a.parent == b.parent ? 1 : 2) / a.depth))\r\n        (root);\r\n\r\n    update(root);\r\n\r\n}\n\n//# sourceURL=webpack:///./src/radial.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// for console testing\r\n\r\n// let state, seed;\r\n\r\n// d3.json(\"assets/data/by_etym.json\").then(function(data) {\r\n//     state = data;\r\n//     console.log(\"ready\");\r\n//   });\r\n\r\nconst buildTrunk = (seed, state) => {\r\n    const ancestors = [seed];\r\n    let currentNode = seed;\r\n    let parentNode = state.find(datum => (\r\n        datum.word === currentNode.targetWord &&\r\n        datum.source === currentNode.targetSource &&\r\n        datum.rel === \"from\"\r\n    ));\r\n\r\n    while (parentNode) {\r\n        ancestors.push(parentNode);\r\n        currentNode = parentNode;\r\n        parentNode = state.find(datum => (\r\n            datum.word === currentNode.targetWord &&\r\n            datum.source === currentNode.targetSource &&\r\n            datum.rel === \"from\"\r\n        ));\r\n    }\r\n\r\n    const last = ancestors[ancestors.length - 1];\r\n\r\n    ancestors.push({\r\n        word: last.targetWord,\r\n        source: last.targetSource,\r\n        rel: \"from\",\r\n        targetWord: undefined,\r\n        targetSource: undefined\r\n    })\r\n\r\n    return ancestors;\r\n}\r\n\r\nconst buildBranches = (seed, state) => {\r\n    let branches = [seed];\r\n\r\n    const children = state.filter(datum => (\r\n        datum.targetWord === seed.word &&\r\n        datum.targetSource === seed.source &&\r\n        datum.rel === \"from\"\r\n    ));\r\n\r\n    if (children.length > 0) {\r\n        children.forEach(child => {\r\n            branches = branches.concat(buildBranches(child, state));\r\n        })\r\n    };\r\n\r\n    return branches;\r\n}\r\n\r\nconst buildHierarchy = branches => {\r\n    return d3.stratify()\r\n        .id(d => ([d.word, d.source].join(\"\")))\r\n        .parentId(d => ([d.targetWord, d.targetSource].join(\"\")))\r\n        (branches);\r\n}\r\n\r\nconst buildTree = (seed, state) => {\r\n    const ancestors = buildTrunk(seed, state);\r\n    const root = ancestors[ancestors.length - 1];\r\n    const tree = buildBranches(root, state);\r\n    const rootNode = buildHierarchy(tree);\r\n    return rootNode;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildTree);\n\n//# sourceURL=webpack:///./src/tree.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\nconst find = word => {\r\n    return state.find(datum =>\r\n        datum.word === word &&\r\n        datum.rel === \"from\" &&\r\n        datum.targetWord.slice(0, 1) !== \"-\"\r\n    );\r\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });