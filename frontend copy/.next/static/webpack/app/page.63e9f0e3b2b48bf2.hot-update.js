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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TodoCard(param) {\n    let { todo } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todo.is_completed);\n    const doCheck = async (todo)=>{\n        console.log(isChecked);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/todos/\".concat(todo.id, \"/check\"));\n        if (response.status === 200) {\n            console.log(\"success\");\n            setIsChecked(!isChecked);\n        }\n        if (response.status === 400) {\n            console.log(\"error\");\n        }\n    };\n    const doDelete = async (id)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete(\"http://localhost:8000/api/todos/\".concat(id));\n        if (response.status === 200) {\n            console.log(\"success\");\n        }\n        if (response.status === 400) {\n            console.log(\"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: isChecked,\n                onChange: ()=>doCheck(todo)\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/TodoCard.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white\",\n                children: todo.title\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/TodoCard.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-white\",\n                onClick: ()=>doDelete(todo.id),\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/TodoCard.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, todo.id, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/TodoCard.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoCard, \"kY+Jz8KNpV+T66o7dMuvU8bZEvI=\");\n_c = TodoCard;\nvar _c;\n$RefreshReg$(_c, \"TodoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2RvQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTBCO0FBQ087QUFFbEIsU0FBU0UsU0FBUyxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7O0lBQy9CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQ0UsS0FBS0csWUFBWTtJQUU1RCxNQUFNQyxVQUFVLE9BQU9KO1FBQ3JCSyxRQUFRQyxHQUFHLENBQUNMO1FBQ1osTUFBTU0sV0FBVyxNQUFNViw2Q0FBS0EsQ0FBQ1csSUFBSSxDQUMvQixtQ0FBMkMsT0FBUlIsS0FBS1MsRUFBRSxFQUFDO1FBRzdDLElBQUlGLFNBQVNHLE1BQU0sS0FBSyxLQUFLO1lBQzNCTCxRQUFRQyxHQUFHLENBQUM7WUFDWkosYUFBYSxDQUFDRDtRQUNoQjtRQUVBLElBQUlNLFNBQVNHLE1BQU0sS0FBSyxLQUFLO1lBQzNCTCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEsTUFBTUssV0FBVyxPQUFPRjtRQUN0QixNQUFNRixXQUFXLE1BQU1WLDZDQUFLQSxDQUFDZSxNQUFNLENBQUMsbUNBQXNDLE9BQUhIO1FBRXZFLElBQUlGLFNBQVNHLE1BQU0sS0FBSyxLQUFLO1lBQzNCTCxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUVBLElBQUlDLFNBQVNHLE1BQU0sS0FBSyxLQUFLO1lBQzNCTCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQWtCQyxXQUFVOzswQkFDM0IsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxTQUFTaEI7Z0JBQ1RpQixVQUFVLElBQU1kLFFBQVFKOzs7Ozs7MEJBRTFCLDhEQUFDbUI7Z0JBQUVMLFdBQVU7MEJBQWNkLEtBQUtvQixLQUFLOzs7Ozs7MEJBQ3JDLDhEQUFDQztnQkFBT1AsV0FBVTtnQkFBYVEsU0FBUyxJQUFNWCxTQUFTWCxLQUFLUyxFQUFFOzBCQUFHOzs7Ozs7O09BUHpEVCxLQUFLUyxFQUFFOzs7OztBQVVyQjtHQTFDd0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2RvQ2FyZC5qcz8wMjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvQ2FyZCh7IHRvZG8gfSkge1xuICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUodG9kby5pc19jb21wbGV0ZWQpO1xuXG4gIGNvbnN0IGRvQ2hlY2sgPSBhc3luYyAodG9kbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlzQ2hlY2tlZCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdG9kb3MvJHt0b2RvLmlkfS9jaGVja2BcbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XG4gICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkb0RlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3RvZG9zLyR7aWR9YCk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcbiAgICB9ICAgXG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17dG9kby5pZH0gY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgb25DaGFuZ2U9eygpID0+IGRvQ2hlY2sodG9kbyl9XG4gICAgICAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnt0b2RvLnRpdGxlfTwvcD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIG9uQ2xpY2s9eygpID0+IGRvRGVsZXRlKHRvZG8uaWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiVG9kb0NhcmQiLCJ0b2RvIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiaXNfY29tcGxldGVkIiwiZG9DaGVjayIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJpZCIsInN0YXR1cyIsImRvRGVsZXRlIiwiZGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwicCIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TodoCard.js\n"));

/***/ })

});