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

h3 {
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 0.5rem;
  color: #1b2056;
}

.to-do-container {
  width: 50rem;
  box-shadow: 0.1px 0.5rem 0.5rem 0.6rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
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
  font-size: 1.6rem;
  font-weight: 600;
}
.to-do-nav li {
  list-style: none;
}
.to-do-nav li a {
  text-decoration: none;
  color: #1b2056;
}

.to-do-completed--container {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 2rem;
  background-color: greenyellow;
}

.to-do-uncompleted--container {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 2rem;
  background-color: red;
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
}`, "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AACF;;AA2BA;EACE,yBAAA;AAxBF;;AA2BA;EACE,gBAAA;EACA,+BAAA;AAxBF;;AA2BA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAxBF;;AA2BA;EACE,SAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,cAAA;AAxBF;;AA2BA;EACE,YAAA;EACA,yDAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,sBAAA;AAxBF;;AA2BA;EACE,kBAAA;AAxBF;;AA2BA;EAhDE,iBAAA;EACA,gBAAA;EACA,aAAA;AAyBF;;AAyBA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,qBAAA;EACA,qBAAA;EACA,eAAA;EACA,sBAAA;AAtBF;;AAyBA;EACE,6BAAA;AAtBF;;AAyBA;EACE,yBAAA;AAtBF;;AAyBA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AAtBF;;AAyBA;EACE,mBAAA;EACA,oCAAA;EACA,WAAA;EACA,qBAAA;EACA,eAAA;AAtBF;;AAyBA;EACE,UAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AAtBF;;AAyBA;EACE,aAAA;AAtBF;;AAyBA;EACE,eAAA;AAtBF;;AAyBA;EACE,YAAA;AAtBF;;AAyBA;EACE,YAAA;EAnHA,aAAA;EACA,uBAAA;EACA,mBAAA;EAmHA,eAAA;EACA,yBAAA;EACA,cAAA;AApBF;;AAuBA;EACE,oBAAA;EApIA,iBAAA;EACA,cAoImB;EAnInB,sBAmIa;EAlIb,kEAAA;EACA,mBAAA;EACA,qBAAA;AAiHF;;AAkBA;EACE,oBAAA;EAzIA,iBAAA;EACA,WAyIsB;EAxItB,yBAwIa;EAvIb,kEAAA;EACA,mBAAA;EACA,qBAAA;AA2HF;;AAaA;EACE,UAAA;EACA,mBAAA;AAVF;;AAaA;EACE,YAAA;EACA,aAAA;EACA,+BAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,oCAAA;EACA,mBAAA;AAVF;AAYE;EACE,eAAA;EACA,SAAA;EACA,WAAA;AAVJ;AAaE;EAzJA,aAAA;EACA,uBAAA;EACA,mBAAA;EAyJE,WAAA;EACA,YAAA;AATJ;AAWI;EA9JF,aAAA;EACA,uBAAA;EACA,mBAAA;EA8JI,sBAAA;EACA,SAAA;AAPN;AASM;EACE,YAAA;EACA,YAAA;EACA,oBAAA;EACA,YAAA;EACA,gCAAA;EACA,6BAAA;AAPR;AAWI;EACE,sBAAA;EACA,YAAA;EAxLJ,iBAAA;EACA,cAwLuB;EAvLvB,sBAuLiB;EAtLjB,kEAAA;EACA,mBAAA;EACA,qBAAA;AAgLF;;AAQA;EA1KE,aAAA;EACA,sBAAA;EACA,mBAAA;EA0KA,SAAA;EACA,iBAAA;EACA,gBAAA;AAHF;AAIE;EACE,gBAAA;AAFJ;AAGI;EACE,qBAAA;EACA,cAAA;AADN;;AAKA;EA5LE,iBAAA;EACA,gBAAA;EACA,aAAA;EA4LA,6BAAA;AAAF;;AAEA;EAhME,iBAAA;EACA,gBAAA;EACA,aAAA;EAgMA,qBAAA;AAGF;;AAAA;;;EAGE,aAAA;AAGF;;AADA;;;EAGE,cAAA;AAIF;;AADA;EACE,aAAA;AAIF","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@mixin btn($col1, $col2) {\r\n  font-size: 1.5rem;\r\n  color: $col2;\r\n  background-color: $col1;\r\n  box-shadow: 0.1px 0.2rem 0.15rem 0.35rem rgba(178, 118, 228, 0.25);\r\n  border-radius: 1rem;\r\n  text-decoration: none;\r\n}\r\n\r\n@mixin flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n@mixin todo-container {\r\n  font-size: 1.6rem;\r\n  font-weight: 400;\r\n  padding: 2rem;\r\n}\r\n@mixin flex-start {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n}\r\n\r\nbody {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.section {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1rem 0.5rem;\r\n  color: #1b2056;\r\n}\r\n\r\n.to-do-container {\r\n  width: 50rem;\r\n  box-shadow: 0.1px 0.5rem 0.5rem 0.6rem rgba(0, 0, 0, 0.1);\r\n  padding: 2rem;\r\n  border-radius: 2rem;\r\n  background-color: #e1e6ee;\r\n  border: 1px solid #999;\r\n}\r\n\r\n.to-do-form--input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.to-do-list--container {\r\n  @include todo-container();\r\n}\r\n\r\n.to-do-list--item {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  height: 6.5rem;\r\n  gap: 0.5rem;\r\n  padding: 1rem 1rem;\r\n  margin-bottom: 1.2rem;\r\n  border-radius: 1.5rem;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.selected {\r\n  background-color: #e2d5f0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.checkbox {\r\n  margin-inline: 16px;\r\n  border: 2px solid rgb(134, 130, 130);\r\n  width: auto;\r\n  transform: scale(1.6);\r\n  cursor: pointer;\r\n}\r\n\r\n.task {\r\n  width: 85%;\r\n  height: 90%;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #1b2056;\r\n}\r\n\r\n.task:focus {\r\n  outline: none;\r\n}\r\n\r\n.task:hover {\r\n  cursor: default;\r\n}\r\n\r\n.item i {\r\n  cursor: move;\r\n}\r\n\r\n.to-do-clear-btn {\r\n  height: 4rem;\r\n  @include flex;\r\n  padding: 1rem 0;\r\n  background-color: #e1e6ee;\r\n  color: #5f5f5f;\r\n}\r\n\r\n.to-do--btn {\r\n  padding: 1.5rem 4rem;\r\n  @include btn(#fff, #913af6);\r\n}\r\n\r\n.create-to-btn {\r\n  padding: 1.5rem 4rem;\r\n  @include btn(#913af6, #fff);\r\n}\r\n\r\n.dragging {\r\n  opacity: 1;\r\n  background: #e2d5f0;\r\n}\r\n\r\n.overly {\r\n  width: 30rem;\r\n  height: 20rem;\r\n  background-color: rebeccapurple;\r\n  position: fixed;\r\n  top: 28%;\r\n  left: 50%;\r\n  transform: translate3d(-50%, 50%, 0);\r\n  border-radius: 2rem;\r\n\r\n  .btn-close {\r\n    position: fixed;\r\n    top: 12px;\r\n    right: 12px;\r\n  }\r\n\r\n  .model {\r\n    @include flex;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    .to-do-form {\r\n      @include flex;\r\n      flex-direction: column;\r\n      gap: 5rem;\r\n\r\n      .to-do-form--input {\r\n        width: 25rem;\r\n        height: 4rem;\r\n        padding-left: 1.5rem;\r\n        border: none;\r\n        border-bottom: 1px solid #b3b3b3;\r\n        border-top: 1px solid #b3b3b3;\r\n      }\r\n    }\r\n\r\n    .btn--submit {\r\n      padding: 0.8rem 1.5rem;\r\n      border: none;\r\n      @include btn(#fff, #913af6);\r\n    }\r\n  }\r\n}\r\n.to-do-nav {\r\n  @include flex-start;\r\n  gap: 1rem;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n  li {\r\n    list-style: none;\r\n    a {\r\n      text-decoration: none;\r\n      color: #1b2056;\r\n    }\r\n  }\r\n}\r\n.to-do-completed--container {\r\n  @include todo-container();\r\n  background-color: greenyellow;\r\n}\r\n.to-do-uncompleted--container {\r\n  @include todo-container();\r\n  background-color: red;\r\n}\r\n\r\n.to-do-all--container,\r\n.to-do-completed--container,\r\n.to-do-uncompleted--container {\r\n  display: none;\r\n}\r\n.to-do-all--container:target,\r\n.to-do-completed--container:target,\r\n.to-do-uncompleted--container:target {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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




const newList = document.querySelector('.to-do-form--input');

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
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewListItem);


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
    }
  ).element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragDrop);


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
/* harmony import */ var _renderListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderListItem.js */ "./src/renderListItem.js");
/* harmony import */ var _addNewListItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewListItem.js */ "./src/addNewListItem.js");
/* harmony import */ var _removeHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeHandler.js */ "./src/removeHandler.js");





const init = () => {
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
init();
const form = document.querySelector('.to-do-form');
const overly = document.querySelector('.overly');
const removeBtn = document.querySelector('.to-do--btn');
const createBtn = document.querySelector('.create-to-btn');
const btnClose = document.querySelector('.btn-close');
createBtn.addEventListener('click', () => {
  overly.classList.toggle('hidden');
});
form.addEventListener('submit', (e) => {
  (0,_addNewListItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
  overly.classList.toggle('hidden');
});

btnClose.addEventListener('click', () => {
  overly.classList.toggle('hidden');
});
removeBtn.addEventListener('click', () => {
  (0,_removeHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"])(null);
  (0,_renderListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});


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
/* harmony import */ var _removeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeHandler.js */ "./src/removeHandler.js");
/* harmony import */ var _createInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createInput.js */ "./src/createInput.js");
/* harmony import */ var _createIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createIcon.js */ "./src/createIcon.js");
/* harmony import */ var _dragDrop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dragDrop.js */ "./src/dragDrop.js");







const toDoContainer = document.querySelector('.to-do-list--container');

const renderListItem = () => {
  const toData = (0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  toDoContainer.innerHTML = '';

  toData.forEach((toDo) => {
    const div = document.createElement('div');
    div.className = 'to-do-list--item';
    div.draggable = true;

    const inputText = (0,_createInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])('text', 'task', toDo.description, () => {
      if (inputText.value !== '') {
        toDo.description = inputText.value;
        (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toData);
        inputText.blur();
      }
    });

    const inputCheckBox = (0,_createInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])('checkbox', 'checkbox', null, () => {
      inputText.blur();
      toDo.completed = !toDo.completed;
      inputText.classList.toggle('checked');
      (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toData);
    });
    inputCheckBox.checked = toDo.completed;

    const dotIcon = (0,_createIcon_js__WEBPACK_IMPORTED_MODULE_4__["default"])('fa-ellipsis-vertical fa-xl');
    dotIcon.style = 'color: #913af6';

    const binIcon = (0,_createIcon_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
      'fa-solid fa-xmark fa-beat-fade fa-xl pointer',
      () => {
        (0,_removeHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toDo.index);
        renderListItem();
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
        toDo.description = inputText.value;
        (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toData);
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
      const afterElement = (0,_dragDrop_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e.clientY);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxjQUFjLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxjQUFjLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcs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UUFBUSwrREFBZTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQVE7QUFDbkM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHOUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2luZGV4LnNjc3M/N2ViOSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkTmV3TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVJY29uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kcmFnRHJvcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dldExvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbmRlckxpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2V0TG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDVmMDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XG4gIGNvbG9yOiAjMWIyMDU2O1xufVxuXG4udG8tZG8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwcmVtO1xuICBib3gtc2hhZG93OiAwLjFweCAwLjVyZW0gMC41cmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU2ZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG59XG5cbi50by1kby1mb3JtLS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50by1kby1saXN0LS1jb250YWluZXIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLnRvLWRvLWxpc3QtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYuNXJlbTtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNoZWNrZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDVmMDtcbn1cblxuLmZsZXgtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5jaGVja2JveCB7XG4gIG1hcmdpbi1pbmxpbmU6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzQsIDEzMCwgMTMwKTtcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzayB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYjIwNTY7XG59XG5cbi50YXNrOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5pdGVtIGkge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi50by1kby1jbGVhci1idG4ge1xuICBoZWlnaHQ6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU2ZWU7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG4udG8tZG8tLWJ0biB7XG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICM5MTNhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMnJlbSAwLjE1cmVtIDAuMzVyZW0gcmdiYSgxNzgsIDExOCwgMjI4LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3JlYXRlLXRvLWJ0biB7XG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTNhZjY7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMnJlbSAwLjE1cmVtIDAuMzVyZW0gcmdiYSgxNzgsIDExOCwgMjI4LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZHJhZ2dpbmcge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiAjZTJkNWYwO1xufVxuXG4ub3Zlcmx5IHtcbiAgd2lkdGg6IDMwcmVtO1xuICBoZWlnaHQ6IDIwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjglO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgNTAlLCAwKTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cbi5vdmVybHkgLmJ0bi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTJweDtcbn1cbi5vdmVybHkgLm1vZGVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ub3Zlcmx5IC5tb2RlbCAudG8tZG8tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVyZW07XG59XG4ub3Zlcmx5IC5tb2RlbCAudG8tZG8tZm9ybSAudG8tZG8tZm9ybS0taW5wdXQge1xuICB3aWR0aDogMjVyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2IzYjM7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjNiM2IzO1xufVxuLm92ZXJseSAubW9kZWwgLmJ0bi0tc3VibWl0IHtcbiAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICM5MTNhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMnJlbSAwLjE1cmVtIDAuMzVyZW0gcmdiYSgxNzgsIDExOCwgMjI4LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udG8tZG8tbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi50by1kby1uYXYgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnRvLWRvLW5hdiBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzFiMjA1Njtcbn1cblxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50by1kby1hbGwtLWNvbnRhaW5lcixcbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lcixcbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvLWRvLWFsbC0tY29udGFpbmVyOnRhcmdldCxcbi50by1kby1jb21wbGV0ZWQtLWNvbnRhaW5lcjp0YXJnZXQsXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lcjp0YXJnZXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUEyQkE7RUFDRSx5QkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBeEJGOztBQTJCQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsWUFBQTtFQUNBLHlEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxrQkFBQTtBQXhCRjs7QUEyQkE7RUFoREUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUF5QkY7O0FBeUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSw2QkFBQTtBQXRCRjs7QUF5QkE7RUFDRSx5QkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxhQUFBO0FBdEJGOztBQXlCQTtFQUNFLGVBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsWUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxZQUFBO0VBbkhBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBbUhBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usb0JBQUE7RUFwSUEsaUJBQUE7RUFDQSxjQW9JbUI7RUFuSW5CLHNCQW1JYTtFQWxJYixrRUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFpSEY7O0FBa0JBO0VBQ0Usb0JBQUE7RUF6SUEsaUJBQUE7RUFDQSxXQXlJc0I7RUF4SXRCLHlCQXdJYTtFQXZJYixrRUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUEySEY7O0FBYUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFhQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBVkY7QUFZRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVZKO0FBYUU7RUF6SkEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF5SkUsV0FBQTtFQUNBLFlBQUE7QUFUSjtBQVdJO0VBOUpGLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBOEpJLHNCQUFBO0VBQ0EsU0FBQTtBQVBOO0FBU007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFQUjtBQVdJO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBeExKLGlCQUFBO0VBQ0EsY0F3THVCO0VBdkx2QixzQkF1TGlCO0VBdExqQixrRUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFnTEY7O0FBUUE7RUExS0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUEwS0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRE47O0FBS0E7RUE1TEUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUE0TEEsNkJBQUE7QUFBRjs7QUFFQTtFQWhNRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQWdNQSxxQkFBQTtBQUdGOztBQUFBOzs7RUFHRSxhQUFBO0FBR0Y7O0FBREE7OztFQUdFLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7QUFJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnRuKCRjb2wxLCAkY29sMikge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogJGNvbDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sMTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMnJlbSAwLjE1cmVtIDAuMzVyZW0gcmdiYSgxNzgsIDExOCwgMjI4LCAwLjI1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbkBtaXhpbiB0b2RvLWNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5AbWl4aW4gZmxleC1zdGFydCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZDVmMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICBjb2xvcjogIzFiMjA1NjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjFweCAwLjVyZW0gMC41cmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU2ZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tZm9ybS0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3QtLWNvbnRhaW5lciB7XFxyXFxuICBAaW5jbHVkZSB0b2RvLWNvbnRhaW5lcigpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tbGlzdC0taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDYuNXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkNWYwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBtYXJnaW4taW5saW5lOiAxNnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDEzNCwgMTMwLCAxMzApO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzFiMjA1NjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSBpIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNsZWFyLWJ0biB7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICBAaW5jbHVkZSBmbGV4O1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTZlZTtcXHJcXG4gIGNvbG9yOiAjNWY1ZjVmO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tLWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcXHJcXG4gIEBpbmNsdWRlIGJ0bigjZmZmLCAjOTEzYWY2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS10by1idG4ge1xcclxcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XFxyXFxuICBAaW5jbHVkZSBidG4oIzkxM2FmNiwgI2ZmZik7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2luZyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZDogI2UyZDVmMDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJseSB7XFxyXFxuICB3aWR0aDogMzByZW07XFxyXFxuICBoZWlnaHQ6IDIwcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMjglO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCA1MCUsIDApO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG5cXHJcXG4gIC5idG4tY2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMTJweDtcXHJcXG4gICAgcmlnaHQ6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kZWwge1xcclxcbiAgICBAaW5jbHVkZSBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAudG8tZG8tZm9ybSB7XFxyXFxuICAgICAgQGluY2x1ZGUgZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNXJlbTtcXHJcXG5cXHJcXG4gICAgICAudG8tZG8tZm9ybS0taW5wdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IzYjNiMztcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjNiM2IzO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnRuLS1zdWJtaXQge1xcclxcbiAgICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIEBpbmNsdWRlIGJ0bigjZmZmLCAjOTEzYWY2KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4udG8tZG8tbmF2IHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICBjb2xvcjogIzFiMjA1NjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4udG8tZG8tY29tcGxldGVkLS1jb250YWluZXIge1xcclxcbiAgQGluY2x1ZGUgdG9kby1jb250YWluZXIoKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lciB7XFxyXFxuICBAaW5jbHVkZSB0b2RvLWNvbnRhaW5lcigpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tYWxsLS1jb250YWluZXIsXFxyXFxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyLFxcclxcbi50by1kby11bmNvbXBsZXRlZC0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50by1kby1hbGwtLWNvbnRhaW5lcjp0YXJnZXQsXFxyXFxuLnRvLWRvLWNvbXBsZXRlZC0tY29udGFpbmVyOnRhcmdldCxcXHJcXG4udG8tZG8tdW5jb21wbGV0ZWQtLWNvbnRhaW5lcjp0YXJnZXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vZ2V0TG9jYWxTdG9yYWdlLmpzJztcclxuaW1wb3J0IHNldExvY2FsU3RvcmFnZSBmcm9tICcuL3NldExvY2FsU3RvcmFnZS5qcyc7XHJcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcclxuXHJcbmNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tZm9ybS0taW5wdXQnKTtcclxuXHJcbmNvbnN0IGFkZE5ld0xpc3RJdGVtID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdG9EYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgdG9EYXRhLnB1c2goe1xyXG4gICAgZGVzY3JpcHRpb246IG5ld0xpc3QudmFsdWUsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaW5kZXg6IHRvRGF0YS5sZW5ndGggKyAxLFxyXG4gIH0pO1xyXG4gIG5ld0xpc3QudmFsdWUgPSAnJztcclxuICBzZXRMb2NhbFN0b3JhZ2UodG9EYXRhKTtcclxuICByZW5kZXJMaXN0SXRlbSgpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhZGROZXdMaXN0SXRlbTtcclxuIiwiY29uc3QgY3JlYXRlSWNvbiA9IChjbGFzc05hbWUsIGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbi5jbGFzc05hbWUgPSBgZmEtc29saWQgJHtjbGFzc05hbWV9YDtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdlbGxpcHNlJywgJ2RyYWcnKTtcbiAgaWYgKGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG4gIHJldHVybiBpY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSWNvbjtcbiIsImNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGNsYXNzTmFtZSwgdmFsdWUsIGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICBpZiAoZXZlbnRMaXN0ZW5lcikge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG4gIHJldHVybiBpbnB1dDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnB1dDtcbiIsImNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdC0tY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBkcmFnRHJvcCA9ICh5KSA9PiB7XHJcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbXHJcbiAgICAuLi50b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1saXN0LS1pdGVtOm5vdCguZHJhZ2dpbmcpJyksXHJcbiAgXTtcclxuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKFxyXG4gICAgKGNsb3NldCwgY2hpbGQpID0+IHtcclxuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IHkgLSBib3gudG9wIC0gYm94LmhlaWdodCAvIDI7XHJcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3NldC5vZmZzZXQpIHtcclxuICAgICAgICByZXR1cm4geyBvZmZzZXQsIGVsZW1lbnQ6IGNoaWxkIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNsb3NldDtcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxyXG4gICAgfVxyXG4gICkuZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYWdEcm9wO1xyXG4iLCJjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RhdGEnKSkgfHwgW107XG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhbFN0b3JhZ2U7XG4iLCJpbXBvcnQgJy4vc3R5bGUvaW5kZXguc2Nzcyc7XHJcbmltcG9ydCByZW5kZXJMaXN0SXRlbSBmcm9tICcuL3JlbmRlckxpc3RJdGVtLmpzJztcclxuaW1wb3J0IGFkZE5ld0xpc3RJdGVtIGZyb20gJy4vYWRkTmV3TGlzdEl0ZW0uanMnO1xyXG5pbXBvcnQgcmVtb3ZlSGFuZGxlciBmcm9tICcuL3JlbW92ZUhhbmRsZXIuanMnO1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICByZW5kZXJMaXN0SXRlbSgpO1xyXG59O1xyXG5pbml0KCk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tZm9ybScpO1xyXG5jb25zdCBvdmVybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Zlcmx5Jyk7XHJcbmNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby0tYnRuJyk7XHJcbmNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG8tYnRuJyk7XHJcbmNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZScpO1xyXG5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgb3Zlcmx5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG59KTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGFkZE5ld0xpc3RJdGVtKGUpO1xyXG4gIG92ZXJseS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxufSk7XHJcblxyXG5idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBvdmVybHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbn0pO1xyXG5yZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVtb3ZlSGFuZGxlcihudWxsKTtcclxuICByZW5kZXJMaXN0SXRlbSgpO1xyXG59KTtcclxuIiwiaW1wb3J0IGdldExvY2FsU3RvcmFnZSBmcm9tICcuL2dldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgc2V0TG9jYWxTdG9yYWdlIGZyb20gJy4vc2V0TG9jYWxTdG9yYWdlLmpzJztcblxuY29uc3QgcmVtb3ZlSGFuZGxlciA9IChyZW1vdmVJbmRleCkgPT4ge1xuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgbmV3RGF0YSA9IHJlbW92ZUluZGV4XG4gICAgPyB0b0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSByZW1vdmVJbmRleClcbiAgICA6IHRvRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkICE9PSB0cnVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbmV3RGF0YVtpXS5pbmRleCA9IGkgKyAxO1xuICB9XG4gIHNldExvY2FsU3RvcmFnZShuZXdEYXRhKTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW1vdmVIYW5kbGVyO1xuIiwiaW1wb3J0IGdldExvY2FsU3RvcmFnZSBmcm9tICcuL2dldExvY2FsU3RvcmFnZS5qcyc7XHJcbmltcG9ydCBzZXRMb2NhbFN0b3JhZ2UgZnJvbSAnLi9zZXRMb2NhbFN0b3JhZ2UuanMnO1xyXG5pbXBvcnQgcmVtb3ZlSGFuZGxlciBmcm9tICcuL3JlbW92ZUhhbmRsZXIuanMnO1xyXG5pbXBvcnQgY3JlYXRlSW5wdXQgZnJvbSAnLi9jcmVhdGVJbnB1dC5qcyc7XHJcbmltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vY3JlYXRlSWNvbi5qcyc7XHJcbmltcG9ydCBkcmFnRHJvcCBmcm9tICcuL2RyYWdEcm9wLmpzJztcclxuXHJcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdC0tY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCByZW5kZXJMaXN0SXRlbSA9ICgpID0+IHtcclxuICBjb25zdCB0b0RhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgdG9Eb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgdG9EYXRhLmZvckVhY2goKHRvRG8pID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICd0by1kby1saXN0LS1pdGVtJztcclxuICAgIGRpdi5kcmFnZ2FibGUgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0VGV4dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3Rhc2snLCB0b0RvLmRlc2NyaXB0aW9uLCAoKSA9PiB7XHJcbiAgICAgIGlmIChpbnB1dFRleHQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgdG9Eby5kZXNjcmlwdGlvbiA9IGlucHV0VGV4dC52YWx1ZTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UodG9EYXRhKTtcclxuICAgICAgICBpbnB1dFRleHQuYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbnB1dENoZWNrQm94ID0gY3JlYXRlSW5wdXQoJ2NoZWNrYm94JywgJ2NoZWNrYm94JywgbnVsbCwgKCkgPT4ge1xyXG4gICAgICBpbnB1dFRleHQuYmx1cigpO1xyXG4gICAgICB0b0RvLmNvbXBsZXRlZCA9ICF0b0RvLmNvbXBsZXRlZDtcclxuICAgICAgaW5wdXRUZXh0LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcclxuICAgICAgc2V0TG9jYWxTdG9yYWdlKHRvRGF0YSk7XHJcbiAgICB9KTtcclxuICAgIGlucHV0Q2hlY2tCb3guY2hlY2tlZCA9IHRvRG8uY29tcGxldGVkO1xyXG5cclxuICAgIGNvbnN0IGRvdEljb24gPSBjcmVhdGVJY29uKCdmYS1lbGxpcHNpcy12ZXJ0aWNhbCBmYS14bCcpO1xyXG4gICAgZG90SWNvbi5zdHlsZSA9ICdjb2xvcjogIzkxM2FmNic7XHJcblxyXG4gICAgY29uc3QgYmluSWNvbiA9IGNyZWF0ZUljb24oXHJcbiAgICAgICdmYS1zb2xpZCBmYS14bWFyayBmYS1iZWF0LWZhZGUgZmEteGwgcG9pbnRlcicsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICByZW1vdmVIYW5kbGVyKHRvRG8uaW5kZXgpO1xyXG4gICAgICAgIHJlbmRlckxpc3RJdGVtKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBiaW5JY29uLnN0eWxlID0gJ2NvbG9yOiAjOTEzYWZlOyc7XHJcbiAgICBiaW5JY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlSWNvbnMgPSAoKSA9PiB7XHJcbiAgICAgIGRvdEljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGJpbkljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIGlucHV0VGV4dC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnB1dFRleHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZUljb25zKTtcclxuICAgIGlucHV0VGV4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIGlucHV0VGV4dC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG4gICAgICBkb3RJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGJpbkljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9KTtcclxuICAgIGlucHV0VGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlucHV0VGV4dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICB0b0RvLmRlc2NyaXB0aW9uID0gaW5wdXRUZXh0LnZhbHVlO1xyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSh0b0RhdGEpO1xyXG4gICAgICAgIGlucHV0VGV4dC5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xyXG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcclxuICAgICAgaW5wdXRUZXh0LmJsdXIoKTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xyXG4gICAgICBpbnB1dFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcclxuICAgICAgaW5wdXRUZXh0LmJsdXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRvRG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xyXG4gICAgICBjb25zdCBhZnRlckVsZW1lbnQgPSBkcmFnRHJvcChlLmNsaWVudFkpO1xyXG4gICAgICBpZiAoYWZ0ZXJFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKGRyYWdnYWJsZSwgYWZ0ZXJFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpbnB1dFRleHQuZm9jdXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dENoZWNrQm94KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRvdEljb24pO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGJpbkljb24pO1xyXG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJMaXN0SXRlbTtcclxuIiwiY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGxpc3RJdGVtcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9EYXRhJywgSlNPTi5zdHJpbmdpZnkobGlzdEl0ZW1zKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2V0TG9jYWxTdG9yYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9