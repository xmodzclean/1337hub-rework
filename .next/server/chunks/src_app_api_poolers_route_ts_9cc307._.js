module.exports = {

"[project]/src/app/api/poolers/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__commonjs__external__path__ = __turbopack_external_require__("path", true);
var __TURBOPACK__commonjs__external__fs__ = __turbopack_external_require__("fs", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const campus = searchParams.get("campus");
    const pool = searchParams.get("pool");
    const search = searchParams.get("search")?.toLowerCase();
    try {
        // Define the campus file mappings
        const campusFiles = {
            'benguerir': [
                'bg7.json',
                'bg8.json'
            ],
            'rabat': [
                'rb7.json',
                'rb8.json'
            ],
            'tetouan': [
                't7.json',
                't8.json'
            ],
            'khouribga': [
                'kh7.json',
                'kh8.json'
            ]
        };
        const dataPath = process.cwd(); // Files are in root directory
        const allData = {};
        // Load all data or specific campus data
        const campusesToLoad = campus === 'all' ? Object.keys(campusFiles) : [
            campus || 'benguerir'
        ];
        for (const campusName of campusesToLoad){
            if (!campusFiles[campusName]) continue;
            allData[campusName] = {};
            for (const file of campusFiles[campusName]){
                const poolNumber = file.includes('7') ? '7' : '8';
                const filePath = __TURBOPACK__commonjs__external__path__["default"].join(dataPath, file);
                try {
                    if (__TURBOPACK__commonjs__external__fs__["default"].existsSync(filePath)) {
                        const fileContent = __TURBOPACK__commonjs__external__fs__["default"].readFileSync(filePath, 'utf-8');
                        const poolData = JSON.parse(fileContent);
                        allData[campusName][poolNumber] = poolData.sort((a, b)=>b.level - a.level);
                    } else {
                        allData[campusName][poolNumber] = [];
                    }
                } catch (error) {
                    console.error(`Error loading ${file}:`, error);
                    allData[campusName][poolNumber] = [];
                }
            }
        }
        // Filter data based on parameters
        let filteredData = [];
        if (campus === 'all') {
            // Combine all campuses
            for (const [campusName, campusData] of Object.entries(allData)){
                if (pool === 'all') {
                    const pool7 = campusData['7'] || [];
                    const pool8 = campusData['8'] || [];
                    filteredData.push(...pool7.map((s)=>({
                            ...s,
                            campus: campusName
                        })));
                    filteredData.push(...pool8.map((s)=>({
                            ...s,
                            campus: campusName
                        })));
                } else if (pool && campusData[pool]) {
                    filteredData.push(...campusData[pool].map((s)=>({
                            ...s,
                            campus: campusName
                        })));
                }
            }
        } else {
            // Single campus
            const campusName = campus || 'benguerir';
            const campusData = allData[campusName] || {};
            if (pool === 'all') {
                const pool7 = campusData['7'] || [];
                const pool8 = campusData['8'] || [];
                filteredData.push(...pool7, ...pool8);
            } else if (pool && campusData[pool]) {
                filteredData.push(...campusData[pool]);
            } else {
                // Default to all pools if no specific pool requested
                const pool7 = campusData['7'] || [];
                const pool8 = campusData['8'] || [];
                filteredData.push(...pool7, ...pool8);
            }
        }
        // Apply search filter
        if (search) {
            filteredData = filteredData.filter((student)=>student.fullname.toLowerCase().includes(search) || student.login.toLowerCase().includes(search));
        }
        // Sort by level descending
        filteredData.sort((a, b)=>b.level - a.level);
        // Calculate statistics
        const stats = {
            total: filteredData.length,
            admitted: 0,
            nonAdmitted: 0,
            cheating: 0,
            validated: 0,
            avgLevel: 0,
            topLevel: 0
        };
        if (filteredData.length > 0) {
            filteredData.forEach((student)=>{
                // Count validated students
                if (student.isvalidated === 'yes') {
                    stats.validated++;
                }
                // Count cheating students
                if (student.cheating === true) {
                    stats.cheating++;
                    stats.nonAdmitted++;
                } else if (student.accepted === 'yes' && student.isvalidated !== 'yes' && student.level <= 7) {
                    // Accepted but didn't validate final exam and level <= 7
                    stats.nonAdmitted++;
                } else if (student.accepted === 'yes' && (student.reason === null || student.reason === undefined) && student.cheating === false && student.level > 7 && student.isvalidated === 'no') {
                    // Special case: accepted=yes, reason=null, cheating=false, level>7, isvalidated=no -> Admitted
                    stats.admitted++;
                } else if (student.accepted === 'yes') {
                    stats.admitted++;
                } else {
                    stats.nonAdmitted++;
                }
            });
            stats.avgLevel = parseFloat((filteredData.reduce((sum, student)=>sum + student.level, 0) / filteredData.length).toFixed(2));
            stats.topLevel = parseFloat(Math.max(...filteredData.map((s)=>s.level)).toFixed(2));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: filteredData,
            stats: stats
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error in poolers API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Error fetching poolers data!"
        }, {
            status: 500
        });
    }
}

})()),

};

//# sourceMappingURL=src_app_api_poolers_route_ts_9cc307._.js.map