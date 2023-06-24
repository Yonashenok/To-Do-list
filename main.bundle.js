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
  justify-content: space-between;
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
}`, "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@mixin btn($col1, $col2) {\r\n  font-size: 1.5rem;\r\n  color: $col2;\r\n  background-color: $col1;\r\n  box-shadow: 0.1px 0.2rem 0.15rem 0.35rem rgba(178, 118, 228, 0.25);\r\n  border-radius: 1rem;\r\n  text-decoration: none;\r\n}\r\n\r\n@mixin flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin todo-container {\r\n  font-size: 1.6rem;\r\n  font-weight: 400;\r\n  padding: 2rem;\r\n}\r\n\r\n@mixin flex-start {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n}\r\n\r\nbody {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.section {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.time-date {\r\n  margin-left: 1.6rem;\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  color: #913af6;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1rem 0.5rem;\r\n  color: #913af6;\r\n}\r\n\r\n.to-do-container {\r\n  width: 50rem;\r\n  box-shadow: 0.1px 0.5rem 0.5rem 0.6rem rgba(0, 0, 0, 0.1);\r\n  padding: 3rem;\r\n  border-radius: 2rem;\r\n  background-color: #e1e6ee;\r\n  border: 1px solid #999;\r\n}\r\n\r\n.to-do-form--input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.to-do-list--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-list--item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 6.5rem;\r\n  gap: 0.5rem;\r\n  padding: 1rem 1rem;\r\n  margin-bottom: 1.2rem;\r\n  border-radius: 1.5rem;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.selected {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.checkbox {\r\n  margin-inline: 16px;\r\n  border: 2px solid rgb(134, 130, 130);\r\n  width: auto;\r\n  transform: scale(1.6);\r\n  cursor: pointer;\r\n}\r\n\r\n.task {\r\n  width: 85%;\r\n  height: 90%;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #1b2056;\r\n}\r\n\r\n.task:focus {\r\n  outline: none;\r\n}\r\n\r\n.task:hover {\r\n  cursor: default;\r\n}\r\n\r\n.item i {\r\n  cursor: move;\r\n}\r\n\r\n.to-do-clear-btn {\r\n  height: 4rem;\r\n\r\n  @include flex;\r\n\r\n  padding: 1rem 0;\r\n  background-color: #e1e6ee;\r\n  color: #5f5f5f;\r\n}\r\n\r\n.to-do--btn {\r\n  padding: 1.5rem 4rem;\r\n\r\n  @include btn(#fff, #913af6);\r\n}\r\n\r\n.create-to-btn {\r\n  margin-top: 2.5rem;\r\n  padding: 1.5rem 4rem;\r\n\r\n  @include btn(#913af6, #fff);\r\n}\r\n\r\n.dragging {\r\n  opacity: 1;\r\n  background: #e2d5f0;\r\n}\r\n\r\n.overly {\r\n  width: 30rem;\r\n  height: 20rem;\r\n  background-color: rebeccapurple;\r\n  position: fixed;\r\n  top: 28%;\r\n  left: 50%;\r\n  transform: translate3d(-50%, 50%, 0);\r\n  border-radius: 2rem;\r\n\r\n  .btn-close {\r\n    position: fixed;\r\n    top: 12px;\r\n    right: 12px;\r\n  }\r\n\r\n  .model {\r\n    @include flex;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    .to-do-form {\r\n      @include flex;\r\n\r\n      flex-direction: column;\r\n      gap: 5rem;\r\n\r\n      .to-do-form--input {\r\n        width: 25rem;\r\n        height: 4rem;\r\n        padding-left: 1.5rem;\r\n        border: none;\r\n        border-bottom: 1px solid #b3b3b3;\r\n        border-top: 1px solid #b3b3b3;\r\n      }\r\n    }\r\n\r\n    .btn--submit {\r\n      padding: 0.8rem 1.5rem;\r\n      border: none;\r\n\r\n      @include btn(#fff, #913af6);\r\n    }\r\n  }\r\n}\r\n\r\n.to-do-nav {\r\n  @include flex-start;\r\n\r\n  gap: 1rem;\r\n  margin: 2rem 2rem;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.to-do-nav-link {\r\n  list-style: none;\r\n\r\n  & a {\r\n    text-decoration: none;\r\n    color: #8488ac;\r\n  }\r\n}\r\n\r\n.OnClickLink a {\r\n  color: #913af6;\r\n  border-bottom: 2px solid #913af6;\r\n}\r\n\r\n.to-do-completed--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-uncompleted--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-all--container,\r\n.to-do-completed--container,\r\n.to-do-uncompleted--container {\r\n  display: none;\r\n}\r\n\r\n.to-do-all--container:target,\r\n.to-do-completed--container:target,\r\n.to-do-uncompleted--container:target {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n$media-mobile: 'only screen and (max-width : 600px)';\r\n$media-mobile-sm: 'only screen and (max-width : 480px)';\r\n\r\n@media #{$media-mobile} {\r\n  .to-do-container {\r\n    width: 50rem;\r\n    padding: 3rem 0.5rem;\r\n  }\r\n}\r\n\r\n@media #{$media-mobile-sm} {\r\n  .to-do-container {\r\n    width: 35rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toData, allCont, true);
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

  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toData, allCont, true);
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
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toData, allCont, true);
  (0,_markUncompleted_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_markCompleted_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

navContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.to-do-nav-link');
  if (!clicked) return;
  const id = e.target.closest('.to-do-nav-link').dataset.show;
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
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(completed, completedCont, false);
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
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(completed, uncompletedCont, false);
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

const renderListItem = (toData, toDoContainer, state) => {
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

    const inputCheckBox = state
      ? (0,_createInput_js__WEBPACK_IMPORTED_MODULE_5__["default"])('checkbox', 'checkbox', null, () => {
        inputText.blur();
        inputText.classList.toggle('checked');
        toDo.completed = (0,_checkedListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_checked_js__WEBPACK_IMPORTED_MODULE_8__["default"], toDo.completed);
        (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toData);
        const Data = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        const uncompleted = Data.filter((item) => item.completed !== true);
        const completed = Data.filter((item) => item.completed === true);
        renderListItem(completed, completedCont, false);
        renderListItem(uncompleted, uncompletedCont, false);
      })
      : '';
    if (inputCheckBox) inputCheckBox.checked = toDo.completed;
    if (inputCheckBox.checked) inputText.classList.add('checked');

    const dotIcon = (0,_createIcon_js__WEBPACK_IMPORTED_MODULE_6__["default"])('fa-ellipsis-vertical fa-xl');
    dotIcon.style = 'color: #913af6';

    const binIcon = (0,_createIcon_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
      'fa-solid fa-xmark fa-beat-fade fa-xl pointer',
      () => {
        (0,_removeHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"])(toDo.index);
        const Data = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        renderListItem(Data, allCont, true);
        const uncompleted = Data.filter((item) => item.completed !== true);
        const completed = Data.filter((item) => item.completed === true);
        renderListItem(completed, completedCont, false);
        renderListItem(uncompleted, uncompletedCont, false);
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

    if (inputCheckBox) div.appendChild(inputCheckBox);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxX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QWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwwREFBVTtBQUM5Qjs7QUFFQSxvQkFBb0IsMERBQVU7QUFDOUI7QUFDQTtBQUNBLFFBQVEsNkRBQWE7QUFDckIscUJBQXFCLCtEQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQVksQ0FBQyxnREFBSTtBQUM1QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFRO0FBQ25DO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2SDlCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9pbmRleC5zY3NzPzdlYjkiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZE5ld0xpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NoZWNrZWRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZUljb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVJbnB1dC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RyYWdEcm9wLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dldExvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFya0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21hcmtVbmNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW5kZXJMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NldExvY2FsU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmQ1ZjA7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lLWRhdGUge1xuICBtYXJnaW4tbGVmdDogMS42cmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM5MTNhZjY7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICBjb2xvcjogIzkxM2FmNjtcbn1cblxuLnRvLWRvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MHJlbTtcbiAgYm94LXNoYWRvdzogMC4xcHggMC41cmVtIDAuNXJlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlNmVlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xufVxuXG4udG8tZG8tZm9ybS0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udG8tZG8tbGlzdC0tY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi50by1kby1saXN0LS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYuNXJlbTtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNoZWNrZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDVmMDtcbn1cblxuLmZsZXgtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5jaGVja2JveCB7XG4gIG1hcmdpbi1pbmxpbmU6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzQsIDEzMCwgMTMwKTtcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzayB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYjIwNTY7XG59XG5cbi50YXNrOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5pdGVtIGkge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi50by1kby1jbGVhci1idG4ge1xuICBoZWlnaHQ6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU2ZWU7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG4udG8tZG8tLWJ0biB7XG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICM5MTNhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMnJlbSAwLjE1cmVtIDAuMzVyZW0gcmdiYSgxNzgsIDExOCwgMjI4LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3JlYXRlLXRvLWJ0biB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxM2FmNjtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4ycmVtIDAuMTVyZW0gMC4zNXJlbSByZ2JhKDE3OCwgMTE4LCAyMjgsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kcmFnZ2luZyB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6ICNlMmQ1ZjA7XG59XG5cbi5vdmVybHkge1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMjByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCA1MCUsIDApO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuLm92ZXJseSAuYnRuLWNsb3NlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLm92ZXJseSAubW9kZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vdmVybHkgLm1vZGVsIC50by1kby1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbn1cbi5vdmVybHkgLm1vZGVsIC50by1kby1mb3JtIC50by1kby1mb3JtLS1pbnB1dCB7XG4gIHdpZHRoOiAyNXJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiM2IzYjM7XG59XG4ub3Zlcmx5IC5tb2RlbCAuYnRuLS1zdWJtaXQge1xuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzkxM2FmNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4ycmVtIDAuMTVyZW0gMC4zNXJlbSByZ2JhKDE3OCwgMTE4LCAyMjgsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50by1kby1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbjogMnJlbSAycmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvLWRvLW5hdi1saW5rIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi50by1kby1uYXYtbGluayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzg0ODhhYztcbn1cblxuLk9uQ2xpY2tMaW5rIGEge1xuICBjb2xvcjogIzkxM2FmNjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5MTNhZjY7XG59XG5cbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4udG8tZG8tYWxsLS1jb250YWluZXIsXG4udG8tZG8tY29tcGxldGVkLS1jb250YWluZXIsXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50by1kby1hbGwtLWNvbnRhaW5lcjp0YXJnZXQsXG4udG8tZG8tY29tcGxldGVkLS1jb250YWluZXI6dGFyZ2V0LFxuLnRvLWRvLXVuY29tcGxldGVkLS1jb250YWluZXI6dGFyZ2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA2MDBweCkge1xuICAudG8tZG8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTByZW07XG4gICAgcGFkZGluZzogM3JlbSAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KSB7XG4gIC50by1kby1jb250YWluZXIge1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBNkJBO0VBQ0UseUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNB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Rjs7QUFjQTs7O0VBR0UsY0FBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtBQVhGOztBQWlCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLG9CQUFBO0VBZEY7QUFDRjtBQWlCQTtFQUNFO0lBQ0UsWUFBQTtFQWZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ0bigkY29sMSwgJGNvbDIpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6ICRjb2wyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbDE7XFxyXFxuICBib3gtc2hhZG93OiAwLjFweCAwLjJyZW0gMC4xNXJlbSAwLjM1cmVtIHJnYmEoMTc4LCAxMTgsIDIyOCwgMC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdG9kby1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtc3RhcnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmQ1ZjA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtZGF0ZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMS42cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM5MTNhZjY7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiAjOTEzYWY2O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuNXJlbSAwLjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTZlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1mb3JtLS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC0tY29udGFpbmVyIHtcXHJcXG4gIEBpbmNsdWRlIHRvZG8tY29udGFpbmVyKCk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA2LjVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDVmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgbWFyZ2luLWlubGluZTogMTZweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzQsIDEzMCwgMTMwKTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICMxYjIwNTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gaSB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jbGVhci1idG4ge1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZmxleDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU2ZWU7XFxyXFxuICBjb2xvcjogIzVmNWY1ZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLS1idG4ge1xcclxcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBidG4oI2ZmZiwgIzkxM2FmNik7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtdG8tYnRuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgYnRuKCM5MTNhZjYsICNmZmYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQ6ICNlMmQ1ZjA7XFxyXFxufVxcclxcblxcclxcbi5vdmVybHkge1xcclxcbiAgd2lkdGg6IDMwcmVtO1xcclxcbiAgaGVpZ2h0OiAyMHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDI4JTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgNTAlLCAwKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuXFxyXFxuICAuYnRuLWNsb3NlIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDEycHg7XFxyXFxuICAgIHJpZ2h0OiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGVsIHtcXHJcXG4gICAgQGluY2x1ZGUgZmxleDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgLnRvLWRvLWZvcm0ge1xcclxcbiAgICAgIEBpbmNsdWRlIGZsZXg7XFxyXFxuXFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDVyZW07XFxyXFxuXFxyXFxuICAgICAgLnRvLWRvLWZvcm0tLWlucHV0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2IzYjM7XFxyXFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2IzYjNiMztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ0bi0tc3VibWl0IHtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBidG4oI2ZmZiwgIzkxM2FmNik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLW5hdiB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi50by1kby1uYXYtbGluayB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgJiBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzg0ODhhYztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLk9uQ2xpY2tMaW5rIGEge1xcclxcbiAgY29sb3I6ICM5MTNhZjY7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzkxM2FmNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyIHtcXHJcXG4gIEBpbmNsdWRlIHRvZG8tY29udGFpbmVyKCk7XFxyXFxufVxcclxcblxcclxcbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyIHtcXHJcXG4gIEBpbmNsdWRlIHRvZG8tY29udGFpbmVyKCk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1hbGwtLWNvbnRhaW5lcixcXHJcXG4udG8tZG8tY29tcGxldGVkLS1jb250YWluZXIsXFxyXFxuLnRvLWRvLXVuY29tcGxldGVkLS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWFsbC0tY29udGFpbmVyOnRhcmdldCxcXHJcXG4udG8tZG8tY29tcGxldGVkLS1jb250YWluZXI6dGFyZ2V0LFxcclxcbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyOnRhcmdldCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4kbWVkaWEtbW9iaWxlOiAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA2MDBweCknO1xcclxcbiRtZWRpYS1tb2JpbGUtc206ICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KSc7XFxyXFxuXFxyXFxuQG1lZGlhICN7JG1lZGlhLW1vYmlsZX0ge1xcclxcbiAgLnRvLWRvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MHJlbTtcXHJcXG4gICAgcGFkZGluZzogM3JlbSAwLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAjeyRtZWRpYS1tb2JpbGUtc219IHtcXHJcXG4gIC50by1kby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldExvY2FsU3RvcmFnZSBmcm9tICcuL2dldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgc2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vc2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcbmltcG9ydCBtYXJrVW5jb21wbGV0ZWQgZnJvbSAnLi9tYXJrVW5jb21wbGV0ZWQuanMnO1xuXG5jb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWZvcm0tLWlucHV0Jyk7XG5jb25zdCBhbGxDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtLWNvbnRhaW5lcicpO1xuXG5jb25zdCBhZGROZXdMaXN0SXRlbSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIHRvRGF0YS5wdXNoKHtcbiAgICBkZXNjcmlwdGlvbjogbmV3TGlzdC52YWx1ZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiB0b0RhdGEubGVuZ3RoICsgMSxcbiAgfSk7XG4gIG5ld0xpc3QudmFsdWUgPSAnJztcbiAgc2V0TG9jYWxTdG9yYWdlKHRvRGF0YSk7XG4gIHJlbmRlckxpc3RJdGVtKHRvRGF0YSwgYWxsQ29udCwgdHJ1ZSk7XG4gIG1hcmtVbmNvbXBsZXRlZCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTmV3TGlzdEl0ZW07XG4iLCJjb25zdCBjaGVja2VkID0gKGNvbXBsZXRlZCkgPT4gIWNvbXBsZXRlZDtcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XG4iLCJjb25zdCBjaGVja2VkTGlzdEl0ZW0gPSAoY2hlY2tlZCwgY29tcGxldGVkKSA9PiBjaGVja2VkKGNvbXBsZXRlZCk7XG5leHBvcnQgZGVmYXVsdCBjaGVja2VkTGlzdEl0ZW07XG4iLCJjb25zdCBjcmVhdGVJY29uID0gKGNsYXNzTmFtZSwgZXZlbnRMaXN0ZW5lcikgPT4ge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uLmNsYXNzTmFtZSA9IGBmYS1zb2xpZCAke2NsYXNzTmFtZX1gO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2VsbGlwc2UnLCAnZHJhZycpO1xuICBpZiAoZXZlbnRMaXN0ZW5lcikge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnRMaXN0ZW5lcik7XG4gIH1cbiAgcmV0dXJuIGljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJY29uO1xuIiwiY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgY2xhc3NOYW1lLCB2YWx1ZSwgZXZlbnRMaXN0ZW5lcikgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpbnB1dC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gIGlmIChldmVudExpc3RlbmVyKSB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnRMaXN0ZW5lcik7XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUlucHV0O1xuIiwiY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LS1jb250YWluZXInKTtcblxuY29uc3QgZHJhZ0Ryb3AgPSAoeSkgPT4ge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFtcbiAgICAuLi50b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1saXN0LS1pdGVtOm5vdCguZHJhZ2dpbmcpJyksXG4gIF07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoXG4gICAgKGNsb3NldCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3NldC5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb3NldDtcbiAgICB9LFxuICAgIHtcbiAgICAgIG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgIH0sXG4gICkuZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWdEcm9wO1xuIiwiY29uc3QgZWRpdCA9IChpbnB1dFZhbCkgPT4gaW5wdXRWYWw7XG5leHBvcnQgZGVmYXVsdCBlZGl0O1xuIiwiY29uc3QgZWRpdExpc3RJdGVtID0gKGVkaXQsIGlucHV0VGV4dFZhbHVlKSA9PiBlZGl0KGlucHV0VGV4dFZhbHVlKTtcbmV4cG9ydCBkZWZhdWx0IGVkaXRMaXN0SXRlbTtcbiIsImNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRGF0YScpKSB8fCBbXTtcbmV4cG9ydCBkZWZhdWx0IGdldExvY2FsU3RvcmFnZTtcbiIsImltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJztcbmltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHJlbmRlckxpc3RJdGVtIGZyb20gJy4vcmVuZGVyTGlzdEl0ZW0uanMnO1xuaW1wb3J0IGFkZE5ld0xpc3RJdGVtIGZyb20gJy4vYWRkTmV3TGlzdEl0ZW0uanMnO1xuaW1wb3J0IHJlbW92ZUhhbmRsZXIgZnJvbSAnLi9yZW1vdmVIYW5kbGVyLmpzJztcbmltcG9ydCBtYXJrVW5jb21wbGV0ZWQgZnJvbSAnLi9tYXJrVW5jb21wbGV0ZWQuanMnO1xuaW1wb3J0IG1hcmtDb21wbGV0ZWQgZnJvbSAnLi9tYXJrQ29tcGxldGVkLmpzJztcblxuY29uc3QgYWxsQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LS1jb250YWluZXInKTtcbmNvbnN0IGNvbXBsZXRlZENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29tcGxldGVkLS1jb250YWluZXInKTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG5cbiAgcmVuZGVyTGlzdEl0ZW0odG9EYXRhLCBhbGxDb250LCB0cnVlKTtcbiAgbWFya1VuY29tcGxldGVkKCk7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IHRvRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSB0cnVlKTtcbiAgcmVuZGVyTGlzdEl0ZW0oY29tcGxldGVkLCBjb21wbGV0ZWRDb250KTtcbn07XG5pbml0KCk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tZm9ybScpO1xuY29uc3Qgb3Zlcmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJseScpO1xuY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLS1idG4nKTtcbmNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG8tYnRuJyk7XG5jb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UnKTtcbmNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8tbmF2LWxpbmsnKTtcbmNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1uYXYnKTtcbmNvbnN0IHRpbWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUtZGF0ZScpO1xuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLWNsZWFyLWJ0biAnKTtcbmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgb3Zlcmx5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGFkZE5ld0xpc3RJdGVtKGUpO1xuICBvdmVybHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG92ZXJseS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xucmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZW1vdmVIYW5kbGVyKG51bGwpO1xuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgcmVuZGVyTGlzdEl0ZW0odG9EYXRhLCBhbGxDb250LCB0cnVlKTtcbiAgbWFya1VuY29tcGxldGVkKCk7XG4gIG1hcmtDb21wbGV0ZWQoKTtcbn0pO1xuXG5uYXZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvLWRvLW5hdi1saW5rJyk7XG4gIGlmICghY2xpY2tlZCkgcmV0dXJuO1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50by1kby1uYXYtbGluaycpLmRhdGFzZXQuc2hvdztcbiAgbmF2TGluay5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdPbkNsaWNrTGluaycpO1xuICB9KTtcbiAgYnRuLmZvckVhY2goKGJ0bkNvbikgPT4ge1xuICAgIGJ0bkNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSk7XG5cbiAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKCdPbkNsaWNrTGluaycpO1xuICBpZiAoIWlkKSByZXR1cm47XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idG4tJHtpZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn0pO1xuXG5jb25zdCBzZXRUaW1lID0gKCkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gIH07XG4gIHRpbWVEYXRlLnRleHRDb250ZW50ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgb3B0aW9ucykuZm9ybWF0KGRhdGUpO1xufTtcblxuc2V0SW50ZXJ2YWwoc2V0VGltZSwgMTAwKTtcbiIsImltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHJlbmRlckxpc3RJdGVtIGZyb20gJy4vcmVuZGVyTGlzdEl0ZW0uanMnO1xuXG5jb25zdCBjb21wbGV0ZWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyJyk7XG5cbmNvbnN0IG1hcmtDb21wbGV0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHRvRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuICBjb25zdCBjb21wbGV0ZWQgPSB0b0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XG4gIHJlbmRlckxpc3RJdGVtKGNvbXBsZXRlZCwgY29tcGxldGVkQ29udCwgZmFsc2UpO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1hcmtDb21wbGV0ZWQ7XG4iLCJpbXBvcnQgZ2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vZ2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcblxuY29uc3QgdW5jb21wbGV0ZWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLXVuY29tcGxldGVkLS1jb250YWluZXInKTtcblxuY29uc3QgbWFya1VuY29tcGxldGVkID0gKCkgPT4ge1xuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgY29tcGxldGVkID0gdG9EYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgIT09IHRydWUpO1xuICByZW5kZXJMaXN0SXRlbShjb21wbGV0ZWQsIHVuY29tcGxldGVkQ29udCwgZmFsc2UpO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1hcmtVbmNvbXBsZXRlZDtcbiIsImltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHNldExvY2FsU3RvcmFnZSBmcm9tICcuL3NldExvY2FsU3RvcmFnZS5qcyc7XG5cbmNvbnN0IHJlbW92ZUhhbmRsZXIgPSAocmVtb3ZlSW5kZXgpID0+IHtcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIGNvbnN0IG5ld0RhdGEgPSByZW1vdmVJbmRleFxuICAgID8gdG9EYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gcmVtb3ZlSW5kZXgpXG4gICAgOiB0b0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3RGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5ld0RhdGFbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxuICBzZXRMb2NhbFN0b3JhZ2UobmV3RGF0YSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlSGFuZGxlcjtcbiIsImltcG9ydCBnZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9nZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHNldExvY2FsU3RvcmFnZSBmcm9tICcuL3NldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgY2hlY2tlZExpc3RJdGVtIGZyb20gJy4vY2hlY2tlZExpc3RJdGVtLmpzJztcbmltcG9ydCByZW1vdmVIYW5kbGVyIGZyb20gJy4vcmVtb3ZlSGFuZGxlci5qcyc7XG5pbXBvcnQgZWRpdExpc3RJdGVtIGZyb20gJy4vZWRpdExpc3RJdGVtLmpzJztcbmltcG9ydCBjcmVhdGVJbnB1dCBmcm9tICcuL2NyZWF0ZUlucHV0LmpzJztcbmltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vY3JlYXRlSWNvbi5qcyc7XG5pbXBvcnQgZHJhZ0Ryb3AgZnJvbSAnLi9kcmFnRHJvcC5qcyc7XG5pbXBvcnQgY2hlY2tlZCBmcm9tICcuL2NoZWNrZWQuanMnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0LmpzJztcblxuY29uc3QgYWxsQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LS1jb250YWluZXInKTtcbmNvbnN0IHVuY29tcGxldGVkQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyJyk7XG5jb25zdCBjb21wbGV0ZWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyJyk7XG5cbmNvbnN0IHJlbmRlckxpc3RJdGVtID0gKHRvRGF0YSwgdG9Eb0NvbnRhaW5lciwgc3RhdGUpID0+IHtcbiAgdG9Eb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICB0b0RhdGEuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAndG8tZG8tbGlzdC0taXRlbSc7XG4gICAgZGl2LmRyYWdnYWJsZSA9IHRydWU7XG5cbiAgICBjb25zdCBpbnB1dFRleHQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICd0YXNrJywgdG9Eby5kZXNjcmlwdGlvbiwgKCkgPT4ge1xuICAgICAgaWYgKGlucHV0VGV4dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgdG9Eby5kZXNjcmlwdGlvbiA9IGlucHV0VGV4dC52YWx1ZTtcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKHRvRGF0YSk7XG4gICAgICAgIGlucHV0VGV4dC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbnB1dENoZWNrQm94ID0gc3RhdGVcbiAgICAgID8gY3JlYXRlSW5wdXQoJ2NoZWNrYm94JywgJ2NoZWNrYm94JywgbnVsbCwgKCkgPT4ge1xuICAgICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgICB0b0RvLmNvbXBsZXRlZCA9IGNoZWNrZWRMaXN0SXRlbShjaGVja2VkLCB0b0RvLmNvbXBsZXRlZCk7XG4gICAgICAgIHNldExvY2FsU3RvcmFnZSh0b0RhdGEpO1xuICAgICAgICBjb25zdCBEYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IHVuY29tcGxldGVkID0gRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkICE9PSB0cnVlKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSB0cnVlKTtcbiAgICAgICAgcmVuZGVyTGlzdEl0ZW0oY29tcGxldGVkLCBjb21wbGV0ZWRDb250LCBmYWxzZSk7XG4gICAgICAgIHJlbmRlckxpc3RJdGVtKHVuY29tcGxldGVkLCB1bmNvbXBsZXRlZENvbnQsIGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICA6ICcnO1xuICAgIGlmIChpbnB1dENoZWNrQm94KSBpbnB1dENoZWNrQm94LmNoZWNrZWQgPSB0b0RvLmNvbXBsZXRlZDtcbiAgICBpZiAoaW5wdXRDaGVja0JveC5jaGVja2VkKSBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuXG4gICAgY29uc3QgZG90SWNvbiA9IGNyZWF0ZUljb24oJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsIGZhLXhsJyk7XG4gICAgZG90SWNvbi5zdHlsZSA9ICdjb2xvcjogIzkxM2FmNic7XG5cbiAgICBjb25zdCBiaW5JY29uID0gY3JlYXRlSWNvbihcbiAgICAgICdmYS1zb2xpZCBmYS14bWFyayBmYS1iZWF0LWZhZGUgZmEteGwgcG9pbnRlcicsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIodG9Eby5pbmRleCk7XG4gICAgICAgIGNvbnN0IERhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcmVuZGVyTGlzdEl0ZW0oRGF0YSwgYWxsQ29udCwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHVuY29tcGxldGVkID0gRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkICE9PSB0cnVlKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSB0cnVlKTtcbiAgICAgICAgcmVuZGVyTGlzdEl0ZW0oY29tcGxldGVkLCBjb21wbGV0ZWRDb250LCBmYWxzZSk7XG4gICAgICAgIHJlbmRlckxpc3RJdGVtKHVuY29tcGxldGVkLCB1bmNvbXBsZXRlZENvbnQsIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgICBiaW5JY29uLnN0eWxlID0gJ2NvbG9yOiAjOTEzYWZlOyc7XG4gICAgYmluSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgdG9nZ2xlSWNvbnMgPSAoKSA9PiB7XG4gICAgICBkb3RJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgYmluSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9O1xuXG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVJY29ucyk7XG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgIGRvdEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGJpbkljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG4gICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlucHV0VGV4dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0VmFsdWUgPSBpbnB1dFRleHQudmFsdWU7XG4gICAgICAgIHRvRG8uZGVzY3JpcHRpb24gPSBlZGl0TGlzdEl0ZW0oZWRpdCwgaW5wdXRUZXh0VmFsdWUpO1xuICAgICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICBpbnB1dFRleHQuYmx1cigpO1xuICAgIH0pO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIGlucHV0VGV4dC5ibHVyKCk7XG4gICAgfSk7XG5cbiAgICB0b0RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZHJhZ0Ryb3AoZS5jbGllbnRZKTtcbiAgICAgIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlucHV0VGV4dC5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgaWYgKGlucHV0Q2hlY2tCb3gpIGRpdi5hcHBlbmRDaGlsZChpbnB1dENoZWNrQm94KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXRUZXh0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZG90SWNvbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJpbkljb24pO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTGlzdEl0ZW07XG4iLCJjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAobGlzdEl0ZW1zKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RhdGEnLCBKU09OLnN0cmluZ2lmeShsaXN0SXRlbXMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzZXRMb2NhbFN0b3JhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=