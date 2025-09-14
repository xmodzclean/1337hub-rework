(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_961859._.js", {

"[project]/src/app/ranking/compoents/LevelCalculator/utils.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "calculateLevel": ()=>calculateLevel
});
function calculateLevel(startLevel, plannedXp, score, includeBonus) {
    const levelsXp = [
        0,
        462,
        2688,
        5885,
        11777,
        29217,
        46255,
        63559,
        74340,
        85483,
        95000,
        105630,
        124446,
        145782,
        169932,
        197316,
        228354,
        263508,
        303366,
        348516,
        399672,
        457632,
        523320,
        597786,
        682164,
        777756,
        886074,
        1008798,
        1147902,
        1305486,
        1484070
    ];
    let xp = plannedXp * (score / 100);
    if (includeBonus) {
        xp += xp * 0.042;
    }
    const levelDown = Math.floor(startLevel);
    const levelUp = levelDown + 1;
    const levelXpTotal = levelsXp[levelUp] - levelsXp[levelDown];
    const currentXp = levelsXp[levelDown] + levelXpTotal * (startLevel - levelDown);
    const finalXp = currentXp + xp;
    let i;
    for(i = 0; i < levelsXp.length; i++){
        if (levelsXp[i] > finalXp) {
            break;
        }
    }
    const maxXp = levelsXp[i] - levelsXp[i - 1];
    const remainingXp = finalXp - levelsXp[i - 1];
    return i - 1 + remainingXp / maxXp;
}

})()),
"[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.styled.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledLevelCalculator": ()=>StyledLevelCalculator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const StyledLevelCalculator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LevelCalculator.styled__StyledLevelCalculator",
    componentId: "sc-8e7d19d5-0"
})`
  /* flex: 1; */
  display: flex;
  flex : 1;
  flex-direction: column;
  gap: 5px;
  position: relative;
  background-color: #212125;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 5px;

  .title {
    color: white;
    padding: 5px 5px;
    /* transform : rotate(90deg); */
    /* position : absolute; */
    /* white-space: nowrap; */
    font-size: 1rem;
    font-family: var(--playable_font);
    font-weight: 100;
    /* margin : 0;
    padding : 0; */
    opacity: 0.8;
  }
  .container {
    flex: 1;
    /* background-color : red; */
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    .SelectedProjects {
      padding: 5px 0px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      max-height : 100px;
      overflow-y : scroll;
      //hide scrollbar
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
      .ProjectItem {
        min-height: 40px;
        width: 100%;
        background-color: #171719;
        border: 1px solid #2c2c30;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        cursor: pointer;
        .ProjectTitle {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          color: #454548;

          h1 {
            font-size: 1.2rem;
            font-weight: 300;
            color: #454548;
          }
        }

        span {
          width : 70px;
          background-color: #2c2c30;
          border-radius: 3px;
          padding: 2px 5px;
          color: white;
          font-weight: 300;
          opacity: 0.6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .AddNewProject {
      width: 100%;
      height: 40px;
      border: 1px solid #171719;
      border-radius: 3px;
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
      transition: 0.2s ease-in-out;
      overflow: hidden;
      .AutoComplete {
        width: 180px !important;
        color: white !important;
        border: none !important;
        outline: none !important;
        label {
          color: white !important;
          opacity: 0.6;
        }
        .MuiAutocomplete-inputRoot {
          color: white;
          opacity: 0.6;
        }
      }

      .MarkInput {
        width: 110px;
        padding: 0px 10px;
        height: 100%;
        border-radius: 3px;
        border: none;
        border: 1px solid #171719;
        outline: none;
        background-color: transparent;
        color: white;
        border-top: none;
        border-bottom: none;
        border-left: none;
        transition: 0.2s ease-in-out;
        &:hover,
        &:focus {
          background-color: #171719;
        }

        &::placeholder {
          opacity: 0.6;
        }
      }
      .AddIcon {
        width: 50px;
        height: 100%;
        background-color: var(--main_color_light);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s ease-in-out;
        margin-left: auto;
        cursor: pointer;
        &:hover {
          background-color: #acda4c;
        }
      }
      .StartLevel {
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #171719;
        span {
          font-weight: 300;
        }
      }

      .Coalition {
        display: flex;
        justify-content: center;
        align-items: center;
        label {
          color: white;
          opacity: 0.6;
          font-weight: 200;
        }
      }
      .CheckBox {
        color: var(--main_color_light);
        opacity: 0.6;
      }
    }

    .ResultContainer {
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;

      .Level_box {
        flex: 1;
        display: flex;
        gap: 5px;
        background-color: #2c2c30;

        span {
          font-weight: 300;
        }
        .NewRank {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background-color: #2c2c30;
          padding: 5px;
          border-radius: 5px;
          .RankIcon {
            color: white;
          }
          span {
            color: white;
          }
          .RankDifIcon {
            color: var(--main_color_light);
          }
        }
        .FinalLevel {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          padding: 5px;
          border-radius: 5px;
          span:nth-child(2) {
            background-color: #171719;
            padding: 2px 15px;
            border-radius: 5px;
            font-weight: 500;
            opacity: 0.8;
          }
          span {
            font-weight: 300;
            color: white;
          }
        }
      }
      .ResetContainer {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: white;
        background-color: #171719;
        opacity: 0.6;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          background-color: #2c2c30;
        }
        .ResetIcon {
        }
        span {
          font-weight: 300;
          gap: 5px;
          color: white;
        }
      }
    }
  }
`;

})()),
"[project]/src/data/Projects.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const Projects = [
    {
        "title": "ft_transcendence",
        "xp": 24360
    },
    {
        "title": "dr_quine",
        "xp": 2520
    },
    {
        "title": "get_next_line",
        "xp": 882
    },
    {
        "title": "CPP Module 07",
        "xp": 0
    },
    {
        "title": "ft_linux",
        "xp": 4200
    },
    {
        "title": "42run",
        "xp": 9450
    },
    {
        "title": "42sh",
        "xp": 15750
    },
    {
        "title": "Apprentissage 2 ans - 2ème année",
        "xp": 0
    },
    {
        "title": "Bgp At Doors of Autonomous Systems is Simple",
        "xp": 22450
    },
    {
        "title": "Abstract_data",
        "xp": 20084
    },
    {
        "title": "Apprentissage 1 an",
        "xp": 0
    },
    {
        "title": "Apprentissage 2 ans - 1ère année",
        "xp": 0
    },
    {
        "title": "Born2beroot",
        "xp": 577
    },
    {
        "title": "CPP Module 00",
        "xp": 0
    },
    {
        "title": "CPP Module 01",
        "xp": 0
    },
    {
        "title": "CPP Module 02",
        "xp": 0
    },
    {
        "title": "CPP Module 03",
        "xp": 0
    },
    {
        "title": "CPP Module 04",
        "xp": 9660
    },
    {
        "title": "CPP Module 05",
        "xp": 0
    },
    {
        "title": "CPP Module 06",
        "xp": 0
    },
    {
        "title": "CPP Module 08",
        "xp": 0
    },
    {
        "title": "CPP Module 09",
        "xp": 10042
    },
    {
        "title": "Cybersecurity",
        "xp": 0
    },
    {
        "title": "Exam Rank 02",
        "xp": 0
    },
    {
        "title": "Exam Rank 03",
        "xp": 0
    },
    {
        "title": "Exam Rank 04",
        "xp": 0
    },
    {
        "title": "Exam Rank 05",
        "xp": 0
    },
    {
        "title": "Exam Rank 06",
        "xp": 0
    },
    {
        "title": "FdF",
        "xp": 1000
    },
    {
        "title": "Inception",
        "xp": 10042
    },
    {
        "title": "Inception-of-Things",
        "xp": 25450
    },
    {
        "title": "Internship I",
        "xp": 42000
    },
    {
        "title": "Internship II",
        "xp": 63000
    },
    {
        "title": "Leaffliction",
        "xp": 15750
    },
    {
        "title": "Libft",
        "xp": 462
    },
    {
        "title": "Mobile",
        "xp": 0
    },
    {
        "title": "NetPractice",
        "xp": 3160
    },
    {
        "title": "Open Project",
        "xp": 31500
    },
    {
        "title": "Part_Time I",
        "xp": 42000
    },
    {
        "title": "Part_Time II",
        "xp": 63000
    },
    {
        "title": "Philosophers",
        "xp": 3360
    },
    {
        "title": "Piscine Data Science",
        "xp": 0
    },
    {
        "title": "Piscine Django",
        "xp": 0
    },
    {
        "title": "Piscine Object",
        "xp": 0
    },
    {
        "title": "Piscine RoR",
        "xp": 0
    },
    {
        "title": "Piscine Symfony",
        "xp": 0
    },
    {
        "title": "Python for Data Science",
        "xp": 0
    },
    {
        "title": "Startup Internship",
        "xp": 42000
    },
    {
        "title": "Tokenizer",
        "xp": 9450
    },
    {
        "title": "Unity",
        "xp": 0
    },
    {
        "title": "UnleashTheBox",
        "xp": 15750
    },
    {
        "title": "[DEPRECATED] Piscine OCaml",
        "xp": 9450
    },
    {
        "title": "avaj-launcher",
        "xp": 4200
    },
    {
        "title": "bomberman",
        "xp": 25200
    },
    {
        "title": "boot2root",
        "xp": 11500
    },
    {
        "title": "camagru",
        "xp": 4200
    },
    {
        "title": "cloud-1",
        "xp": 9450
    },
    {
        "title": "computorv1",
        "xp": 4200
    },
    {
        "title": "computorv2",
        "xp": 9450
    },
    {
        "title": "corewar",
        "xp": 17500
    },
    {
        "title": "cub3d",
        "xp": 5775
    },
    {
        "title": "darkly",
        "xp": 6300
    },
    {
        "title": "death",
        "xp": 35700
    },
    {
        "title": "doom-nukem",
        "xp": 15750
    },
    {
        "title": "drivers-and-interrupts",
        "xp": 15750
    },
    {
        "title": "dslr",
        "xp": 6000
    },
    {
        "title": "expert-system",
        "xp": 9450
    },
    {
        "title": "famine",
        "xp": 9450
    },
    {
        "title": "filesystem",
        "xp": 15750
    },
    {
        "title": "fix-me",
        "xp": 15750
    },
    {
        "title": "fract-ol",
        "xp": 1000
    },
    {
        "title": "ft_ality",
        "xp": 4200
    },
    {
        "title": "ft_hangouts",
        "xp": 4200
    },
    {
        "title": "ft_irc",
        "xp": 21630
    },
    {
        "title": "ft_kalman",
        "xp": 16800
    },
    {
        "title": "ft_linear_regression",
        "xp": 4200
    },
    {
        "title": "ft_ls",
        "xp": 4200
    },
    {
        "title": "ft_malcolm",
        "xp": 6000
    },
    {
        "title": "ft_minecraft",
        "xp": 20750
    },
    {
        "title": "ft_newton",
        "xp": 24360
    },
    {
        "title": "ft_nmap",
        "xp": 15750
    },
    {
        "title": "ft_ping",
        "xp": 4200
    },
    {
        "title": "ft_printf",
        "xp": 882
    },
    {
        "title": "ft_shield",
        "xp": 15750
    },
    {
        "title": "ft_ssl_des",
        "xp": 9450
    },
    {
        "title": "ft_ssl_md5",
        "xp": 9450
    },
    {
        "title": "ft_ssl_rsa",
        "xp": 15750
    },
    {
        "title": "ft_traceroute",
        "xp": 4200
    },
    {
        "title": "ft_turing",
        "xp": 9450
    },
    {
        "title": "ft_vox",
        "xp": 15750
    },
    {
        "title": "gomoku",
        "xp": 25200
    },
    {
        "title": "guimp",
        "xp": 12600
    },
    {
        "title": "h42n42",
        "xp": 9450
    },
    {
        "title": "humangl",
        "xp": 4200
    },
    {
        "title": "hypertube",
        "xp": 15750
    },
    {
        "title": "in-the-shadows",
        "xp": 9450
    },
    {
        "title": "kfs-1",
        "xp": 15750
    },
    {
        "title": "kfs-2",
        "xp": 15750
    },
    {
        "title": "kfs-3",
        "xp": 35700
    },
    {
        "title": "kfs-4",
        "xp": 25200
    },
    {
        "title": "kfs-5",
        "xp": 35700
    },
    {
        "title": "kfs-6",
        "xp": 25200
    },
    {
        "title": "kfs-7",
        "xp": 35700
    },
    {
        "title": "kfs-8",
        "xp": 15750
    },
    {
        "title": "kfs-9",
        "xp": 15750
    },
    {
        "title": "kfs-x",
        "xp": 35700
    },
    {
        "title": "krpsim",
        "xp": 9450
    },
    {
        "title": "lem-ipc",
        "xp": 9450
    },
    {
        "title": "lem_in",
        "xp": 9450
    },
    {
        "title": "libasm",
        "xp": 966
    },
    {
        "title": "little-penguin-1",
        "xp": 9450
    },
    {
        "title": "malloc",
        "xp": 9450
    },
    {
        "title": "matcha",
        "xp": 9450
    },
    {
        "title": "matrix",
        "xp": 7000
    },
    {
        "title": "matt-daemon",
        "xp": 9450
    },
    {
        "title": "miniRT",
        "xp": 5775
    },
    {
        "title": "minishell",
        "xp": 2814
    },
    {
        "title": "minitalk",
        "xp": 1142
    },
    {
        "title": "mod1",
        "xp": 9450
    },
    {
        "title": "multilayer-perceptron",
        "xp": 9450
    },
    {
        "title": "music-room",
        "xp": 25200
    },
    {
        "title": "n-puzzle",
        "xp": 9450
    },
    {
        "title": "nibbler",
        "xp": 9450
    },
    {
        "title": "nm",
        "xp": 9450
    },
    {
        "title": "override",
        "xp": 35700
    },
    {
        "title": "particle-system",
        "xp": 15750
    },
    {
        "title": "pestilence",
        "xp": 15750
    },
    {
        "title": "pipex",
        "xp": 1142
    },
    {
        "title": "process-and-memory",
        "xp": 9450
    },
    {
        "title": "push_swap",
        "xp": 1855
    },
    {
        "title": "rainfall",
        "xp": 25200
    },
    {
        "title": "ready set boole",
        "xp": 7000
    },
    {
        "title": "red-tetris",
        "xp": 15750
    },
    {
        "title": "rt",
        "xp": 20750
    },
    {
        "title": "rubik",
        "xp": 9450
    },
    {
        "title": "scop",
        "xp": 9450
    },
    {
        "title": "shaderpixel",
        "xp": 15750
    },
    {
        "title": "snow-crash",
        "xp": 9450
    },
    {
        "title": "so_long",
        "xp": 1000
    },
    {
        "title": "strace",
        "xp": 9450
    },
    {
        "title": "swifty-companion",
        "xp": 4200
    },
    {
        "title": "swifty-proteins",
        "xp": 15750
    },
    {
        "title": "swingy",
        "xp": 9450
    },
    {
        "title": "taskmaster",
        "xp": 9450
    },
    {
        "title": "tinky-winkey",
        "xp": 16800
    },
    {
        "title": "total-perspective-vortex",
        "xp": 9450
    },
    {
        "title": "userspace_digressions",
        "xp": 16800
    },
    {
        "title": "war",
        "xp": 35700
    },
    {
        "title": "webserv",
        "xp": 21630
    },
    {
        "title": "woody-woodpacker",
        "xp": 9450
    },
    {
        "title": "xv",
        "xp": 22000
    },
    {
        "title": "zappy",
        "xp": 25200
    }
];
const __TURBOPACK__default__export__ = Projects;

})()),
"[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$LevelCalculator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ranking/compoents/LevelCalculator/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$LevelCalculator$2f$LevelCalculator$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.styled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/Projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autocomplete$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Autocomplete/Autocomplete.js [app-client] (ecmascript) <export default as Autocomplete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
const LevelCalculator = ({ user_level })=>{
    _s();
    // Data
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // NewProject properties
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [IncludeCoalition, setIncludeCoalition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Result handling
    const [CurrLevel, setCurrLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ProjectList
    const [projectList, setProjectList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setProjects(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        if (user_level) setCurrLevel(user_level);
    }, [
        user_level
    ]);
    const handleCalculate = ()=>{
        if (selectedProject) {
            const SelectedProjectData = projects.find((project)=>project.title === selectedProject.title);
            const calculatedLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$LevelCalculator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateLevel"])(CurrLevel, SelectedProjectData?.xp || 0, score, IncludeCoalition);
            setCurrLevel(Number(calculatedLevel.toFixed(2)));
        } else {
        // Handle case where no project is selected
        // console.error("No project selected");
        }
    };
    const onProjectChange = (event, value)=>{
        setSelectedProject(value); // Update the state with the selected project
    };
    const onScoreChange = (event)=>{
        setScore(event.target.value);
    };
    const onAddProject = ()=>{
        // push new Project to the ProjectList
        const newProject = {
            title: selectedProject ? selectedProject.title : "",
            mark: score,
            is_coalition: IncludeCoalition
        };
        handleCalculate();
        // Reset Stats
        setProjectList([
            ...projectList,
            newProject
        ]);
        setSelectedProject(null);
        setScore(0);
        setIncludeCoalition(false);
    };
    const onReset = ()=>{
        setProjectList([]);
        setIncludeCoalition(false);
        setScore(0);
        setCurrLevel(user_level);
        setSelectedProject(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$compoents$2f$LevelCalculator$2f$LevelCalculator$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledLevelCalculator"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "title",
                children: "Level Calculator :"
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "SelectedProjects",
                        children: projectList.map((item, key)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectItem, {
                                title: item.title,
                                xp: item.mark
                            }, key, false, {
                                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                lineNumber: 111,
                                columnNumber: 20
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "AddNewProject",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], {
                                value: selectedProject,
                                onChange: onProjectChange,
                                className: "AutoComplete",
                                id: "combo-box-demo",
                                options: projects,
                                getOptionLabel: (option)=>option.title,
                                style: {
                                    width: 300
                                },
                                renderInput: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        ...params,
                                        label: "Project",
                                        variant: "outlined"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "MarkInput",
                                type: "input",
                                value: score ? score : "",
                                placeholder: "mark (Ex: 125)",
                                onChange: onScoreChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "Coalition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                        className: "CheckBox",
                                        checked: IncludeCoalition,
                                        onChange: (e)=>setIncludeCoalition(e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Coalition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "AddIcon",
                                onClick: onAddProject,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFolderPlus"], {
                                    size: 20,
                                    color: "var(--main_color_dark)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ResultContainer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "Level_box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "FinalLevel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Level :"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: CurrLevel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ResetContainer",
                                onClick: onReset,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRedoAlt"], {
                                        size: 15,
                                        className: "ResetIcon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
_s(LevelCalculator, "YkwXXSo2QJfwWcF4efpdNaPeY88=");
_c = LevelCalculator;
const ProjectItem = ({ title, xp })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ProjectItem",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ProjectTitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFolder"], {}, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    xp,
                    " %"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ranking/compoents/LevelCalculator/LevelCalculator.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
};
_c1 = ProjectItem;
const __TURBOPACK__default__export__ = LevelCalculator;
var _c, _c1;
__turbopack_refresh__.register(_c, "LevelCalculator");
__turbopack_refresh__.register(_c1, "ProjectItem");

})()),
}]);

//# sourceMappingURL=src_961859._.js.map