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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n* ==========================================\\n* CUSTOM UTIL CLASSES\\n* ==========================================\\n*\\n*/\\n\\n.vertical-nav {\\n    min-width: 20rem;\\n    width: 20rem;\\n    height: 100%;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    transition: all 0.4s;\\n    z-index: 10;\\n}\\n\\n.page-content {\\n    width: calc(100% - 20rem);\\n    margin-left: 20rem;\\n    transition: all 0.4s;\\n}\\n\\n/* for toggle behavior */\\n\\n\\n\\n#content.active {\\n    width: 100%;\\n    margin: 0;\\n}\\n\\n.bg_musicVideo {\\n\\n    background-size: cover;\\n    padding: 0 2em;\\n}\\n\\n@media (max-width: 768px) {\\n  \\n\\n    #content {\\n        width: 100%;\\n        margin: 0;\\n    }\\n\\n    #content.active {\\n        margin-left: 17rem;\\n        width: calc(100% - 17rem);\\n    }\\n}\\n\\n.gallery_adjust {\\n    width: 80%;\\n    margin: auto;\\n    margin-top: 10px;\\n    border: 1px solid rgba(0, 0, 0, .1);\\n\\n}\\n\\n.gallery_adjust p {\\n    text-align: center;\\n    padding: 4px;\\n    font-family: monospace;\\n    background: #222;\\n    color: #efefef;\\n}\\n\\n.gallery_img {\\n    transform: rotate(0);\\n    transition: all ease 0.4s;\\n}\\n\\n.gallery_img:hover {\\n    transition: all ease 0.4s;\\n}\\n\\n.color_title {\\n    color: rgb(207, 167, 140);\\n}\\n\\nh2 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 600;\\n    font-size: 25px;\\n}\\n\\nh4 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 400;\\n    font-size: 20px;\\n}\\n\\np {\\n    font-family: var(--secondary-font-family);\\n    font-size: 20px;\\n}\\n\\n.vertical-nav h4 {\\n    font-size: 4.07em;\\n    font-family: Poppins;\\n    line-height: 1.05em;\\n    font-weight: 400;\\n}\\n\\n.nav-item {\\n    font-size: 2em;\\n}\\n\\n.nav-item:hover {\\n    cursor: pointer;\\n    opacity: 0.5 !Important;\\n    transform: scale(1.1) !important;\\n    margin-left: 0.5em !important;\\n    transition: all 0.4s;\\n}\\n\\n.nav-item.active {\\n    cursor: pointer;\\n    opacity: 0.5 !Important;\\n    transform: scale(1.1) !important;\\n    margin-left: 0.5em !important;\\n    transition: all 0.4s;\\n}\\n\\n.nav-item {\\n    opacity: 1;\\n    transform: scale(1);\\n    margin-left: 0em;\\n    transition: all 0.4s;\\n}\\n\\n.vertical-nav h4:hover {\\n    cursor: pointer;\\n}\\n\\n.bg_musicVideo:hover img {\\n    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n    transition: all 0.4s;\\n    cursor: pointer;\\n}\\n\\n.bg_musicVideo img {\\n    transition: all 0.4s;\\n}\\n\\n.c_pointer {\\n    cursor: pointer;\\n}\\n\\n.contentMinH {\\n    min-height: 90vh;\\n}\\n\\n.strong_g {\\n    font-weight: bolder;\\n}\\n\\n.bege {\\n    color: #cfa78c;\\n}\\n\\n.bg_bege {\\n    background-color: #cfa78c;\\n}\\n\\n.div_commercials:last-child .imgs_gallery {\\n    margin-bottom: -4em;\\n    padding-bottom: 5em;\\n}\\n/* apagar apos mais conteudo _> ALERTA */\\n.div_correction{\\n    min-height: 60vh;\\n}\\n@media screen and (max-width: 720px) {\\n     \\n    .page-content {\\n        width: 100%  !important;\\n        margin-left: 0rem !important;\\n        transition: all 0.4s;\\n    } \\n\\n}\\n\\n@media screen and (min-width: 1300px)  {\\n    \\n    .imgs_gallery div.w-full{\\n        width: 60% !important;\\n        margin-left: auto;\\n        margin-right: auto;\\n    } \\n\\n}\\n@media screen and (min-width: 950px) and (max-width: 1300px) {\\n    \\n    .imgs_gallery div{\\n        width: 70% !important;\\n        margin-left: auto;\\n        margin-right: auto;\\n    } \\n\\n}\\n\\ndiv.sidebar-active{\\n    left: 21em;\\n}\\n#idBtnSidebar{\\n    transition: all 0.4s;\\n}\\n#idInfo{\\n    transition: all 0.4s;\\n    left: 4em;\\n    background-color: #fff;\\n    width: max-content;\\n    top: 0.3em;\\n    border-radius: 5%;\\n    opacity: 80%;\\n}\\n\\n@media screen and (min-width:768px){\\n   \\n    #idBtnSidebar, #idInfo{\\n        display: none;\\n    }\\n    \\n\\n}\\n@media screen and ( max-width: 768px){\\n\\n    #sidebar.active{\\n        left: 0rem;\\n    }\\n    #sidebar{\\n        left:-20rem;\\n    }\\n    .page-content{\\n        width: 100% !important;\\n        margin-left: 0rem !important;\\n    }\\n    .bg_musicVideo {\\n        padding: 0 4em !important;\\n    }\\n    \\n    /* .page-content.active{\\n        width: calc(100% - 20rem) !important;\\n        margin-left:20em !important;\\n    } */\\n\\n}\\n\\n.title_image_mobile{\\n    display: none;\\n}\\n\\n@media screen and ( max-width:600px){\\n    .width_mobile{\\n        width: 100% !important;\\n    }\\n    .mobile_title_padding{\\n        padding-bottom: 0em !important;\\n    }\\n    .title_image_mobile{\\n        display: block !important;\\n        width: 50% !important;\\n        padding: 1em !important;\\n    }\\n    .title_image_desk{\\n        display: none !important;\\n    }\\n    .center_text_mobile{\\n        text-align: center !important;\\n    }\\n    .profile_mobile_img{\\n        width: 30% !important;\\n    }\\n    .table_mobile{\\n        padding-left: 2em !important;\\n        padding-right: 2em !important;\\n    }\\n    .index_menu_pb{\\n        padding-bottom: 1em !important;\\n    }\\n\\n}\\n\\n.video_third_width{\\n    width: 33.33% !important;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/mainPage.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"/*\\n* ==========================================\\n* CUSTOM UTIL CLASSES\\n* ==========================================\\n*\\n*/\\n\\n.vertical-nav {\\n    min-width: 20rem;\\n    width: 20rem;\\n    height: 100%;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    transition: all 0.4s;\\n    z-index: 10;\\n}\\n\\n.page-content {\\n    width: calc(100% - 20rem);\\n    margin-left: 20rem;\\n    transition: all 0.4s;\\n}\\n\\n/* for toggle behavior */\\n\\n\\n\\n#content.active {\\n    width: 100%;\\n    margin: 0;\\n}\\n\\n.bg_musicVideo {\\n\\n    background-size: cover;\\n    padding: 0 2em;\\n}\\n\\n@media (max-width: 768px) {\\n  \\n\\n    #content {\\n        width: 100%;\\n        margin: 0;\\n    }\\n\\n    #content.active {\\n        margin-left: 17rem;\\n        width: calc(100% - 17rem);\\n    }\\n}\\n\\n.gallery_adjust {\\n    width: 80%;\\n    margin: auto;\\n    margin-top: 10px;\\n    border: 1px solid rgba(0, 0, 0, .1);\\n\\n}\\n\\n.gallery_adjust p {\\n    text-align: center;\\n    padding: 4px;\\n    font-family: monospace;\\n    background: #222;\\n    color: #efefef;\\n}\\n\\n.gallery_img {\\n    transform: rotate(0);\\n    transition: all ease 0.4s;\\n}\\n\\n.gallery_img:hover {\\n    transition: all ease 0.4s;\\n}\\n\\n.color_title {\\n    color: rgb(207, 167, 140);\\n}\\n\\nh2 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 600;\\n    font-size: 25px;\\n}\\n\\nh4 {\\n    font-family: var(--secondary-font-family);\\n    font-weight: 400;\\n    font-size: 20px;\\n}\\n\\np {\\n    font-family: var(--secondary-font-family);\\n    font-size: 20px;\\n}\\n\\n.vertical-nav h4 {\\n    font-size: 4.07em;\\n    font-family: Poppins;\\n    line-height: 1.05em;\\n    font-weight: 400;\\n}\\n\\n.nav-item {\\n    font-size: 2em;\\n}\\n\\n.nav-item:hover {\\n    cursor: pointer;\\n    opacity: 0.5 !Important;\\n    transform: scale(1.1) !important;\\n    margin-left: 0.5em !important;\\n    transition: all 0.4s;\\n}\\n\\n.nav-item.active {\\n    cursor: pointer;\\n    opacity: 0.5 !Important;\\n    transform: scale(1.1) !important;\\n    margin-left: 0.5em !important;\\n    transition: all 0.4s;\\n}\\n\\n.nav-item {\\n    opacity: 1;\\n    transform: scale(1);\\n    margin-left: 0em;\\n    transition: all 0.4s;\\n}\\n\\n.vertical-nav h4:hover {\\n    cursor: pointer;\\n}\\n\\n.bg_musicVideo:hover img {\\n    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n    transition: all 0.4s;\\n    cursor: pointer;\\n}\\n\\n.bg_musicVideo img {\\n    transition: all 0.4s;\\n}\\n\\n.c_pointer {\\n    cursor: pointer;\\n}\\n\\n.contentMinH {\\n    min-height: 90vh;\\n}\\n\\n.strong_g {\\n    font-weight: bolder;\\n}\\n\\n.bege {\\n    color: #cfa78c;\\n}\\n\\n.bg_bege {\\n    background-color: #cfa78c;\\n}\\n\\n.div_commercials:last-child .imgs_gallery {\\n    margin-bottom: -4em;\\n    padding-bottom: 5em;\\n}\\n/* apagar apos mais conteudo _> ALERTA */\\n.div_correction{\\n    min-height: 60vh;\\n}\\n@media screen and (max-width: 720px) {\\n     \\n    .page-content {\\n        width: 100%  !important;\\n        margin-left: 0rem !important;\\n        transition: all 0.4s;\\n    } \\n\\n}\\n\\n@media screen and (min-width: 1300px)  {\\n    \\n    .imgs_gallery div.w-full{\\n        width: 60% !important;\\n        margin-left: auto;\\n        margin-right: auto;\\n    } \\n\\n}\\n@media screen and (min-width: 950px) and (max-width: 1300px) {\\n    \\n    .imgs_gallery div{\\n        width: 70% !important;\\n        margin-left: auto;\\n        margin-right: auto;\\n    } \\n\\n}\\n\\ndiv.sidebar-active{\\n    left: 21em;\\n}\\n#idBtnSidebar{\\n    transition: all 0.4s;\\n}\\n#idInfo{\\n    transition: all 0.4s;\\n    left: 4em;\\n    background-color: #fff;\\n    width: max-content;\\n    top: 0.3em;\\n    border-radius: 5%;\\n    opacity: 80%;\\n}\\n\\n@media screen and (min-width:768px){\\n   \\n    #idBtnSidebar, #idInfo{\\n        display: none;\\n    }\\n    \\n\\n}\\n@media screen and ( max-width: 768px){\\n\\n    #sidebar.active{\\n        left: 0rem;\\n    }\\n    #sidebar{\\n        left:-20rem;\\n    }\\n    .page-content{\\n        width: 100% !important;\\n        margin-left: 0rem !important;\\n    }\\n    .bg_musicVideo {\\n        padding: 0 4em !important;\\n    }\\n    \\n    /* .page-content.active{\\n        width: calc(100% - 20rem) !important;\\n        margin-left:20em !important;\\n    } */\\n\\n}\\n\\n.title_image_mobile{\\n    display: none;\\n}\\n\\n@media screen and ( max-width:600px){\\n    .width_mobile{\\n        width: 100% !important;\\n    }\\n    .mobile_title_padding{\\n        padding-bottom: 0em !important;\\n    }\\n    .title_image_mobile{\\n        display: block !important;\\n        width: 50% !important;\\n        padding: 1em !important;\\n    }\\n    .title_image_desk{\\n        display: none !important;\\n    }\\n    .center_text_mobile{\\n        text-align: center !important;\\n    }\\n    .profile_mobile_img{\\n        width: 30% !important;\\n    }\\n    .table_mobile{\\n        padding-left: 2em !important;\\n        padding-right: 2em !important;\\n    }\\n    .index_menu_pb{\\n        padding-bottom: 1em !important;\\n    }\\n\\n}\\n\\n.video_third_width{\\n    width: 33.33% !important;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21haW5QYWdlLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EseUxBQXlMLHVCQUF1QixtQkFBbUIsbUJBQW1CLHNCQUFzQixhQUFhLGNBQWMsMkJBQTJCLGtCQUFrQixHQUFHLG1CQUFtQixnQ0FBZ0MseUJBQXlCLDJCQUEyQixHQUFHLHNEQUFzRCxrQkFBa0IsZ0JBQWdCLEdBQUcsb0JBQW9CLCtCQUErQixxQkFBcUIsR0FBRywrQkFBK0Isc0JBQXNCLHNCQUFzQixvQkFBb0IsT0FBTyx5QkFBeUIsNkJBQTZCLG9DQUFvQyxPQUFPLEdBQUcscUJBQXFCLGlCQUFpQixtQkFBbUIsdUJBQXVCLDBDQUEwQyxLQUFLLHVCQUF1Qix5QkFBeUIsbUJBQW1CLDZCQUE2Qix1QkFBdUIscUJBQXFCLEdBQUcsa0JBQWtCLDJCQUEyQixnQ0FBZ0MsR0FBRyx3QkFBd0IsZ0NBQWdDLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLFFBQVEsZ0RBQWdELHVCQUF1QixzQkFBc0IsR0FBRyxRQUFRLGdEQUFnRCx1QkFBdUIsc0JBQXNCLEdBQUcsT0FBTyxnREFBZ0Qsc0JBQXNCLEdBQUcsc0JBQXNCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLHVCQUF1QixHQUFHLGVBQWUscUJBQXFCLEdBQUcscUJBQXFCLHNCQUFzQiw4QkFBOEIsdUNBQXVDLG9DQUFvQywyQkFBMkIsR0FBRyxzQkFBc0Isc0JBQXNCLDhCQUE4Qix1Q0FBdUMsb0NBQW9DLDJCQUEyQixHQUFHLGVBQWUsaUJBQWlCLDBCQUEwQix1QkFBdUIsMkJBQTJCLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLDhCQUE4Qiw2RkFBNkYsOEdBQThHLDJCQUEyQixzQkFBc0IsR0FBRyx3QkFBd0IsMkJBQTJCLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxlQUFlLDBCQUEwQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsY0FBYyxnQ0FBZ0MsR0FBRywrQ0FBK0MsMEJBQTBCLDBCQUEwQixHQUFHLDZEQUE2RCx1QkFBdUIsR0FBRyx3Q0FBd0MsNEJBQTRCLGtDQUFrQyx1Q0FBdUMsK0JBQStCLFFBQVEsS0FBSyw0Q0FBNEMscUNBQXFDLGdDQUFnQyw0QkFBNEIsNkJBQTZCLFFBQVEsS0FBSyxnRUFBZ0UsOEJBQThCLGdDQUFnQyw0QkFBNEIsNkJBQTZCLFFBQVEsS0FBSyx1QkFBdUIsaUJBQWlCLEdBQUcsZ0JBQWdCLDJCQUEyQixHQUFHLFVBQVUsMkJBQTJCLGdCQUFnQiw2QkFBNkIseUJBQXlCLGlCQUFpQix3QkFBd0IsbUJBQW1CLEdBQUcsd0NBQXdDLGtDQUFrQyx3QkFBd0IsT0FBTyxXQUFXLHdDQUF3Qyx3QkFBd0IscUJBQXFCLE9BQU8sZUFBZSxzQkFBc0IsT0FBTyxvQkFBb0IsaUNBQWlDLHVDQUF1QyxPQUFPLHNCQUFzQixvQ0FBb0MsT0FBTyxvQ0FBb0MsK0NBQStDLHNDQUFzQyxRQUFRLE9BQU8sd0JBQXdCLG9CQUFvQixHQUFHLHlDQUF5QyxvQkFBb0IsaUNBQWlDLE9BQU8sNEJBQTRCLHlDQUF5QyxPQUFPLDBCQUEwQixvQ0FBb0MsZ0NBQWdDLGtDQUFrQyxPQUFPLHdCQUF3QixtQ0FBbUMsT0FBTywwQkFBMEIsd0NBQXdDLE9BQU8sMEJBQTBCLGdDQUFnQyxPQUFPLG9CQUFvQix1Q0FBdUMsd0NBQXdDLE9BQU8scUJBQXFCLHlDQUF5QyxPQUFPLEtBQUssdUJBQXVCLCtCQUErQixHQUFHLE9BQU8sd0ZBQXdGLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sZUFBZSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxZQUFZLHlLQUF5Syx1QkFBdUIsbUJBQW1CLG1CQUFtQixzQkFBc0IsYUFBYSxjQUFjLDJCQUEyQixrQkFBa0IsR0FBRyxtQkFBbUIsZ0NBQWdDLHlCQUF5QiwyQkFBMkIsR0FBRyxzREFBc0Qsa0JBQWtCLGdCQUFnQixHQUFHLG9CQUFvQiwrQkFBK0IscUJBQXFCLEdBQUcsK0JBQStCLHNCQUFzQixzQkFBc0Isb0JBQW9CLE9BQU8seUJBQXlCLDZCQUE2QixvQ0FBb0MsT0FBTyxHQUFHLHFCQUFxQixpQkFBaUIsbUJBQW1CLHVCQUF1QiwwQ0FBMEMsS0FBSyx1QkFBdUIseUJBQXlCLG1CQUFtQiw2QkFBNkIsdUJBQXVCLHFCQUFxQixHQUFHLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLEdBQUcsd0JBQXdCLGdDQUFnQyxHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRyxRQUFRLGdEQUFnRCx1QkFBdUIsc0JBQXNCLEdBQUcsUUFBUSxnREFBZ0QsdUJBQXVCLHNCQUFzQixHQUFHLE9BQU8sZ0RBQWdELHNCQUFzQixHQUFHLHNCQUFzQix3QkFBd0IsMkJBQTJCLDBCQUEwQix1QkFBdUIsR0FBRyxlQUFlLHFCQUFxQixHQUFHLHFCQUFxQixzQkFBc0IsOEJBQThCLHVDQUF1QyxvQ0FBb0MsMkJBQTJCLEdBQUcsc0JBQXNCLHNCQUFzQiw4QkFBOEIsdUNBQXVDLG9DQUFvQywyQkFBMkIsR0FBRyxlQUFlLGlCQUFpQiwwQkFBMEIsdUJBQXVCLDJCQUEyQixHQUFHLDRCQUE0QixzQkFBc0IsR0FBRyw4QkFBOEIsNkZBQTZGLDhHQUE4RywyQkFBMkIsc0JBQXNCLEdBQUcsd0JBQXdCLDJCQUEyQixHQUFHLGdCQUFnQixzQkFBc0IsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsZUFBZSwwQkFBMEIsR0FBRyxXQUFXLHFCQUFxQixHQUFHLGNBQWMsZ0NBQWdDLEdBQUcsK0NBQStDLDBCQUEwQiwwQkFBMEIsR0FBRyw2REFBNkQsdUJBQXVCLEdBQUcsd0NBQXdDLDRCQUE0QixrQ0FBa0MsdUNBQXVDLCtCQUErQixRQUFRLEtBQUssNENBQTRDLHFDQUFxQyxnQ0FBZ0MsNEJBQTRCLDZCQUE2QixRQUFRLEtBQUssZ0VBQWdFLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDZCQUE2QixRQUFRLEtBQUssdUJBQXVCLGlCQUFpQixHQUFHLGdCQUFnQiwyQkFBMkIsR0FBRyxVQUFVLDJCQUEyQixnQkFBZ0IsNkJBQTZCLHlCQUF5QixpQkFBaUIsd0JBQXdCLG1CQUFtQixHQUFHLHdDQUF3QyxrQ0FBa0Msd0JBQXdCLE9BQU8sV0FBVyx3Q0FBd0Msd0JBQXdCLHFCQUFxQixPQUFPLGVBQWUsc0JBQXNCLE9BQU8sb0JBQW9CLGlDQUFpQyx1Q0FBdUMsT0FBTyxzQkFBc0Isb0NBQW9DLE9BQU8sb0NBQW9DLCtDQUErQyxzQ0FBc0MsUUFBUSxPQUFPLHdCQUF3QixvQkFBb0IsR0FBRyx5Q0FBeUMsb0JBQW9CLGlDQUFpQyxPQUFPLDRCQUE0Qix5Q0FBeUMsT0FBTywwQkFBMEIsb0NBQW9DLGdDQUFnQyxrQ0FBa0MsT0FBTyx3QkFBd0IsbUNBQW1DLE9BQU8sMEJBQTBCLHdDQUF3QyxPQUFPLDBCQUEwQixnQ0FBZ0MsT0FBTyxvQkFBb0IsdUNBQXVDLHdDQUF3QyxPQUFPLHFCQUFxQix5Q0FBeUMsT0FBTyxLQUFLLHVCQUF1QiwrQkFBK0IsR0FBRyxtQkFBbUI7QUFDcHBZO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21haW5QYWdlLmNzcz8zMGNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKiBDVVNUT00gVVRJTCBDTEFTU0VTXFxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qXFxuKi9cXG5cXG4udmVydGljYWwtbmF2IHtcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjByZW0pO1xcbiAgICBtYXJnaW4tbGVmdDogMjByZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4vKiBmb3IgdG9nZ2xlIGJlaGF2aW9yICovXFxuXFxuXFxuXFxuI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJnX211c2ljVmlkZW8ge1xcblxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiAwIDJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBcXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQuYWN0aXZlIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XFxuICAgIH1cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcXG5cXG59XFxuXFxuLmdhbGxlcnlfYWRqdXN0IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgY29sb3I6ICNlZmVmZWY7XFxufVxcblxcbi5nYWxsZXJ5X2ltZyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xcbn1cXG5cXG4uZ2FsbGVyeV9pbWc6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xcbn1cXG5cXG4uY29sb3JfdGl0bGUge1xcbiAgICBjb2xvcjogcmdiKDIwNywgMTY3LCAxNDApO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udC1mYW1pbHkpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbWlseSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udC1mYW1pbHkpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgaDQge1xcbiAgICBmb250LXNpemU6IDQuMDdlbTtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjA1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNSAhSW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4ubmF2LWl0ZW0uYWN0aXZlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjUgIUltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgaDQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iZ19tdXNpY1ZpZGVvOmhvdmVyIGltZyB7XFxuICAgIC0tdHctc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmdfbXVzaWNWaWRlbyBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuXFxuLmNfcG9pbnRlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRNaW5IIHtcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG59XFxuXFxuLnN0cm9uZ19nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmJlZ2Uge1xcbiAgICBjb2xvcjogI2NmYTc4YztcXG59XFxuXFxuLmJnX2JlZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZhNzhjO1xcbn1cXG5cXG4uZGl2X2NvbW1lcmNpYWxzOmxhc3QtY2hpbGQgLmltZ3NfZ2FsbGVyeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC00ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XFxufVxcbi8qIGFwYWdhciBhcG9zIG1haXMgY29udGV1ZG8gXz4gQUxFUlRBICovXFxuLmRpdl9jb3JyZWN0aW9ue1xcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgICAgXFxuICAgIC5wYWdlLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCUgICFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbSAhaW1wb3J0YW50O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxuICAgIH0gXFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkgIHtcXG4gICAgXFxuICAgIC5pbWdzX2dhbGxlcnkgZGl2LnctZnVsbHtcXG4gICAgICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9IFxcblxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTBweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xcbiAgICBcXG4gICAgLmltZ3NfZ2FsbGVyeSBkaXZ7XFxuICAgICAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgfSBcXG5cXG59XFxuXFxuZGl2LnNpZGViYXItYWN0aXZle1xcbiAgICBsZWZ0OiAyMWVtO1xcbn1cXG4jaWRCdG5TaWRlYmFye1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuI2lkSW5mb3tcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxuICAgIGxlZnQ6IDRlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB0b3A6IDAuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcXG4gICBcXG4gICAgI2lkQnRuU2lkZWJhciwgI2lkSW5mb3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA3NjhweCl7XFxuXFxuICAgICNzaWRlYmFyLmFjdGl2ZXtcXG4gICAgICAgIGxlZnQ6IDByZW07XFxuICAgIH1cXG4gICAgI3NpZGViYXJ7XFxuICAgICAgICBsZWZ0Oi0yMHJlbTtcXG4gICAgfVxcbiAgICAucGFnZS1jb250ZW50e1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmJnX211c2ljVmlkZW8ge1xcbiAgICAgICAgcGFkZGluZzogMCA0ZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICBcXG4gICAgLyogLnBhZ2UtY29udGVudC5hY3RpdmV7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjByZW0pICFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tbGVmdDoyMGVtICFpbXBvcnRhbnQ7XFxuICAgIH0gKi9cXG5cXG59XFxuXFxuLnRpdGxlX2ltYWdlX21vYmlsZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6NjAwcHgpe1xcbiAgICAud2lkdGhfbW9iaWxle1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAubW9iaWxlX3RpdGxlX3BhZGRpbmd7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMGVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnRpdGxlX2ltYWdlX21vYmlsZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxuICAgICAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAudGl0bGVfaW1hZ2VfZGVza3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuY2VudGVyX3RleHRfbW9iaWxle1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnByb2ZpbGVfbW9iaWxlX2ltZ3tcXG4gICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAudGFibGVfbW9iaWxle1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyZW0gIWltcG9ydGFudDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC5pbmRleF9tZW51X3Bie1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxufVxcblxcbi52aWRlb190aGlyZF93aWR0aHtcXG4gICAgd2lkdGg6IDMzLjMzJSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL21haW5QYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FLQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQSx3QkFBd0I7Ozs7QUFJeEI7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTtRQUNJLFdBQVc7UUFDWCxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQ0FBbUM7O0FBRXZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0ZBQXNGO0lBQ3RGLHVHQUF1RztJQUN2RyxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBLHdDQUF3QztBQUN4QztJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJO1FBQ0ksdUJBQXVCO1FBQ3ZCLDRCQUE0QjtRQUM1QixvQkFBb0I7SUFDeEI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7QUFFSjtBQUNBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0FBRUo7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSTtRQUNJLGFBQWE7SUFDakI7OztBQUdKO0FBQ0E7O0lBRUk7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBOzs7T0FHRzs7QUFFUDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDOztBQUVKOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qIENVU1RPTSBVVElMIENMQVNTRVNcXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbipcXG4qL1xcblxcbi52ZXJ0aWNhbC1uYXYge1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLnBhZ2UtY29udGVudCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHJlbSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbi8qIGZvciB0b2dnbGUgYmVoYXZpb3IgKi9cXG5cXG5cXG5cXG4jY29udGVudC5hY3RpdmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYmdfbXVzaWNWaWRlbyB7XFxuXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIFxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAjY29udGVudC5hY3RpdmUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3cmVtO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3cmVtKTtcXG4gICAgfVxcbn1cXG5cXG4uZ2FsbGVyeV9hZGp1c3Qge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xcblxcbn1cXG5cXG4uZ2FsbGVyeV9hZGp1c3QgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgICBjb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuLmdhbGxlcnlfaW1nIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XFxufVxcblxcbi5nYWxsZXJ5X2ltZzpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XFxufVxcblxcbi5jb2xvcl90aXRsZSB7XFxuICAgIGNvbG9yOiByZ2IoMjA3LCAxNjcsIDE0MCk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbWlseSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtaWx5KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbWlseSk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBoNCB7XFxuICAgIGZvbnQtc2l6ZTogNC4wN2VtO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMDVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC41ICFJbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW0gIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbi5uYXYtaXRlbS5hY3RpdmUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNSAhSW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBoNDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJnX211c2ljVmlkZW86aG92ZXIgaW1nIHtcXG4gICAgLS10dy1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iZ19tdXNpY1ZpZGVvIGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4uY19wb2ludGVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudE1pbkgge1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4uc3Ryb25nX2cge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYmVnZSB7XFxuICAgIGNvbG9yOiAjY2ZhNzhjO1xcbn1cXG5cXG4uYmdfYmVnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmE3OGM7XFxufVxcblxcbi5kaXZfY29tbWVyY2lhbHM6bGFzdC1jaGlsZCAuaW1nc19nYWxsZXJ5IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTRlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcXG59XFxuLyogYXBhZ2FyIGFwb3MgbWFpcyBjb250ZXVkbyBfPiBBTEVSVEEgKi9cXG4uZGl2X2NvcnJlY3Rpb257XFxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAgICBcXG4gICAgLnBhZ2UtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJSAgIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gICAgfSBcXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSAge1xcbiAgICBcXG4gICAgLmltZ3NfZ2FsbGVyeSBkaXYudy1mdWxse1xcbiAgICAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH0gXFxuXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1MHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XFxuICAgIFxcbiAgICAuaW1nc19nYWxsZXJ5IGRpdntcXG4gICAgICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9IFxcblxcbn1cXG5cXG5kaXYuc2lkZWJhci1hY3RpdmV7XFxuICAgIGxlZnQ6IDIxZW07XFxufVxcbiNpZEJ0blNpZGViYXJ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG4jaWRJbmZve1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gICAgbGVmdDogNGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRvcDogMC4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xcbiAgIFxcbiAgICAjaWRCdG5TaWRlYmFyLCAjaWRJbmZve1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG5cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDc2OHB4KXtcXG5cXG4gICAgI3NpZGViYXIuYWN0aXZle1xcbiAgICAgICAgbGVmdDogMHJlbTtcXG4gICAgfVxcbiAgICAjc2lkZWJhcntcXG4gICAgICAgIGxlZnQ6LTIwcmVtO1xcbiAgICB9XFxuICAgIC5wYWdlLWNvbnRlbnR7XFxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuYmdfbXVzaWNWaWRlbyB7XFxuICAgICAgICBwYWRkaW5nOiAwIDRlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIFxcbiAgICAvKiAucGFnZS1jb250ZW50LmFjdGl2ZXtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHJlbSkgIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwZW0gIWltcG9ydGFudDtcXG4gICAgfSAqL1xcblxcbn1cXG5cXG4udGl0bGVfaW1hZ2VfbW9iaWxle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDo2MDBweCl7XFxuICAgIC53aWR0aF9tb2JpbGV7XFxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC5tb2JpbGVfdGl0bGVfcGFkZGluZ3tcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAudGl0bGVfaW1hZ2VfbW9iaWxle1xcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC50aXRsZV9pbWFnZV9kZXNre1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC5jZW50ZXJfdGV4dF9tb2JpbGV7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAucHJvZmlsZV9tb2JpbGVfaW1ne1xcbiAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC50YWJsZV9tb2JpbGV7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJlbSAhaW1wb3J0YW50O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMmVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmluZGV4X21lbnVfcGJ7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG59XFxuXFxuLnZpZGVvX3RoaXJkX3dpZHRoe1xcbiAgICB3aWR0aDogMzMuMzMlICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/mainPage.css\n"));

/***/ })

});