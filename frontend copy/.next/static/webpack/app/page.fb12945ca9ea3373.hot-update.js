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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_TodoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TodoCard */ \"(app-pages-browser)/./src/app/components/TodoCard.js\");\n/* harmony import */ var _components_CreateTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CreateTodo */ \"(app-pages-browser)/./src/app/components/CreateTodo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [onUpadate, setOnUpadate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [updateID, setUpdateID] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);\n    const getAllPost = async ()=>{\n        const todos = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/todos\");\n        setTodos(todos);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getAllPost();\n    }, []);\n    if (!todos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Todos\"\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateTodo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                getAllPost: getAllPost\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            todos.data.todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    todo: todo,\n                    getAllPost: getAllPost,\n                    setOnUpadate: setOnUpadate,\n                    setUpdateID: setUpdateID\n                }, todo.id, false, {\n                    fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"tPmxDBoPMXgkybT8zFaqa0d0dCg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEI7QUFDbUI7QUFDSTtBQUNMO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRTFDLE1BQU1RLGFBQWE7UUFDakIsTUFBTU4sUUFBUSxNQUFNTiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDO1FBQzlCTixTQUFTRDtJQUNYO0lBRUFILGdEQUFTQSxDQUFDO1FBQ1JTO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDTixPQUFPO1FBQ1YscUJBQ0UsOERBQUNRO3NCQUFJOzs7Ozs7SUFFVDtJQUVBLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDYiw4REFBVUE7Z0JBQUNVLFlBQVlBOzs7Ozs7WUFDdkJOLE1BQU1XLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxHQUFHLENBQUMsQ0FBQ0MscUJBQ3JCLDhEQUFDbEIsNERBQVFBO29CQUFla0IsTUFBTUE7b0JBQU1QLFlBQVlBO29CQUFZSCxjQUFjQTtvQkFBY0UsYUFBYUE7bUJBQXRGUSxLQUFLQyxFQUFFOzs7Ozs7Ozs7OztBQUk5QjtHQTdCd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVG9kb0NhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvQ2FyZFwiO1xuaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVUb2RvXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvblVwYWRhdGUsIHNldE9uVXBhZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1cGRhdGVJRCwgc2V0VXBkYXRlSURdID0gdXNlU3RhdGUoLTEpO1xuXG4gIGNvbnN0IGdldEFsbFBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdG9kb3MnKVxuICAgIHNldFRvZG9zKHRvZG9zKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxQb3N0KClcbiAgfSwgW10pXG5cbiAgaWYgKCF0b2Rvcykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlRvZG9zPC9oMT5cbiAgICAgIDxDcmVhdGVUb2RvIGdldEFsbFBvc3Q9e2dldEFsbFBvc3R9IC8+XG4gICAgICB7dG9kb3MuZGF0YS50b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgPFRvZG9DYXJkIGtleT17dG9kby5pZH0gdG9kbz17dG9kb30gZ2V0QWxsUG9zdD17Z2V0QWxsUG9zdH0gc2V0T25VcGFkYXRlPXtzZXRPblVwYWRhdGV9IHNldFVwZGF0ZUlEPXtzZXRVcGRhdGVJRH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiVG9kb0NhcmQiLCJDcmVhdGVUb2RvIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwidG9kb3MiLCJzZXRUb2RvcyIsIm9uVXBhZGF0ZSIsInNldE9uVXBhZGF0ZSIsInVwZGF0ZUlEIiwic2V0VXBkYXRlSUQiLCJnZXRBbGxQb3N0IiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJkYXRhIiwibWFwIiwidG9kbyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});