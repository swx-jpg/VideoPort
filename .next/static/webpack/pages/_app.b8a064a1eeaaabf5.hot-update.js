"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/mainPage.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/mainPage.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n* ==========================================\\n* CUSTOM UTIL CLASSES\\n* ==========================================\\n*\\n*/\\n\\n.vertical-nav {\\n    min-width: 20rem;\\n    width: 20rem;\\n    height: 100vh;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    transition: all 0.4s;\\n}\\n\\n.page-content {\\n    width: calc(100% - 20rem);\\n    margin-left: 20rem;\\n    transition: all 0.4s;\\n}\\n\\n/* for toggle behavior */\\n\\n#sidebar.active {\\n    margin-left: -17rem;\\n}\\n\\n#content.active {\\n    width: 100%;\\n    margin: 0;\\n}\\n\\n.bg_musicVideo {\\n\\n    background-size: cover;\\n}\\n\\n@media (max-width: 768px) {\\n    #sidebar {\\n        margin-left: -17rem;\\n    }\\n\\n    #sidebar.active {\\n        margin-left: 0;\\n    }\\n\\n    #content {\\n        width: 100%;\\n        margin: 0;\\n    }\\n\\n    #content.active {\\n        margin-left: 17rem;\\n        width: calc(100% - 17rem);\\n    }\\n}\\n\\n.gallery_adjust {\\n    width: 80%;\\n    margin: auto;\\n    margin-top: 10px;\\n    border: 1px solid rgba(0, 0, 0, .1);\\n\\n}\\n\\n.gallery_adjust p {\\n    text-align: center;\\n    padding: 4px;\\n    font-family: monospace;\\n    background: #222;\\n    color: #efefef;\\n}\\n.gallery_img{\\n    transform: rotate(0);\\n    transition: all ease 0.4s;\\n}\\n.gallery_img:hover{\\n    transition: all ease 0.4s;\\n}\\n\\n.color_title{\\n    color: rgb(207, 167, 140);\\n}\\nh2 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 600;\\n    font-size: 25px;\\n}\\nh4 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 400;\\n    font-size: 20px;\\n}\\np{\\n    font-family: var(--secondary-font-family);\\n    font-size: 20px;\\n}\\n.vertical-nav h4{ \\n    font-size: 4.07em;\\n    font-family: Poppins;\\n    line-height: 1.05em;\\n    font-weight: 400;\\n}\\n.nav-item{\\n    font-size: 2em;\\n}\\n\\n.nav-item:hover{\\n    cursor: pointer;\\n    opacity: 0.5 !Important;\\n  }\\n  .nav-item{\\n    opacity: 1;\\n  }\\n  .vertical-nav h4:hover{\\n    cursor: pointer;\\n  }\\n  .bg_musicVideo:hover img{\\n    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n  transition: all 0.4s;\\n  cursor: pointer;\\n  }\\n  .bg_musicVideo img{\\n    transition: all 0.4s;\\n  }\\n  .c_pointer{\\n    cursor: pointer;\\n  }\\n\\n  .contentMinH{\\n    min-height: 90vh;\\n  }\\n  .strong_g{\\n    text-weight: bolder\\n  }\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/mainPage.css\"],\"names\":[],\"mappings\":\"AAAA;;;;;CAKC;;AAED;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA,wBAAwB;;AAExB;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,SAAS;AACb;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,WAAW;QACX,SAAS;IACb;;IAEA;QACI,kBAAkB;QAClB,yBAAyB;IAC7B;AACJ;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,mCAAmC;;AAEvC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yCAAyC;IACzC,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,yCAAyC;IACzC,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,yCAAyC;IACzC,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,uBAAuB;EACzB;EACA;IACE,UAAU;EACZ;EACA;IACE,eAAe;EACjB;EACA;IACE,sFAAsF;EACxF,uGAAuG;EACvG,oBAAoB;EACpB,eAAe;EACf;EACA;IACE,oBAAoB;EACtB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;EACA;IACE;EACF\",\"sourcesContent\":[\"/*\\n* ==========================================\\n* CUSTOM UTIL CLASSES\\n* ==========================================\\n*\\n*/\\n\\n.vertical-nav {\\n    min-width: 20rem;\\n    width: 20rem;\\n    height: 100vh;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    transition: all 0.4s;\\n}\\n\\n.page-content {\\n    width: calc(100% - 20rem);\\n    margin-left: 20rem;\\n    transition: all 0.4s;\\n}\\n\\n/* for toggle behavior */\\n\\n#sidebar.active {\\n    margin-left: -17rem;\\n}\\n\\n#content.active {\\n    width: 100%;\\n    margin: 0;\\n}\\n\\n.bg_musicVideo {\\n\\n    background-size: cover;\\n}\\n\\n@media (max-width: 768px) {\\n    #sidebar {\\n        margin-left: -17rem;\\n    }\\n\\n    #sidebar.active {\\n        margin-left: 0;\\n    }\\n\\n    #content {\\n        width: 100%;\\n        margin: 0;\\n    }\\n\\n    #content.active {\\n        margin-left: 17rem;\\n        width: calc(100% - 17rem);\\n    }\\n}\\n\\n.gallery_adjust {\\n    width: 80%;\\n    margin: auto;\\n    margin-top: 10px;\\n    border: 1px solid rgba(0, 0, 0, .1);\\n\\n}\\n\\n.gallery_adjust p {\\n    text-align: center;\\n    padding: 4px;\\n    font-family: monospace;\\n    background: #222;\\n    color: #efefef;\\n}\\n.gallery_img{\\n    transform: rotate(0);\\n    transition: all ease 0.4s;\\n}\\n.gallery_img:hover{\\n    transition: all ease 0.4s;\\n}\\n\\n.color_title{\\n    color: rgb(207, 167, 140);\\n}\\nh2 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 600;\\n    font-size: 25px;\\n}\\nh4 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 400;\\n    font-size: 20px;\\n}\\np{\\n    font-family: var(--secondary-font-family);\\n    font-size: 20px;\\n}\\n.vertical-nav h4{ \\n    font-size: 4.07em;\\n    font-family: Poppins;\\n    line-height: 1.05em;\\n    font-weight: 400;\\n}\\n.nav-item{\\n    font-size: 2em;\\n}\\n\\n.nav-item:hover{\\n    cursor: pointer;\\n    opacity: 0.5 !Important;\\n  }\\n  .nav-item{\\n    opacity: 1;\\n  }\\n  .vertical-nav h4:hover{\\n    cursor: pointer;\\n  }\\n  .bg_musicVideo:hover img{\\n    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n  transition: all 0.4s;\\n  cursor: pointer;\\n  }\\n  .bg_musicVideo img{\\n    transition: all 0.4s;\\n  }\\n  .c_pointer{\\n    cursor: pointer;\\n  }\\n\\n  .contentMinH{\\n    min-height: 90vh;\\n  }\\n  .strong_g{\\n    text-weight: bolder\\n  }\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21haW5QYWdlLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EseUxBQXlMLHVCQUF1QixtQkFBbUIsb0JBQW9CLHNCQUFzQixhQUFhLGNBQWMsMkJBQTJCLEdBQUcsbUJBQW1CLGdDQUFnQyx5QkFBeUIsMkJBQTJCLEdBQUcsa0RBQWtELDBCQUEwQixHQUFHLHFCQUFxQixrQkFBa0IsZ0JBQWdCLEdBQUcsb0JBQW9CLCtCQUErQixHQUFHLCtCQUErQixnQkFBZ0IsOEJBQThCLE9BQU8seUJBQXlCLHlCQUF5QixPQUFPLGtCQUFrQixzQkFBc0Isb0JBQW9CLE9BQU8seUJBQXlCLDZCQUE2QixvQ0FBb0MsT0FBTyxHQUFHLHFCQUFxQixpQkFBaUIsbUJBQW1CLHVCQUF1QiwwQ0FBMEMsS0FBSyx1QkFBdUIseUJBQXlCLG1CQUFtQiw2QkFBNkIsdUJBQXVCLHFCQUFxQixHQUFHLGVBQWUsMkJBQTJCLGdDQUFnQyxHQUFHLHFCQUFxQixnQ0FBZ0MsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsTUFBTSxnREFBZ0QsdUJBQXVCLHNCQUFzQixHQUFHLE1BQU0sZ0RBQWdELHVCQUF1QixzQkFBc0IsR0FBRyxJQUFJLGdEQUFnRCxzQkFBc0IsR0FBRyxvQkFBb0Isd0JBQXdCLDJCQUEyQiwwQkFBMEIsdUJBQXVCLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxvQkFBb0Isc0JBQXNCLDhCQUE4QixLQUFLLGNBQWMsaUJBQWlCLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLDZCQUE2Qiw2RkFBNkYsNEdBQTRHLHlCQUF5QixvQkFBb0IsS0FBSyx1QkFBdUIsMkJBQTJCLEtBQUssZUFBZSxzQkFBc0IsS0FBSyxtQkFBbUIsdUJBQXVCLEtBQUssY0FBYyw4QkFBOEIsV0FBVyx3RkFBd0YsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyx3S0FBd0ssdUJBQXVCLG1CQUFtQixvQkFBb0Isc0JBQXNCLGFBQWEsY0FBYywyQkFBMkIsR0FBRyxtQkFBbUIsZ0NBQWdDLHlCQUF5QiwyQkFBMkIsR0FBRyxrREFBa0QsMEJBQTBCLEdBQUcscUJBQXFCLGtCQUFrQixnQkFBZ0IsR0FBRyxvQkFBb0IsK0JBQStCLEdBQUcsK0JBQStCLGdCQUFnQiw4QkFBOEIsT0FBTyx5QkFBeUIseUJBQXlCLE9BQU8sa0JBQWtCLHNCQUFzQixvQkFBb0IsT0FBTyx5QkFBeUIsNkJBQTZCLG9DQUFvQyxPQUFPLEdBQUcscUJBQXFCLGlCQUFpQixtQkFBbUIsdUJBQXVCLDBDQUEwQyxLQUFLLHVCQUF1Qix5QkFBeUIsbUJBQW1CLDZCQUE2Qix1QkFBdUIscUJBQXFCLEdBQUcsZUFBZSwyQkFBMkIsZ0NBQWdDLEdBQUcscUJBQXFCLGdDQUFnQyxHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxNQUFNLGdEQUFnRCx1QkFBdUIsc0JBQXNCLEdBQUcsTUFBTSxnREFBZ0QsdUJBQXVCLHNCQUFzQixHQUFHLElBQUksZ0RBQWdELHNCQUFzQixHQUFHLG9CQUFvQix3QkFBd0IsMkJBQTJCLDBCQUEwQix1QkFBdUIsR0FBRyxZQUFZLHFCQUFxQixHQUFHLG9CQUFvQixzQkFBc0IsOEJBQThCLEtBQUssY0FBYyxpQkFBaUIsS0FBSywyQkFBMkIsc0JBQXNCLEtBQUssNkJBQTZCLDZGQUE2Riw0R0FBNEcseUJBQXlCLG9CQUFvQixLQUFLLHVCQUF1QiwyQkFBMkIsS0FBSyxlQUFlLHNCQUFzQixLQUFLLG1CQUFtQix1QkFBdUIsS0FBSyxjQUFjLDhCQUE4Qix1QkFBdUI7QUFDdDRMO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21haW5QYWdlLmNzcz8zMGNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKiBDVVNUT00gVVRJTCBDTEFTU0VTXFxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qXFxuKi9cXG5cXG4udmVydGljYWwtbmF2IHtcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjByZW0pO1xcbiAgICBtYXJnaW4tbGVmdDogMjByZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4vKiBmb3IgdG9nZ2xlIGJlaGF2aW9yICovXFxuXFxuI3NpZGViYXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcXG59XFxuXFxuI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJnX211c2ljVmlkZW8ge1xcblxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhci5hY3RpdmUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XFxuICAgIH1cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcXG5cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgY29sb3I6ICNlZmVmZWY7XFxufVxcbi5nYWxsZXJ5X2ltZ3tcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XFxufVxcbi5nYWxsZXJ5X2ltZzpob3ZlcntcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcXG59XFxuXFxuLmNvbG9yX3RpdGxle1xcbiAgICBjb2xvcjogcmdiKDIwNywgMTY3LCAxNDApO1xcbn1cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udC1mYW1pbHkpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcbmg0IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbWlseSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxucHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbWlseSk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnZlcnRpY2FsLW5hdiBoNHsgXFxuICAgIGZvbnQtc2l6ZTogNC4wN2VtO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMDVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm5hdi1pdGVte1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNSAhSW1wb3J0YW50O1xcbiAgfVxcbiAgLm5hdi1pdGVte1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgLnZlcnRpY2FsLW5hdiBoNDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLmJnX211c2ljVmlkZW86aG92ZXIgaW1ne1xcbiAgICAtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5iZ19tdXNpY1ZpZGVvIGltZ3tcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxuICB9XFxuICAuY19wb2ludGVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuY29udGVudE1pbkh7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICB9XFxuICAuc3Ryb25nX2d7XFxuICAgIHRleHQtd2VpZ2h0OiBib2xkZXJcXG4gIH1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL21haW5QYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FLQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBLHdCQUF3Qjs7QUFFeEI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQ0FBbUM7O0FBRXZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLHNGQUFzRjtFQUN4Rix1R0FBdUc7RUFDdkcsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRTtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qIENVU1RPTSBVVElMIENMQVNTRVNcXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbipcXG4qL1xcblxcbi52ZXJ0aWNhbC1uYXYge1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuXFxuLnBhZ2UtY29udGVudCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHJlbSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbi8qIGZvciB0b2dnbGUgYmVoYXZpb3IgKi9cXG5cXG4jc2lkZWJhci5hY3RpdmUge1xcbiAgICBtYXJnaW4tbGVmdDogLTE3cmVtO1xcbn1cXG5cXG4jY29udGVudC5hY3RpdmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYmdfbXVzaWNWaWRlbyB7XFxuXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTE3cmVtO1xcbiAgICB9XFxuXFxuICAgICNzaWRlYmFyLmFjdGl2ZSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgfVxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAjY29udGVudC5hY3RpdmUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3cmVtO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3cmVtKTtcXG4gICAgfVxcbn1cXG5cXG4uZ2FsbGVyeV9hZGp1c3Qge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xcblxcbn1cXG5cXG4uZ2FsbGVyeV9hZGp1c3QgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgICBjb2xvcjogI2VmZWZlZjtcXG59XFxuLmdhbGxlcnlfaW1ne1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcXG59XFxuLmdhbGxlcnlfaW1nOmhvdmVye1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xcbn1cXG5cXG4uY29sb3JfdGl0bGV7XFxuICAgIGNvbG9yOiByZ2IoMjA3LCAxNjcsIDE0MCk7XFxufVxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbWlseSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuaDQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtaWx5KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5we1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtaWx5KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udmVydGljYWwtbmF2IGg0eyBcXG4gICAgZm9udC1zaXplOiA0LjA3ZW07XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xcbiAgICBsaW5lLWhlaWdodDogMS4wNWVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmF2LWl0ZW17XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC41ICFJbXBvcnRhbnQ7XFxuICB9XFxuICAubmF2LWl0ZW17XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAudmVydGljYWwtbmF2IGg0OmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAuYmdfbXVzaWNWaWRlbzpob3ZlciBpbWd7XFxuICAgIC0tdHctc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLmJnX211c2ljVmlkZW8gaW1ne1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gIH1cXG4gIC5jX3BvaW50ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250ZW50TWluSHtcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG4gIH1cXG4gIC5zdHJvbmdfZ3tcXG4gICAgdGV4dC13ZWlnaHQ6IGJvbGRlclxcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/mainPage.css\n"));

/***/ })

});