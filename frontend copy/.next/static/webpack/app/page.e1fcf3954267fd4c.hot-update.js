"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/TodoCard.js":
/*!****************************************!*\
  !*** ./src/app/components/TodoCard.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TodoCard(param) {\n    let { todo } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todo.is_completed);\n    const doCheck = async (todo)=>{\n        console.log(isChecked);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/todos/\".concat(todo.id, \"/check\"));\n        if (response.status === 200) {\n            console.log(\"success\");\n            setIsChecked(!isChecked);\n        }\n        if (response.status === 400) {\n            console.log(\"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: isChecked,\n                onChange: ()=>doCheck(todo)\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/TodoCard.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white\",\n                children: todo.title\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/TodoCard.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, todo.id, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/TodoCard.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoCard, \"kY+Jz8KNpV+T66o7dMuvU8bZEvI=\");\n_c = TodoCard;\nvar _c;\n$RefreshReg$(_c, \"TodoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2RvQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTBCO0FBQ087QUFFbEIsU0FBU0UsU0FBUyxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7O0lBQy9CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQ0UsS0FBS0csWUFBWTtJQUU1RCxNQUFNQyxVQUFVLE9BQU9KO1FBQ3JCSyxRQUFRQyxHQUFHLENBQUNMO1FBQ1osTUFBTU0sV0FBVyxNQUFNViw2Q0FBS0EsQ0FBQ1csSUFBSSxDQUMvQixtQ0FBMkMsT0FBUlIsS0FBS1MsRUFBRSxFQUFDO1FBRzdDLElBQUlGLFNBQVNHLE1BQU0sS0FBSyxLQUFLO1lBQzNCTCxRQUFRQyxHQUFHLENBQUM7WUFDWkosYUFBYSxDQUFDRDtRQUNoQjtRQUVBLElBQUlNLFNBQVNHLE1BQU0sS0FBSyxLQUFLO1lBQzNCTCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQWtCQyxXQUFVOzswQkFDM0IsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxTQUFTZDtnQkFDVGUsVUFBVSxJQUFNWixRQUFRSjs7Ozs7OzBCQUUxQiw4REFBQ2lCO2dCQUFFTCxXQUFVOzBCQUFjWixLQUFLa0IsS0FBSzs7Ozs7OztPQU43QmxCLEtBQUtTLEVBQUU7Ozs7O0FBU3JCO0dBN0J3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RvZG9DYXJkLmpzPzAyMWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9DYXJkKHsgdG9kbyB9KSB7XG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZSh0b2RvLmlzX2NvbXBsZXRlZCk7XG5cbiAgY29uc3QgZG9DaGVjayA9IGFzeW5jICh0b2RvKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXNDaGVja2VkKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS90b2Rvcy8ke3RvZG8uaWR9L2NoZWNrYFxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcbiAgICAgIHNldElzQ2hlY2tlZCghaXNDaGVja2VkKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e3RvZG8uaWR9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBkb0NoZWNrKHRvZG8pfVxuICAgICAgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57dG9kby50aXRsZX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsIlRvZG9DYXJkIiwidG9kbyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImlzX2NvbXBsZXRlZCIsImRvQ2hlY2siLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwiaWQiLCJzdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TodoCard.js\n"));

/***/ })

});