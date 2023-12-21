/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/themeContext.js":
/*!*********************************!*\
  !*** ./context/themeContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\"use client\";\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ThemeProvider = ({ children  })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dark\");\n    // Toggle Theme\n    const setThemeFun = ()=>{\n        if (theme === \"dark\") {\n            setTheme(\"light\");\n            localStorage.setItem(\"myPortfolioProfileTheme\", \"light\");\n        } else {\n            setTheme(\"dark\");\n            localStorage.setItem(\"myPortfolioProfileTheme\", \"dark\");\n        }\n    };\n    // Get Theme Value From LocalStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTheme = localStorage.getItem(\"myPortfolioProfileTheme\");\n        if (!getTheme) {\n            return;\n        }\n        setTheme(getTheme);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            setThemeFun\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: theme === \"dark\" ? \"dark\" : \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:text-white dark:bg-black\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/ec2-user/environment/Portfolio-/context/themeContext.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/ec2-user/environment/Portfolio-/context/themeContext.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ec2-user/environment/Portfolio-/context/themeContext.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3RoZW1lQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDa0U7QUFFM0QsTUFBTUksNkJBQWVGLG9EQUFhQSxHQUFHO0FBRTVDLE1BQU1HLGdCQUFnQixDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ3BDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuQyxlQUFlO0lBQ2YsTUFBTVEsY0FBYyxJQUFNO1FBQ3RCLElBQUlGLFVBQVUsUUFBUTtZQUNsQkMsU0FBUztZQUNURSxhQUFhQyxPQUFPLENBQUMsMkJBQTJCO1FBQ3BELE9BQU87WUFDSEgsU0FBUztZQUNURSxhQUFhQyxPQUFPLENBQUMsMkJBQTJCO1FBQ3BELENBQUM7SUFDTDtJQUVBLG9DQUFvQztJQUNwQ1IsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1TLFdBQVdGLGFBQWFHLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUNELFVBQVU7WUFDWDtRQUNKLENBQUM7UUFDREosU0FBU0k7SUFDYixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1IsYUFBYVUsUUFBUTtRQUFDQyxPQUFPO1lBQUVSO1lBQU9FO1FBQVk7a0JBQy9DLDRFQUFDTztZQUFJQyxXQUFXVixVQUFVLFNBQVMsU0FBUyxFQUFFO3NCQUMxQyw0RUFBQ1M7Z0JBQUlDLFdBQVU7MEJBQWlDWDs7Ozs7Ozs7Ozs7Ozs7OztBQUloRTtBQUVBLGlFQUFlRCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3QtYXBwLy4vY29udGV4dC90aGVtZUNvbnRleHQuanM/NzY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImRhcmtcIik7XG5cbiAgICAvLyBUb2dnbGUgVGhlbWVcbiAgICBjb25zdCBzZXRUaGVtZUZ1biA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlQb3J0Zm9saW9Qcm9maWxlVGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlQb3J0Zm9saW9Qcm9maWxlVGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEdldCBUaGVtZSBWYWx1ZSBGcm9tIExvY2FsU3RvcmFnZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVBvcnRmb2xpb1Byb2ZpbGVUaGVtZVwiKTtcbiAgICAgICAgaWYgKCFnZXRUaGVtZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2V0VGhlbWUoZ2V0VGhlbWUpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHNldFRoZW1lRnVuIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImRhcmtcIiA/IFwiZGFya1wiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rhcms6dGV4dC13aGl0ZSBkYXJrOmJnLWJsYWNrJz57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lUHJvdmlkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiVGhlbWVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwidGhlbWUiLCJzZXRUaGVtZSIsInNldFRoZW1lRnVuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRoZW1lIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/themeContext.js\n");

/***/ }),

/***/ "./contextApi/PortfolioContext.jsx":
/*!*****************************************!*\
  !*** ./contextApi/PortfolioContext.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PortfolioContext\": () => (/* binding */ PortfolioContext),\n/* harmony export */   \"PortfolioProvider\": () => (/* binding */ PortfolioProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { useState , createContext  } = __webpack_require__(/*! react */ \"react\");\nconst PortfolioContext = createContext();\nconst PortfolioProvider = ({ children  })=>{\n    const [dark, setDark] = useState(true);\n    const [showModal, setShowModal] = useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PortfolioContext.Provider, {\n        value: {\n            dark,\n            setDark,\n            showModal,\n            setShowModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ec2-user/environment/Portfolio-/contextApi/PortfolioContext.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0QXBpL1BvcnRmb2xpb0NvbnRleHQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFQSxTQUFRLEVBQUVDLGNBQWEsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxvQkFBTztBQUU1QyxNQUFNQyxtQkFBbUJGLGdCQUFnQjtBQUV6QyxNQUFNRyxvQkFBb0IsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUNqRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsU0FBUyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCxTQUFTLEtBQUs7SUFFaEQscUJBQ0UsOERBQUNHLGlCQUFpQk8sUUFBUTtRQUN4QkMsT0FBTztZQUFFTDtZQUFNQztZQUFTQztZQUFXQztRQUFhO2tCQUUvQ0o7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hcHAvLi9jb250ZXh0QXBpL1BvcnRmb2xpb0NvbnRleHQuanN4PzAyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5leHBvcnQgY29uc3QgUG9ydGZvbGlvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IFBvcnRmb2xpb1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxQb3J0Zm9saW9Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBkYXJrLCBzZXREYXJrLCBzaG93TW9kYWwsIHNldFNob3dNb2RhbCB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1BvcnRmb2xpb0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInJlcXVpcmUiLCJQb3J0Zm9saW9Db250ZXh0IiwiUG9ydGZvbGlvUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhcmsiLCJzZXREYXJrIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contextApi/PortfolioContext.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/animation.css */ \"./styles/animation.css\");\n/* harmony import */ var _styles_animation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_animation_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_cssGrid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/cssGrid.css */ \"./styles/cssGrid.css\");\n/* harmony import */ var _styles_cssGrid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_cssGrid_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga4 */ \"react-ga4\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga4__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contextApi_PortfolioContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contextApi/PortfolioContext */ \"./contextApi/PortfolioContext.jsx\");\n/* harmony import */ var _context_themeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/themeContext */ \"./context/themeContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nreact_ga4__WEBPACK_IMPORTED_MODULE_5___default().initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contextApi_PortfolioContext__WEBPACK_IMPORTED_MODULE_6__.PortfolioProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_themeContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/ec2-user/environment/Portfolio-/pages/_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__.Analytics, {}, void 0, false, {\n                    fileName: \"/home/ec2-user/environment/Portfolio-/pages/_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ec2-user/environment/Portfolio-/pages/_app.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ec2-user/environment/Portfolio-/pages/_app.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ0Y7QUFDSTtBQUNrQjtBQUNuQjtBQUVpQztBQUNmO0FBRWxEQywyREFBa0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQywwQkFBMEI7QUFHMUMsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBRXBELHFCQUNFLDhEQUFDUiwyRUFBaUJBO2tCQUNoQiw0RUFBQ0MsNkRBQWFBOzs4QkFDWiw4REFBQ007b0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzhCQUN4Qiw4REFBQ1YsOERBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiQC9zdHlsZXMvYW5pbWF0aW9uLmNzc1wiXG5pbXBvcnQgXCJAL3N0eWxlcy9jc3NHcmlkLmNzc1wiXG5pbXBvcnQgXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSBcIkB2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0XCJcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYTRcIjtcblxuaW1wb3J0IHsgUG9ydGZvbGlvUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0QXBpL1BvcnRmb2xpb0NvbnRleHRcIlxuaW1wb3J0IFRoZW1lUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC90aGVtZUNvbnRleHRcIlxuXG5SZWFjdEdBLmluaXRpYWxpemUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUVBU1VSRU1FTlRfSUQpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICByZXR1cm4gKFxuICAgIDxQb3J0Zm9saW9Qcm92aWRlcj5cbiAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxBbmFseXRpY3MgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1BvcnRmb2xpb1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQW5hbHl0aWNzIiwiUmVhY3RHQSIsIlBvcnRmb2xpb1Byb3ZpZGVyIiwiVGhlbWVQcm92aWRlciIsImluaXRpYWxpemUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUVBU1VSRU1FTlRfSUQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/animation.css":
/*!******************************!*\
  !*** ./styles/animation.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/cssGrid.css":
/*!****************************!*\
  !*** ./styles/cssGrid.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-ga4":
/*!****************************!*\
  !*** external "react-ga4" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga4");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();