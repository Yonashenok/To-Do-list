"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #e2d5f0;
}

html {
  font-size: 62.5%;
  font-family: "Lato", sans-serif;
}

.section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.time-date {
  margin-left: 1.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #913af6;
}

h3 {
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 0.5rem;
  color: #913af6;
}

.to-do-container {
  width: 50rem;
  box-shadow: 0.1px 0.5rem 0.5rem 0.6rem rgba(0, 0, 0, 0.1);
  padding: 3rem;
  border-radius: 2rem;
  background-color: #e1e6ee;
  border: 1px solid #999;
}

.to-do-form--input::placeholder {
  font-style: italic;
}

.to-do-list--container {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 2rem;
}

.to-do-list--item {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 6.5rem;
  gap: 0.5rem;
  padding: 1rem 1rem;
  margin-bottom: 1.2rem;
  border-radius: 1.5rem;
  cursor: pointer;
  background-color: #fff;
}

.checked {
  text-decoration: line-through;
}

.selected {
  background-color: #e2d5f0;
}

.flex-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.checkbox {
  margin-inline: 16px;
  border: 2px solid rgb(134, 130, 130);
  width: auto;
  transform: scale(1.6);
  cursor: pointer;
}

.task {
  width: 85%;
  height: 90%;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #1b2056;
}

.task:focus {
  outline: none;
}

.task:hover {
  cursor: default;
}

.item i {
  cursor: move;
}

.to-do-clear-btn {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background-color: #e1e6ee;
  color: #5f5f5f;
}

.to-do--btn {
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  color: #913af6;
  background-color: #fff;
  box-shadow: 0.1px 0.2rem 0.15rem 0.35rem rgba(178, 118, 228, 0.25);
  border-radius: 1rem;
  text-decoration: none;
}

.create-to-btn {
  margin-top: 2.5rem;
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  color: #fff;
  background-color: #913af6;
  box-shadow: 0.1px 0.2rem 0.15rem 0.35rem rgba(178, 118, 228, 0.25);
  border-radius: 1rem;
  text-decoration: none;
}

.dragging {
  opacity: 1;
  background: #e2d5f0;
}

.overly {
  width: 30rem;
  height: 20rem;
  background-color: rebeccapurple;
  position: fixed;
  top: 28%;
  left: 50%;
  transform: translate3d(-50%, 50%, 0);
  border-radius: 2rem;
}
.overly .btn-close {
  position: fixed;
  top: 12px;
  right: 12px;
}
.overly .model {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.overly .model .to-do-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
}
.overly .model .to-do-form .to-do-form--input {
  width: 25rem;
  height: 4rem;
  padding-left: 1.5rem;
  border: none;
  border-bottom: 1px solid #b3b3b3;
  border-top: 1px solid #b3b3b3;
}
.overly .model .btn--submit {
  padding: 0.8rem 1.5rem;
  border: none;
  font-size: 1.5rem;
  color: #913af6;
  background-color: #fff;
  box-shadow: 0.1px 0.2rem 0.15rem 0.35rem rgba(178, 118, 228, 0.25);
  border-radius: 1rem;
  text-decoration: none;
}

.to-do-nav {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin: 2rem 2rem;
  font-size: 1.6rem;
  font-weight: 600;
}

.to-do-nav-link {
  list-style: none;
}
.to-do-nav-link a {
  text-decoration: none;
  color: #8488ac;
}

.OnClickLink a {
  color: #913af6;
  border-bottom: 2px solid #913af6;
}

.to-do-completed--container {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 2rem;
}

.to-do-uncompleted--container {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 2rem;
}

.to-do-all--container,
.to-do-completed--container,
.to-do-uncompleted--container {
  display: none;
}

.to-do-all--container:target,
.to-do-completed--container:target,
.to-do-uncompleted--container:target {
  display: block;
}

.hidden {
  display: none;
}

@media only screen and (max-width : 600px) {
  .to-do-container {
    width: 50rem;
  }
}
@media only screen and (max-width : 480px) {
  .to-do-container {
    width: 35rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@mixin btn($col1, $col2) {\r\n  font-size: 1.5rem;\r\n  color: $col2;\r\n  background-color: $col1;\r\n  box-shadow: 0.1px 0.2rem 0.15rem 0.35rem rgba(178, 118, 228, 0.25);\r\n  border-radius: 1rem;\r\n  text-decoration: none;\r\n}\r\n\r\n@mixin flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin todo-container {\r\n  font-size: 1.6rem;\r\n  font-weight: 400;\r\n  padding: 2rem;\r\n}\r\n\r\n@mixin flex-start {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n}\r\n\r\nbody {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.section {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.time-date {\r\n  margin-left: 1.6rem;\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  color: #913af6;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1rem 0.5rem;\r\n  color: #913af6;\r\n}\r\n\r\n.to-do-container {\r\n  width: 50rem;\r\n  box-shadow: 0.1px 0.5rem 0.5rem 0.6rem rgba(0, 0, 0, 0.1);\r\n  padding: 3rem;\r\n  border-radius: 2rem;\r\n  background-color: #e1e6ee;\r\n  border: 1px solid #999;\r\n}\r\n\r\n.to-do-form--input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.to-do-list--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-list--item {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  height: 6.5rem;\r\n  gap: 0.5rem;\r\n  padding: 1rem 1rem;\r\n  margin-bottom: 1.2rem;\r\n  border-radius: 1.5rem;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.selected {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.checkbox {\r\n  margin-inline: 16px;\r\n  border: 2px solid rgb(134, 130, 130);\r\n  width: auto;\r\n  transform: scale(1.6);\r\n  cursor: pointer;\r\n}\r\n\r\n.task {\r\n  width: 85%;\r\n  height: 90%;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #1b2056;\r\n}\r\n\r\n.task:focus {\r\n  outline: none;\r\n}\r\n\r\n.task:hover {\r\n  cursor: default;\r\n}\r\n\r\n.item i {\r\n  cursor: move;\r\n}\r\n\r\n.to-do-clear-btn {\r\n  height: 4rem;\r\n\r\n  @include flex;\r\n\r\n  padding: 1rem 0;\r\n  background-color: #e1e6ee;\r\n  color: #5f5f5f;\r\n}\r\n\r\n.to-do--btn {\r\n  padding: 1.5rem 4rem;\r\n\r\n  @include btn(#fff, #913af6);\r\n}\r\n\r\n.create-to-btn {\r\n  margin-top: 2.5rem;\r\n  padding: 1.5rem 4rem;\r\n\r\n  @include btn(#913af6, #fff);\r\n}\r\n\r\n.dragging {\r\n  opacity: 1;\r\n  background: #e2d5f0;\r\n}\r\n\r\n.overly {\r\n  width: 30rem;\r\n  height: 20rem;\r\n  background-color: rebeccapurple;\r\n  position: fixed;\r\n  top: 28%;\r\n  left: 50%;\r\n  transform: translate3d(-50%, 50%, 0);\r\n  border-radius: 2rem;\r\n\r\n  .btn-close {\r\n    position: fixed;\r\n    top: 12px;\r\n    right: 12px;\r\n  }\r\n\r\n  .model {\r\n    @include flex;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    .to-do-form {\r\n      @include flex;\r\n\r\n      flex-direction: column;\r\n      gap: 5rem;\r\n\r\n      .to-do-form--input {\r\n        width: 25rem;\r\n        height: 4rem;\r\n        padding-left: 1.5rem;\r\n        border: none;\r\n        border-bottom: 1px solid #b3b3b3;\r\n        border-top: 1px solid #b3b3b3;\r\n      }\r\n    }\r\n\r\n    .btn--submit {\r\n      padding: 0.8rem 1.5rem;\r\n      border: none;\r\n\r\n      @include btn(#fff, #913af6);\r\n    }\r\n  }\r\n}\r\n\r\n.to-do-nav {\r\n  @include flex-start;\r\n\r\n  gap: 1rem;\r\n  margin: 2rem 2rem;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.to-do-nav-link {\r\n  list-style: none;\r\n\r\n  & a {\r\n    text-decoration: none;\r\n    color: #8488ac;\r\n  }\r\n}\r\n\r\n.OnClickLink a {\r\n  color: #913af6;\r\n  border-bottom: 2px solid #913af6;\r\n}\r\n\r\n.to-do-completed--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-uncompleted--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-all--container,\r\n.to-do-completed--container,\r\n.to-do-uncompleted--container {\r\n  display: none;\r\n}\r\n\r\n.to-do-all--container:target,\r\n.to-do-completed--container:target,\r\n.to-do-uncompleted--container:target {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n$media-mobile: 'only screen and (max-width : 600px)';\r\n$media-mobile-sm: 'only screen and (max-width : 480px)';\r\n\r\n@media #{$media-mobile} {\r\n  .to-do-container {\r\n    width: 50rem;\r\n  }\r\n}\r\n\r\n@media #{$media-mobile-sm} {\r\n  .to-do-container {\r\n    width: 35rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addNewListItem.js":
/*!*******************************!*\
  !*** ./src/addNewListItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalStorage.js */ "./src/getLocalStorage.js");
/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage.js */ "./src/setLocalStorage.js");
/* harmony import */ var _renderListItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderListItem.js */ "./src/renderListItem.js");
/* harmony import */ var _markUncompleted_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markUncompleted.js */ "./src/markUncompleted.js");





const newList = document.querySelector('.to-do-form--input');
const allCont = document.querySelector('.to-do-list--container');

const addNewListItem = (e) => {
  e.preventDefault();
  const toData = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  toData.push({
    description: newList.value,
    completed: false,
    index: toData.length + 1,
  });
  newList.value = '';
  (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toData);
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toData, allCont);
  (0,_markUncompleted_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewListItem);


/***/ }),

/***/ "./src/checked.js":
/*!************************!*\
  !*** ./src/checked.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checked = (completed) => !completed;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checked);


/***/ }),

/***/ "./src/checkedListItem.js":
/*!********************************!*\
  !*** ./src/checkedListItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkedListItem = (checked, completed) => checked(completed);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkedListItem);


/***/ }),

/***/ "./src/createIcon.js":
/*!***************************!*\
  !*** ./src/createIcon.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createIcon = (className, eventListener) => {
  const icon = document.createElement('i');
  icon.className = `fa-solid ${className}`;
  icon.classList.add('ellipse', 'drag');
  if (eventListener) {
    icon.addEventListener('mousedown', eventListener);
  }
  return icon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createIcon);


/***/ }),

/***/ "./src/createInput.js":
/*!****************************!*\
  !*** ./src/createInput.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createInput = (type, className, value, eventListener) => {
  const input = document.createElement('input');
  input.type = type;
  input.className = className;
  input.value = value;
  if (eventListener) {
    input.addEventListener('change', eventListener);
  }
  return input;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInput);


/***/ }),

/***/ "./src/dragDrop.js":
/*!*************************!*\
  !*** ./src/dragDrop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDoContainer = document.querySelector('.to-do-list--container');

const dragDrop = (y) => {
  const draggableElements = [
    ...toDoContainer.querySelectorAll('.to-do-list--item:not(.dragging)'),
  ];
  return draggableElements.reduce(
    (closet, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closet.offset) {
        return { offset, element: child };
      }
      return closet;
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    },
  ).element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragDrop);


/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const edit = (inputVal) => inputVal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);


/***/ }),

/***/ "./src/editListItem.js":
/*!*****************************!*\
  !*** ./src/editListItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const editListItem = (edit, inputTextValue) => edit(inputTextValue);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editListItem);


/***/ }),

/***/ "./src/getLocalStorage.js":
/*!********************************!*\
  !*** ./src/getLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getLocalStorage = () => JSON.parse(localStorage.getItem('toData')) || [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocalStorage);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
/* harmony import */ var _getLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocalStorage.js */ "./src/getLocalStorage.js");
/* harmony import */ var _renderListItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderListItem.js */ "./src/renderListItem.js");
/* harmony import */ var _addNewListItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addNewListItem.js */ "./src/addNewListItem.js");
/* harmony import */ var _removeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeHandler.js */ "./src/removeHandler.js");
/* harmony import */ var _markUncompleted_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markUncompleted.js */ "./src/markUncompleted.js");







const allCont = document.querySelector('.to-do-list--container');
const completedCont = document.querySelector('.to-do-completed--container');

const init = () => {
  const toData = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toData, allCont);
  (0,_markUncompleted_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const completed = toData.filter((item) => item.completed === true);
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(completed, completedCont);
};
init();

const form = document.querySelector('.to-do-form');
const overly = document.querySelector('.overly');
const removeBtn = document.querySelector('.to-do--btn');
const createBtn = document.querySelector('.create-to-btn');
const btnClose = document.querySelector('.btn-close');
const navLink = document.querySelectorAll('.to-do-nav-link');
const navContainer = document.querySelector('.to-do-nav');
const timeDate = document.querySelector('.time-date');
createBtn.addEventListener('click', () => {
  overly.classList.toggle('hidden');
});
form.addEventListener('submit', (e) => {
  (0,_addNewListItem_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e);
  overly.classList.toggle('hidden');
});

btnClose.addEventListener('click', () => {
  overly.classList.toggle('hidden');
});
removeBtn.addEventListener('click', () => {
  (0,_removeHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"])(null);
  const toData = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toData, allCont);
  (0,_markUncompleted_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

navContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.to-do-nav-link');
  if (!clicked) return;
  navLink.forEach((link) => {
    link.classList.remove('OnClickLink');
  });

  clicked.classList.add('OnClickLink');
});

const setTime = () => {
  const date = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  timeDate.textContent = new Intl.DateTimeFormat('en-GB', options).format(date);
};

setInterval(setTime, 100);


/***/ }),

/***/ "./src/markUncompleted.js":
/*!********************************!*\
  !*** ./src/markUncompleted.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalStorage.js */ "./src/getLocalStorage.js");
/* harmony import */ var _renderListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderListItem.js */ "./src/renderListItem.js");



const uncompletedCont = document.querySelector('.to-do-uncompleted--container');

const markUncompleted = () => {
  const toData = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const completed = toData.filter((item) => item.completed !== true);
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(completed, uncompletedCont);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markUncompleted);


/***/ }),

/***/ "./src/removeHandler.js":
/*!******************************!*\
  !*** ./src/removeHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalStorage.js */ "./src/getLocalStorage.js");
/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage.js */ "./src/setLocalStorage.js");



const removeHandler = (removeIndex) => {
  const toData = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const newData = removeIndex
    ? toData.filter((item) => item.index !== removeIndex)
    : toData.filter((item) => item.completed !== true);
  for (let i = 0; i < newData.length; i += 1) {
    newData[i].index = i + 1;
  }
  (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(newData);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeHandler);


/***/ }),

/***/ "./src/renderListItem.js":
/*!*******************************!*\
  !*** ./src/renderListItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalStorage.js */ "./src/getLocalStorage.js");
/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage.js */ "./src/setLocalStorage.js");
/* harmony import */ var _checkedListItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkedListItem.js */ "./src/checkedListItem.js");
/* harmony import */ var _removeHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeHandler.js */ "./src/removeHandler.js");
/* harmony import */ var _editListItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editListItem.js */ "./src/editListItem.js");
/* harmony import */ var _createInput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createInput.js */ "./src/createInput.js");
/* harmony import */ var _createIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createIcon.js */ "./src/createIcon.js");
/* harmony import */ var _dragDrop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dragDrop.js */ "./src/dragDrop.js");
/* harmony import */ var _checked_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checked.js */ "./src/checked.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");











const allCont = document.querySelector('.to-do-list--container');
const uncompletedCont = document.querySelector('.to-do-uncompleted--container');
const completedCont = document.querySelector('.to-do-completed--container');

const renderListItem = (toData, toDoContainer) => {
  toDoContainer.innerHTML = '';

  toData.forEach((toDo) => {
    const div = document.createElement('div');
    div.className = 'to-do-list--item';
    div.draggable = true;

    const inputText = (0,_createInput_js__WEBPACK_IMPORTED_MODULE_5__["default"])('text', 'task', toDo.description, () => {
      if (inputText.value !== '') {
        toDo.description = inputText.value;
        (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toData);
        inputText.blur();
      }
    });

    const inputCheckBox = (0,_createInput_js__WEBPACK_IMPORTED_MODULE_5__["default"])('checkbox', 'checkbox', null, () => {
      inputText.blur();
      inputText.classList.toggle('checked');
      toDo.completed = (0,_checkedListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_checked_js__WEBPACK_IMPORTED_MODULE_8__["default"], toDo.completed);
      (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toData);
      const Data = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      const uncompleted = Data.filter((item) => item.completed !== true);
      const completed = Data.filter((item) => item.completed === true);
      renderListItem(completed, completedCont);
      renderListItem(uncompleted, uncompletedCont);
    });
    inputCheckBox.checked = toDo.completed;
    if (inputCheckBox.checked) inputText.classList.add('checked');

    const dotIcon = (0,_createIcon_js__WEBPACK_IMPORTED_MODULE_6__["default"])('fa-ellipsis-vertical fa-xl');
    dotIcon.style = 'color: #913af6';

    const binIcon = (0,_createIcon_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
      'fa-solid fa-xmark fa-beat-fade fa-xl pointer',
      () => {
        (0,_removeHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"])(toDo.index);
        const Data = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        renderListItem(Data, allCont);
        const uncompleted = Data.filter((item) => item.completed !== true);
        const completed = Data.filter((item) => item.completed === true);
        renderListItem(uncompleted, uncompletedCont);
        renderListItem(completed, completedCont);
      }
    );
    binIcon.style = 'color: #913afe;';
    binIcon.style.display = 'none';

    const toggleIcons = () => {
      dotIcon.style.display = 'block';
      binIcon.style.display = 'none';
      div.classList.toggle('selected');
      inputText.classList.toggle('selected');
    };

    inputText.addEventListener('blur', toggleIcons);
    inputText.addEventListener('focus', () => {
      div.classList.toggle('selected');
      inputText.classList.toggle('selected');
      dotIcon.style.display = 'none';
      binIcon.style.display = 'block';
    });
    inputText.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && inputText.value !== '') {
        const inputTextValue = inputText.value;
        toDo.description = (0,_editListItem_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_edit_js__WEBPACK_IMPORTED_MODULE_9__["default"], inputTextValue);
        inputText.blur();
      }
    });

    div.addEventListener('dragstart', () => {
      div.classList.add('dragging');
      inputText.classList.add('dragging');
      inputText.blur();
    });
    div.addEventListener('dragend', () => {
      div.classList.remove('dragging');
      inputText.classList.remove('dragging');
      inputText.blur();
    });

    toDoContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      const afterElement = (0,_dragDrop_js__WEBPACK_IMPORTED_MODULE_7__["default"])(e.clientY);
      if (afterElement === null) {
        toDoContainer.appendChild(draggable);
      } else {
        toDoContainer.insertBefore(draggable, afterElement);
      }
    });

    div.addEventListener('click', () => {
      inputText.focus();
    });

    div.appendChild(inputCheckBox);
    div.appendChild(inputText);
    div.appendChild(dotIcon);
    div.appendChild(binIcon);
    toDoContainer.appendChild(div);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderListItem);


/***/ }),

/***/ "./src/setLocalStorage.js":
/*!********************************!*\
  !*** ./src/setLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setLocalStorage = (listItems) => {
  localStorage.setItem('toData', JSON.stringify(listItems));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocalStorage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxX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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFZLENBQUMsZ0RBQUk7QUFDNUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3REFBUTtBQUNuQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RIOUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2luZGV4LnNjc3M/N2ViOSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkTmV3TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja2VkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tlZExpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlSWNvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZUlucHV0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdExpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0TG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYXJrVW5jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW1vdmVIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVuZGVyTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zZXRMb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkNWYwO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGltZS1kYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEuNnJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOTEzYWY2O1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcbiAgY29sb3I6ICM5MTNhZjY7XG59XG5cbi50by1kby1jb250YWluZXIge1xuICB3aWR0aDogNTByZW07XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuNXJlbSAwLjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTZlZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbn1cblxuLnRvLWRvLWZvcm0tLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnRvLWRvLWxpc3QtLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4udG8tZG8tbGlzdC0taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNi41cmVtO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2hlY2tlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkNWYwO1xufVxuXG4uZmxleC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLmNoZWNrYm94IHtcbiAgbWFyZ2luLWlubGluZTogMTZweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDEzNCwgMTMwLCAxMzApO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrIHtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFiMjA1Njtcbn1cblxuLnRhc2s6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFzazpob3ZlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLml0ZW0gaSB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLnRvLWRvLWNsZWFyLWJ0biB7XG4gIGhlaWdodDogNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTZlZTtcbiAgY29sb3I6ICM1ZjVmNWY7XG59XG5cbi50by1kby0tYnRuIHtcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzkxM2FmNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4ycmVtIDAuMTVyZW0gMC4zNXJlbSByZ2JhKDE3OCwgMTE4LCAyMjgsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jcmVhdGUtdG8tYnRuIHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEzYWY2O1xuICBib3gtc2hhZG93OiAwLjFweCAwLjJyZW0gMC4xNXJlbSAwLjM1cmVtIHJnYmEoMTc4LCAxMTgsIDIyOCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRyYWdnaW5nIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogI2UyZDVmMDtcbn1cblxuLm92ZXJseSB7XG4gIHdpZHRoOiAzMHJlbTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI4JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDUwJSwgMCk7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG4ub3Zlcmx5IC5idG4tY2xvc2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4ub3Zlcmx5IC5tb2RlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm92ZXJseSAubW9kZWwgLnRvLWRvLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xufVxuLm92ZXJseSAubW9kZWwgLnRvLWRvLWZvcm0gLnRvLWRvLWZvcm0tLWlucHV0IHtcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2IzYjNiMztcbn1cbi5vdmVybHkgLm1vZGVsIC5idG4tLXN1Ym1pdCB7XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjOTEzYWY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwLjFweCAwLjJyZW0gMC4xNXJlbSAwLjM1cmVtIHJnYmEoMTc4LCAxMTgsIDIyOCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRvLWRvLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luOiAycmVtIDJyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG8tZG8tbmF2LWxpbmsge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnRvLWRvLW5hdi1saW5rIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjODQ4OGFjO1xufVxuXG4uT25DbGlja0xpbmsgYSB7XG4gIGNvbG9yOiAjOTEzYWY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzkxM2FmNjtcbn1cblxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi50by1kby1hbGwtLWNvbnRhaW5lcixcbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lcixcbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvLWRvLWFsbC0tY29udGFpbmVyOnRhcmdldCxcbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lcjp0YXJnZXQsXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lcjp0YXJnZXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDYwMHB4KSB7XG4gIC50by1kby1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MHJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpIHtcbiAgLnRvLWRvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUE2QkE7RUFDRSx5QkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMUJGOztBQTZCQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUExQkY7O0FBNkJBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQTFCRjs7QUE2QkE7RUFDRSxZQUFBO0VBQ0EseURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBMUJGOztBQTZCQTtFQUNFLGtCQUFBO0FBMUJGOztBQTZCQTtFQXhERSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQStCRjs7QUEyQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBeEJGOztBQTJCQTtFQUNFLDZCQUFBO0FBeEJGOztBQTJCQTtFQUNFLHlCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLFlBQUE7RUE1SEEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUE4SEEsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQXhCRjs7QUEyQkE7RUFDRSxvQkFBQTtFQS9JQSxpQkFBQTtFQUNBLGNBZ0ptQjtFQS9JbkIsc0JBK0lhO0VBOUliLGtFQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQXdIRjs7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBdEpBLGlCQUFBO0VBQ0EsV0F1SnNCO0VBdEp0Qix5QkFzSmE7RUFySmIsa0VBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBbUlGOztBQW1CQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQWhCRjtBQWtCRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWhCSjtBQW1CRTtFQXZLQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQXdLRSxXQUFBO0VBQ0EsWUFBQTtBQWhCSjtBQWtCSTtFQTdLRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQThLSSxzQkFBQTtFQUNBLFNBQUE7QUFmTjtBQWlCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQWZSO0FBbUJJO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBeE1KLGlCQUFBO0VBQ0EsY0F5TXVCO0VBeE12QixzQkF3TWlCO0VBdk1qQixrRUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUF3TEY7O0FBa0JBO0VBMUxFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBMkxBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxnQkFBQTtBQWRGO0FBZ0JFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBZEo7O0FBa0JBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FBZkY7O0FBa0JBO0VBdk5FLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBeU1GOztBQWdCQTtFQTNORSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQStNRjs7QUFjQTs7O0VBR0UsYUFBQTtBQVhGOztBQWNBOzs7RUFHRSxjQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0FBWEY7O0FBaUJBO0VBQ0U7SUFDRSxZQUFBO0VBZEY7QUFDRjtBQWlCQTtFQUNFO0lBQ0UsWUFBQTtFQWZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ0bigkY29sMSwgJGNvbDIpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6ICRjb2wyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbDE7XFxyXFxuICBib3gtc2hhZG93OiAwLjFweCAwLjJyZW0gMC4xNXJlbSAwLjM1cmVtIHJnYmEoMTc4LCAxMTgsIDIyOCwgMC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdG9kby1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtc3RhcnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmQ1ZjA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtZGF0ZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMS42cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM5MTNhZjY7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiAjOTEzYWY2O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuNXJlbSAwLjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTZlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1mb3JtLS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC0tY29udGFpbmVyIHtcXHJcXG4gIEBpbmNsdWRlIHRvZG8tY29udGFpbmVyKCk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNi41cmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmQ1ZjA7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IDE2cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTM0LCAxMzAsIDEzMCk7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjMWIyMDU2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIGkge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY2xlYXItYnRuIHtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZsZXg7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlNmVlO1xcclxcbiAgY29sb3I6ICM1ZjVmNWY7XFxyXFxufVxcclxcblxcclxcbi50by1kby0tYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgYnRuKCNmZmYsICM5MTNhZjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXRvLWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGJ0bigjOTEzYWY2LCAjZmZmKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTJkNWYwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3Zlcmx5IHtcXHJcXG4gIHdpZHRoOiAzMHJlbTtcXHJcXG4gIGhlaWdodDogMjByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyOCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDUwJSwgMCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcblxcclxcbiAgLmJ0bi1jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAxMnB4O1xcclxcbiAgICByaWdodDogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RlbCB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXg7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIC50by1kby1mb3JtIHtcXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4O1xcclxcblxcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiA1cmVtO1xcclxcblxcclxcbiAgICAgIC50by1kby1mb3JtLS1pbnB1dCB7XFxyXFxuICAgICAgICB3aWR0aDogMjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjNiM2IzO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiM2IzYjM7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG4tLXN1Ym1pdCB7XFxyXFxuICAgICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgYnRuKCNmZmYsICM5MTNhZjYpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50by1kby1uYXYge1xcclxcbiAgQGluY2x1ZGUgZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbmF2LWxpbmsge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHJcXG4gICYgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICM4NDg4YWM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5PbkNsaWNrTGluayBhIHtcXHJcXG4gIGNvbG9yOiAjOTEzYWY2O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5MTNhZjY7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lciB7XFxyXFxuICBAaW5jbHVkZSB0b2RvLWNvbnRhaW5lcigpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XFxyXFxuICBAaW5jbHVkZSB0b2RvLWNvbnRhaW5lcigpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tYWxsLS1jb250YWluZXIsXFxyXFxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyLFxcclxcbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1hbGwtLWNvbnRhaW5lcjp0YXJnZXQsXFxyXFxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyOnRhcmdldCxcXHJcXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lcjp0YXJnZXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuJG1lZGlhLW1vYmlsZTogJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNjAwcHgpJztcXHJcXG4kbWVkaWEtbW9iaWxlLXNtOiAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA0ODBweCknO1xcclxcblxcclxcbkBtZWRpYSAjeyRtZWRpYS1tb2JpbGV9IHtcXHJcXG4gIC50by1kby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNTByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAjeyRtZWRpYS1tb2JpbGUtc219IHtcXHJcXG4gIC50by1kby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldExvY2FsU3RvcmFnZSBmcm9tICcuL2dldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgc2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vc2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcbmltcG9ydCBtYXJrVW5jb21wbGV0ZWQgZnJvbSAnLi9tYXJrVW5jb21wbGV0ZWQuanMnO1xuXG5jb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWZvcm0tLWlucHV0Jyk7XG5jb25zdCBhbGxDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtLWNvbnRhaW5lcicpO1xuXG5jb25zdCBhZGROZXdMaXN0SXRlbSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIHRvRGF0YS5wdXNoKHtcbiAgICBkZXNjcmlwdGlvbjogbmV3TGlzdC52YWx1ZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiB0b0RhdGEubGVuZ3RoICsgMSxcbiAgfSk7XG4gIG5ld0xpc3QudmFsdWUgPSAnJztcbiAgc2V0TG9jYWxTdG9yYWdlKHRvRGF0YSk7XG4gIHJlbmRlckxpc3RJdGVtKHRvRGF0YSwgYWxsQ29udCk7XG4gIG1hcmtVbmNvbXBsZXRlZCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTmV3TGlzdEl0ZW07XG4iLCJjb25zdCBjaGVja2VkID0gKGNvbXBsZXRlZCkgPT4gIWNvbXBsZXRlZDtcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XG4iLCJjb25zdCBjaGVja2VkTGlzdEl0ZW0gPSAoY2hlY2tlZCwgY29tcGxldGVkKSA9PiBjaGVja2VkKGNvbXBsZXRlZCk7XG5leHBvcnQgZGVmYXVsdCBjaGVja2VkTGlzdEl0ZW07XG4iLCJjb25zdCBjcmVhdGVJY29uID0gKGNsYXNzTmFtZSwgZXZlbnRMaXN0ZW5lcikgPT4ge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uLmNsYXNzTmFtZSA9IGBmYS1zb2xpZCAke2NsYXNzTmFtZX1gO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2VsbGlwc2UnLCAnZHJhZycpO1xuICBpZiAoZXZlbnRMaXN0ZW5lcikge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnRMaXN0ZW5lcik7XG4gIH1cbiAgcmV0dXJuIGljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJY29uO1xuIiwiY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgY2xhc3NOYW1lLCB2YWx1ZSwgZXZlbnRMaXN0ZW5lcikgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpbnB1dC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gIGlmIChldmVudExpc3RlbmVyKSB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnRMaXN0ZW5lcik7XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUlucHV0O1xuIiwiY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LS1jb250YWluZXInKTtcblxuY29uc3QgZHJhZ0Ryb3AgPSAoeSkgPT4ge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFtcbiAgICAuLi50b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1saXN0LS1pdGVtOm5vdCguZHJhZ2dpbmcpJyksXG4gIF07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoXG4gICAgKGNsb3NldCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3NldC5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb3NldDtcbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgIH0sXG4gICkuZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWdEcm9wO1xuIiwiY29uc3QgZWRpdCA9IChpbnB1dFZhbCkgPT4gaW5wdXRWYWw7XG5leHBvcnQgZGVmYXVsdCBlZGl0O1xuIiwiY29uc3QgZWRpdExpc3RJdGVtID0gKGVkaXQsIGlucHV0VGV4dFZhbHVlKSA9PiBlZGl0KGlucHV0VGV4dFZhbHVlKTtcbmV4cG9ydCBkZWZhdWx0IGVkaXRMaXN0SXRlbTtcbiIsImNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRGF0YScpKSB8fCBbXTtcbmV4cG9ydCBkZWZhdWx0IGdldExvY2FsU3RvcmFnZTtcbiIsImltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJztcbmltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHJlbmRlckxpc3RJdGVtIGZyb20gJy4vcmVuZGVyTGlzdEl0ZW0uanMnO1xuaW1wb3J0IGFkZE5ld0xpc3RJdGVtIGZyb20gJy4vYWRkTmV3TGlzdEl0ZW0uanMnO1xuaW1wb3J0IHJlbW92ZUhhbmRsZXIgZnJvbSAnLi9yZW1vdmVIYW5kbGVyLmpzJztcbmltcG9ydCBtYXJrVW5jb21wbGV0ZWQgZnJvbSAnLi9tYXJrVW5jb21wbGV0ZWQuanMnO1xuXG5jb25zdCBhbGxDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtLWNvbnRhaW5lcicpO1xuY29uc3QgY29tcGxldGVkQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lcicpO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcblxuICByZW5kZXJMaXN0SXRlbSh0b0RhdGEsIGFsbENvbnQpO1xuICBtYXJrVW5jb21wbGV0ZWQoKTtcbiAgY29uc3QgY29tcGxldGVkID0gdG9EYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpO1xuICByZW5kZXJMaXN0SXRlbShjb21wbGV0ZWQsIGNvbXBsZXRlZENvbnQpO1xufTtcbmluaXQoKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1mb3JtJyk7XG5jb25zdCBvdmVybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Zlcmx5Jyk7XG5jb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tLWJ0bicpO1xuY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10by1idG4nKTtcbmNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZScpO1xuY29uc3QgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1uYXYtbGluaycpO1xuY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLW5hdicpO1xuY29uc3QgdGltZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZS1kYXRlJyk7XG5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG92ZXJseS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBhZGROZXdMaXN0SXRlbShlKTtcbiAgb3Zlcmx5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBvdmVybHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcbnJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVtb3ZlSGFuZGxlcihudWxsKTtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIHJlbmRlckxpc3RJdGVtKHRvRGF0YSwgYWxsQ29udCk7XG4gIG1hcmtVbmNvbXBsZXRlZCgpO1xufSk7XG5cbm5hdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudG8tZG8tbmF2LWxpbmsnKTtcbiAgaWYgKCFjbGlja2VkKSByZXR1cm47XG4gIG5hdkxpbmsuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnT25DbGlja0xpbmsnKTtcbiAgfSk7XG5cbiAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKCdPbkNsaWNrTGluaycpO1xufSk7XG5cbmNvbnN0IHNldFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgfTtcbiAgdGltZURhdGUudGV4dENvbnRlbnQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCBvcHRpb25zKS5mb3JtYXQoZGF0ZSk7XG59O1xuXG5zZXRJbnRlcnZhbChzZXRUaW1lLCAxMDApO1xuIiwiaW1wb3J0IGdldExvY2FsU3RvcmFnZSBmcm9tICcuL2dldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgcmVuZGVyTGlzdEl0ZW0gZnJvbSAnLi9yZW5kZXJMaXN0SXRlbS5qcyc7XG5cbmNvbnN0IHVuY29tcGxldGVkQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyJyk7XG5cbmNvbnN0IG1hcmtVbmNvbXBsZXRlZCA9ICgpID0+IHtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IHRvRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkICE9PSB0cnVlKTtcbiAgcmVuZGVyTGlzdEl0ZW0oY29tcGxldGVkLCB1bmNvbXBsZXRlZENvbnQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1hcmtVbmNvbXBsZXRlZDtcbiIsImltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHNldExvY2FsU3RvcmFnZSBmcm9tICcuL3NldExvY2FsU3RvcmFnZS5qcyc7XG5cbmNvbnN0IHJlbW92ZUhhbmRsZXIgPSAocmVtb3ZlSW5kZXgpID0+IHtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIGNvbnN0IG5ld0RhdGEgPSByZW1vdmVJbmRleFxuICAgID8gdG9EYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gcmVtb3ZlSW5kZXgpXG4gICAgOiB0b0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3RGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5ld0RhdGFbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxuICBzZXRMb2NhbFN0b3JhZ2UobmV3RGF0YSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlSGFuZGxlcjtcbiIsImltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHNldExvY2FsU3RvcmFnZSBmcm9tICcuL3NldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgY2hlY2tlZExpc3RJdGVtIGZyb20gJy4vY2hlY2tlZExpc3RJdGVtLmpzJztcbmltcG9ydCByZW1vdmVIYW5kbGVyIGZyb20gJy4vcmVtb3ZlSGFuZGxlci5qcyc7XG5pbXBvcnQgZWRpdExpc3RJdGVtIGZyb20gJy4vZWRpdExpc3RJdGVtLmpzJztcbmltcG9ydCBjcmVhdGVJbnB1dCBmcm9tICcuL2NyZWF0ZUlucHV0LmpzJztcbmltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vY3JlYXRlSWNvbi5qcyc7XG5pbXBvcnQgZHJhZ0Ryb3AgZnJvbSAnLi9kcmFnRHJvcC5qcyc7XG5pbXBvcnQgY2hlY2tlZCBmcm9tICcuL2NoZWNrZWQuanMnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0LmpzJztcblxuY29uc3QgYWxsQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LS1jb250YWluZXInKTtcbmNvbnN0IHVuY29tcGxldGVkQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyJyk7XG5jb25zdCBjb21wbGV0ZWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyJyk7XG5cbmNvbnN0IHJlbmRlckxpc3RJdGVtID0gKHRvRGF0YSwgdG9Eb0NvbnRhaW5lcikgPT4ge1xuICB0b0RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIHRvRGF0YS5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICd0by1kby1saXN0LS1pdGVtJztcbiAgICBkaXYuZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGlucHV0VGV4dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3Rhc2snLCB0b0RvLmRlc2NyaXB0aW9uLCAoKSA9PiB7XG4gICAgICBpZiAoaW5wdXRUZXh0LnZhbHVlICE9PSAnJykge1xuICAgICAgICB0b0RvLmRlc2NyaXB0aW9uID0gaW5wdXRUZXh0LnZhbHVlO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UodG9EYXRhKTtcbiAgICAgICAgaW5wdXRUZXh0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGlucHV0Q2hlY2tCb3ggPSBjcmVhdGVJbnB1dCgnY2hlY2tib3gnLCAnY2hlY2tib3gnLCBudWxsLCAoKSA9PiB7XG4gICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgICAgaW5wdXRUZXh0LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgIHRvRG8uY29tcGxldGVkID0gY2hlY2tlZExpc3RJdGVtKGNoZWNrZWQsIHRvRG8uY29tcGxldGVkKTtcbiAgICAgIHNldExvY2FsU3RvcmFnZSh0b0RhdGEpO1xuICAgICAgY29uc3QgRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuICAgICAgY29uc3QgdW5jb21wbGV0ZWQgPSBEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgIT09IHRydWUpO1xuICAgICAgY29uc3QgY29tcGxldGVkID0gRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSB0cnVlKTtcbiAgICAgIHJlbmRlckxpc3RJdGVtKGNvbXBsZXRlZCwgY29tcGxldGVkQ29udCk7XG4gICAgICByZW5kZXJMaXN0SXRlbSh1bmNvbXBsZXRlZCwgdW5jb21wbGV0ZWRDb250KTtcbiAgICB9KTtcbiAgICBpbnB1dENoZWNrQm94LmNoZWNrZWQgPSB0b0RvLmNvbXBsZXRlZDtcbiAgICBpZiAoaW5wdXRDaGVja0JveC5jaGVja2VkKSBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuXG4gICAgY29uc3QgZG90SWNvbiA9IGNyZWF0ZUljb24oJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsIGZhLXhsJyk7XG4gICAgZG90SWNvbi5zdHlsZSA9ICdjb2xvcjogIzkxM2FmNic7XG5cbiAgICBjb25zdCBiaW5JY29uID0gY3JlYXRlSWNvbihcbiAgICAgICdmYS1zb2xpZCBmYS14bWFyayBmYS1iZWF0LWZhZGUgZmEteGwgcG9pbnRlcicsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIodG9Eby5pbmRleCk7XG4gICAgICAgIGNvbnN0IERhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcmVuZGVyTGlzdEl0ZW0oRGF0YSwgYWxsQ29udCk7XG4gICAgICAgIGNvbnN0IHVuY29tcGxldGVkID0gRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkICE9PSB0cnVlKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSB0cnVlKTtcbiAgICAgICAgcmVuZGVyTGlzdEl0ZW0odW5jb21wbGV0ZWQsIHVuY29tcGxldGVkQ29udCk7XG4gICAgICAgIHJlbmRlckxpc3RJdGVtKGNvbXBsZXRlZCwgY29tcGxldGVkQ29udCk7XG4gICAgICB9XG4gICAgKTtcbiAgICBiaW5JY29uLnN0eWxlID0gJ2NvbG9yOiAjOTEzYWZlOyc7XG4gICAgYmluSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgdG9nZ2xlSWNvbnMgPSAoKSA9PiB7XG4gICAgICBkb3RJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgYmluSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9O1xuXG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVJY29ucyk7XG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgIGRvdEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGJpbkljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlucHV0VGV4dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0VmFsdWUgPSBpbnB1dFRleHQudmFsdWU7XG4gICAgICAgIHRvRG8uZGVzY3JpcHRpb24gPSBlZGl0TGlzdEl0ZW0oZWRpdCwgaW5wdXRUZXh0VmFsdWUpO1xuICAgICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgIH0pO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIGlucHV0VGV4dC5ibHVyKCk7XG4gICAgfSk7XG5cbiAgICB0b0RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZHJhZ0Ryb3AoZS5jbGllbnRZKTtcbiAgICAgIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaW5wdXRUZXh0LmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXRDaGVja0JveCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRvdEljb24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChiaW5JY29uKTtcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckxpc3RJdGVtO1xuIiwiY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGxpc3RJdGVtcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9EYXRhJywgSlNPTi5zdHJpbmdpZnkobGlzdEl0ZW1zKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2V0TG9jYWxTdG9yYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9