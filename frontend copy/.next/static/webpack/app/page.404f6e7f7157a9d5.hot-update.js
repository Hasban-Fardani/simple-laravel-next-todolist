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

/***/ "(app-pages-browser)/./src/app/components/FormTodo.js":
/*!****************************************!*\
  !*** ./src/app/components/FormTodo.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormTodo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FormTodo(param) {\n    let { getAllPost, onUpdate, setOnUpadate, updateTodo, setUpdateTodo } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const createTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const title = formData.get(\"title\");\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/todos\", {\n            title\n        }).then((res)=>{\n            if (res.status === 201) {\n                getAllPost();\n            }\n        });\n    };\n    const doUpdateTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const titleToUpdate = formData.get(\"title\");\n        if (!updateTodo.id) {\n            return;\n        }\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://localhost:8000/api/todos/\".concat(updateTodo.id), {\n            title: titleToUpdate\n        }).then((res)=>{\n            if (res.status === 200) {\n                getAllPost();\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: \"Create Todo\"\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/FormTodo.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-4\",\n                onSubmit: (e)=>{\n                    if (onUpdate) {\n                        doUpdateTodo(e);\n                        setOnUpadate(false);\n                        setUpdateTodo(null);\n                    } else {\n                        createTodo(e);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-md p-2 px-4 text-black\",\n                        type: \"text\",\n                        name: \"title\",\n                        placeholder: \"Title\",\n                        value: onUpdate ? updateTodo === null || updateTodo === void 0 ? void 0 : updateTodo.title : title,\n                        onChange: (e)=>{\n                            if (onUpdate) {\n                                setUpdateTodo({\n                                    ...updateTodo,\n                                    title: e.target.value\n                                });\n                            } else {\n                                setTitle(e.target.value);\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/FormTodo.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    onUpdate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-yellow-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/FormTodo.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/FormTodo.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/FormTodo.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/FormTodo.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(FormTodo, \"1GNs5BG/zBCkOIT6WAuxDpPLhMw=\");\n_c = FormTodo;\nvar _c;\n$RefreshReg$(_c, \"FormTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb3JtVG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFHbEIsU0FBU0UsU0FBUyxLQUFpRTtRQUFqRSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRSxHQUFqRTs7SUFDL0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1TLGFBQWEsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsV0FBVyxJQUFJQyxTQUFTSCxFQUFFSSxNQUFNO1FBQ3RDLE1BQU1QLFFBQVFLLFNBQVNHLEdBQUcsQ0FBQztRQUUzQmhCLDZDQUFLQSxDQUNGaUIsSUFBSSxDQUFDLG1DQUFtQztZQUN2Q1Q7UUFDRixHQUNDVSxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQSxJQUFJQyxNQUFNLEtBQUssS0FBSztnQkFDdEJqQjtZQUNGO1FBQ0Y7SUFDSjtJQUVBLE1BQU1rQixlQUFlLE9BQU9WO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsRUFBRUksTUFBTTtRQUN0QyxNQUFNTyxnQkFBZ0JULFNBQVNHLEdBQUcsQ0FBQztRQUVuQyxJQUFJLENBQUNWLFdBQVdpQixFQUFFLEVBQUU7WUFDbEI7UUFDRjtRQUVBdkIsNkNBQUtBLENBQ0Z3QixHQUFHLENBQUMsbUNBQWlELE9BQWRsQixXQUFXaUIsRUFBRSxHQUFJO1lBQ3ZEZixPQUFPYztRQUNULEdBQ0NKLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUlBLElBQUlDLE1BQU0sS0FBSyxLQUFLO2dCQUN0QmpCO1lBQ0Y7UUFDRjtJQUNKO0lBRUEscUJBQ0UsOERBQUNzQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW9COzs7Ozs7MEJBQ2xDLDhEQUFDRTtnQkFDQ0YsV0FBVTtnQkFDVkcsVUFBVSxDQUFDbEI7b0JBQ1QsSUFBSVAsVUFBVTt3QkFDWmlCLGFBQWFWO3dCQUNiTixhQUFhO3dCQUNiRSxjQUFjO29CQUNoQixPQUFPO3dCQUNMRyxXQUFXQztvQkFDYjtnQkFDRjs7a0NBRUEsOERBQUNtQjt3QkFDQ0osV0FBVTt3QkFDVkssTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBTzlCLFdBQVdFLHVCQUFBQSxpQ0FBQUEsV0FBWUUsS0FBSyxHQUFHQTt3QkFDdEMyQixVQUFVLENBQUN4Qjs0QkFDVCxJQUFJUCxVQUFVO2dDQUNaRyxjQUFjO29DQUNaLEdBQUdELFVBQVU7b0NBQ2JFLE9BQU9HLEVBQUVJLE1BQU0sQ0FBQ21CLEtBQUs7Z0NBQ3ZCOzRCQUNGLE9BQU87Z0NBQ0x6QixTQUFTRSxFQUFFSSxNQUFNLENBQUNtQixLQUFLOzRCQUN6Qjt3QkFDRjs7Ozs7O29CQUdEOUIseUJBQ0MsOERBQUNnQzt3QkFDQ1YsV0FBVTt3QkFDVkssTUFBSztrQ0FDTjs7Ozs7NkNBSUQsOERBQUNLO3dCQUNDVixXQUFVO3dCQUNWSyxNQUFLO2tDQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXpGd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9ybVRvZG8uanM/YzM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Ub2RvKHsgZ2V0QWxsUG9zdCwgb25VcGRhdGUsIHNldE9uVXBhZGF0ZSwgdXBkYXRlVG9kbywgc2V0VXBkYXRlVG9kbyB9KSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdG9kb3NcIiwge1xuICAgICAgICB0aXRsZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIGdldEFsbFBvc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjb25zdCBkb1VwZGF0ZVRvZG8gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgdGl0bGVUb1VwZGF0ZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuXG4gICAgaWYgKCF1cGRhdGVUb2RvLmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXhpb3NcbiAgICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdG9kb3MvJHt1cGRhdGVUb2RvLmlkfWAsIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlVG9VcGRhdGVcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBnZXRBbGxQb3N0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPkNyZWF0ZSBUb2RvPC9oMT5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIlxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgICAgICAgIGRvVXBkYXRlVG9kbyhlKVxuICAgICAgICAgICAgc2V0T25VcGFkYXRlKGZhbHNlKVxuICAgICAgICAgICAgc2V0VXBkYXRlVG9kbyhudWxsKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVUb2RvKGUpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIHB4LTQgdGV4dC1ibGFja1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgdmFsdWU9e29uVXBkYXRlID8gdXBkYXRlVG9kbz8udGl0bGUgOiB0aXRsZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgICAgICAgICBzZXRVcGRhdGVUb2RvKHtcbiAgICAgICAgICAgICAgICAuLi51cGRhdGVUb2RvLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICB7b25VcGRhdGUgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcC0yXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBwLTJcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJGb3JtVG9kbyIsImdldEFsbFBvc3QiLCJvblVwZGF0ZSIsInNldE9uVXBhZGF0ZSIsInVwZGF0ZVRvZG8iLCJzZXRVcGRhdGVUb2RvIiwidGl0bGUiLCJzZXRUaXRsZSIsImNyZWF0ZVRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJkb1VwZGF0ZVRvZG8iLCJ0aXRsZVRvVXBkYXRlIiwiaWQiLCJwdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/FormTodo.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_TodoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TodoCard */ \"(app-pages-browser)/./src/app/components/TodoCard.js\");\n/* harmony import */ var _components_FormTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FormTodo */ \"(app-pages-browser)/./src/app/components/FormTodo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [onUpadate, setOnUpadate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [updateTodo, setUpdateTodo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getAllPost = async ()=>{\n        const todos = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/todos\");\n        setTodos(todos);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getAllPost();\n    }, []);\n    if (!todos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Todos\"\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormTodo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                getAllPost: getAllPost,\n                onUpdate: onUpadate,\n                setOnUpadate: setOnUpadate,\n                updateTodo: updateTodo,\n                setUpdateTodo: setUpdateTodo\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            todos.data.todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    todo: todo,\n                    getAllPost: getAllPost,\n                    setOnUpadate: setOnUpadate,\n                    setUpdateTodo: setUpdateTodo\n                }, todo.id, false, {\n                    fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"h1UhhAh0q+AUIGBUBj+P07WnB0U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEI7QUFDbUI7QUFDQTtBQUNEO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNUSxhQUFhO1FBQ2pCLE1BQU1OLFFBQVEsTUFBTU4sNkNBQUtBLENBQUNhLEdBQUcsQ0FBQztRQUM5Qk4sU0FBU0Q7SUFDWDtJQUVBSCxnREFBU0EsQ0FBQztRQUNSUztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ04sT0FBTztRQUNWLHFCQUNFLDhEQUFDUTtzQkFBSTs7Ozs7O0lBRVQ7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7OzBCQUNuQyw4REFBQ2IsNERBQVFBO2dCQUFDVSxZQUFZQTtnQkFBWUssVUFBVVQ7Z0JBQVdDLGNBQWNBO2dCQUFjQyxZQUFZQTtnQkFBWUMsZUFBZUE7Ozs7OztZQUN6SEwsTUFBTVksSUFBSSxDQUFDWixLQUFLLENBQUNhLEdBQUcsQ0FBQyxDQUFDQyxxQkFDckIsOERBQUNuQiw0REFBUUE7b0JBQWVtQixNQUFNQTtvQkFBTVIsWUFBWUE7b0JBQVlILGNBQWNBO29CQUFjRSxlQUFlQTttQkFBeEZTLEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7O0FBSTlCO0dBN0J3QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVG9kb0NhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvQ2FyZFwiO1xuaW1wb3J0IEZvcm1Ub2RvIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVRvZG9cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29uVXBhZGF0ZSwgc2V0T25VcGFkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VwZGF0ZVRvZG8sIHNldFVwZGF0ZVRvZG9dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZ2V0QWxsUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS90b2RvcycpXG4gICAgc2V0VG9kb3ModG9kb3MpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbFBvc3QoKVxuICB9LCBbXSlcblxuICBpZiAoIXRvZG9zKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+VG9kb3M8L2gxPlxuICAgICAgPEZvcm1Ub2RvIGdldEFsbFBvc3Q9e2dldEFsbFBvc3R9IG9uVXBkYXRlPXtvblVwYWRhdGV9IHNldE9uVXBhZGF0ZT17c2V0T25VcGFkYXRlfSB1cGRhdGVUb2RvPXt1cGRhdGVUb2RvfSBzZXRVcGRhdGVUb2RvPXtzZXRVcGRhdGVUb2RvfS8+XG4gICAgICB7dG9kb3MuZGF0YS50b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgPFRvZG9DYXJkIGtleT17dG9kby5pZH0gdG9kbz17dG9kb30gZ2V0QWxsUG9zdD17Z2V0QWxsUG9zdH0gc2V0T25VcGFkYXRlPXtzZXRPblVwYWRhdGV9IHNldFVwZGF0ZVRvZG89e3NldFVwZGF0ZVRvZG99IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIlRvZG9DYXJkIiwiRm9ybVRvZG8iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ0b2RvcyIsInNldFRvZG9zIiwib25VcGFkYXRlIiwic2V0T25VcGFkYXRlIiwidXBkYXRlVG9kbyIsInNldFVwZGF0ZVRvZG8iLCJnZXRBbGxQb3N0IiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvblVwZGF0ZSIsImRhdGEiLCJtYXAiLCJ0b2RvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});