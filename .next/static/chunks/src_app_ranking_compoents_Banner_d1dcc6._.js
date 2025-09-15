(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_ranking_compoents_Banner_d1dcc6._.js", {

"[project]/src/app/ranking/compoents/Banner/styled.banner.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BannerTrack": ()=>BannerTrack,
    "StyledBanner": ()=>StyledBanner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const StyledBanner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled.banner__StyledBanner",
    componentId: "sc-a3a0705-0"
})`
  height: 80px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: black;
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    margin: 0;
    margin-top: 45px;
    height: 40px;
  }
`;
const BannerTrack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled.banner__BannerTrack",
    componentId: "sc-a3a0705-1"
})`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scroll 30s linear infinite;

  .banner-item {
    display: flex;
    align-items: center;
    margin-right: 40px;

    .splitter{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
      margin-left: 30px;
    }

    span {
      font-family: var(--Dot_font);
      font-size: 2rem;
      color: red;
    }

    img {
      max-width: 200px;
      min-height: 100%;
    }
  }

  .banner-item:first-child {
    margin-left: 90px; /* Add left gap here */
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

})()),
"[project]/src/app/ranking/compoents/Banner/Banner.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$Banner$2f$styled$2e$banner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ranking/compoents/Banner/styled.banner.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
const Banner = ()=>{
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bannerItems = [
        {
            type: "image",
            src: "https://media.tenor.com/MKl7Mp_TuN4AAAAM/rocky-rocky-training.gif"
        },
        {
            type: "text",
            value: "ッ Welcome! Your memes, jokes, and quotes from Discord could slide right here. Let the games begin!"
        },
        {
            type: "image",
            src: "/lfokaha/kira.gif"
        },
        {
            type: "image",
            src: "/lfokaha/kiraskot.gif"
        },
        {
            type: "image",
            src: "/lfokaha/empty_mind.png"
        },
        // { type: "image", src: "/lfokaha/feedback.png" },
        {
            type: "image",
            src: "https://media1.tenor.com/m/MzB_8oSz67AAAAAC/mostad3afon-dance.gif"
        },
        {
            type: "image",
            src: "https://media.discordapp.net/attachments/1070659312705343548/1231275185953575133/image.png?ex=689cb860&is=689b66e0&hm=b855989e9085982bf028e440325e475e7404d5f58e2ff7dd9c53b15aa07aacbf&=&format=webp&quality=lossless"
        },
        {
            type: "image",
            src: "https://cdn.discordapp.com/attachments/1070659312705343548/1107014235353010206/IMG_2351.jpg?ex=689cdbd9&is=689b8a59&hm=9ccf6cd591169cca02a3a0c394c249cda9706340ac553fa2b90743cde47f606f&"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    if (!isClient) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$Banner$2f$styled$2e$banner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledBanner"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$Banner$2f$styled$2e$banner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BannerTrack"], {
            children: [
                ...bannerItems,
                ...bannerItems
            ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "banner-item",
                    children: [
                        item.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.value
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/Banner/Banner.tsx",
                            lineNumber: 31,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.src,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/Banner/Banner.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/Banner/Banner.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/src/app/ranking/compoents/Banner/Banner.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/ranking/compoents/Banner/Banner.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ranking/compoents/Banner/Banner.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
_s(Banner, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = Banner;
const __TURBOPACK__default__export__ = Banner;
var _c;
__turbopack_refresh__.register(_c, "Banner");

})()),
}]);

//# sourceMappingURL=src_app_ranking_compoents_Banner_d1dcc6._.js.map