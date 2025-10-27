(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Components/Hajj-Package/HajjPackages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const HajjPackages = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HajjPackages.useEffect": ()=>{
            const fetchPackages = {
                "HajjPackages.useEffect.fetchPackages": async ()=>{
                    try {
                        setLoading(true);
                        const packagesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Hajj-packages');
                        const packagesSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(packagesCollection);
                        const packagesData = packagesSnapshot.docs.map({
                            "HajjPackages.useEffect.fetchPackages.packagesData": (doc)=>({
                                    id: doc.id,
                                    ...doc.data()
                                })
                        }["HajjPackages.useEffect.fetchPackages.packagesData"]);
                        // Filter only non-shifting packages
                        const nonShiftingPackages = packagesData.filter({
                            "HajjPackages.useEffect.fetchPackages.nonShiftingPackages": (pkg)=>pkg.package_type === "Non Shifting"
                        }["HajjPackages.useEffect.fetchPackages.nonShiftingPackages"]);
                        const categoryOrder = [
                            "Silver",
                            "Gold",
                            "Diamond"
                        ];
                        // Sort: others first → then Silver → Gold → Diamond
                        nonShiftingPackages.sort({
                            "HajjPackages.useEffect.fetchPackages": (a, b)=>{
                                const indexA = categoryOrder.indexOf(a.package_tier || "");
                                const indexB = categoryOrder.indexOf(b.package_tier || "");
                                const orderA = indexA === -1 ? -1 : indexA;
                                const orderB = indexB === -1 ? -1 : indexB;
                                return orderA - orderB;
                            }
                        }["HajjPackages.useEffect.fetchPackages"]);
                        setPackages(nonShiftingPackages);
                    } catch (error) {
                        console.error("Error fetching packages:", error);
                        setPackages([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["HajjPackages.useEffect.fetchPackages"];
            fetchPackages();
        }
    }["HajjPackages.useEffect"], []);
    const handleViewDetails = (id)=>{
        router.push(`/HajjDetail/${id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-80cddf0845ef18ab" + " " + "hajj-packages-section section-padding",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-80cddf0845ef18ab" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-80cddf0845ef18ab" + " " + "section-title-area text-center mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-80cddf0845ef18ab" + " " + "section-title wow fadeInUp",
                            children: "Hajj Packages"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-80cddf0845ef18ab" + " " + "text-center py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "status",
                                className: "jsx-80cddf0845ef18ab" + " " + "spinner-border text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-80cddf0845ef18ab" + " " + "visually-hidden",
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-80cddf0845ef18ab" + " " + "mt-3",
                                children: "Loading packages..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: packages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-80cddf0845ef18ab" + " " + "row g-4",
                            children: packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-80cddf0845ef18ab" + " " + "col-xl-4 col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-80cddf0845ef18ab" + " " + "package-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-80cddf0845ef18ab" + " " + "package-image-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: pkg.image || '/assets/img/Hajj/Hajj page 1.png',
                                                        alt: pkg.package_name,
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-duration",
                                                        children: [
                                                            pkg.duration_nights,
                                                            " NIGHTS"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 25
                                                    }, this),
                                                    pkg.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-status",
                                                        children: pkg.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                lineNumber: 100,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-80cddf0845ef18ab" + " " + "package-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-title",
                                                        children: pkg.package_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-year-tag",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-80cddf0845ef18ab" + " " + "year-badge",
                                                            children: [
                                                                "Hajj ",
                                                                pkg.year
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-locations",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-80cddf0845ef18ab" + " " + "location-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        className: "jsx-80cddf0845ef18ab" + " " + "location-icon",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                                                                                className: "jsx-80cddf0845ef18ab"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                                lineNumber: 121,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "12",
                                                                                cy: "10",
                                                                                r: "3",
                                                                                className: "jsx-80cddf0845ef18ab"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                                lineNumber: 122,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-80cddf0845ef18ab",
                                                                        children: [
                                                                            "Makkah ",
                                                                            pkg.makkah_nights,
                                                                            " Nights"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 124,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-80cddf0845ef18ab" + " " + "location-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        className: "jsx-80cddf0845ef18ab" + " " + "location-icon",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                                                                                className: "jsx-80cddf0845ef18ab"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                                lineNumber: 128,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "12",
                                                                                cy: "10",
                                                                                r: "3",
                                                                                className: "jsx-80cddf0845ef18ab"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                                lineNumber: 129,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-80cddf0845ef18ab",
                                                                        children: [
                                                                            "Madinah ",
                                                                            pkg.madinah_nights,
                                                                            " Nights"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-includes",
                                                        children: pkg.inclusions.slice(0, 4).map((inclusion, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-80cddf0845ef18ab" + " " + "include-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "16",
                                                                        height: "16",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "currentColor",
                                                                        className: "jsx-80cddf0845ef18ab" + " " + "include-icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                                                            className: "jsx-80cddf0845ef18ab"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                            lineNumber: 139,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-80cddf0845ef18ab",
                                                                        children: inclusion
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-80cddf0845ef18ab" + " " + "package-footer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-80cddf0845ef18ab" + " " + "package-price",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-80cddf0845ef18ab" + " " + "price-amount",
                                                                        children: [
                                                                            pkg.currency,
                                                                            pkg.price_per_person?.toLocaleString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-80cddf0845ef18ab" + " " + "price-unit",
                                                                        children: "/person"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleViewDetails(pkg.id),
                                                                className: "jsx-80cddf0845ef18ab" + " " + "view-details-btn",
                                                                children: "View Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                lineNumber: 112,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this)
                                }, pkg.id, false, {
                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                    lineNumber: 98,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-80cddf0845ef18ab" + " " + "text-center py-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-80cddf0845ef18ab",
                                children: "No packages available at the moment."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                lineNumber: 165,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                            lineNumber: 164,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "80cddf0845ef18ab",
                children: ".hajj-packages-section.jsx-80cddf0845ef18ab{background-color:#f8f9fa;padding:80px 0}.section-title.jsx-80cddf0845ef18ab{color:#1a1a1a;margin-bottom:2rem;font-size:2.5rem;font-weight:700}.package-card.jsx-80cddf0845ef18ab{background:#fff;border-radius:12px;height:100%;transition:transform .3s,box-shadow .3s;overflow:hidden;box-shadow:0 4px 15px #00000014}.package-card.jsx-80cddf0845ef18ab:hover{transform:translateY(-5px);box-shadow:0 8px 25px #0000001f}.package-image-wrapper.jsx-80cddf0845ef18ab{height:250px;position:relative;overflow:hidden}.package-image.jsx-80cddf0845ef18ab{object-fit:cover;width:100%;height:100%}.package-duration.jsx-80cddf0845ef18ab{color:#1a1a1a;background:#fff;border-radius:25px;padding:8px 20px;font-size:.875rem;font-weight:600;position:absolute;top:20px;right:20px}.package-status.jsx-80cddf0845ef18ab{color:#fff;background:#ff5757;border-radius:25px;padding:8px 16px;font-size:.875rem;font-weight:600;position:absolute;top:20px;left:20px}.package-content.jsx-80cddf0845ef18ab{padding:25px}.package-title.jsx-80cddf0845ef18ab{color:#1a1a1a;margin-bottom:10px;font-size:1.375rem;font-weight:700}.package-year-tag.jsx-80cddf0845ef18ab{margin-bottom:20px}.year-badge.jsx-80cddf0845ef18ab{color:#fff;background-color:#28aae2;border-radius:20px;padding:5px 12px;font-size:.875rem;font-weight:600;display:inline-block}.package-locations.jsx-80cddf0845ef18ab{flex-wrap:wrap;gap:20px;margin-bottom:20px;display:flex}.location-item.jsx-80cddf0845ef18ab{color:#666;align-items:center;gap:8px;font-size:.9rem;display:flex}.location-icon.jsx-80cddf0845ef18ab{color:#4a5568}.package-includes.jsx-80cddf0845ef18ab{border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;flex-wrap:wrap;gap:15px;margin-bottom:25px;padding:20px 0;display:flex}.include-item.jsx-80cddf0845ef18ab{color:#4a5568;align-items:center;gap:6px;font-size:.9rem;font-weight:500;display:flex}.include-icon.jsx-80cddf0845ef18ab{color:#2563eb}.package-footer.jsx-80cddf0845ef18ab{justify-content:space-between;align-items:center;display:flex}.package-price.jsx-80cddf0845ef18ab{align-items:baseline;gap:4px;display:flex}.price-amount.jsx-80cddf0845ef18ab{color:#1a1a1a;font-size:1.875rem;font-weight:700}.price-unit.jsx-80cddf0845ef18ab{color:#666;font-size:.9rem}.view-details-btn.jsx-80cddf0845ef18ab{color:#fff;cursor:pointer;background-color:#28aae2;border:none;border-radius:8px;padding:12px 28px;font-size:.95rem;font-weight:600;transition:background-color .3s}.view-details-btn.jsx-80cddf0845ef18ab:hover{background-color:#1f8fc7}@media (width<=768px){.section-title.jsx-80cddf0845ef18ab{font-size:2rem}.package-locations.jsx-80cddf0845ef18ab{flex-direction:column;gap:10px}.package-footer.jsx-80cddf0845ef18ab{flex-direction:column;align-items:stretch;gap:15px}.view-details-btn.jsx-80cddf0845ef18ab{width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_s(HajjPackages, "Sx3o9LhD3h4+yLQjPy6dmxqoVJo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HajjPackages;
const __TURBOPACK__default__export__ = HajjPackages;
var _c;
__turbopack_context__.k.register(_c, "HajjPackages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Hajj-Package/HajjPackages.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/Components/Hajj-Package/HajjPackages.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_app_Components_Hajj-Package_HajjPackages_tsx_e7d3d33f._.js.map