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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateTodo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction CreateTodo(param) {\n    let { getAllPost, onUpdate, setOnUpadate, updateTodo } = param;\n    _s();\n    var _updateTodo_title;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_updateTodo_title = updateTodo.title) !== null && _updateTodo_title !== void 0 ? _updateTodo_title : \"\");\n    const createTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const title = formData.get(\"title\");\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/todos\", {\n            title\n        }).then((res)=>{\n            if (res.status === 201) {\n                getAllPost();\n            }\n        });\n    };\n    const doUpdateTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const title = formData.get(\"title\");\n        if (!id) {\n            return;\n        }\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://localhost:8000/api/todos/\".concat(id), {\n            title\n        }).then((res)=>{\n            if (res.status === 200) {\n                getAllPost();\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: \"Create Todo\"\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-4\",\n                onSubmit: (e)=>{\n                    if (onUpdate) {\n                        doUpdateTodo(e);\n                        setOnUpadate(false);\n                    } else {\n                        createTodo(e);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-md p-2 px-4 text-black\",\n                        type: \"text\",\n                        name: \"title\",\n                        placeholder: \"Title\",\n                        value: onUpdate ? title : \"\",\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    onUpdate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-yellow-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateTodo, \"2lt6w847WhDP2DZnOoxBdIX+vX8=\");\n_c = CreateTodo;\nvar _c;\n$RefreshReg$(_c, \"CreateTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVUb2RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUVsQixTQUFTRSxXQUFXLEtBQWtEO1FBQWxELEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRSxHQUFsRDs7UUFDRUE7SUFBbkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDSyxDQUFBQSxvQkFBQUEsV0FBV0MsS0FBSyxjQUFoQkQsK0JBQUFBLG9CQUFvQjtJQUN2RCxNQUFNRyxhQUFhLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsRUFBRUksTUFBTTtRQUN0QyxNQUFNUCxRQUFRSyxTQUFTRyxHQUFHLENBQUM7UUFFM0JmLDZDQUFLQSxDQUNGZ0IsSUFBSSxDQUFDLG1DQUFtQztZQUN2Q1Q7UUFDRixHQUNDVSxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQSxJQUFJQyxNQUFNLEtBQUssS0FBSztnQkFDdEJoQjtZQUNGO1FBQ0Y7SUFDSjtJQUVBLE1BQU1pQixlQUFlLE9BQU9WO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsRUFBRUksTUFBTTtRQUN0QyxNQUFNUCxRQUFRSyxTQUFTRyxHQUFHLENBQUM7UUFFM0IsSUFBSSxDQUFDTSxJQUFJO1lBQ1A7UUFDRjtRQUVBckIsNkNBQUtBLENBQ0ZzQixHQUFHLENBQUMsbUNBQXNDLE9BQUhELEtBQU07WUFDNUNkO1FBQ0YsR0FDQ1UsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSUEsSUFBSUMsTUFBTSxLQUFLLEtBQUs7Z0JBQ3RCaEI7WUFDRjtRQUNGO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBb0I7Ozs7OzswQkFDbEMsOERBQUNFO2dCQUNDRixXQUFVO2dCQUNWRyxVQUFVLENBQUNqQjtvQkFDVCxJQUFJTixVQUFVO3dCQUNaZ0IsYUFBYVY7d0JBQ2JMLGFBQWE7b0JBQ2YsT0FBTzt3QkFDTEksV0FBV0M7b0JBQ2I7Z0JBQ0Y7O2tDQUVBLDhEQUFDa0I7d0JBQ0NKLFdBQVU7d0JBQ1ZLLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU81QixXQUFXRyxRQUFRO3dCQUMxQjBCLFVBQVUsQ0FBQ3ZCLElBQU1GLFNBQVNFLEVBQUVJLE1BQU0sQ0FBQ2tCLEtBQUs7Ozs7OztvQkFHekM1Qix5QkFDQyw4REFBQzhCO3dCQUNDVixXQUFVO3dCQUNWSyxNQUFLO2tDQUNOOzs7Ozs2Q0FJRCw4REFBQ0s7d0JBQ0NWLFdBQVU7d0JBQ1ZLLE1BQUs7a0NBQ047Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBL0V3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVUb2RvLmpzPzUxOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVG9kbyh7IGdldEFsbFBvc3QsIG9uVXBkYXRlLCBzZXRPblVwYWRhdGUsIHVwZGF0ZVRvZG8gfSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHVwZGF0ZVRvZG8udGl0bGUgPz8gXCJcIik7XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdG9kb3NcIiwge1xuICAgICAgICB0aXRsZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIGdldEFsbFBvc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjb25zdCBkb1VwZGF0ZVRvZG8gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcblxuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBheGlvc1xuICAgICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS90b2Rvcy8ke2lkfWAsIHtcbiAgICAgICAgdGl0bGVcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBnZXRBbGxQb3N0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPkNyZWF0ZSBUb2RvPC9oMT5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIlxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgICAgICAgIGRvVXBkYXRlVG9kbyhlKVxuICAgICAgICAgICAgc2V0T25VcGFkYXRlKGZhbHNlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVUb2RvKGUpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIHB4LTQgdGV4dC1ibGFja1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgdmFsdWU9e29uVXBkYXRlID8gdGl0bGUgOiBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtvblVwZGF0ZSA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBwLTJcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHAtMlwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsIkNyZWF0ZVRvZG8iLCJnZXRBbGxQb3N0Iiwib25VcGRhdGUiLCJzZXRPblVwYWRhdGUiLCJ1cGRhdGVUb2RvIiwidGl0bGUiLCJzZXRUaXRsZSIsImNyZWF0ZVRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJkb1VwZGF0ZVRvZG8iLCJpZCIsInB1dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateTodo.js\n"));

/***/ })

});