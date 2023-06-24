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
    padding: 3rem 0.5rem;
  }
}
@media only screen and (max-width : 480px) {
  .to-do-container {
    width: 35rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@mixin btn($col1, $col2) {\r\n  font-size: 1.5rem;\r\n  color: $col2;\r\n  background-color: $col1;\r\n  box-shadow: 0.1px 0.2rem 0.15rem 0.35rem rgba(178, 118, 228, 0.25);\r\n  border-radius: 1rem;\r\n  text-decoration: none;\r\n}\r\n\r\n@mixin flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin todo-container {\r\n  font-size: 1.6rem;\r\n  font-weight: 400;\r\n  padding: 2rem;\r\n}\r\n\r\n@mixin flex-start {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n}\r\n\r\nbody {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.section {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.time-date {\r\n  margin-left: 1.6rem;\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  color: #913af6;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1rem 0.5rem;\r\n  color: #913af6;\r\n}\r\n\r\n.to-do-container {\r\n  width: 50rem;\r\n  box-shadow: 0.1px 0.5rem 0.5rem 0.6rem rgba(0, 0, 0, 0.1);\r\n  padding: 3rem;\r\n  border-radius: 2rem;\r\n  background-color: #e1e6ee;\r\n  border: 1px solid #999;\r\n}\r\n\r\n.to-do-form--input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.to-do-list--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-list--item {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  height: 6.5rem;\r\n  gap: 0.5rem;\r\n  padding: 1rem 1rem;\r\n  margin-bottom: 1.2rem;\r\n  border-radius: 1.5rem;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.selected {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.checkbox {\r\n  margin-inline: 16px;\r\n  border: 2px solid rgb(134, 130, 130);\r\n  width: auto;\r\n  transform: scale(1.6);\r\n  cursor: pointer;\r\n}\r\n\r\n.task {\r\n  width: 85%;\r\n  height: 90%;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #1b2056;\r\n}\r\n\r\n.task:focus {\r\n  outline: none;\r\n}\r\n\r\n.task:hover {\r\n  cursor: default;\r\n}\r\n\r\n.item i {\r\n  cursor: move;\r\n}\r\n\r\n.to-do-clear-btn {\r\n  height: 4rem;\r\n\r\n  @include flex;\r\n\r\n  padding: 1rem 0;\r\n  background-color: #e1e6ee;\r\n  color: #5f5f5f;\r\n}\r\n\r\n.to-do--btn {\r\n  padding: 1.5rem 4rem;\r\n\r\n  @include btn(#fff, #913af6);\r\n}\r\n\r\n.create-to-btn {\r\n  margin-top: 2.5rem;\r\n  padding: 1.5rem 4rem;\r\n\r\n  @include btn(#913af6, #fff);\r\n}\r\n\r\n.dragging {\r\n  opacity: 1;\r\n  background: #e2d5f0;\r\n}\r\n\r\n.overly {\r\n  width: 30rem;\r\n  height: 20rem;\r\n  background-color: rebeccapurple;\r\n  position: fixed;\r\n  top: 28%;\r\n  left: 50%;\r\n  transform: translate3d(-50%, 50%, 0);\r\n  border-radius: 2rem;\r\n\r\n  .btn-close {\r\n    position: fixed;\r\n    top: 12px;\r\n    right: 12px;\r\n  }\r\n\r\n  .model {\r\n    @include flex;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    .to-do-form {\r\n      @include flex;\r\n\r\n      flex-direction: column;\r\n      gap: 5rem;\r\n\r\n      .to-do-form--input {\r\n        width: 25rem;\r\n        height: 4rem;\r\n        padding-left: 1.5rem;\r\n        border: none;\r\n        border-bottom: 1px solid #b3b3b3;\r\n        border-top: 1px solid #b3b3b3;\r\n      }\r\n    }\r\n\r\n    .btn--submit {\r\n      padding: 0.8rem 1.5rem;\r\n      border: none;\r\n\r\n      @include btn(#fff, #913af6);\r\n    }\r\n  }\r\n}\r\n\r\n.to-do-nav {\r\n  @include flex-start;\r\n\r\n  gap: 1rem;\r\n  margin: 2rem 2rem;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.to-do-nav-link {\r\n  list-style: none;\r\n\r\n  & a {\r\n    text-decoration: none;\r\n    color: #8488ac;\r\n  }\r\n}\r\n\r\n.OnClickLink a {\r\n  color: #913af6;\r\n  border-bottom: 2px solid #913af6;\r\n}\r\n\r\n.to-do-completed--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-uncompleted--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-all--container,\r\n.to-do-completed--container,\r\n.to-do-uncompleted--container {\r\n  display: none;\r\n}\r\n\r\n.to-do-all--container:target,\r\n.to-do-completed--container:target,\r\n.to-do-uncompleted--container:target {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n$media-mobile: 'only screen and (max-width : 600px)';\r\n$media-mobile-sm: 'only screen and (max-width : 480px)';\r\n\r\n@media #{$media-mobile} {\r\n  .to-do-container {\r\n    width: 50rem;\r\n    padding: 3rem 0.5rem;\r\n  }\r\n}\r\n\r\n@media #{$media-mobile-sm} {\r\n  .to-do-container {\r\n    width: 35rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _markCompleted_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markCompleted.js */ "./src/markCompleted.js");








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
const btn = document.querySelectorAll('.to-do-clear-btn ');
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
  (0,_markCompleted_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

navContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.to-do-nav-link');
  const id = e.target.closest('.to-do-nav-link').dataset.show;
  if (!clicked) return;
  navLink.forEach((link) => {
    link.classList.remove('OnClickLink');
  });
  btn.forEach((btnCon) => {
    btnCon.classList.add('hidden');
  });

  clicked.classList.add('OnClickLink');
  if (!id) return;
  document.querySelector(`.btn-${id}`).classList.remove('hidden');
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

/***/ "./src/markCompleted.js":
/*!******************************!*\
  !*** ./src/markCompleted.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalStorage.js */ "./src/getLocalStorage.js");
/* harmony import */ var _renderListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderListItem.js */ "./src/renderListItem.js");



const completedCont = document.querySelector('.to-do-completed--container');

const markCompleted = () => {
  const toData = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const completed = toData.filter((item) => item.completed === true);
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(completed, completedCont);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markCompleted);


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
        renderListItem(completed, completedCont);
        renderListItem(uncompleted, uncompletedCont);
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxX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QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxvQkFBb0IsMERBQVU7QUFDOUI7O0FBRUEsb0JBQW9CLDBEQUFVO0FBQzlCO0FBQ0E7QUFDQSxRQUFRLDZEQUFhO0FBQ3JCLHFCQUFxQiwrREFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFZLENBQUMsZ0RBQUk7QUFDNUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3REFBUTtBQUNuQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RIOUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2luZGV4LnNjc3M/N2ViOSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkTmV3TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja2VkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tlZExpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlSWNvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZUlucHV0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdExpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0TG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYXJrQ29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFya1VuY29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbmRlckxpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2V0TG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDVmMDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpbWUtZGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxLjZyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzkxM2FmNjtcbn1cblxuaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XG4gIGNvbG9yOiAjOTEzYWY2O1xufVxuXG4udG8tZG8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwcmVtO1xuICBib3gtc2hhZG93OiAwLjFweCAwLjVyZW0gMC41cmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU2ZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG59XG5cbi50by1kby1mb3JtLS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50by1kby1saXN0LS1jb250YWluZXIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLnRvLWRvLWxpc3QtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYuNXJlbTtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNoZWNrZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDVmMDtcbn1cblxuLmZsZXgtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5jaGVja2JveCB7XG4gIG1hcmdpbi1pbmxpbmU6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzQsIDEzMCwgMTMwKTtcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzayB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYjIwNTY7XG59XG5cbi50YXNrOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5pdGVtIGkge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi50by1kby1jbGVhci1idG4ge1xuICBoZWlnaHQ6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU2ZWU7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG4udG8tZG8tLWJ0biB7XG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICM5MTNhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMnJlbSAwLjE1cmVtIDAuMzVyZW0gcmdiYSgxNzgsIDExOCwgMjI4LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3JlYXRlLXRvLWJ0biB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxM2FmNjtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4ycmVtIDAuMTVyZW0gMC4zNXJlbSByZ2JhKDE3OCwgMTE4LCAyMjgsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kcmFnZ2luZyB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6ICNlMmQ1ZjA7XG59XG5cbi5vdmVybHkge1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMjByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCA1MCUsIDApO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuLm92ZXJseSAuYnRuLWNsb3NlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLm92ZXJseSAubW9kZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vdmVybHkgLm1vZGVsIC50by1kby1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbn1cbi5vdmVybHkgLm1vZGVsIC50by1kby1mb3JtIC50by1kby1mb3JtLS1pbnB1dCB7XG4gIHdpZHRoOiAyNXJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiM2IzYjM7XG59XG4ub3Zlcmx5IC5tb2RlbCAuYnRuLS1zdWJtaXQge1xuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzkxM2FmNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4ycmVtIDAuMTVyZW0gMC4zNXJlbSByZ2JhKDE3OCwgMTE4LCAyMjgsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50by1kby1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbjogMnJlbSAycmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvLWRvLW5hdi1saW5rIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi50by1kby1uYXYtbGluayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzg0ODhhYztcbn1cblxuLk9uQ2xpY2tMaW5rIGEge1xuICBjb2xvcjogIzkxM2FmNjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5MTNhZjY7XG59XG5cbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4udG8tZG8tYWxsLS1jb250YWluZXIsXG4udG8tZG8tY29tcGxldGVkLS1jb250YWluZXIsXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50by1kby1hbGwtLWNvbnRhaW5lcjp0YXJnZXQsXG4udG8tZG8tY29tcGxldGVkLS1jb250YWluZXI6dGFyZ2V0LFxuLnRvLWRvLXVuY29tcGxldGVkLS1jb250YWluZXI6dGFyZ2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA2MDBweCkge1xuICAudG8tZG8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTByZW07XG4gICAgcGFkZGluZzogM3JlbSAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KSB7XG4gIC50by1kby1jb250YWluZXIge1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBNkJBO0VBQ0UseUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJB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Y0FBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtBQVhGOztBQWlCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLG9CQUFBO0VBZEY7QUFDRjtBQWlCQTtFQUNFO0lBQ0UsWUFBQTtFQWZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ0bigkY29sMSwgJGNvbDIpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6ICRjb2wyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbDE7XFxyXFxuICBib3gtc2hhZG93OiAwLjFweCAwLjJyZW0gMC4xNXJlbSAwLjM1cmVtIHJnYmEoMTc4LCAxMTgsIDIyOCwgMC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdG9kby1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtc3RhcnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmQ1ZjA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtZGF0ZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMS42cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM5MTNhZjY7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiAjOTEzYWY2O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuNXJlbSAwLjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTZlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1mb3JtLS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC0tY29udGFpbmVyIHtcXHJcXG4gIEBpbmNsdWRlIHRvZG8tY29udGFpbmVyKCk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNi41cmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmQ1ZjA7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IDE2cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTM0LCAxMzAsIDEzMCk7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjMWIyMDU2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIGkge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY2xlYXItYnRuIHtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZsZXg7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlNmVlO1xcclxcbiAgY29sb3I6ICM1ZjVmNWY7XFxyXFxufVxcclxcblxcclxcbi50by1kby0tYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgYnRuKCNmZmYsICM5MTNhZjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXRvLWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGJ0bigjOTEzYWY2LCAjZmZmKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTJkNWYwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3Zlcmx5IHtcXHJcXG4gIHdpZHRoOiAzMHJlbTtcXHJcXG4gIGhlaWdodDogMjByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyOCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDUwJSwgMCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcblxcclxcbiAgLmJ0bi1jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAxMnB4O1xcclxcbiAgICByaWdodDogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RlbCB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXg7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIC50by1kby1mb3JtIHtcXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4O1xcclxcblxcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiA1cmVtO1xcclxcblxcclxcbiAgICAgIC50by1kby1mb3JtLS1pbnB1dCB7XFxyXFxuICAgICAgICB3aWR0aDogMjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjNiM2IzO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiM2IzYjM7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG4tLXN1Ym1pdCB7XFxyXFxuICAgICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgYnRuKCNmZmYsICM5MTNhZjYpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50by1kby1uYXYge1xcclxcbiAgQGluY2x1ZGUgZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbmF2LWxpbmsge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHJcXG4gICYgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICM4NDg4YWM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5PbkNsaWNrTGluayBhIHtcXHJcXG4gIGNvbG9yOiAjOTEzYWY2O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5MTNhZjY7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lciB7XFxyXFxuICBAaW5jbHVkZSB0b2RvLWNvbnRhaW5lcigpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XFxyXFxuICBAaW5jbHVkZSB0b2RvLWNvbnRhaW5lcigpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tYWxsLS1jb250YWluZXIsXFxyXFxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyLFxcclxcbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1hbGwtLWNvbnRhaW5lcjp0YXJnZXQsXFxyXFxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyOnRhcmdldCxcXHJcXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lcjp0YXJnZXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuJG1lZGlhLW1vYmlsZTogJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNjAwcHgpJztcXHJcXG4kbWVkaWEtbW9iaWxlLXNtOiAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA0ODBweCknO1xcclxcblxcclxcbkBtZWRpYSAjeyRtZWRpYS1tb2JpbGV9IHtcXHJcXG4gIC50by1kby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMC41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgI3skbWVkaWEtbW9iaWxlLXNtfSB7XFxyXFxuICAudG8tZG8tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHNldExvY2FsU3RvcmFnZSBmcm9tICcuL3NldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgcmVuZGVyTGlzdEl0ZW0gZnJvbSAnLi9yZW5kZXJMaXN0SXRlbS5qcyc7XG5pbXBvcnQgbWFya1VuY29tcGxldGVkIGZyb20gJy4vbWFya1VuY29tcGxldGVkLmpzJztcblxuY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1mb3JtLS1pbnB1dCcpO1xuY29uc3QgYWxsQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LS1jb250YWluZXInKTtcblxuY29uc3QgYWRkTmV3TGlzdEl0ZW0gPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRvRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuICB0b0RhdGEucHVzaCh7XG4gICAgZGVzY3JpcHRpb246IG5ld0xpc3QudmFsdWUsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogdG9EYXRhLmxlbmd0aCArIDEsXG4gIH0pO1xuICBuZXdMaXN0LnZhbHVlID0gJyc7XG4gIHNldExvY2FsU3RvcmFnZSh0b0RhdGEpO1xuICByZW5kZXJMaXN0SXRlbSh0b0RhdGEsIGFsbENvbnQpO1xuICBtYXJrVW5jb21wbGV0ZWQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE5ld0xpc3RJdGVtO1xuIiwiY29uc3QgY2hlY2tlZCA9IChjb21wbGV0ZWQpID0+ICFjb21wbGV0ZWQ7XG5leHBvcnQgZGVmYXVsdCBjaGVja2VkO1xuIiwiY29uc3QgY2hlY2tlZExpc3RJdGVtID0gKGNoZWNrZWQsIGNvbXBsZXRlZCkgPT4gY2hlY2tlZChjb21wbGV0ZWQpO1xuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZExpc3RJdGVtO1xuIiwiY29uc3QgY3JlYXRlSWNvbiA9IChjbGFzc05hbWUsIGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbi5jbGFzc05hbWUgPSBgZmEtc29saWQgJHtjbGFzc05hbWV9YDtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdlbGxpcHNlJywgJ2RyYWcnKTtcbiAgaWYgKGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG4gIHJldHVybiBpY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSWNvbjtcbiIsImNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGNsYXNzTmFtZSwgdmFsdWUsIGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICBpZiAoZXZlbnRMaXN0ZW5lcikge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG4gIHJldHVybiBpbnB1dDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnB1dDtcbiIsImNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdC0tY29udGFpbmVyJyk7XG5cbmNvbnN0IGRyYWdEcm9wID0gKHkpID0+IHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXG4gICAgLi4udG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8tbGlzdC0taXRlbTpub3QoLmRyYWdnaW5nKScpLFxuICBdO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxuICAgIChjbG9zZXQsIGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHkgLSBib3gudG9wIC0gYm94LmhlaWdodCAvIDI7XG4gICAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXQub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7IG9mZnNldCwgZWxlbWVudDogY2hpbGQgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9zZXQ7XG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICB9LFxuICApLmVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmFnRHJvcDtcbiIsImNvbnN0IGVkaXQgPSAoaW5wdXRWYWwpID0+IGlucHV0VmFsO1xuZXhwb3J0IGRlZmF1bHQgZWRpdDtcbiIsImNvbnN0IGVkaXRMaXN0SXRlbSA9IChlZGl0LCBpbnB1dFRleHRWYWx1ZSkgPT4gZWRpdChpbnB1dFRleHRWYWx1ZSk7XG5leHBvcnQgZGVmYXVsdCBlZGl0TGlzdEl0ZW07XG4iLCJjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RhdGEnKSkgfHwgW107XG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhbFN0b3JhZ2U7XG4iLCJpbXBvcnQgJy4vc3R5bGUvaW5kZXguc2Nzcyc7XG5pbXBvcnQgZ2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vZ2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcbmltcG9ydCBhZGROZXdMaXN0SXRlbSBmcm9tICcuL2FkZE5ld0xpc3RJdGVtLmpzJztcbmltcG9ydCByZW1vdmVIYW5kbGVyIGZyb20gJy4vcmVtb3ZlSGFuZGxlci5qcyc7XG5pbXBvcnQgbWFya1VuY29tcGxldGVkIGZyb20gJy4vbWFya1VuY29tcGxldGVkLmpzJztcbmltcG9ydCBtYXJrQ29tcGxldGVkIGZyb20gJy4vbWFya0NvbXBsZXRlZC5qcyc7XG5cbmNvbnN0IGFsbENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdC0tY29udGFpbmVyJyk7XG5jb25zdCBjb21wbGV0ZWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyJyk7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGNvbnN0IHRvRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuXG4gIHJlbmRlckxpc3RJdGVtKHRvRGF0YSwgYWxsQ29udCk7XG4gIG1hcmtVbmNvbXBsZXRlZCgpO1xuICBjb25zdCBjb21wbGV0ZWQgPSB0b0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XG4gIHJlbmRlckxpc3RJdGVtKGNvbXBsZXRlZCwgY29tcGxldGVkQ29udCk7XG59O1xuaW5pdCgpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWZvcm0nKTtcbmNvbnN0IG92ZXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybHknKTtcbmNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby0tYnRuJyk7XG5jb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRvLWJ0bicpO1xuY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlJyk7XG5jb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLW5hdi1saW5rJyk7XG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbmF2Jyk7XG5jb25zdCB0aW1lRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWRhdGUnKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1jbGVhci1idG4gJyk7XG5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG92ZXJseS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBhZGROZXdMaXN0SXRlbShlKTtcbiAgb3Zlcmx5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBvdmVybHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcbnJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVtb3ZlSGFuZGxlcihudWxsKTtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIHJlbmRlckxpc3RJdGVtKHRvRGF0YSwgYWxsQ29udCk7XG4gIG1hcmtVbmNvbXBsZXRlZCgpO1xuICBtYXJrQ29tcGxldGVkKCk7XG59KTtcblxubmF2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY2xpY2tlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50by1kby1uYXYtbGluaycpO1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50by1kby1uYXYtbGluaycpLmRhdGFzZXQuc2hvdztcbiAgaWYgKCFjbGlja2VkKSByZXR1cm47XG4gIG5hdkxpbmsuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnT25DbGlja0xpbmsnKTtcbiAgfSk7XG4gIGJ0bi5mb3JFYWNoKChidG5Db24pID0+IHtcbiAgICBidG5Db24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0pO1xuXG4gIGNsaWNrZWQuY2xhc3NMaXN0LmFkZCgnT25DbGlja0xpbmsnKTtcbiAgaWYgKCFpZCkgcmV0dXJuO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnRuLSR7aWR9YCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59KTtcblxuY29uc3Qgc2V0VGltZSA9ICgpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgIHNlY29uZDogJ251bWVyaWMnLFxuICB9O1xuICB0aW1lRGF0ZS50ZXh0Q29udGVudCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIG9wdGlvbnMpLmZvcm1hdChkYXRlKTtcbn07XG5cbnNldEludGVydmFsKHNldFRpbWUsIDEwMCk7XG4iLCJpbXBvcnQgZ2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vZ2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcblxuY29uc3QgY29tcGxldGVkQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lcicpO1xuXG5jb25zdCBtYXJrQ29tcGxldGVkID0gKCkgPT4ge1xuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgY29tcGxldGVkID0gdG9EYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpO1xuICByZW5kZXJMaXN0SXRlbShjb21wbGV0ZWQsIGNvbXBsZXRlZENvbnQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1hcmtDb21wbGV0ZWQ7XG4iLCJpbXBvcnQgZ2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vZ2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcblxuY29uc3QgdW5jb21wbGV0ZWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLXVuY29tcGxldGVkLS1jb250YWluZXInKTtcblxuY29uc3QgbWFya1VuY29tcGxldGVkID0gKCkgPT4ge1xuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgY29tcGxldGVkID0gdG9EYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgIT09IHRydWUpO1xuICByZW5kZXJMaXN0SXRlbShjb21wbGV0ZWQsIHVuY29tcGxldGVkQ29udCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbWFya1VuY29tcGxldGVkO1xuIiwiaW1wb3J0IGdldExvY2FsU3RvcmFnZSBmcm9tICcuL2dldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgc2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vc2V0TG9jYWxTdG9yYWdlLmpzJztcblxuY29uc3QgcmVtb3ZlSGFuZGxlciA9IChyZW1vdmVJbmRleCkgPT4ge1xuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgbmV3RGF0YSA9IHJlbW92ZUluZGV4XG4gICAgPyB0b0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSByZW1vdmVJbmRleClcbiAgICA6IHRvRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkICE9PSB0cnVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbmV3RGF0YVtpXS5pbmRleCA9IGkgKyAxO1xuICB9XG4gIHNldExvY2FsU3RvcmFnZShuZXdEYXRhKTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW1vdmVIYW5kbGVyO1xuIiwiaW1wb3J0IGdldExvY2FsU3RvcmFnZSBmcm9tICcuL2dldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgc2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vc2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCBjaGVja2VkTGlzdEl0ZW0gZnJvbSAnLi9jaGVja2VkTGlzdEl0ZW0uanMnO1xuaW1wb3J0IHJlbW92ZUhhbmRsZXIgZnJvbSAnLi9yZW1vdmVIYW5kbGVyLmpzJztcbmltcG9ydCBlZGl0TGlzdEl0ZW0gZnJvbSAnLi9lZGl0TGlzdEl0ZW0uanMnO1xuaW1wb3J0IGNyZWF0ZUlucHV0IGZyb20gJy4vY3JlYXRlSW5wdXQuanMnO1xuaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9jcmVhdGVJY29uLmpzJztcbmltcG9ydCBkcmFnRHJvcCBmcm9tICcuL2RyYWdEcm9wLmpzJztcbmltcG9ydCBjaGVja2VkIGZyb20gJy4vY2hlY2tlZC5qcyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQuanMnO1xuXG5jb25zdCBhbGxDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtLWNvbnRhaW5lcicpO1xuY29uc3QgdW5jb21wbGV0ZWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLXVuY29tcGxldGVkLS1jb250YWluZXInKTtcbmNvbnN0IGNvbXBsZXRlZENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29tcGxldGVkLS1jb250YWluZXInKTtcblxuY29uc3QgcmVuZGVyTGlzdEl0ZW0gPSAodG9EYXRhLCB0b0RvQ29udGFpbmVyKSA9PiB7XG4gIHRvRG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgdG9EYXRhLmZvckVhY2goKHRvRG8pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3RvLWRvLWxpc3QtLWl0ZW0nO1xuICAgIGRpdi5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAgY29uc3QgaW5wdXRUZXh0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAndGFzaycsIHRvRG8uZGVzY3JpcHRpb24sICgpID0+IHtcbiAgICAgIGlmIChpbnB1dFRleHQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHRvRG8uZGVzY3JpcHRpb24gPSBpbnB1dFRleHQudmFsdWU7XG4gICAgICAgIHNldExvY2FsU3RvcmFnZSh0b0RhdGEpO1xuICAgICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5wdXRDaGVja0JveCA9IGNyZWF0ZUlucHV0KCdjaGVja2JveCcsICdjaGVja2JveCcsIG51bGwsICgpID0+IHtcbiAgICAgIGlucHV0VGV4dC5ibHVyKCk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgdG9Eby5jb21wbGV0ZWQgPSBjaGVja2VkTGlzdEl0ZW0oY2hlY2tlZCwgdG9Eby5jb21wbGV0ZWQpO1xuICAgICAgc2V0TG9jYWxTdG9yYWdlKHRvRGF0YSk7XG4gICAgICBjb25zdCBEYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgICBjb25zdCB1bmNvbXBsZXRlZCA9IERhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpO1xuICAgICAgcmVuZGVyTGlzdEl0ZW0oY29tcGxldGVkLCBjb21wbGV0ZWRDb250KTtcbiAgICAgIHJlbmRlckxpc3RJdGVtKHVuY29tcGxldGVkLCB1bmNvbXBsZXRlZENvbnQpO1xuICAgIH0pO1xuICAgIGlucHV0Q2hlY2tCb3guY2hlY2tlZCA9IHRvRG8uY29tcGxldGVkO1xuICAgIGlmIChpbnB1dENoZWNrQm94LmNoZWNrZWQpIGlucHV0VGV4dC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG5cbiAgICBjb25zdCBkb3RJY29uID0gY3JlYXRlSWNvbignZmEtZWxsaXBzaXMtdmVydGljYWwgZmEteGwnKTtcbiAgICBkb3RJY29uLnN0eWxlID0gJ2NvbG9yOiAjOTEzYWY2JztcblxuICAgIGNvbnN0IGJpbkljb24gPSBjcmVhdGVJY29uKFxuICAgICAgJ2ZhLXNvbGlkIGZhLXhtYXJrIGZhLWJlYXQtZmFkZSBmYS14bCBwb2ludGVyJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmVtb3ZlSGFuZGxlcih0b0RvLmluZGV4KTtcbiAgICAgICAgY29uc3QgRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICByZW5kZXJMaXN0SXRlbShEYXRhLCBhbGxDb250KTtcbiAgICAgICAgY29uc3QgdW5jb21wbGV0ZWQgPSBEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgIT09IHRydWUpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpO1xuICAgICAgICByZW5kZXJMaXN0SXRlbShjb21wbGV0ZWQsIGNvbXBsZXRlZENvbnQpO1xuICAgICAgICByZW5kZXJMaXN0SXRlbSh1bmNvbXBsZXRlZCwgdW5jb21wbGV0ZWRDb250KTtcbiAgICAgIH0sXG4gICAgKTtcbiAgICBiaW5JY29uLnN0eWxlID0gJ2NvbG9yOiAjOTEzYWZlOyc7XG4gICAgYmluSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgdG9nZ2xlSWNvbnMgPSAoKSA9PiB7XG4gICAgICBkb3RJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgYmluSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9O1xuXG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVJY29ucyk7XG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgIGRvdEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGJpbkljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlucHV0VGV4dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0VmFsdWUgPSBpbnB1dFRleHQudmFsdWU7XG4gICAgICAgIHRvRG8uZGVzY3JpcHRpb24gPSBlZGl0TGlzdEl0ZW0oZWRpdCwgaW5wdXRUZXh0VmFsdWUpO1xuICAgICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgIH0pO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIGlucHV0VGV4dC5ibHVyKCk7XG4gICAgfSk7XG5cbiAgICB0b0RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZHJhZ0Ryb3AoZS5jbGllbnRZKTtcbiAgICAgIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaW5wdXRUZXh0LmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXRDaGVja0JveCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRvdEljb24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChiaW5JY29uKTtcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckxpc3RJdGVtO1xuIiwiY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGxpc3RJdGVtcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9EYXRhJywgSlNPTi5zdHJpbmdpZnkobGlzdEl0ZW1zKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2V0TG9jYWxTdG9yYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9