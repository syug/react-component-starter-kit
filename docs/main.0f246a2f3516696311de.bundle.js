(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(module){module.exports={a:"@rakuten-rex/react-component-starter-kit",b:{type:"git",url:"https://github.com/rakuten-rex/react-component-starter-kit.git"}}},242:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(243),_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(245),_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1__),_package_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(158);__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"light",appBg:"#F7F7F7",fontBase:'-apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',textColor:"#333333",brandTitle:_package_json__WEBPACK_IMPORTED_MODULE_2__.a,brandUrl:_package_json__WEBPACK_IMPORTED_MODULE_2__.b.url,brandImage:_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a})},245:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/rex-logo.5e377fe4.svg"},248:function(module,exports,__webpack_require__){__webpack_require__(249),__webpack_require__(353),module.exports=__webpack_require__(354)},354:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(10),__webpack_require__(20),__webpack_require__(15),__webpack_require__(11),__webpack_require__(26);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(85),_rexTheme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(242);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{theme:_rexTheme__WEBPACK_IMPORTED_MODULE_6__.a}});var req=__webpack_require__(520);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(186)(module))},520:function(module,exports,__webpack_require__){var map={"./index.jsx":521};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=520},521:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(246),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(159),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(247),MyComponent=__webpack_require__(548).default,stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("MyComponent",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs),stories.addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__.withA11y);var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent,null);stories.add("default",function(){return _ref2});var _ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent,{text:"Welcome to React example"});stories.add("with text",function(){return _ref3});var _ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent,{className:"color-black active"});stories.add("with className",function(){return _ref4}),stories.add("with onClick",function(){var onClickSample=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent,{onClick:onClickSample})});var _ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Hello World"));stories.add("with children",function(){return _ref5}),stories.add("with dynamic props",function(){var textWelcome=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("text","Welcome to Dynamic React");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent,{text:textWelcome})})}.call(this,__webpack_require__(186)(module))}},[[248,1,2]]]);