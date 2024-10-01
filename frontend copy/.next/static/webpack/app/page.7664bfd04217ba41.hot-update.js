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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateTodo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction CreateTodo(param) {\n    let { getAllPost, onUpdate, setOnUpadate, updateTodo, setUpdateTodo } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const createTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const title = formData.get(\"title\");\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/todos\", {\n            title\n        }).then((res)=>{\n            if (res.status === 201) {\n                getAllPost();\n            }\n        });\n    };\n    const doUpdateTodo = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        const titleToUpdate = formData.get(\"title\");\n        if (!updateTodo.id) {\n            return;\n        }\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://localhost:8000/api/todos/\".concat(updateTodo.id), {\n            title: titleToUpdate\n        }).then((res)=>{\n            if (res.status === 200) {\n                getAllPost();\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: \"Create Todo\"\n            }, void 0, false, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-4\",\n                onSubmit: (e)=>{\n                    if (onUpdate) {\n                        doUpdateTodo(e);\n                        setOnUpadate(false);\n                        setUpdateTodo(null);\n                    } else {\n                        createTodo(e);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-md p-2 px-4 text-black\",\n                        type: \"text\",\n                        name: \"title\",\n                        placeholder: \"Title\",\n                        value: onUpdate ? updateTodo === null || updateTodo === void 0 ? void 0 : updateTodo.title : title,\n                        onChange: (e)=>{\n                            if (onUpdate) {\n                                setUpdateTodo({\n                                    ...updateTodo,\n                                    title: e.target.value\n                                });\n                            } else {\n                                setTitle(e.target.value);\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    onUpdate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-yellow-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white rounded-md p-2\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hasban/Code/PraPKLBara/todolist_simple/frontend/src/app/components/CreateTodo.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateTodo, \"1GNs5BG/zBCkOIT6WAuxDpPLhMw=\");\n_c = CreateTodo;\nvar _c;\n$RefreshReg$(_c, \"CreateTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVUb2RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUVsQixTQUFTRSxXQUFXLEtBQWlFO1FBQWpFLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQWpFOztJQUNqQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVMsYUFBYSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxXQUFXLElBQUlDLFNBQVNILEVBQUVJLE1BQU07UUFDdEMsTUFBTVAsUUFBUUssU0FBU0csR0FBRyxDQUFDO1FBRTNCaEIsNkNBQUtBLENBQ0ZpQixJQUFJLENBQUMsbUNBQW1DO1lBQ3ZDVDtRQUNGLEdBQ0NVLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUlBLElBQUlDLE1BQU0sS0FBSyxLQUFLO2dCQUN0QmpCO1lBQ0Y7UUFDRjtJQUNKO0lBRUEsTUFBTWtCLGVBQWUsT0FBT1Y7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsV0FBVyxJQUFJQyxTQUFTSCxFQUFFSSxNQUFNO1FBQ3RDLE1BQU1PLGdCQUFnQlQsU0FBU0csR0FBRyxDQUFDO1FBRW5DLElBQUksQ0FBQ1YsV0FBV2lCLEVBQUUsRUFBRTtZQUNsQjtRQUNGO1FBRUF2Qiw2Q0FBS0EsQ0FDRndCLEdBQUcsQ0FBQyxtQ0FBaUQsT0FBZGxCLFdBQVdpQixFQUFFLEdBQUk7WUFDdkRmLE9BQU9jO1FBQ1QsR0FDQ0osSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSUEsSUFBSUMsTUFBTSxLQUFLLEtBQUs7Z0JBQ3RCakI7WUFDRjtRQUNGO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBb0I7Ozs7OzswQkFDbEMsOERBQUNFO2dCQUNDRixXQUFVO2dCQUNWRyxVQUFVLENBQUNsQjtvQkFDVCxJQUFJUCxVQUFVO3dCQUNaaUIsYUFBYVY7d0JBQ2JOLGFBQWE7d0JBQ2JFLGNBQWM7b0JBQ2hCLE9BQU87d0JBQ0xHLFdBQVdDO29CQUNiO2dCQUNGOztrQ0FFQSw4REFBQ21CO3dCQUNDSixXQUFVO3dCQUNWSyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPOUIsV0FBV0UsdUJBQUFBLGlDQUFBQSxXQUFZRSxLQUFLLEdBQUdBO3dCQUN0QzJCLFVBQVUsQ0FBQ3hCOzRCQUNULElBQUlQLFVBQVU7Z0NBQ1pHLGNBQWM7b0NBQ1osR0FBR0QsVUFBVTtvQ0FDYkUsT0FBT0csRUFBRUksTUFBTSxDQUFDbUIsS0FBSztnQ0FDdkI7NEJBQ0YsT0FBTztnQ0FDTHpCLFNBQVNFLEVBQUVJLE1BQU0sQ0FBQ21CLEtBQUs7NEJBQ3pCO3dCQUNGOzs7Ozs7b0JBR0Q5Qix5QkFDQyw4REFBQ2dDO3dCQUNDVixXQUFVO3dCQUNWSyxNQUFLO2tDQUNOOzs7Ozs2Q0FJRCw4REFBQ0s7d0JBQ0NWLFdBQVU7d0JBQ1ZLLE1BQUs7a0NBQ047Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBekZ3QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVUb2RvLmpzPzUxOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVG9kbyh7IGdldEFsbFBvc3QsIG9uVXBkYXRlLCBzZXRPblVwYWRhdGUsIHVwZGF0ZVRvZG8sIHNldFVwZGF0ZVRvZG8gfSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBjcmVhdGVUb2RvID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3RvZG9zXCIsIHtcbiAgICAgICAgdGl0bGVcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBnZXRBbGxQb3N0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZG9VcGRhdGVUb2RvID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGNvbnN0IHRpdGxlVG9VcGRhdGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcblxuICAgIGlmICghdXBkYXRlVG9kby5pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF4aW9zXG4gICAgICAucHV0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3RvZG9zLyR7dXBkYXRlVG9kby5pZH1gLCB7XG4gICAgICAgIHRpdGxlOiB0aXRsZVRvVXBkYXRlXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgZ2V0QWxsUG9zdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5DcmVhdGUgVG9kbzwvaDE+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCJcbiAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZVRvZG8oZSlcbiAgICAgICAgICAgIHNldE9uVXBhZGF0ZShmYWxzZSlcbiAgICAgICAgICAgIHNldFVwZGF0ZVRvZG8obnVsbClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlVG9kbyhlKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBweC00IHRleHQtYmxhY2tcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgIHZhbHVlPXtvblVwZGF0ZSA/IHVwZGF0ZVRvZG8/LnRpdGxlIDogdGl0bGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgICAgICAgICAgc2V0VXBkYXRlVG9kbyh7XG4gICAgICAgICAgICAgICAgLi4udXBkYXRlVG9kbyxcbiAgICAgICAgICAgICAgICB0aXRsZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAge29uVXBkYXRlID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHAtMlwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcC0yXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiQ3JlYXRlVG9kbyIsImdldEFsbFBvc3QiLCJvblVwZGF0ZSIsInNldE9uVXBhZGF0ZSIsInVwZGF0ZVRvZG8iLCJzZXRVcGRhdGVUb2RvIiwidGl0bGUiLCJzZXRUaXRsZSIsImNyZWF0ZVRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJkb1VwZGF0ZVRvZG8iLCJ0aXRsZVRvVXBkYXRlIiwiaWQiLCJwdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateTodo.js\n"));

/***/ })

});