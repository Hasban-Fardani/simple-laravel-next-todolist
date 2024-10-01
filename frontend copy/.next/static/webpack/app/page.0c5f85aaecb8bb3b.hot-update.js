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

/***/ "(app-pages-browser)/./src/app/components/CreateTodo.js":
/*!******************************************!*\
  !*** ./src/app/components/CreateTodo.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateTodo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nfunction CreateTodo(param) {\n    let { getAllPost, id, mode = \"create\" } = param;\n    const createTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const title = formData.get(\"title\");\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/api/todos\", {\n            title\n        }).then((res)=>{\n            if (res.status === 201) {\n                getAllPost();\n            }\n        });\n    };\n    const updateTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const title = formData.get(\"title\");\n        if (!id) {\n            return;\n        }\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"http://localhost:8000/api/todos/\".concat(id), {\n            title\n        }).then((res)=>{\n            if (res.status === 200) {\n                getAllPost();\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: \"Create Todo\"\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-4\",\n                onSubmit: (e)=>{\n                    if (mode === \"update\") {\n                        updateTodo(e);\n                    } else {\n                        createTodo(e);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-md p-2 px-4 text-black\",\n                        type: \"text\",\n                        name: \"title\",\n                        placeholder: \"Title\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    mode === \"update\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_c = CreateTodo;\nvar _c;\n$RefreshReg$(_c, \"CreateTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVUb2RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFFWCxTQUFTQyxXQUFXLEtBQW1DO1FBQW5DLEVBQUVDLFVBQVUsRUFBRUMsRUFBRSxFQUFFQyxPQUFPLFFBQVEsRUFBRSxHQUFuQztJQUNqQyxNQUFNQyxhQUFhLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsRUFBRUksTUFBTTtRQUN0QyxNQUFNQyxRQUFRSCxTQUFTSSxHQUFHLENBQUM7UUFFM0JaLDZDQUFLQSxDQUNGYSxJQUFJLENBQUMsbUNBQW1DO1lBQ3ZDRjtRQUNGLEdBQ0NHLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUlBLElBQUlDLE1BQU0sS0FBSyxLQUFLO2dCQUN0QmQ7WUFDRjtRQUNGO0lBQ0o7SUFFQSxNQUFNZSxhQUFhLE9BQU9YO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsRUFBRUksTUFBTTtRQUN0QyxNQUFNQyxRQUFRSCxTQUFTSSxHQUFHLENBQUM7UUFFM0IsSUFBSSxDQUFDVCxJQUFJO1lBQ1A7UUFDRjtRQUVBSCw2Q0FBS0EsQ0FDRmtCLEdBQUcsQ0FBQyxtQ0FBc0MsT0FBSGYsS0FBTTtZQUM1Q1E7UUFDRixHQUNDRyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQSxJQUFJQyxNQUFNLEtBQUssS0FBSztnQkFDdEJkO1lBQ0Y7UUFDRjtJQUNKO0lBRUEscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW9COzs7Ozs7MEJBQ2xDLDhEQUFDRTtnQkFDQ0YsV0FBVTtnQkFDVkcsVUFBVSxDQUFDakI7b0JBQ1QsSUFBSUYsU0FBUyxVQUFVO3dCQUNyQmEsV0FBV1g7b0JBQ2IsT0FBTzt3QkFDTEQsV0FBV0M7b0JBQ2I7Z0JBQ0Y7O2tDQUVBLDhEQUFDa0I7d0JBQ0NKLFdBQVU7d0JBQ1ZLLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7OztvQkFHYnZCLFNBQVMseUJBQ1IsOERBQUN3Qjt3QkFDQ1IsV0FBVTt3QkFDVkssTUFBSztrQ0FDTjs7Ozs7NkNBSUQsOERBQUNHO3dCQUNDUixXQUFVO3dCQUNWSyxNQUFLO2tDQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtLQTNFd0J4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ3JlYXRlVG9kby5qcz81MTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVG9kbyh7IGdldEFsbFBvc3QsIGlkLCBtb2RlID0gJ2NyZWF0ZScgfSkge1xuICBjb25zdCBjcmVhdGVUb2RvID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3RvZG9zXCIsIHtcbiAgICAgICAgdGl0bGVcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBnZXRBbGxQb3N0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlVG9kbyA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuXG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF4aW9zXG4gICAgICAucHV0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3RvZG9zLyR7aWR9YCwge1xuICAgICAgICB0aXRsZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGdldEFsbFBvc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+Q3JlYXRlIFRvZG88L2gxPlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgIGlmIChtb2RlID09PSAndXBkYXRlJykge1xuICAgICAgICAgICAgdXBkYXRlVG9kbyhlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVUb2RvKGUpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIHB4LTQgdGV4dC1ibGFja1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAge21vZGUgPT09ICd1cGRhdGUnID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBwLTJcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHAtMlwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJDcmVhdGVUb2RvIiwiZ2V0QWxsUG9zdCIsImlkIiwibW9kZSIsImNyZWF0ZVRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwidGl0bGUiLCJnZXQiLCJwb3N0IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInVwZGF0ZVRvZG8iLCJwdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateTodo.js\n"));

/***/ })

});