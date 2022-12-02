/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutHeader": () => (/* binding */ aboutHeader),
/* harmony export */   "openAbout": () => (/* binding */ openAbout)
/* harmony export */ });
function openAbout() {
  var aboutUsContainer = document.createElement('div');
  var aboutUsSubText = document.createElement('p');
  var aboutUsOtherSubText = document.createElement('p');
  aboutUsContainer.classList.add('aboutus-container');
  aboutUsContainer.appendChild(aboutUsSubText);
  aboutUsContainer.appendChild(aboutUsOtherSubText);
  aboutUsSubText.textContent = "First off, our brand name \n    is inspired by the Pangasinense word is a dialect from my \n    province. Our coffee beans are Arabica and we get it from Benguet, \n    Baguio and Batangas. We sell roughly 200-300 cups per day, it\u2019s already \n    decent for a small Coffee Shop. But, we are still doing our best to make \n    our shop one of the most biggest coffee shop.";
  aboutUsOtherSubText.textContent = "Lastly, we made a questionnaire that \n    it\u2019ll be given whenever a customer comes to our shop. So that it will \n    help them know what type of coffee is the best for them and what are the \n    suggestions and criticism that we will get. If you have any questions, \n    ask anything. It will absolutely help us and appreciated.";
  return aboutUsContainer;
}
function aboutHeader() {
  var aboutUsHeader = document.createElement('h1');
  aboutUsHeader.textContent = "About us";
  return aboutHeader;
}

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuItems": () => (/* binding */ createMenuItems),
/* harmony export */   "openMenu": () => (/* binding */ openMenu)
/* harmony export */ });
/* harmony import */ var _assets_Coffee_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Coffee.png */ "./src/assets/Coffee.png");
/* harmony import */ var _assets_Frappe_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Frappe.png */ "./src/assets/Frappe.png");
/* harmony import */ var _assets_Frappucino_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Frappucino.png */ "./src/assets/Frappucino.png");
/* harmony import */ var _assets_Kapeng_Barako_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Kapeng-Barako.png */ "./src/assets/Kapeng-Barako.png");




function openMenu() {
  var welcomeContainer = document.createElement('div');
  var welcomeHeader = document.createElement('h1');
  var welcomeSubtext = document.createElement('div');
  welcomeHeader.textContent = "Welcome";
  welcomeSubtext.textContent = "Take a look at our delicious menu!";
  welcomeContainer.classList.add('menu-welcome-container');
  welcomeSubtext.classList.add('menu-welcome-subtext');
  welcomeContainer.appendChild(welcomeHeader);
  welcomeContainer.appendChild(welcomeSubtext);
  return welcomeContainer;
}
function createMenuItems() {
  var itemContainer = document.createElement('div');
  var item1 = document.createElement('div');
  var item2 = document.createElement('div');
  var item3 = document.createElement('div');
  var item4 = document.createElement('div');
  var item1Name = document.createElement('div');
  var item2Name = document.createElement('div');
  var item3Name = document.createElement('div');
  var item4Name = document.createElement('div');
  var item1Img = document.createElement('img');
  var item2Img = document.createElement('img');
  var item3Img = document.createElement('img');
  var item4Img = document.createElement('img');
  var item1Price = document.createElement('div');
  var item2Price = document.createElement('div');
  var item3Price = document.createElement('div');
  var item4Price = document.createElement('div');
  item1.appendChild(item1Price);
  item1.appendChild(item1Img);
  item1.appendChild(item1Name);
  item1Name.textContent = "Coffee";
  item1Price.textContent = "PHP 50";
  item1Img.src = _assets_Coffee_png__WEBPACK_IMPORTED_MODULE_0__;
  item2.appendChild(item2Price);
  item2.appendChild(item2Img);
  item2.appendChild(item2Name);
  item2Name.textContent = "Kapeng Barako";
  item2Price.textContent = "PHP 40";
  item2Img.src = _assets_Kapeng_Barako_png__WEBPACK_IMPORTED_MODULE_3__;
  item3.appendChild(item3Price);
  item3.appendChild(item3Img);
  item3.appendChild(item3Name);
  item3Name.textContent = "Frappe";
  item3Price.textContent = "PHP 150";
  item3Img.src = _assets_Frappe_png__WEBPACK_IMPORTED_MODULE_1__;
  item4.appendChild(item4Price);
  item4.appendChild(item4Img);
  item4.appendChild(item4Name);
  item4Name.textContent = "Frappucino";
  item4Price.textContent = "PHP 200";
  item4Img.src = _assets_Frappucino_png__WEBPACK_IMPORTED_MODULE_2__;
  itemContainer.classList.add('menu-item-container');
  item1.classList.add('menu-items');
  item2.classList.add('menu-items');
  item3.classList.add('menu-items');
  item4.classList.add('menu-items');
  item1Price.classList.add('item-price');
  item2Price.classList.add('item-price');
  item3Price.classList.add('item-price');
  item4Price.classList.add('item-price');
  item1Img.classList.add('item-img');
  item2Img.classList.add('item-img');
  item3Img.classList.add('item-img');
  item4Img.classList.add('item-img');
  item1Name.classList.add('item-name');
  item2Name.classList.add('item-name');
  item3Name.classList.add('item-name');
  item4Name.classList.add('item-name');
  itemContainer.appendChild(item1);
  itemContainer.appendChild(item2);
  itemContainer.appendChild(item3);
  itemContainer.appendChild(item4);
  return itemContainer;
}

/***/ }),

/***/ "./src/scripts/store.js":
/*!******************************!*\
  !*** ./src/scripts/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openStore": () => (/* binding */ openStore),
/* harmony export */   "storeBackground": () => (/* binding */ storeBackground)
/* harmony export */ });
/* harmony import */ var _assets_store_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/store-background.jpg */ "./src/assets/store-background.jpg");

function openStore() {
  var storeContainer = document.createElement('div');
  var visitContainer = document.createElement('div');
  var visitHeaderText = document.createElement('h1');
  var visitInformation = document.createElement('div');
  var visit1 = document.createElement('div');
  var visit1Icon = document.createElement('i');
  var visit1Info = document.createElement('span');
  var visit2 = document.createElement('div');
  var visit2Icon = document.createElement('i');
  var visit2Info = document.createElement('span');
  var visit3 = document.createElement('div');
  var visit3Icon = document.createElement('i');
  var visit3Info = document.createElement('span');
  var addNoteContainer = document.createElement('div');
  var addNoteHeaderText = document.createElement('h1');
  var addNoteInformation = document.createElement('div');
  var notes1 = document.createElement('div');
  var notes2 = document.createElement('div');
  var notes3 = document.createElement('div');
  storeContainer.classList.add('store-container');
  storeContainer.appendChild(visitContainer);
  visitContainer.appendChild(visitHeaderText);
  visitContainer.appendChild(visitInformation);
  visitContainer.classList.add('visit-container');
  visitInformation.classList.add('visit-information');
  visitInformation.appendChild(visit1);
  visitInformation.appendChild(visit2);
  visitInformation.appendChild(visit3);
  visit1.appendChild(visit1Icon);
  visit1.appendChild(visit1Info);
  visit2.appendChild(visit2Icon);
  visit2.appendChild(visit2Info);
  visit3.appendChild(visit3Icon);
  visit3.appendChild(visit3Info);
  visitHeaderText.textContent = "Visit our store!";
  visit1Icon.classList.add('fa-solid');
  visit1Icon.classList.add('fa-location-dot');
  visit1Info.textContent = "Infront of UP, Dagupan City, Pangasinan";
  visit2Icon.classList.add('fa-solid');
  visit2Icon.classList.add('fa-phone');
  visit2Info.textContent = "09235167361";
  visit3Icon.classList.add('fa-solid');
  visit3Icon.classList.add('fa-envelope');
  visit3Info.textContent = "mankapetayo@email.com";
  storeContainer.appendChild(addNoteContainer);
  addNoteContainer.appendChild(addNoteHeaderText);
  addNoteContainer.appendChild(addNoteInformation);
  addNoteContainer.classList.add('addnote-container');
  addNoteInformation.classList.add('addnote-information');
  addNoteInformation.appendChild(notes1);
  addNoteInformation.appendChild(notes2);
  addNoteInformation.appendChild(notes3);
  addNoteHeaderText.textContent = "Additional Notes!";
  notes1.textContent = "We are open until 6 a.m. to 10 p.m.";
  notes2.textContent = "We are pet-friendly and eco-friendly.";
  notes3.textContent = "Free wi-fi and board games to play with!";
  return storeContainer;
}
function storeBackground() {
  var storeBackground = document.createElement('img');
  storeBackground.src = _assets_store_background_jpg__WEBPACK_IMPORTED_MODULE_0__;
  return storeBackground;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/header-background.jpg */ "./src/assets/header-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Nunito\", sans-serif;\n  background-color: #967259;\n  height: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 6.4em;\n  padding: 1em 5em;\n  box-shadow: 0 0 5px 2px black;\n}\nheader .header-text-container, header .menu-welcome-container {\n  display: flex;\n  flex-direction: column;\n}\nheader .header-text-container h1, header .menu-welcome-container h1 {\n  font-size: 2.5rem;\n  font-weight: bold;\n}\nheader nav {\n  display: flex;\n  gap: 15px;\n}\nheader nav .pages {\n  cursor: pointer;\n  background-color: #ECE0D1;\n  width: 100px;\n  padding: 0.5em;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  transition: 250ms ease-in-out;\n}\nheader nav .pages:hover {\n  transform: translateY(-5px);\n}\nheader nav .pages:active {\n  transform: scale(0.98);\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1em;\n  flex: 1;\n  padding: 3em 5em;\n}\n\n.menu-welcome-container h1 {\n  font-size: 3rem;\n}\n.menu-welcome-container .menu-welcome-subtext {\n  font-size: 1.4rem;\n}\n\n.menu-item-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2em;\n}\n.menu-item-container .menu-items {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.menu-item-container .menu-items img {\n  width: 100%;\n}\n.menu-item-container .menu-items .item-name {\n  align-self: center;\n  font-weight: bold;\n}\n.menu-item-container .menu-items .item-price {\n  font-weight: bold;\n}\n\n.store-container {\n  display: flex;\n  justify-content: space-between;\n}\n.store-container .visit-container {\n  display: flex;\n  flex-direction: column;\n}\n.store-container .visit-container h1 {\n  font-size: 2.2rem;\n}\n.store-container .visit-container .visit-information {\n  display: flex;\n  flex-direction: column;\n  color: #ECE0D1;\n}\n.store-container .visit-container .visit-information div {\n  display: flex;\n  gap: 8px;\n  font-size: 1.1rem;\n}\n.store-container .addnote-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.store-container .addnote-container h1 {\n  font-size: 2.2rem;\n}\n.store-container .addnote-container .addnote-information {\n  font-size: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  color: #ECE0D1;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AACA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;AACJ;;AACA;EACI,YAAA;AAEJ;;AAAA;EACI,aAAA;EACA,sBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;AAGJ;;AADA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,yDAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;EACA,aAAA;EACA,gBAAA;EACA,6BAAA;AAIJ;AAFI;EACI,aAAA;EACA,sBAAA;AAIR;AAHQ;EACI,iBAAA;EACA,iBAAA;AAKZ;AAFI;EACI,aAAA;EACA,SAAA;AAIR;AAHQ;EACI,eAAA;EACA,yBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,6BAAA;AAKZ;AAJY;EACI,2BAAA;AAMhB;AAJY;EACI,sBAAA;AAMhB;;AADA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,QAAA;EACA,OAAA;EACA,gBAAA;AAIJ;;AAAI;EACI,eAAA;AAGR;AADI;EACI,iBAAA;AAGR;;AAAA;EACI,aAAA;EACA,qCAAA;EACA,aAAA;AAGJ;AAFI;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAIR;AAHQ;EACI,WAAA;AAKZ;AAHQ;EACI,kBAAA;EACA,iBAAA;AAKZ;AAHQ;EACI,iBAAA;AAKZ;;AADA;EACI,aAAA;EACA,8BAAA;AAIJ;AAHI;EACI,aAAA;EACA,sBAAA;AAKR;AAJQ;EACI,iBAAA;AAMZ;AAJQ;EACI,aAAA;EACA,sBAAA;EACA,cAAA;AAMZ;AALY;EACI,aAAA;EACA,QAAA;EACA,iBAAA;AAOhB;AAHI;EACI,aAAA;EACA,sBAAA;EACA,qBAAA;AAKR;AAJQ;EACI,iBAAA;AAMZ;AAJQ;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,cAAA;AAMZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');\r\n*,*::before,*::after{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nhtml{\r\n    height: 100%;\r\n}\r\nbody{\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Nunito', sans-serif;\r\n    background-color: #967259;\r\n    height: 100%;\r\n}\r\nheader{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-image: url(../assets/header-background.jpg);\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 6.4em;\r\n    padding: 1em 5em;\r\n    box-shadow: 0 0 5px 2px black;\r\n    \r\n    .header-text-container{\r\n        display: flex;\r\n        flex-direction: column;\r\n        h1{\r\n            font-size: 2.5rem;\r\n            font-weight: bold;\r\n        }\r\n    }\r\n    nav{\r\n        display: flex;\r\n        gap: 15px;\r\n        .pages{\r\n            cursor: pointer;\r\n            background-color: #ECE0D1;\r\n            width: 100px;\r\n            padding: 0.5em;\r\n            border-radius: 10px;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            font-weight: bold;\r\n            transition: 250ms ease-in-out;\r\n            &:hover{\r\n                transform: translateY(-5px);\r\n            }\r\n            &:active{\r\n                transform: scale(0.98);\r\n            }\r\n        }\r\n    }\r\n}\r\n.content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1em;\r\n    flex: 1;\r\n    padding: 3em 5em;\r\n}\r\n.menu-welcome-container{\r\n    @extend .header-text-container;\r\n    h1{\r\n        font-size: 3rem;\r\n    }\r\n    .menu-welcome-subtext{\r\n        font-size: 1.4rem;\r\n    }\r\n}\r\n.menu-item-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-gap: 2em;\r\n    .menu-items{\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 10px;\r\n        img{\r\n            width: 100%;\r\n        }\r\n        .item-name{\r\n            align-self: center;\r\n            font-weight: bold;\r\n        }\r\n        .item-price{\r\n            font-weight: bold;\r\n        }\r\n    }\r\n}\r\n.store-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    .visit-container{\r\n        display: flex;\r\n        flex-direction: column;\r\n        h1{\r\n            font-size: 2.2rem;\r\n        }\r\n        .visit-information{\r\n            display: flex;\r\n            flex-direction: column;\r\n            color: #ECE0D1;\r\n            div{\r\n                display: flex;\r\n                gap: 8px;\r\n                font-size: 1.1rem;\r\n            }\r\n        }\r\n    }\r\n    .addnote-container{\r\n        display: flex; \r\n        flex-direction: column;\r\n        align-items: flex-end;\r\n        h1{\r\n            font-size: 2.2rem;\r\n        }\r\n        .addnote-information{\r\n            font-size: 1.1rem;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: flex-end;\r\n            color: #ECE0D1;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/assets/Coffee.png":
/*!*******************************!*\
  !*** ./src/assets/Coffee.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Coffee.png";

/***/ }),

/***/ "./src/assets/Frappe.png":
/*!*******************************!*\
  !*** ./src/assets/Frappe.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Frappe.png";

/***/ }),

/***/ "./src/assets/Frappucino.png":
/*!***********************************!*\
  !*** ./src/assets/Frappucino.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Frappucino.png";

/***/ }),

/***/ "./src/assets/Kapeng-Barako.png":
/*!**************************************!*\
  !*** ./src/assets/Kapeng-Barako.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Kapeng-Barako.png";

/***/ }),

/***/ "./src/assets/header-background.jpg":
/*!******************************************!*\
  !*** ./src/assets/header-background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "header-background.jpg";

/***/ }),

/***/ "./src/assets/store-background.jpg":
/*!*****************************************!*\
  !*** ./src/assets/store-background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "store-background.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _assets_header_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/header-background.jpg */ "./src/assets/header-background.jpg");
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/menu */ "./src/scripts/menu.js");
/* harmony import */ var _scripts_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/store */ "./src/scripts/store.js");
/* harmony import */ var _scripts_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/about */ "./src/scripts/about.js");





var menuNav = document.getElementById('menu-nav');
var storeNav = document.getElementById('store-nav');
var aboutNav = document.getElementById('about-nav');
var content = document.getElementById('content');

//default module
content.appendChild((0,_scripts_menu__WEBPACK_IMPORTED_MODULE_2__.openMenu)());
content.appendChild((0,_scripts_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuItems)());
menuNav.addEventListener('click', menu);
storeNav.addEventListener('click', store);
aboutNav.addEventListener('click', about);
function menu() {
  clearOutContainer(content);
  content.appendChild((0,_scripts_menu__WEBPACK_IMPORTED_MODULE_2__.openMenu)());
  content.appendChild((0,_scripts_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuItems)());
}
function store() {
  clearOutContainer(content);
  content.appendChild((0,_scripts_store__WEBPACK_IMPORTED_MODULE_3__.openStore)());
  content.appendChild((0,_scripts_store__WEBPACK_IMPORTED_MODULE_3__.storeBackground)());
}
function about() {
  clearOutContainer(content);
  content.appendChild((0,_scripts_about__WEBPACK_IMPORTED_MODULE_4__.aboutHeader)());
  content.appendChild((0,_scripts_about__WEBPACK_IMPORTED_MODULE_4__.openAbout)());
}
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle1d9c017446946eb79ad6.js.map