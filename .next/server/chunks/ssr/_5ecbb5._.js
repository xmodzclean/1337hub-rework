module.exports = {

"[project]/src/app/ranking/Styled.ranking.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledRanking": ()=>StyledRanking
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const StyledRanking = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Styled.ranking__StyledRanking",
    componentId: "sc-b9431e41-0"
})`
  width: calc(100% - 70px);
  max-width: calc(100% - 70px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main_background);
  overflow: hidden;
  overflow-x: hidden;
  margin-left: 70px;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 5px;
    min-height: 100vh;
    margin-left: 0;
  }

  /* background-color :#FAFBF4; */

  /* &:before{
    content : "";
    width : 100%;
    height : 70vh;
    background-image : url("/Header.jpg");
    background-position : center 80%;
    background-size : cover;
    position : absolute;
    bottom : 0;
    opacity : 0.3;
  } */

  //Test : feeling weird:because of what. t
  .Container {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 9;
    box-sizing: border-box;
    overflow: hidden;
    @media only screen and (max-width: 767px) {
      padding: 0px;
      min-height: 100vh;
    }
    /* flex-direction : column; */
    /* overflow  :hidden; */

    .ProfileContainer {
      width: 35%;
      max-width: 35%;
      height: 100%;
      padding: 55px 10px;
      padding-bottom: 5px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      box-sizing: border-box;
      flex-shrink: 0;
      .tmp {
        flex: 1;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        background-color: #212125;
        border: 1px solid rgba(255, 255, 255, 0.06);
        h1 {
          color: white;
          padding: 0px 5px;
          padding-bottom: 10px;
          font-size: 1rem;
          font-family: var(--playable_font);
          font-weight: 100;
          opacity: 0.8;
        }
        .VideoContainer {
          flex: 1;
          overflow: hidden;
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 3px;
          }
        }
      }

      ._13Hub {
        width: 100%;
        height: 300px;
        background-color: #212125;
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 5px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        border: none;
        background: linear-gradient(
          20deg,
          rgba(64, 228, 64, 0.4) 0%,
          transparent 100%
        );
        position: relative;
        &:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            90deg,
            rgba(142, 45, 226, 0) 0%,
            rgba(64, 228, 64, 1) 50%,
            rgba(142, 45, 226, 0) 100%
          );
          background-position: top;
          background-size: 100% 2px;
          background-repeat: no-repeat;
          top: 0;
          left: 0;
        }

        .Header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        ._13HubLogo {
          height: 80px;
        }
        h1 {
          color: rgba(255, 255, 255, 0.8);
        }
        span {
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }
        button {
          height: 45px;
          border-radius: 5px;
          border: none;
          outline: none;
          background-color: var(--main_color);
          margin-top: auto;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
          color : rgb(11, 73, 11);
          display: flex;
          justify-content: center;
          align-items: center;
          gap : 5px;
        }
      }

      @media only screen and (max-width: 767px) {
        display: none;
      }
    }

    .LeaderBoardContainer {
      height: 100%;
      flex: 1;
      min-width: 0;
      padding: 55px 10px;
      padding-bottom: 5px;
      box-sizing: border-box;
      @media only screen and (max-width: 767px) {
        margin-top: 7%;
        padding: 0px;
      }
      .Ranking {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        @media only screen and (max-width: 767px) {
          /* height: auto; */
          /* display : none; */
        }
        .Profiles_container {
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          padding-right: 8px;
          gap: 6px;
          scroll-behavior: smooth;
          
          /* Custom scrollbar */
          &::-webkit-scrollbar {
            width: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          
          &::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, var(--main_color), rgba(183, 251, 43, 0.6));
            border-radius: 3px;
            transition: all 0.3s ease;
          }
          
          &::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, rgba(183, 251, 43, 0.9), var(--main_color));
          }
          
          @media only screen and (max-width: 767px) {
            padding: 0px;
            padding-top: 8px;
            overflow-y: unset;
            padding-right: 0px;
            padding-bottom: 120px;
          }

          .FetchMore {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(255, 255, 255, 0.6);
            padding: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
            
            &.Animated {
              color: var(--main_color);
              animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
              0%, 100% {
                opacity: 0.6;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.02);
              }
            }
            align-items: center;
            padding: 10px;
            @media only screen and (max-width: 767px) {
              /* position : fixed; */
              background: linear-gradient(
                90deg,
                rgb(44, 44, 48, 0) 0%,
                rgb(44, 44, 48, 0.8) 50%,
                rgb(44, 44, 48, 0) 100%
              );
            }
          }
          .Animated {
            animation: fadeInOut 1s infinite;
          }
          /* Scrollbar styles */
          &::-webkit-scrollbar {
            width: 8px; /* Width of the scroll bar */
            @media only screen and (max-width: 767px) {
              width: 0px;
            }
          }
          &::-webkit-scrollbar-track {
            background: rgba(183, 251, 43, 0.2);
            border-radius: 2px;
          }
          &::-webkit-scrollbar-thumb {
            background: rgba(183, 251, 43, 0.4);
            border-radius: 10px;
            transition: 2s ease-in-out;
          }
          &::-webkit-scrollbar-thumb:hover {
            background: rgba(183, 251, 43, 0.6);
          }
        }
        .Skeletons {
          display: flex;
          flex-direction: column;
          padding-right: 5px;
          gap: 5px;
          position: relative;
          @media only screen and (max-width: 767px) {
            padding-right: 0px;
          }
          .CardSkl {
            border-radius: 5px;
            background-color: rgba(44, 44, 48, 1);
          }
          .profileSkl {
            top: 0;
            position: absolute;
          }
        }
      }
    }

    .Options {
      width: 100%;
      max-width: 100%;
      border-radius: 8px;
      display: flex;
      position: relative;
      background: rgba(33, 33, 37, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 15px;
      margin-bottom: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      box-sizing: border-box;
      
      &:hover {
        border-color: rgba(255, 255, 255, 0.12);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
      }
      
      @media only screen and (max-width: 767px) {
        max-width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
        height: auto;
        background: rgba(33, 33, 37, 0.95);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding: 15px 10px;
        flex-direction: column;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin-bottom: 0;
      }        .Filters {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          padding-bottom: 0px;
          
          @media only screen and (max-width: 767px) {
            flex-direction: column;
            padding-bottom: 0px;
          }
          
          .Select_container {
            width: 100%;
            flex-grow: 1;
            color: white;
            display: flex;
            gap: 8px;
            
            @media only screen and (max-width: 767px) {
              width: 100%;
              .HideIt {
                display: none;
              }
            }
          }
        .Other_filters {
          width: 100%;
          display: flex;
          gap: 8px;
          align-items: center;
          
          .SearchUser {
            flex-grow: 1;
            height: 100%;
            display: flex;
            align-items: flex-end;
            position: relative;
            @media only screen and (max-width: 767px) {
              display: none;
            }
            input {
              height: 42px;
              width: 100%;
              border-radius: 8px;
              padding: 12px 16px;
              outline: none;
              background: rgba(44, 44, 48, 0.6);
              border: 1px solid rgba(255, 255, 255, 0.1);
              font-size: 0.9rem;
              color: rgba(255, 255, 255, 0.9);
              transition: all 0.3s ease;
              
              &::placeholder {
                color: rgba(255, 255, 255, 0.5);
              }
              
              &:focus {
                border-color: var(--main_color);
                background: rgba(44, 44, 48, 0.8);
                box-shadow: 0 0 0 3px rgba(183, 251, 43, 0.1);
              }
            }
          }
          
          .ToMeButton {
            height: 42px;
            border-radius: 8px;
            cursor: pointer;
            border: 2px solid rgba(183, 251, 43, 0.4);
            background: linear-gradient(135deg, rgba(183, 251, 43, 0.1), rgba(183, 251, 43, 0.05));
            color: rgba(183, 251, 43, 0.9);
            font-size: 0.9rem;
            font-weight: 600;
            padding: 0px 20px;
            min-width: 80px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(183, 251, 43, 0.2), transparent);
              transition: left 0.5s ease;
            }
            
            &:hover {
              background: linear-gradient(135deg, rgba(183, 251, 43, 0.2), rgba(183, 251, 43, 0.1));
              border-color: rgba(183, 251, 43, 0.6);
              color: rgba(183, 251, 43, 1);
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(183, 251, 43, 0.2);
              
              &::before {
                left: 100%;
              }
            }
            
            &:active {
              transform: translateY(0);
            }
            
            @media only screen and (max-width: 767px) {
              width: 25%;
              position: absolute;
              bottom: 10px;
              left: 5px;
            }
          }
          .GenderFilter {
            width: 300px;
            height: 42px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            overflow: hidden;
            background: rgba(44, 44, 48, 0.4);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            
            &:hover {
              border-color: rgba(255, 255, 255, 0.15);
            }
            
            @media only screen and (max-width: 767px) {
              width: 70%;
            }
            
            span {
              font-family: var(--main_font);
              color: rgba(255, 255, 255, 0.7);
              font-weight: 500;
            }
            
            .Male {
              color: #87ceeb;
              padding: 0px 10px;
            }

            .Female {
              color: #ff69b4;
            }
            
            .All {
              color: rgba(255, 255, 255, 0.8);
            }

            .Male,
            .Female,
            .All {
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0px 15px;
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              
              @media only screen and (max-width: 767px) {
                padding: 0px 8px;
              }
              
              .GenderIcon {
                size: 50px;
              }
              
              &.selected {
                background: linear-gradient(135deg, rgba(183, 251, 43, 0.2), rgba(183, 251, 43, 0.1));
                color: rgba(183, 251, 43, 1);
                
                &::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 80%;
                  height: 2px;
                  background: linear-gradient(90deg, transparent, var(--main_color), transparent);
                }
              }
              
              &:hover:not(.selected) {
                background: rgba(255, 255, 255, 0.05);
                color: rgba(255, 255, 255, 0.9);
              }
            }
            
            .devider {
              width: 1px;
              height: 60%;
              background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0) 100%
              );
              align-self: center;
            }
          }
        }
      }
    }
  }
`;

})()),
"[project]/src/components/admission_status/AdmissionStatus.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const StatusContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AdmissionStatus__StatusContainer",
    componentId: "sc-8fde9966-0"
})`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StatusBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AdmissionStatus__StatusBadge",
    componentId: "sc-8fde9966-1"
})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  height: 26px;
  min-height: 26px;
  max-height: 26px;
  border-radius: 13px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  position: relative;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  min-width: 95px;
  max-width: 150px;
  overflow: visible;
  line-height: 1;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  cursor: ${(props)=>props.$clickable ? 'pointer' : 'default'};
  
  &:hover {
    ${(props)=>props.$clickable && `
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
    `}
  }
  
  .status-icon {
    font-size: 0.75rem;
    flex-shrink: 0;
    line-height: 1;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 13px;
    padding: 1px;
    background: ${(props)=>{
    switch(props.$status){
        case 'admitted':
            return 'linear-gradient(135deg, #22c55e, #16a34a, #15803d)';
        case 'not-admitted':
            return 'linear-gradient(135deg, #ef4444, #dc2626, #b91c1c)';
        default:
            return 'linear-gradient(135deg, #6b7280, #4b5563, #374151)';
    }
}};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }
  
  ${(props)=>{
    switch(props.$status){
        case 'admitted':
            return `
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(22, 163, 74, 0.25));
          color: #22c55e;
          border-color: rgba(34, 197, 94, 0.4);
        `;
        case 'not-admitted':
            return `
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(220, 38, 38, 0.25));
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.4);
        `;
        default:
            return `
          background: linear-gradient(135deg, rgba(107, 114, 128, 0.2), rgba(75, 85, 99, 0.2));
          color: #9ca3af;
          border-color: rgba(107, 114, 128, 0.3);
        `;
    }
}}
`;
const DialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AdmissionStatus__DialogOverlay",
    componentId: "sc-8fde9966-2"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: ${(props)=>props.$isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${(props)=>props.$isOpen ? 'fadeIn' : 'fadeOut'} 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
const DialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AdmissionStatus__DialogContent",
    componentId: "sc-8fde9966-3"
})`
  background: linear-gradient(135deg, rgba(33, 33, 37, 0.95), rgba(44, 44, 48, 0.95));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  margin: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform: translateY(-20px);
  animation: slideUp 0.3s ease;
  
  @media only screen and (max-width: 767px) {
    max-width: 320px;
    padding: 20px;
    margin: 10px;
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(-20px);
      opacity: 1;
    }
  }
`;
const DialogHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AdmissionStatus__DialogHeader",
    componentId: "sc-8fde9966-4"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  
  .dialog-icon {
    font-size: 1.2rem;
    color: #ef4444;
  }
  
  h3 {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }
`;
const DialogBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AdmissionStatus__DialogBody",
    componentId: "sc-8fde9966-5"
})`
  margin-bottom: 20px;
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
    word-wrap: break-word;
  }
  
  .reason-label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    margin-bottom: 4px;
    font-weight: 500;
  }
  
  .reason-text {
    color: #ef4444;
    font-weight: 600;
    font-size: 1rem;
  }
`;
const DialogActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AdmissionStatus__DialogActions",
    componentId: "sc-8fde9966-6"
})`
  display: flex;
  justify-content: flex-end;
  
  button {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: linear-gradient(135deg, #dc2626, #b91c1c);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  }
`;
const AdmissionStatus = ({ accepted, reason, isvalidated, cheating, level })=>{
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const getAdmissionStatus = ()=>{
        // Check cheating first - this overrides everything
        if (cheating === true) {
            return {
                status: 'not-admitted',
                text: 'Not Admitted',
                reason: 'Cheating',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"]
            };
        }
        // Check if accepted but didn't validate final exam and level <= 7
        if (accepted === 'yes' && isvalidated && isvalidated !== 'yes' && level <= 7) {
            return {
                status: 'not-admitted',
                text: 'Not Admitted',
                reason: 'Final exam',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"]
            };
        }
        // Special case: accepted=yes, reason=null, cheating=false, level>7, isvalidated=no -> Admitted
        if (accepted === 'yes' && (reason === null || reason === undefined) && cheating === false && level > 7 && isvalidated === 'no') {
            return {
                status: 'admitted',
                text: 'Admitted',
                reason: null,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"]
            };
        }
        // Standard admission logic
        const isAdmitted = accepted === 'yes' || accepted === true;
        if (isAdmitted) {
            return {
                status: 'admitted',
                text: 'Admitted',
                reason: null,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"]
            };
        } else {
            let rejectionReason = 'Staff decision';
            if (reason) {
                if (reason.toLowerCase() === 'non admitted') {
                    rejectionReason = 'Staff decision';
                } else if (reason.toLowerCase() !== 'admitted' && reason.toLowerCase() !== 'not admitted') {
                    rejectionReason = reason;
                }
            }
            return {
                status: 'not-admitted',
                text: 'Not Admitted',
                reason: rejectionReason,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"]
            };
        }
    };
    const { status, text, reason: statusReason, icon: StatusIcon } = getAdmissionStatus();
    const handleBadgeClick = ()=>{
        if (status === 'not-admitted' && statusReason) {
            setIsDialogOpen(true);
        }
    };
    const handleCloseDialog = ()=>{
        setIsDialogOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusContainer, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                    $status: status,
                    $clickable: status === 'not-admitted' && !!statusReason,
                    onClick: handleBadgeClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusIcon, {
                            className: "status-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        status === 'admitted' ? 'Admitted' : 'Non admitted'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {
                $isOpen: isDialogOpen,
                onClick: handleCloseDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogContent, {
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogHeader, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"], {
                                    className: "dialog-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Admission Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogBody, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reason-label",
                                    children: "Reason for non-admission:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reason-text",
                                    children: statusReason
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogActions, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCloseDialog,
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admission_status/AdmissionStatus.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = AdmissionStatus;

})()),
"[project]/src/app/ranking/compoents/RankCard.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admission_status$2f$AdmissionStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/admission_status/AdmissionStatus.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const StyledCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RankCard__StyledCard",
    componentId: "sc-277cb229-0"
})`
  width: 100%;
  min-height: 65px;
  background-color: ${(props)=>props.$is_even ? "#212125" : "#2c2c30"};
  /* background: ${(props)=>props.$is_user ? "linear-gradient(337deg, rgba(183,251,43,1) 30%, rgba(110,157,13,1) 100%);" : props.$rank === 1 || props.$rank === 2 || props.$rank === 3 ? "linear-gradient(291deg, rgba(245,206,0,1) 0%, rgba(224,189,0,1) 100%);" : "#212125"}; */
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 5px solid ${(props)=>props.$rank === 1 || props.$rank === 2 || props.$rank === 3 ? "#FFD700" : props.$is_user ? "var(--main_color_light)" : "#2c2c30"};
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    height: 60px;
  }

  &:after {
    content: "";
    border-radius: 3px;
    width: 3px;
    height: 80%;
    position: absolute;
    left: 0;
    background-color: ${(props)=>props.$rank >= 1 && props.$rank <= 3 ? "#ffd700" : "var(--main_color)"};
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    background: ${(props)=>props.$is_user ? "linear-gradient(90deg, rgba(183,251,43, 0.3) 0%, rgba(183,251,43,0) 8%);" : props.$rank >= 1 && props.$rank <= 3 ? "linear-gradient(90deg, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 8%);" : ""};
    position: absolute;
    left: 0;

    @media only screen and (max-width: 767px) {
      background: ${(props)=>props.$is_user ? "linear-gradient(90deg, rgba(183,251,43, 0.3) 0%, rgba(183,251,43,0) 25%);" : props.$rank >= 1 && props.$rank <= 3 ? "linear-gradient(90deg, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 25%);" : ""};
    }
  }

  &:hover {
    box-shadow: ${(props)=>props.$rank === 1 || props.$rank === 2 || props.$rank === 3 ? "rgb(255, 215, 0, 0.1)" : "rgba(0, 0, 0, 0.1)"}
        3px 12px 34px 0px,
      ${(props)=>props.$rank === 1 || props.$rank === 2 || props.$rank === 3 ? "rgb(255, 215, 0, 0.4)" : "rgba(0, 0, 0, 0.1)"}
        0px 1px 2px 0px;
  }

  .Card_Avatar {
    width: 60px;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: relative;
    background-color: var(--border_grey);
    background-image: ${(props)=>`url(${props.$avatar})`};
    background-position: center;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.1s ease-in-out;
    z-index: 1;
  }

  .Card_Rank {
    z-index: 1;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Rank_icon {
      width: 25px;
    }

    span {
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 1.2rem;
      color: white;
      font-family: var(--playable_font);
    }
  }

  .Card_Data {
    z-index: 1;
    margin-left: 10px;
    font-family: "Poppins", sans-serif;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    .Card_FullName {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
      .VerifiedIcon {
        color : var(--main_color_light);
      }
    }

    h1 {
      font-size: 1.1rem;
      font-weight: 400;
      font-style: normal;
      color: white;
      opacity: 0.7;
    }

    .Card_UserName {
      font-size: 0.8rem;
      font-weight: 300;
      color: white;
      opacity: 0.5;
    }
  }

  .Card_level {
    z-index: 1;
    position: absolute;
    right: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 4px;
    min-width: 100px;
    max-width: 180px;

    span {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      border-radius: 12px;
      background: linear-gradient(135deg, rgba(33, 33, 37, 0.8), rgba(44, 44, 48, 0.6));
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(183, 251, 43, 0.2);
      font-size: 1rem;
      font-weight: 600;
      color: var(--main_color);
      text-shadow: 0 0 8px rgba(183, 251, 43, 0.3);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(183, 251, 43, 0.1), transparent);
        transition: left 0.5s ease;
      }
      
      &:hover {
        transform: translateY(-2px);
        border-color: rgba(183, 251, 43, 0.4);
        box-shadow: 0 8px 25px rgba(183, 251, 43, 0.15);
        
        &::before {
          left: 100%;
        }
      }
    }
  }
`;
const RankCard = ({ id, FullName, UserName, Rank, Level, img, setSelectedId, IsUser, is_verified, forwardedRef, is_even, nickname, accepted, reason, isvalidated, cheating })=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const handleClick = ()=>{
        setSelectedId(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledCard, {
        $rank: Rank,
        $avatar: img,
        onClick: handleClick,
        $is_user: IsUser,
        ref: forwardedRef,
        $is_even: is_even,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "Card_Rank",
                children: Rank >= 1 && Rank <= 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "Rank_icon",
                    src: `/assets/icons/${Rank}.png`,
                    alt: `Rank ${Rank}`
                }, void 0, false, {
                    fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                    lineNumber: 281,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: Rank
                }, void 0, false, {
                    fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                    lineNumber: 287,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "Card_Avatar",
                children: !img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "76",
                    height: "20",
                    viewBox: "0 0 76 20",
                    fill: "var(--Par_grey)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2.8333 17.6623H5.92418V2.33766H2.31816V5.45455H0V1.49012e-07H8.75748V17.6623H11.8484V20H2.8333V17.6623Z",
                            fill: "var(--Par_grey)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21.3785 17.6623H30.6512V10.9091H22.1513V8.57143H30.6512V2.33766H21.3785V0H33.4845V20H21.3785V17.6623Z",
                            fill: "var(--Par_grey)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M42.2419 17.6623H51.5146V10.9091H43.0147V8.57143H51.5146V2.33766H42.2419V0H54.3479V20H42.2419V17.6623Z",
                            fill: "var(--Par_grey)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M72.6355 2.33766H64.9084V7.27273H62.5902V0H75.2113V20H72.6355V2.33766Z",
                            fill: "var(--Par_grey)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                    lineNumber: 292,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "Card_Data",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "Card_FullName",
                        children: [
                            nickname ? nickname : FullName,
                            is_verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckSquare"], {
                                className: "VerifiedIcon"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                                lineNumber: 321,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "Card_UserName",
                        children: UserName
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "Card_level",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: Level.toFixed(2)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    (accepted !== undefined || cheating !== undefined) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admission_status$2f$AdmissionStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        accepted: accepted || false,
                        reason: reason || null,
                        isvalidated: isvalidated || false,
                        cheating: cheating || false,
                        level: Level
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
};
const ForwardedRankCard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RankCard, {
        ...props,
        forwardedRef: ref
    }, void 0, false, {
        fileName: "[project]/src/app/ranking/compoents/RankCard.tsx",
        lineNumber: 344,
        columnNumber: 5
    }, this));
ForwardedRankCard.displayName = "ForwardedRankCard";
const __TURBOPACK__default__export__ = ForwardedRankCard;

})()),
"[project]/src/app/ranking/compoents/EnhancedRankCard.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$RankCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ranking/compoents/RankCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AdmissionContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contexts/AdmissionContext.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const EnhancedRankCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ UserName, ...props }, ref)=>{
    const { poolerData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AdmissionContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePoolerData"])(UserName);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$RankCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        UserName: UserName,
        accepted: poolerData?.accepted,
        reason: poolerData?.reason,
        isvalidated: poolerData?.isvalidated,
        cheating: poolerData?.cheating,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/app/ranking/compoents/EnhancedRankCard.tsx",
        lineNumber: 24,
        columnNumber: 7
    }, this);
});
EnhancedRankCard.displayName = 'EnhancedRankCard';
const __TURBOPACK__default__export__ = EnhancedRankCard;

})()),
"[project]/src/components/drop_down/dropdown.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>CustomDropDown
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$base$2f$Select$2f$Select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/base/Select/Select.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$base$2f$Option$2f$Option$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/base/Option/Option.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/styled.js [app-ssr] (ecmascript) <export default as styled>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function CustomDropDown({ data, getValue, renderItem, onChange, disabled, value }) {
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value || getValue(data[0]));
    // Update selectedItem when value prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value !== undefined) {
            setSelectedItem(value);
        }
    }, [
        value
    ]);
    const handleChange = (event, newValue)=>{
        setSelectedItem(newValue);
        if (newValue) {
            onChange(newValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
        value: selectedItem,
        onChange: handleChange,
        children: data.map((item, key)=>{
            const value = getValue(item);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                value: value,
                disabled: disabled,
                children: [
                    renderItem(item),
                    disabled && key !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "soon",
                        children: "Soon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drop_down/dropdown.tsx",
                        lineNumber: 57,
                        columnNumber: 39
                    }, this)
                ]
            }, value, true, {
                fileName: "[project]/src/components/drop_down/dropdown.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/drop_down/dropdown.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
function Select(props) {
    const slots = {
        root: Button,
        listbox: Listbox,
        popup: Popup,
        ...props.slots
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$base$2f$Select$2f$Select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
        ...props,
        slots: slots
    }, void 0, false, {
        fileName: "[project]/src/components/drop_down/dropdown.tsx",
        lineNumber: 73,
        columnNumber: 10
    }, this);
}
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(function Button(props, ref) {
    const { ...other } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
        type: "button",
        ...other,
        ref: ref,
        children: other.children
    }, void 0, false, {
        fileName: "[project]/src/components/drop_down/dropdown.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
});
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])("button")`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 200px;
  padding: 8px 12px;
  border-radius: 5px;
  text-align: left;
  line-height: 1.5;
  background: #fff;
  color: #1c2025;
  position: relative;
  width: 100%;
  background-color: transparent;
  border: 1px solid rgba(44, 44, 48, 1);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    background: rgba(44, 44, 48, 1);
  }

  /* Add arrow icon */
  &::after {
    content: "";
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    border: solid rgba(255, 255, 255, 0.5);
    border-width: 0 2px 2px 0;
    padding: 3px;
    display: inline-block;
    transform: translateY(-50%) rotate(45deg);
  }

  &[aria-expanded="true"]::after {
    transform: translateY(-50%) rotate(-135deg);
  }

  @media (max-width: 768px) {
    display: ${(props)=>props.disabled ? "none" : "block"};
  }
`;
const Listbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])("ul")`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 3px;
  margin: 12px 0;
  min-width: 220px;
  border-radius: 8px;
  overflow: auto;
  outline: 0px;
  background: rgba(10, 11, 20, 0.8);
  border: 1px solid rgba(44, 44, 48, 1);
  color: white;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  font-family: var(--main_font);
  /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05); */
`;
const Option = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$base$2f$Option$2f$Option$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Option"])`
  width: 100%;
  list-style: none;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .IconOption {
    margin-right: 5px;
  }

  &:last-of-type {
    border-bottom: none;
  }

  &[aria-selected="true"] {
    background-color: var(--main_color);
    color: var(--main_color_dark);
  }

  &[data-highlighted="true"] {
    background-color: #f3f6f9;
    color: #1c2025;
  }

  &:focus-visible {
    outline: 3px solid #3399ff;
  }

  &[aria-selected="true"][data-highlighted="true"] {
    background-color: #daecff;
    color: #3399ff;
  }

  &[aria-disabled="true"] {
    color: #dae2ed;
    cursor: not-allowed;
    color: var(--Par_grey);
    display: flex;
    justify-content: space-between;
    .soon {
      background-color: var(--Par_grey);
      color: white;
      font-weight: 400;
      padding: 2px 5px;
      border-radius: 3px;
    }
  }

  &:hover:not([aria-disabled="true"]) {
    background-color: rgba(44, 44, 48, 1);
    color: white;
  }
`;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])("div")`
  z-index: 999;
`;

})()),
"[project]/public/BinaryBack.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/BinaryBack.fcdfbd09.png");
})()),
"[project]/public/BinaryBack.png.mjs { IMAGE => \"[project]/public/BinaryBack.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$BinaryBack$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/BinaryBack.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$BinaryBack$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1920,
    height: 1080,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfklEQVR42j2MSQrDMBAEBbrZD7B9y+LECHITaEP7hv7/orRyyKFmmOmiifeexRg/OWcWQrgAc84xrfVljHkThA+Er977ifBurb2llM5JKeVJMPZa69Fa2yFukDbsHfcxxjgIqhZUrWBRSv2Yv7khr1OgUkrKOadCiD/zB4l+ARnXIED1hvw5AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/utils/HexToRgba.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HexToRgba": ()=>HexToRgba
});
const HexToRgba = (hex, alpha)=>{
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

})()),
"[project]/src/hooks/useUserImage.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "clearImageCache": ()=>clearImageCache,
    "fetchUserImageFromAPI": ()=>fetchUserImageFromAPI,
    "useUserImage": ()=>useUserImage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
// Cache to store fetched images and avoid duplicate API calls
const imageCache = new Map();
const pendingRequests = new Map();
const useUserImage = (username, fallbackUrl)=>{
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fallbackUrl || null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If we already have a valid image URL, don't fetch
        if (fallbackUrl && fallbackUrl !== null && fallbackUrl !== '' && fallbackUrl !== 'null') {
            setImageUrl(fallbackUrl);
            return;
        }
        // If no session or username, can't fetch
        if (!session?.accessToken || !username) {
            return;
        }
        // Check cache first
        if (imageCache.has(username)) {
            const cachedUrl = imageCache.get(username);
            setImageUrl(cachedUrl || null);
            return;
        }
        // Check if there's already a pending request for this user
        if (pendingRequests.has(username)) {
            pendingRequests.get(username)?.then(setImageUrl);
            return;
        }
        const fetchUserImage = async ()=>{
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.intra.42.fr/v2/users/${username}`, {
                    headers: {
                        'Authorization': `Bearer ${session.accessToken}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch user data: ${response.status}`);
                }
                const userData = await response.json();
                // Extract image URL from 42 API response
                const userImageUrl = userData?.image?.versions?.small || userData?.image?.link || null;
                // Cache the result
                imageCache.set(username, userImageUrl);
                return userImageUrl;
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to fetch user image';
                setError(errorMessage);
                // Cache null result to avoid repeated failed requests
                imageCache.set(username, null);
                return null;
            } finally{
                setIsLoading(false);
                // Remove from pending requests
                pendingRequests.delete(username);
            }
        };
        // Store the promise to avoid duplicate requests
        const promise = fetchUserImage();
        pendingRequests.set(username, promise);
        promise.then(setImageUrl);
    }, [
        username,
        fallbackUrl,
        session?.accessToken
    ]);
    return {
        imageUrl,
        isLoading,
        error
    };
};
const fetchUserImageFromAPI = async (username, accessToken)=>{
    // Check cache first
    if (imageCache.has(username)) {
        return imageCache.get(username) || null;
    }
    try {
        const response = await fetch(`https://api.intra.42.fr/v2/users/${username}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch user data: ${response.status}`);
        }
        const userData = await response.json();
        const imageUrl = userData?.image?.versions?.small || userData?.image?.link || null;
        // Cache the result
        imageCache.set(username, imageUrl);
        return imageUrl;
    } catch (error) {
        console.error('Error fetching user image from 42 API:', error);
        // Cache null result to avoid repeated failed requests
        imageCache.set(username, null);
        return null;
    }
};
const clearImageCache = ()=>{
    imageCache.clear();
    pendingRequests.clear();
};

})()),
"[project]/src/components/feedback_avatar/FeedbackAvatar.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useUserImage.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const AvatarContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FeedbackAvatar__AvatarContainer",
    componentId: "sc-2d16c1a9-0"
})`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  ${(props)=>!props.$hasImage && `
    background: linear-gradient(135deg, #4a5568, #2d3748);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
    text-transform: uppercase;
  `}
  
  ${(props)=>props.$isLoading && `
    background: linear-gradient(135deg, #4a5568, #2d3748);
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `}
  
  &:hover {
    transform: scale(1.05);
    border-color: var(--main_color);
  }
`;
const FeedbackAvatar = ({ username, imageUrl, nickname, className, onClick })=>{
    const { imageUrl: fetchedImageUrl, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserImage"])(username, imageUrl);
    // Use fetched image if original was null, otherwise use original
    const finalImageUrl = imageUrl || fetchedImageUrl;
    // Generate initials from nickname or username
    const getInitials = (name)=>{
        if (!name) return '??';
        return name.split(' ').map((part)=>part.trim()).filter((part)=>part.length > 0).map((part)=>part[0].toUpperCase()).join('').slice(0, 2);
    };
    const initials = getInitials(nickname || username);
    const handleClick = ()=>{
        if (onClick) {
            onClick();
        } else {
            window.open(`https://profile.intra.42.fr/users/${username}`, "_blank");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarContainer, {
        className: className,
        $hasImage: !!finalImageUrl,
        $isLoading: isLoading,
        style: finalImageUrl ? {
            backgroundImage: `url(${finalImageUrl})`
        } : {},
        onClick: handleClick,
        title: `${nickname || username} - Click to view 42 profile`,
        children: !finalImageUrl && !isLoading && initials
    }, void 0, false, {
        fileName: "[project]/src/components/feedback_avatar/FeedbackAvatar.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FeedbackAvatar;

})()),
"[project]/src/components/stats_card/StatsCard.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const StyledStatsCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StatsCard__StyledStatsCard",
    componentId: "sc-d24a9840-0"
})`
  padding: 16px 12px;
  background: linear-gradient(135deg, rgba(44, 44, 48, 0.8), rgba(33, 33, 37, 0.9));
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: ${(props)=>props.$isClickable ? 'pointer' : 'default'};
  
  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${(props)=>props.$color || 'var(--main_color)'}, rgba(183, 251, 43, 0.6));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .stats-icon {
    color: ${(props)=>props.$color || 'var(--main_color)'};
    font-size: 1.4rem;
    margin-bottom: 4px;
    transition: all 0.3s ease;
  }
  
  &:hover .stats-icon {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  
  .stats-value {
    font-family: var(--main_font);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    line-height: 1.2;
    word-break: break-word;
  }
  
  .stats-label {
    font-family: var(--Sec_Font);
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    font-size: 0.75rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;
const StatsCard = ({ icon: Icon, value, label, color, className, onClick, isClickable = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledStatsCard, {
        $color: color,
        $isClickable: isClickable,
        className: className,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "stats-icon"
            }, void 0, false, {
                fileName: "[project]/src/components/stats_card/StatsCard.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-value",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/stats_card/StatsCard.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/stats_card/StatsCard.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stats_card/StatsCard.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = StatsCard;

})()),
"[project]/src/app/ranking/compoents/profile.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$BinaryBack$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$BinaryBack$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/BinaryBack.png.mjs { IMAGE => "[project]/public/BinaryBack.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$HexToRgba$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/HexToRgba.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Skeleton/Skeleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admission_status$2f$AdmissionStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/admission_status/AdmissionStatus.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bio_editor$2f$BioEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/bio_editor/BioEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback_avatar$2f$FeedbackAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/feedback_avatar/FeedbackAvatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stats_card$2f$StatsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/stats_card/StatsCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modal/modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$confirmation_dialog$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/confirmation_dialog/ConfirmationDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const UpdateUser = (data, setUserData)=>{
    const ExtractedUserData = {
        id: data.id,
        full_name: `${data.user.first_name} ${data.user.last_name}`,
        email: data.user.email,
        login: data.user.login,
        level: data.level.toFixed(2),
        img: data.user.image?.versions.small,
        location: data.user.location,
        wallet: data.user.wallet,
        intra_link: "data.user.url",
        corrections_points: data.user.correction_point,
        is_pooler: false,
        nickname: data.nickname || null,
        bio: data.bio || null,
        // Add admission fields from data
        accepted: data.accepted || false,
        reason: data.reason || null,
        isvalidated: data.isvalidated || false,
        cheating: data.cheating || false
    };
    setUserData(ExtractedUserData);
};
const StyledProfile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "profile__StyledProfile",
    componentId: "sc-98f46869-0"
})`
  /* width: 100%; */
  flex: 1;
  height: auto;
  background-color: #212125;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .User_Banner {
    width: 100%;
    height: 150px;
    position: sticky;
    top: 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(
      circle,
      ${(props)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$HexToRgba$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexToRgba"])(props.$second_color, 1)} 0%`},
      ${(props)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$HexToRgba$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexToRgba"])(props.$primary_color, 1)} 100%`}
    );
    position: relative;

    &:after {
      width: 100%;
      height: 100%;
      position: absolute;
      content: "";
      background-image: url(${(props)=>props.$banner_url || __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$BinaryBack$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$BinaryBack$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src});
      background-size: cover;
      background-position: center;
      opacity: ${(props)=>props.$banner_url ? 1 : 0.6};
    }

    .Userkind {
      position: absolute;
      color: white;
      opacity: 0.5;
    }
    .BinaryBack {
      width: 100%;
      opacity: 0.5;
    }
    .Profile_UserIcons {
      position: absolute;
      right: 0;
      top: 5px;
      z-index: 2;

      ._42logo {
        width: 30px;
        background-color: transparent;
        fill: white;
        margin: 0px 10px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }
    .Skeleton_avatar {
      position: absolute;
      bottom: -15px;
      left: 10px;
      border-radius: 20%;
      background-color: var(--main_background);
    }
    .Profile_avatar {
      width: 90px;
      height: 90px;
      background-color: var(--main_background);
      border-radius: 20%;
      position: absolute;
      bottom: -15px;
      left: 10px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;
      .Profile_Infos {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 20px;
        left: 110%;
        width: auto;
        .Profile_Full_Name {
          /* text-transform : uppercase; */
          font-size: 1.4rem;
          font-weight: 500;
          color: white;
          white-space: nowrap;
        }
        .Profile_UserName {
          font-weight: 400;
          color: white;
        }
      }
    }
    .Profil_UserLevel {
      position: absolute;
      padding: 3px;
      border-radius: 4px;
      background: rgba(19, 19, 19, 0.01);
      backdrop-filter: blur(33px);
      -webkit-backdrop-filter: blur(33px);
      position: absolute;
      right: 10px;
      bottom: 5px;
      z-index: 2;

      span {
        font-size: 1.3rem;
        color: white;
        font-weight: 300;
      }
    }
  }

  .Feedback_feature {
    margin-top: 10px;
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 4px;
    align-items: center;
    padding: 4px;

    button {
      width: 200px;
      height: 45px;
      background-color: var(--main_color);
      color: var(--main_color_dark);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      font-weight: 500;
      font-size: 1rem;
      outline: none;
    }
    input {
      width: 100%;
      height: 45px;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 1rem;
      font-family: var(--main_font);
      outline: none;
      padding: 10px 5px;
      resize: none;
    }
  }

  .ContainerProfile {
    .User_Stats {
      width: 100%;
      margin-top: 20px;
      display: flex;
      gap: 8px;
      padding: 0px 8px;
    }
  }
`;
const Profile = ({ StudentData, Promo, list_is_loading })=>{
    //Stats
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [IsModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    //Modal
    const handleOpenModal = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("This feature is not available yet");
    const handleCloseModal = ()=>setIsModalOpen(false);
    //Feedbacks
    const [receivedFeedbacks, setReceivedFeedbacks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [givenFeedbacks, setGivenFeedbacks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [feedbackText, setFeedbackText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showDeleteDialog, setShowDeleteDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedbackToDelete, setFeedbackToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function leaveFeedback(recieverLogin, text) {
        // user should be verified before being able to provide feedbacks
        if (!session.data?.user?.verified) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("You must be verified to leave feedback.");
            return;
        }
        // Approximate 2-line limit: max 2 line breaks OR ~200 characters
        const lineCount = text.split("\n").length;
        if (lineCount > 2 || text.length > 200) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Feedback must not exceed 2 lines.");
            return;
        }
        try {
            const res = await fetch("/api/students/feedbacks/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _userName: recieverLogin,
                    feedbackText: text.trim()
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to send feedback");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Feedback sent successfully!");
            setFeedbackText(""); // Clear the feedback text
            await fetchReceivedFeedbacks();
            await fetchGivenFeedbacks();
        } catch (err) {
            console.error("Error sending feedback:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error sending feedback.");
        }
    }
    const fetchReceivedFeedbacks = async ()=>{
        if (!userData?.login) return;
        try {
            const res = await fetch(`/api/students/feedbacks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    login: userData.login
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to fetch feedbacks");
            setReceivedFeedbacks(data.feedbacks);
        } catch (err) {
            console.error("Error fetching feedbacks:", err);
        }
    };
    const fetchGivenFeedbacks = async ()=>{
        try {
            const res = await fetch(`/api/students/feedbacks/given`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to fetch given feedbacks");
            setGivenFeedbacks(data.feedbacks);
        } catch (err) {
            console.error("Error fetching given feedbacks:", err);
        }
    };
    const deleteFeedback = async (feedbackId)=>{
        try {
            const res = await fetch(`/api/students/feedbacks/delete`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    feedbackId
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to delete feedback");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Feedback deleted successfully!");
            await fetchGivenFeedbacks(); // Refresh given feedbacks
            await fetchReceivedFeedbacks(); // Refresh received feedbacks in case user deleted feedback to current profile
        } catch (err) {
            console.error("Error deleting feedback:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error deleting feedback.");
        }
    };
    const showDeleteConfirmation = (feedbackId)=>{
        setFeedbackToDelete(feedbackId);
        setShowDeleteDialog(true);
    };
    const handleConfirmDelete = async ()=>{
        if (feedbackToDelete) {
            await deleteFeedback(feedbackToDelete);
            setShowDeleteDialog(false);
            setFeedbackToDelete(null);
        }
    };
    const handleCancelDelete = ()=>{
        setShowDeleteDialog(false);
        setFeedbackToDelete(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (StudentData != undefined) UpdateUser(StudentData, setUserData);
        setReceivedFeedbacks([]); // Reset feedbacks when StudentData changes
    }, [
        StudentData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchReceivedFeedbacks();
        fetchGivenFeedbacks();
    }, [
        userData?.id
    ]);
    function formatTimeAgo(isoDate) {
        const now = new Date();
        const then = new Date(isoDate);
        const diffMs = now.getTime() - then.getTime();
        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        if (weeks > 0) return `${weeks}w ago`;
        if (days > 0) return `${days}d ago`;
        if (hours > 0) return `${hours}h ago`;
        if (minutes > 0) return `${minutes}m ago`;
        if (seconds > 0) return `${seconds}s ago`;
        return "just now";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledProfile, {
        $primary_color: Promo.Prm_color,
        $second_color: Promo.sec_color,
        $level: userData ? userData.level : "0",
        $promo_id: Promo.id,
        $banner_url: StudentData?.banner_url,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: IsModalOpen,
                onClose: handleCloseModal
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$confirmation_dialog$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showDeleteDialog,
                title: "Delete Feedback",
                message: "Are you sure you want to delete this feedback? This action cannot be undone.",
                confirmText: "Delete",
                cancelText: "Cancel",
                onConfirm: handleConfirmDelete,
                onCancel: handleCancelDelete
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "User_Banner",
                children: [
                    !list_is_loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: userData?.login === "Captain" ? "https://github.com/AchrafMez" : userData?.login === "Zero" ? "https://github.com/hassankarrach" : `https://profile.intra.42.fr/users/${userData?.login}`,
                        target: "_blank",
                        style: {
                            textDecoration: "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "Profile_avatar",
                            style: {
                                backgroundImage: `url(${userData?.img})`
                            },
                            children: [
                                !userData?.img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "76",
                                    height: "20",
                                    viewBox: "0 0 76 20",
                                    fill: "rgba(44,44,48,1)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M2.8333 17.6623H5.92418V2.33766H2.31816V5.45455H0V1.49012e-07H8.75748V17.6623H11.8484V20H2.8333V17.6623Z",
                                            fill: "rgba(44,44,48,1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 484,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21.3785 17.6623H30.6512V10.9091H22.1513V8.57143H30.6512V2.33766H21.3785V0H33.4845V20H21.3785V17.6623Z",
                                            fill: "rgba(44,44,48,1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 488,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M42.2419 17.6623H51.5146V10.9091H43.0147V8.57143H51.5146V2.33766H42.2419V0H54.3479V20H42.2419V17.6623Z",
                                            fill: "rgba(44,44,48,1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 492,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M72.6355 2.33766H64.9084V7.27273H62.5902V0H75.2113V20H72.6355V2.33766Z",
                                            fill: "rgba(44,44,48,1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 478,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "Profile_Infos",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "Profile_Full_Name",
                                            children: [
                                                userData && userData.nickname ? userData.nickname : userData?.full_name,
                                                StudentData?.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckSquare"], {
                                                    size: 18,
                                                    style: {
                                                        marginLeft: "5px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 503,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "Profile_UserName",
                                            children: userData?.login
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 461,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "Skeleton_avatar",
                        animation: "wave",
                        variant: "circular",
                        width: "90px",
                        height: "90px"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 516,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "Profile_UserIcons",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    id: "polygon7",
                                    points: "597.9,114.2 762.7,-51.1 597.9,-51.1 "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 537,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    id: "polygon9",
                                    points: "762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1 "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    id: "polygon11",
                                    points: "928,279.1 762.7,443.9 928,443.9 "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 545,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "Profil_UserLevel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: userData?.level
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ContainerProfile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "User_Stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stats_card$2f$StatsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCoins"],
                                value: `${userData ? userData.wallet : "-"} ₳`,
                                label: "Wallet",
                                color: "#ffd700"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stats_card$2f$StatsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGraduationCap"],
                                value: userData?.corrections_points || 0,
                                label: "Evaluation Points",
                                color: "#4CAF50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stats_card$2f$StatsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEye"],
                                value: userData && userData.location ? userData.location : "Offline",
                                label: "Status",
                                color: userData?.location ? "#56ab2f" : "#e53935"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this),
                    StudentData && (StudentData.accepted !== undefined || StudentData.cheating !== undefined) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '20px',
                            padding: '15px',
                            background: 'rgba(33, 33, 37, 0.4)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginBottom: '10px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                },
                                children: "Admission Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admission_status$2f$AdmissionStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                accepted: StudentData.accepted || false,
                                reason: StudentData.reason || null,
                                isvalidated: StudentData.isvalidated || false,
                                cheating: StudentData.cheating || false,
                                level: parseFloat(userData?.level || '0')
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                lineNumber: 598,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 580,
                        columnNumber: 11
                    }, this),
                    userData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '20px',
                            padding: '15px',
                            background: 'rgba(33, 33, 37, 0.4)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bio_editor$2f$BioEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            initialBio: userData.bio,
                            isEditable: session?.data?.user?.login === userData.login,
                            isOwnProfile: session?.data?.user?.login === userData.login
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                            lineNumber: 618,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 610,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledUserFeedbacks, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Feedbacks :"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 628,
                        columnNumber: 9
                    }, this),
                    (!receivedFeedbacks || receivedFeedbacks.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "No feedbacks received yet."
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 630,
                        columnNumber: 11
                    }, this),
                    receivedFeedbacks.map((feedback, key)=>{
                        const isMyFeedback = session.data?.user?.login === feedback.giver.user_name;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "Feedback_el",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback_avatar$2f$FeedbackAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    username: feedback.giver.user_name,
                                    imageUrl: feedback.giver.image_url,
                                    nickname: feedback.giver.nickname,
                                    className: "avatar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 640,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "feedback_details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "user_name",
                                            children: [
                                                feedback.giver.nickname || feedback.giver.user_name,
                                                feedback.giver.is_verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckSquare"], {
                                                    size: 16,
                                                    style: {
                                                        marginLeft: "5px",
                                                        color: "var(--main_color)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 647,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "FeedbackText",
                                            children: feedback.feedback_text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 660,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "time",
                                            children: formatTimeAgo(feedback.created_at)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 646,
                                    columnNumber: 15
                                }, this),
                                isMyFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "delete-btn",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        showDeleteConfirmation(feedback.id);
                                    },
                                    title: "Delete your feedback",
                                    children: "🗑️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                                    lineNumber: 668,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                            lineNumber: 636,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "Feedback_feature",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Leave a feedback...",
                        value: feedbackText,
                        onChange: (e)=>setFeedbackText(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 685,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>leaveFeedback(userData?.login || "", feedbackText),
                        children: "Send Feedback"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/profile.tsx",
                lineNumber: 684,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ranking/compoents/profile.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, this);
};
const StyledUserFeedbacks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "profile__StyledUserFeedbacks",
    componentId: "sc-98f46869-1"
})`
  width: 100%;
  flex: 1;
  padding: 5px;
  overflow-y: auto;
  display: flex;
  gap: 5px;
  flex-direction: column;
  overflow-x: hidden;

  .feedback-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .feedback-tabs {
    display: flex;
    gap: 5px;
  }

  .tab {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    font-weight: 500;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
    }

    &.active {
      background: var(--main_color);
      color: white;
      border-color: var(--main_color);
    }
  }

  h2 {
    color: rgba(255, 255, 255, 0.6);
    padding: 10px 0px;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }

  .Feedback_el {
    width: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4px;
    gap: 4px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover {
      background-color: rgba(255, 255, 255, 0.07);
    }

    &.given-feedback {
      cursor: default;
      
      .avatar {
        cursor: pointer;
      }
    }

    .delete-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
      border: none;
      border-radius: 50%;
      color: white;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
      opacity: 0;
      transform: scale(0.8);

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.5);
      }

      &:active {
        transform: scale(0.95);
      }
    }
    
    &:hover .delete-btn {
      opacity: 1;
      transform: scale(1);
    }

    .avatar {
      min-width: 40px;
      min-height: 40px;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      background-position: center;
      background-size: cover;
    }

    .feedback_details {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: center;
      align-items: flex-start;
      padding: 5px;
      padding-right: 35px; /* Space for delete button */
      
      .FeedbackText {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 5px;
        word-wrap: break-word;
        max-width: 350px;
        font-weight: 300;
      }
      
      .time {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.3);
        position: absolute;
        right: 0px;
        font-weight: 200;
      }
    }
    
    .user_name {
      text-transform: uppercase;
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
const __TURBOPACK__default__export__ = Profile;

})()),
"[project]/src/data/Campuses.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Campuses": ()=>Campuses,
    "Filters": ()=>Filters,
    "Promos": ()=>Promos
});
const Filters = [
    {
        id: 1337,
        name: "All Students"
    },
    {
        id: 1338,
        name: "Alumni",
        disabled: false
    },
    {
        id: 6,
        name: "Jun Pool",
        disabled: false
    },
    {
        id: 7,
        name: "Jul Pool",
        disabled: false
    },
    {
        id: 8,
        name: "Aug Pool",
        disabled: false
    }
];
const Campuses = [
    {
        id: 75,
        name: "Rabat"
    },
    {
        id: 21,
        name: "Ben Guerir"
    },
    {
        id: 55,
        name: "Med A7san campus"
    },
    {
        id: 16,
        name: "Khouribga"
    }
];
const Promos = [
    {
        id: 0,
        name: "2024",
        start_date: "2024-08-26T09:37:00.000Z",
        campus_start_dates: {
            21: "2024-08-26T09:37:00.000Z",
            16: "2024-08-26T09:37:00.000Z",
            55: "2024-08-26T09:37:00.000Z",
            75: "2024-08-26T09:37:00.000Z"
        },
        Prm_color: "#8891a1",
        sec_color: "#b2bbca"
    },
    {
        id: 1,
        name: "2023",
        start_date: "2023-10-30T08:37:00.000Z",
        campus_start_dates: {
            21: "2023-10-30T08:37:00.000Z",
            16: "2023-10-30T08:37:00.000Z",
            55: "2023-12-04T08:37:00.000Z"
        },
        Prm_color: "#000000",
        sec_color: "#343434"
    },
    {
        id: 2,
        name: "2022",
        start_date: "2022-10-05T06:00:00.000Z",
        campus_start_dates: {
            21: "2022-10-05T06:00:00.000Z",
            16: "2022-10-05T07:00:00.000Z",
            55: "2022-09-28T07:00:00.000Z"
        },
        Prm_color: "#E52B1D",
        sec_color: "#ff7638"
    },
    {
        id: 3,
        name: "2021",
        start_date: "2021-08-02T08:37:00.000Z",
        campus_start_dates: {
            21: "2021-08-02T08:37:00.000Z",
            16: "2021-11-01T08:00:00.000Z"
        },
        Prm_color: "#024325",
        sec_color: "#2ACF79",
        disabled: true
    },
    {
        id: 4,
        name: "2019",
        start_date: "2019-07-01T07:37:00.000Z",
        campus_start_dates: {
            21: "2019-07-01T07:37:00.000Z",
            16: "2019-10-16T08:37:00.000Z"
        },
        Prm_color: "#245aff",
        sec_color: "#4a76ff",
        disabled: true
    },
    {
        id: 5,
        name: "2018",
        start_date: "2018-07-01T07:37:00.000Z",
        campus_start_dates: {
            16: "2018-07-01T07:37:00.000Z"
        },
        Prm_color: "#245aff",
        sec_color: "#4a76ff",
        disabled: true
    }
];

})()),
"[project]/src/data/Promos.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Promos": ()=>Promos
});
const Promos = [
    {
        id: 0,
        Name: "POOL - AUGUST",
        Prm_color: "red",
        sec_color: "red",
        start_date: "2025-08-11T08:37:00.000Z"
    },
    {
        id: 1,
        Name: "POOL - JULY",
        Prm_color: "red",
        sec_color: "red",
        start_date: "2025-07-14T08:37:00.000Z"
    },
    {
        id: 2,
        Name: "2024",
        Prm_color: "#8891a1",
        sec_color: "#b2bbca",
        start_date: "2024-10-21T09:13:00.000Z"
    },
    {
        id: 3,
        Name: "2023",
        Prm_color: "#000000",
        sec_color: "#343434",
        start_date: "2023-10-30T08:37:00.000Z"
    },
    {
        id: 4,
        Name: "2022",
        Prm_color: "#E52B1D",
        sec_color: "#ff7638",
        start_date: "2022-10-05T06:00:00.000Z"
    },
    {
        id: 5,
        Name: "2021",
        Prm_color: "#024325",
        sec_color: "#2ACF79",
        start_date: "2021-08-02T08:37:00.000Z"
    },
    {
        id: 6,
        Name: "2019",
        Prm_color: "#245aff",
        sec_color: "#4a76ff",
        start_date: "2019-07-01T07:37:00.000Z"
    }
];

})()),
"[project]/src/hooks/useSessionEnd.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const useSessionEnd = ()=>{
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Your session has expired. Logging out...", {
            autoClose: 5000,
            onClose: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])()
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === 'authenticated' && session) {
            const loginTime = session.loginTime;
            const endTime = loginTime + 2 * 60 * 60 * 1000; // 2 hours, after login.
            const currentTime = Date.now();
            const timeRemaining = endTime - currentTime;
            if (timeRemaining <= 0) {
                handleLogout();
            } else {
                const timer = setTimeout(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Session expired. Logging out...", {
                        autoClose: 5000,
                        onClose: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])()
                    });
                }, timeRemaining);
                return ()=>clearTimeout(timer);
            }
        }
    }, [
        session,
        status,
        handleLogout
    ]);
};
const __TURBOPACK__default__export__ = useSessionEnd;

})()),
"[project]/src/app/ranking/page.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$Styled$2e$ranking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ranking/Styled.ranking.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$EnhancedRankCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ranking/compoents/EnhancedRankCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drop_down$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/drop_down/dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$profile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ranking/compoents/profile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Skeleton/Skeleton.js [app-ssr] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Campuses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/Campuses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Promos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/Promos.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSessionEnd$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useSessionEnd.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Lazy load heavy components
const LevelCalculator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_require__("[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx [app-ssr] (ecmascript, async loader)")(__turbopack_import__));
const Logtime = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_require__("[project]/src/app/ranking/compoents/LogTime/Logtime.tsx [app-ssr] (ecmascript, async loader)")(__turbopack_import__));
const Stats = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_require__("[project]/src/app/ranking/compoents/stats/Stats.tsx [app-ssr] (ecmascript, async loader)")(__turbopack_import__));
const Banner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_require__("[project]/src/app/ranking/compoents/Banner/Banner.tsx [app-ssr] (ecmascript, async loader)")(__turbopack_import__));
const Ranking = ()=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [Users, SetUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [SearchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [SelectedUser, SetSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [SelectedGender, setSelectedGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSessionEnd$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const loggedInUserCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize with null to prevent loading data until user session is available
    const [SelectedCampus, setSelectedCampus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [SelectedPromo, setSelectedPromo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Track if user has manually changed selections
    const [hasUserManuallyChanged, setHasUserManuallyChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-set campus and promo based on user's session data (only once when session loads)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (session?.user && !hasUserManuallyChanged) {
            // Set campus based on user's campus_id, fallback to Rabat (75) if not available
            const userCampus = session.user.campus_id || 75;
            setSelectedCampus(userCampus);
            // Determine promo based on user's start year, fallback to first promo if not found
            let userPromo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Promos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Promos"][0].id; // Default fallback
            if (session.user.start_year) {
                const startYear = new Date(session.user.start_year).getFullYear();
                const promoForYear = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Promos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Promos"].find((promo)=>promo.Name === startYear.toString());
                if (promoForYear) {
                    userPromo = promoForYear.id;
                }
            }
            setSelectedPromo(userPromo);
        }
    }, [
        session,
        hasUserManuallyChanged
    ]);
    const lastUserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });
        if (node) observer.current.observe(node);
    }, [
        Users,
        session
    ]);
    const handlePromoChange = (value)=>{
        SetUsers([]);
        setSelectedGender("All");
        const promoId = parseInt(value, 10);
        setSelectedPromo(promoId);
        setHasUserManuallyChanged(true); // Mark as manually changed
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("Selected Promo changed to:", promoId);
        }
        window.scrollTo(0, 0);
    };
    const fetchUsers = async ({ pageParam = 1 })=>{
        // Return early if campus or promo is not set
        if (SelectedCampus === null || SelectedPromo === null) {
            return {
                data: [],
                nextPage: undefined
            };
        }
        const promo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Promos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Promos"].find((promo)=>promo.id === SelectedPromo);
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("SelectedPromo:", SelectedPromo, "Promo:", promo, "Campus:", SelectedCampus);
        }
        const url = `/api/students?started_date=${promo?.start_date}&campus_id=${SelectedCampus}&page=${pageParam}&alumni=true`;
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("API URL:", url);
        }
        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${session?.accessToken}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch Students.");
            }
            const data = await response.json();
            return {
                data: data,
                nextPage: data.length > 0 ? pageParam + 1 : undefined
            };
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error fetching Students, trying again...", {
                icon: false
            });
            throw error;
        }
    };
    const handleInvite = ()=>{
        window.open("https://discord.gg/5cZfS8djyg");
    };
    const { data, status, fetchNextPage, hasNextPage, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "users",
            SelectedPromo,
            SelectedCampus,
            session?.accessToken
        ],
        queryFn: fetchUsers,
        getNextPageParam: (lastPage, allPages)=>lastPage.nextPage,
        initialPageParam: 1,
        retry: 2,
        retryDelay: (attemptIndex)=>Math.min(1000 * 2 ** attemptIndex, 30000),
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        enabled: session !== undefined && SelectedPromo !== undefined && SelectedPromo !== null && SelectedCampus !== undefined && SelectedCampus !== null
    });
    const handleSearchChange = (event)=>{
        setSearchTerm(event.target.value);
    };
    const scrollToMe = ()=>{
        // Scroll to the logged-in user's card if the ref exists
        if (loggedInUserCardRef.current) {
            loggedInUserCardRef.current.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("📋 You are not on the list. ensure that you have loaded all students or selected your promo.", {
                icon: false
            });
        }
    };
    const updateSelectedUserById = (userId)=>{
        const selectedUser = Users.find((user)=>user.user.id === userId);
        if (selectedUser) {
            SetSelectedUser(selectedUser);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data && session?.accessToken) {
            const newUsers = data.pages.flatMap((page)=>page.data);
            const filteredUsers = newUsers.filter((user)=>{
                const matchesGender = SelectedGender === "All" || user.Gender === SelectedGender;
                const matchesSearchTerm = SearchTerm === "" || user.user?.usual_full_name?.toLowerCase().includes(SearchTerm.toLowerCase()) || user.user?.login?.toLowerCase().includes(SearchTerm.toLowerCase()) || user.nickname?.toLowerCase().includes(SearchTerm.toLowerCase());
                return matchesGender && matchesSearchTerm;
            });
            SetSelectedUser(filteredUsers[0]);
            SetUsers(filteredUsers);
        }
    }, [
        data,
        session,
        SelectedGender,
        SearchTerm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$Styled$2e$ranking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledRanking"], {
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
                fileName: "[project]/src/app/ranking/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "Container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "LeaderBoardContainer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "Ranking",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "Options",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "Filters",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "Select_container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drop_down$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Promos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Promos"],
                                                        getValue: (item)=>item.id.toString(),
                                                        renderItem: (item)=>item.Name,
                                                        onChange: handlePromoChange,
                                                        value: SelectedPromo?.toString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ranking/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drop_down$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Campuses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Campuses"],
                                                        getValue: (item)=>item.id.toString(),
                                                        renderItem: (item)=>item.name,
                                                        onChange: (value)=>{
                                                            setSelectedCampus(Number(value));
                                                            setHasUserManuallyChanged(true); // Mark as manually changed
                                                            SetUsers([]);
                                                            window.scrollTo(0, 0);
                                                        },
                                                        value: SelectedCampus?.toString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ranking/page.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drop_down$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Campuses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Filters"],
                                                        getValue: (item)=>item.id.toString(),
                                                        renderItem: (item)=>`${item.name}`,
                                                        onChange: ()=>{}
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ranking/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "Other_filters",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "SearchUser",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "Search User :",
                                                            // value={SearchTerm}
                                                            onChange: handleSearchChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ranking/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ranking/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "GenderFilter",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `Male ${SelectedGender === "male" && "selected"}`,
                                                                onClick: ()=>setSelectedGender("male"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "gender_type",
                                                                    children: "Male"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ranking/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "devider"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `Female ${SelectedGender === "female" && "selected"}`,
                                                                onClick: ()=>setSelectedGender("female"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "gender_type",
                                                                    children: "Female"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ranking/page.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "devider"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `All ${SelectedGender === "All" && "selected"}`,
                                                                onClick: ()=>setSelectedGender("All"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "gender_type",
                                                                    children: "All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ranking/page.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ranking/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "ToMeButton",
                                                        onClick: scrollToMe,
                                                        children: "Me"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ranking/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ranking/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "Profiles_container",
                                    children: isLoading || status === "pending" || !Users[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "Skeletons",
                                        children: Array.from({
                                            length: 15
                                        }).map((_, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                                animation: `${key % 2 ? "pulse" : "wave"}`,
                                                variant: "rectangular",
                                                width: "100%",
                                                height: "65px",
                                                className: "CardSkl",
                                                sx: {
                                                    bgcolor: 'rgba(44, 44, 48, 0.8)',
                                                    borderRadius: '8px',
                                                    marginBottom: '6px',
                                                    '&::after': {
                                                        background: 'linear-gradient(90deg, transparent, rgba(183, 251, 43, 0.1), transparent)'
                                                    }
                                                }
                                            }, key, false, {
                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this) : Users ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            Users.map((User, key)=>{
                                                if (!User || !User.user) return null;
                                                // if (User.Gender === "unknown") console.log(User);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$EnhancedRankCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    id: User.user.id,
                                                    FullName: User.user.usual_full_name,
                                                    nickname: User.nickname,
                                                    Level: User.level,
                                                    Rank: User.originalRank,
                                                    UserName: User.user.login,
                                                    img: User.user.image.versions.small,
                                                    setSelectedId: updateSelectedUserById,
                                                    IsUser: User.user.email === session?.user?.email,
                                                    ref: User.user.email === session?.user?.email ? loggedInUserCardRef : null,
                                                    is_even: !(key % 2),
                                                    is_verified: User.verified
                                                }, key, false, {
                                                    fileName: "[project]/src/app/ranking/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 23
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: lastUserRef,
                                                className: `FetchMore ${hasNextPage && "Animated"}`,
                                                children: hasNextPage ? "Fetching more ..." : "No More Users."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ranking/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ranking/page.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ProfileContainer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '100px',
                                        background: 'rgba(33, 33, 37, 0.6)',
                                        borderRadius: '12px',
                                        marginBottom: '20px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 31
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {}, void 0, false, {
                                    fileName: "[project]/src/app/ranking/page.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/page.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            SelectedPromo !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$profile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                Promo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Promos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Promos"].find((promo)=>promo.id === SelectedPromo) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Promos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Promos"][0],
                                list_is_loading: !Users[0],
                                StudentData: SelectedUser
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/page.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '30px',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    textAlign: 'center',
                                    background: 'rgba(33, 33, 37, 0.6)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(10px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '40px',
                                            height: '40px',
                                            border: '3px solid rgba(183, 251, 43, 0.3)',
                                            borderTop: '3px solid var(--main_color)',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.1rem',
                                            fontWeight: '500'
                                        },
                                        children: "Loading your personalized data..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/page.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/page.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ranking/page.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Ranking;

})()),
"[project]/src/app/ranking/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=_5ecbb5._.js.map