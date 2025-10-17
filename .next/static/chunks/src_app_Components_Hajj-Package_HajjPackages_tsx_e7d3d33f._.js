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
                        console.log("Fetched packages:", packagesData);
                        setPackages(packagesData);
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
        console.log("Navigating to UmrahDetail with ID:", id);
    };
    // Check if package includes a specific feature
    const hasInclusion = (inclusions = [], keyword)=>{
        if (!Array.isArray(inclusions)) return false;
        return inclusions.some((inc)=>inc.toLowerCase().includes(keyword.toLowerCase()));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-26d71e25ac398b2b" + " " + "umrah-packages-section section-padding",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-26d71e25ac398b2b" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-26d71e25ac398b2b" + " " + "section-title-area text-center mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-26d71e25ac398b2b" + " " + "section-title wow fadeInUp",
                            children: "Hajj Packages"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-26d71e25ac398b2b" + " " + "text-center py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "status",
                                className: "jsx-26d71e25ac398b2b" + " " + "spinner-border text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-26d71e25ac398b2b" + " " + "visually-hidden",
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                    lineNumber: 91,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-26d71e25ac398b2b" + " " + "mt-3",
                                children: "Loading packages..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this) : packages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-26d71e25ac398b2b" + " " + "row g-4",
                        children: packages.slice(0, 3).map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-26d71e25ac398b2b" + " " + "col-xl-4 col-lg-6 col-md-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-26d71e25ac398b2b" + " " + "package-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-26d71e25ac398b2b" + " " + "package-image-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: pkg.image || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800',
                                                    alt: pkg.package_name,
                                                    className: "jsx-26d71e25ac398b2b" + " " + "package-image"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-26d71e25ac398b2b" + " " + "package-duration",
                                                    children: [
                                                        pkg.duration_nights,
                                                        " NIGHTS"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                            lineNumber: 100,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-26d71e25ac398b2b" + " " + "package-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-26d71e25ac398b2b" + " " + "package-title",
                                                    children: pkg.package_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-26d71e25ac398b2b" + " " + "package-locations",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-26d71e25ac398b2b" + " " + "location-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "location-icon",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                                                                            className: "jsx-26d71e25ac398b2b"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                            lineNumber: 118,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "10",
                                                                            r: "3",
                                                                            className: "jsx-26d71e25ac398b2b"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                            lineNumber: 119,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b",
                                                                    children: [
                                                                        "Makkah ",
                                                                        pkg.makkah_nights,
                                                                        " Nights"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-26d71e25ac398b2b" + " " + "location-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "location-icon",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                                                                            className: "jsx-26d71e25ac398b2b"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                            lineNumber: 125,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "10",
                                                                            r: "3",
                                                                            className: "jsx-26d71e25ac398b2b"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b",
                                                                    children: [
                                                                        "Madinah ",
                                                                        pkg.madinah_nights,
                                                                        " Nights"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-26d71e25ac398b2b" + " " + "package-includes",
                                                    children: [
                                                        hasInclusion(pkg.inclusions ?? [], 'flight') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-26d71e25ac398b2b" + " " + "include-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "include-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
                                                                        className: "jsx-26d71e25ac398b2b"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b",
                                                                    children: "Flights"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 49
                                                        }, this),
                                                        hasInclusion(pkg.inclusions ?? [], 'transit') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-26d71e25ac398b2b" + " " + "include-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "include-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z",
                                                                        className: "jsx-26d71e25ac398b2b"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b",
                                                                    children: "Transport"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 49
                                                        }, this),
                                                        hasInclusion(pkg.inclusions ?? [], 'hotel') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-26d71e25ac398b2b" + " " + "include-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "include-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z",
                                                                        className: "jsx-26d71e25ac398b2b"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b",
                                                                    children: "Hotels"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 49
                                                        }, this),
                                                        hasInclusion(pkg.inclusions ?? [], 'ziyarat') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-26d71e25ac398b2b" + " " + "include-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "include-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                                                                        className: "jsx-26d71e25ac398b2b"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                        lineNumber: 160,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b",
                                                                    children: "Ziyarat"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-26d71e25ac398b2b" + " " + "package-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-26d71e25ac398b2b" + " " + "package-price",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "price-amount",
                                                                    children: [
                                                                        pkg.currency,
                                                                        pkg.price_per_person.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-26d71e25ac398b2b" + " " + "price-unit",
                                                                    children: "/person"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleViewDetails(pkg.id),
                                                            className: "jsx-26d71e25ac398b2b" + " " + "view-details-btn",
                                                            children: "View Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                            lineNumber: 112,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                    lineNumber: 99,
                                    columnNumber: 33
                                }, this)
                            }, pkg.id, false, {
                                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-26d71e25ac398b2b" + " " + "text-center py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-26d71e25ac398b2b",
                            children: "No packages available at the moment."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                            lineNumber: 185,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "26d71e25ac398b2b",
                children: ".umrah-packages-section.jsx-26d71e25ac398b2b{background-color:#f8f9fa;padding:80px 0}.section-title.jsx-26d71e25ac398b2b{color:#1a1a1a;margin-bottom:2rem;font-size:2.5rem;font-weight:700}.package-card.jsx-26d71e25ac398b2b{background:#fff;border-radius:12px;height:100%;transition:transform .3s,box-shadow .3s;overflow:hidden;box-shadow:0 4px 15px #00000014}.package-card.jsx-26d71e25ac398b2b:hover{transform:translateY(-5px);box-shadow:0 8px 25px #0000001f}.package-image-wrapper.jsx-26d71e25ac398b2b{height:250px;position:relative;overflow:hidden}.package-image.jsx-26d71e25ac398b2b{object-fit:cover;width:100%;height:100%}.package-duration.jsx-26d71e25ac398b2b{color:#1a1a1a;background:#fff;border-radius:25px;padding:8px 20px;font-size:.875rem;font-weight:600;position:absolute;top:20px;right:20px}.package-star-rating.jsx-26d71e25ac398b2b{color:#1a1a1a;background:#fff;border-radius:25px;padding:8px 16px;font-size:.875rem;font-weight:600;position:absolute;top:20px;left:20px}.package-content.jsx-26d71e25ac398b2b{padding:25px}.package-title.jsx-26d71e25ac398b2b{color:#1a1a1a;margin-bottom:20px;font-size:1.375rem;font-weight:700}.package-locations.jsx-26d71e25ac398b2b{flex-wrap:wrap;gap:20px;margin-bottom:20px;display:flex}.location-item.jsx-26d71e25ac398b2b{color:#666;align-items:center;gap:8px;font-size:.9rem;display:flex}.location-icon.jsx-26d71e25ac398b2b{color:#4a5568}.package-includes.jsx-26d71e25ac398b2b{border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;flex-wrap:wrap;gap:15px;margin-bottom:25px;padding:20px 0;display:flex}.include-item.jsx-26d71e25ac398b2b{color:#4a5568;align-items:center;gap:6px;font-size:.9rem;font-weight:500;display:flex}.include-icon.jsx-26d71e25ac398b2b{color:#2563eb}.package-footer.jsx-26d71e25ac398b2b{justify-content:space-between;align-items:center;display:flex}.package-price.jsx-26d71e25ac398b2b{align-items:baseline;gap:4px;display:flex}.price-amount.jsx-26d71e25ac398b2b{color:#1a1a1a;font-size:1.875rem;font-weight:700}.price-unit.jsx-26d71e25ac398b2b{color:#666;font-size:.9rem}.view-details-btn.jsx-26d71e25ac398b2b{color:#fff;cursor:pointer;background-color:#28aae2;border:none;border-radius:8px;padding:12px 28px;font-size:.95rem;font-weight:600;transition:background-color .3s}.view-details-btn.jsx-26d71e25ac398b2b:hover{background-color:#1f8fc7}.more-packages-btn.jsx-26d71e25ac398b2b{color:#fff;cursor:pointer;background-color:#28aae2;border:none;border-radius:8px;margin-top:15px;padding:12px 32px;font-size:1rem;font-weight:600;transition:all .3s}.more-packages-btn.jsx-26d71e25ac398b2b:hover{background-color:#1f8fc7;transform:translateY(-2px);box-shadow:0 4px 12px #28aae24d}@media (width<=768px){.section-title.jsx-26d71e25ac398b2b{font-size:2rem}.package-title.jsx-26d71e25ac398b2b{font-size:1.25rem}.price-amount.jsx-26d71e25ac398b2b{font-size:1.5rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx",
        lineNumber: 74,
        columnNumber: 9
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