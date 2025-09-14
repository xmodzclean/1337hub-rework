module.exports = {

"[project]/lib/db.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// lib/prisma.ts
__turbopack_esm__({
    "db": ()=>db
});
var __TURBOPACK__commonjs__external__$40$prisma$2f$client__ = __turbopack_external_require__("@prisma/client", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
let prisma;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if (!globalThis.prisma) {
        globalThis.prisma = new __TURBOPACK__commonjs__external__$40$prisma$2f$client__["PrismaClient"]();
    }
    prisma = globalThis.prisma;
}
const db = prisma;

})()),
"[project]/lib/authOptions.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "authOptions": ()=>authOptions,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$42$2d$school$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/42-school.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/db.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const authOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$42$2d$school$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AUTH_42_SCHOOL_ID,
            clientSecret: process.env.AUTH_42_SCHOOL_SECRET
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 2 * 60 * 60
    },
    callbacks: {
        async signIn ({ profile, user }) {
            if (!profile || !user) return false;
            // Allow BG, Khouribga, Med, Rabat
            const allowedCampuses = [
                21,
                16,
                55,
                75
            ];
            if (!allowedCampuses.includes(profile.campus[0].id)) return false;
            return true;
        },
        async jwt ({ token, account, profile }) {
            if (profile) {
                // console.log(profile);
                token.accessToken = account?.access_token;
                token.id = profile.id;
                token.login = profile.login;
                token.image = profile.image.versions.small;
                token.main_cursus = profile.cursus_users[profile.cursus_users.length - 1].cursus_id;
                token.start_date = profile.cursus_users[profile.cursus_users.length - 1].begin_at;
                token.pool_year = profile.pool_year;
                token.pool_month = profile.pool_month;
                token.campus_id = profile.campus[0].id;
                token.user_level = profile.cursus_users[profile.cursus_users.length - 1].level;
                if (!token.loginTime) {
                    token.loginTime = Date.now();
                }
                const dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.findUnique({
                    where: {
                        user_name: profile.login
                    }
                });
                if (dbUser) {
                    token.verified = dbUser.is_verified;
                    token.banner_url = dbUser.banner_url;
                    token.nickname = dbUser.nickname;
                } else {
                    const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.create({
                        data: {
                            user_name: profile.login,
                            full_name: `${profile.first_name} ${profile.last_name}`,
                            curr_level: profile.cursus_users.at(-1).level,
                            last_level: profile.cursus_users.at(-1).level,
                            image_url: profile.image.versions.small
                        }
                    });
                    token.verified = false;
                }
            }
            return token;
        },
        async session ({ session, token }) {
            session.accessToken = token.accessToken;
            session.user.id = token.id;
            session.loginTime = token.loginTime;
            session.user.login = token.login;
            session.user.image = token.image;
            session.user.main_cursus = token.main_cursus;
            session.user.campus_id = token.campus_id;
            session.user.start_year = token.start_date;
            session.user.pool_year = Number(token.pool_year);
            session.user.pool_month = new Date(`${token.pool_month.toLowerCase()} 1, 2020`).getMonth() + 1;
            session.user.user_level = token.user_level;
            session.user.verified = token.verified;
            session.user.banner_url = token.banner_url;
            session.user.nickname = token.nickname;
            return session;
        }
    }
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(authOptions);

})()),
"[project]/src/app/api/users/bio/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET,
    "PUT": ()=>PUT
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authOptions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/authOptions.ts [app-route] (ecmascript)");
var __TURBOPACK__commonjs__external__$40$prisma$2f$client__ = __turbopack_external_require__("@prisma/client", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const prisma = new __TURBOPACK__commonjs__external__$40$prisma$2f$client__["PrismaClient"]();
async function PUT(request) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authOptions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        if (!session?.user?.login) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        const { bio } = await request.json();
        // Validate bio length (max 500 characters)
        if (bio && bio.length > 500) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Bio must be 500 characters or less"
            }, {
                status: 400
            });
        }
        // Update user's bio in the database
        const updatedUser = await prisma.user.update({
            where: {
                user_name: session.user.login
            },
            data: {
                bio: bio || null
            },
            select: {
                id: true,
                user_name: true,
                bio: true,
                updated_at: true
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Bio updated successfully",
            user: updatedUser
        });
    } catch (error) {
        console.error("Error updating bio:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update bio"
        }, {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
}
async function GET(request) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authOptions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        if (!session?.user?.login) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        // Get user's current bio
        const user = await prisma.user.findUnique({
            where: {
                user_name: session.user.login
            },
            select: {
                bio: true
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            bio: user?.bio || null
        });
    } catch (error) {
        console.error("Error fetching bio:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch bio"
        }, {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
}

})()),

};

//# sourceMappingURL=_459922._.js.map