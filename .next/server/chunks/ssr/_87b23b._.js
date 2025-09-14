module.exports = {

"[project]/src/app/styled.home.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledMain": ()=>StyledMain
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const StyledMain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled.home__StyledMain",
    componentId: "sc-e4149469-0"
})`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: var(--main_background);
  padding: 5px;
  padding-left: 70px;
  flex-direction: column;
  /* justify-content : space-between; */
  align-items: flex-start;

  @media only screen and (max-width: 767px){
    padding : 3px;
  }

  .Banner {
    width: 100%;
    height: 100vh;
    background-color: transparent;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      50px 100%,
      0% calc(100% - 50px)
    );
    @media only screen and (max-width: 767px){
      height : 100vh;
    }
    background-color : #101B2B;

    .Header_photo{
      height :100%;
      /* top : -30%; */
      position  :absolute;
      right : 0;
      @media only screen and (max-width: 767px){
        height : 100%;
        top : 0;
      }
      /* position : relative; */
    }
    &:after{
      position : absolute;
      left : 0;
      content : "";
      height : 100%;
      width  :100%;
      background : linear-gradient(90deg, rgba(16,27,43,1) 50%, rgba(16,27,43,0) 100%);
    }

    /* background-image: url("/Header.jpg");
    background-position: center;
    background-size: cover; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 5px 4%;

    h1 {
      font-family: var(--playable_font);
      font-size: 3.4rem;
      font-weight: 100;
      color: white;
      z-index : 9;
      @media only screen and (max-width: 767px){
        font-size : 1.5rem;
      }
    }

    .login_card {
      height: 50px;
      width: 200px;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index : 999;
      

      .login_button {
        outline: none;
        background: var(--main_color);
        /* border: 1px solid rgba(214,207,255,0.7); */
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        padding: 2px 5px;
        width: 200px;
        height: 100%;
        border-radius: 4px;
        z-index: 999;
        margin-left: auto;
        cursor: pointer;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        transition: 0.5s ease-in-out;
        &:hover {
          background: color-mix(in srgb, var(--main_color) 80%, white);
          ._42logo {
            fill: var(--main_color_dark);
          }
          span {
            color: var(--main_color_dark);
          }
        }
          

        span {
          /* font-family : var(--main_font); */
          font-weight: 500;
          font-size: 1.3rem;
          text-transform: uppercase;
          color: var(--main_color_dark);
          background-color: transparent;
          transition: 0.2s ease-in-out;
        }
        ._42logo {
          width: 30px;
          background-color: transparent;
          fill: var(--main_color_dark);
          margin: 0px 10px;
          transition: 0.2s ease-in-out;
        }
        ._devider {
          width: 1px;
          height: 90%;
          margin-left: auto;
          background: linear-gradient(
            0deg,
            rgba(0, 187, 64, 0.02) 0%,
            rgba(14, 26, 42, 0.2) 35%,
            rgba(0, 187, 64, 0.02) 100%
          );
        }
      }
    }
  }
`;

})()),
"[project]/public/Header.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/Header.64692fc9.jpg");
})()),
"[project]/public/Header.jpg.mjs { IMAGE => \"[project]/public/Header.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Header$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/Header.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Header$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 2480,
    height: 3000,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAcDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzQrF9nK4zICPmB4x3/pW/Ux0sf//Z",
    blurWidth: 7,
    blurHeight: 8
};

})()),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styled$2e$home$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/styled.home.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Header$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Header$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/Header.jpg.mjs { IMAGE => "[project]/public/Header.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
const Main = ()=>{
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const handleInvite = ()=>{
        window.open("https://discord.gg/5cZfS8djyg");
    };
    const handleSignIn = async ()=>{
        const callbackUrl = "/ranking";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])("42-school", {
            callbackUrl
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const params = new URLSearchParams(window.location.search);
        const message = params.get("error");
        if (message) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("🔒 You must be logged in to access this page.", {
                icon: false
            });
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styled$2e$home$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledMain"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "light",
                className: "foo"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "Banner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Header$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Header$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
                        className: "Header_photo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Navigate School Like ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 32
                            }, this),
                            " a Boss!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "login_card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "login_button",
                            onClick: handleSignIn,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "_devider"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "_42logo",
                                    version: "1.1",
                                    id: "Calque_1",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 -200 960 960",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            id: "polygon5",
                                            points: "32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1   32,279.1 "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            id: "polygon7",
                                            points: "597.9,114.2 762.7,-51.1 597.9,-51.1 "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            id: "polygon9",
                                            points: "762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1 "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            id: "polygon11",
                                            points: "928,279.1 762.7,443.9 928,443.9 "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Main;

})()),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=_87b23b._.js.map