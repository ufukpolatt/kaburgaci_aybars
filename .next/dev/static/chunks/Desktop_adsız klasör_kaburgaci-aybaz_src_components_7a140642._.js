(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Header = ()=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    if (window.scrollY > 20) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `text-2xl md:text-3xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary-700' : 'text-white'}`,
                                children: [
                                    "Kaburgacı ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-secondary-500",
                                        children: "Aybaz"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "hidden md:flex space-x-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#home",
                                        className: `font-medium transition-colors duration-300 hover:text-secondary-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`,
                                        children: "Ana Sayfa"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#menu",
                                        className: `font-medium transition-colors duration-300 hover:text-secondary-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`,
                                        children: "Menü"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#about",
                                        className: `font-medium transition-colors duration-300 hover:text-secondary-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`,
                                        children: "Hakkımızda"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#contact",
                                        className: `font-medium transition-colors duration-300 hover:text-secondary-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`,
                                        children: "İletişim"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleMenu,
                            className: `md:hidden focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden bg-white rounded-lg shadow-xl mt-4 py-4 px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#home",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Ana Sayfa"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#menu",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Menü"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#about",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Hakkımızda"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#contact",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "İletişim"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Header.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "PYTXP+Ba4zUSToikH9IFTduq6jI=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const Hero = ()=>{
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const slides = [
        {
            id: 1,
            title: 'Lezzetin Adresi',
            subtitle: 'En Taze ve Lezzetli Kaburgalar',
            description: 'Özenle seçilen etler, usta ellerde hazırlanan özel soslar ve unutulmaz tatlar...',
            buttonText: 'Menüyü İncele',
            buttonLink: '#menu',
            image: '/images/hero-1.jpg'
        },
        {
            id: 2,
            title: 'Geleneksel Lezzet',
            subtitle: 'Yılların Tecrübesi',
            description: '1995\'ten beri size hizmet veriyor, her bir lokmayı özenle hazırlıyoruz...',
            buttonText: 'Hakkımızda',
            buttonLink: '#about',
            image: '/images/hero-2.jpg'
        },
        {
            id: 3,
            title: 'Özel Günler',
            subtitle: 'Unutulmaz Anlar',
            description: 'Doğum günleri, yıldönümleri ve özel kutlamalar için ideal mekan...',
            buttonText: 'Rezervasyon Yap',
            buttonLink: '#contact',
            image: '/images/hero-3.jpg'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "Hero.useEffect.interval": (prev)=>(prev + 1) % slides.length
                    }["Hero.useEffect.interval"]);
                }
            }["Hero.useEffect.interval"], 5000);
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        slides.length
    ]);
    const goToSlide = (index)=>{
        setCurrentSlide(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
                        style: {
                            backgroundImage: `url(${slides[currentSlide].image})`,
                            backgroundColor: '#1a1a1a'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-white px-4 max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-4 fade-in text-shadow",
                            children: slides[currentSlide].title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-secondary-400 fade-in",
                            children: slides[currentSlide].subtitle
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg md:text-xl mb-8 max-w-2xl mx-auto fade-in",
                            children: slides[currentSlide].description
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: slides[currentSlide].buttonLink,
                            className: "btn-primary fade-in inline-block",
                            children: slides[currentSlide].buttonText
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToSlide(index),
                        className: `w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-secondary-500 w-8' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`,
                        "aria-label": `Slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Hero.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "/jm+XmndjAYlDCFyCnfFEXJOloU=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/ScrollAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ScrollAnimation = ({ children, variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
}, transition = {
    duration: 0.6,
    ease: 'easeOut'
}, className = '', delay = 0, duration = 0.6 })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-100px'
    });
    const updatedVariants = {
        ...variants,
        visible: {
            ...variants.visible,
            transition: {
                ...transition,
                delay,
                duration
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: "hidden",
        animate: isInView ? 'visible' : 'hidden',
        variants: updatedVariants,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/ScrollAnimation.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollAnimation, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ScrollAnimation;
const __TURBOPACK__default__export__ = ScrollAnimation;
var _c;
__turbopack_context__.k.register(_c, "ScrollAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/ScrollAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Menu = ()=>{
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('kaburga');
    const menuCategories = [
        {
            id: 'kaburga',
            name: 'Özel Kaburgalar',
            icon: '🍖'
        },
        {
            id: 'baslangic',
            name: 'Başlangıçlar',
            icon: '🥗'
        },
        {
            id: 'icecek',
            name: 'İçecekler',
            icon: '🥤'
        },
        {
            id: 'tatli',
            name: 'Tatlılar',
            icon: '🍰'
        }
    ];
    const menuItems = {
        kaburga: [
            {
                id: 1,
                name: 'Aybaz Özel Kaburga',
                description: 'Özel marinate edilmiş, 6 saat pişirilen lezzetli kaburga',
                price: '350₺',
                image: '/images/kaburga-ozel.jpg',
                popular: true
            },
            {
                id: 2,
                name: 'Baharatlı Kaburga',
                description: 'Doğu Anadolu baharatlarıyla harmanlanmış özel kaburga',
                price: '320₺',
                image: '/images/kaburga-baharatli.jpg'
            },
            {
                id: 3,
                name: 'Sade Kaburga',
                description: 'Sade tuz ve karabiber ile lezzetlendirilmiş klasik kaburga',
                price: '280₺',
                image: '/images/kaburga-sade.jpg'
            },
            {
                id: 4,
                name: 'Körili Kaburga',
                description: 'Hint usulü köri sos ile hazırlanan egzotik kaburga',
                price: '330₺',
                image: '/images/kaburga-kori.jpg'
            }
        ],
        baslangic: [
            {
                id: 5,
                name: 'Mezve Tabagi',
                description: 'Humus, acılı ezme, haydari, patlıcan salata',
                price: '120₺',
                image: '/images/mezve.jpg'
            },
            {
                id: 6,
                name: 'Çoban Salata',
                description: 'Taze sebzeler, beyaz peynir, zeytin ve nar ekşisi',
                price: '80₺',
                image: '/images/salata.jpg'
            },
            {
                id: 7,
                name: 'Sıcak Başlangıç Platosu',
                description: 'Patates kızartması, soğan halkası, nugget',
                price: '100₺',
                image: '/images/baslangic.jpg'
            }
        ],
        icecek: [
            {
                id: 8,
                name: 'Ayran',
                description: 'Taze ve doğal ayran',
                price: '25₺',
                image: '/images/ayran.jpg'
            },
            {
                id: 9,
                name: 'İçecek',
                description: 'Kola, fanta, sprite, gazoz',
                price: '30₺',
                image: '/images/icecek.jpg'
            },
            {
                id: 10,
                name: 'Taze Sıkılmış Meyve Suyu',
                description: 'Portakal, elma, havuç',
                price: '45₺',
                image: '/images/meyve-suyu.jpg'
            }
        ],
        tatli: [
            {
                id: 11,
                name: 'Kadayıf',
                description: 'Antep fıstıklı, kaymaklı kadayıf',
                price: '70₺',
                image: '/images/kadayif.jpg'
            },
            {
                id: 12,
                name: 'Baklava',
                description: '40 kat özel baklava',
                price: '80₺',
                image: '/images/baklava.jpg'
            },
            {
                id: 13,
                name: 'Künefe',
                description: 'Taze peynirli, sıcak künefe',
                price: '75₺',
                image: '/images/kunefe.jpg'
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "menu",
        className: "section-padding bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-gray-800",
                            children: "Menümüz"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "Özenle seçilen malzemelerle hazırlanan lezzetlerimiz"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center mb-10",
                    children: menuCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory(category.id),
                            className: `m-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2",
                                    children: category.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                category.name
                            ]
                        }, category.id, true, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: menuItems[activeCategory].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: index * 0.1,
                            className: "bg-white rounded-xl shadow-md overflow-hidden card-hover",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-48 bg-gray-200 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 text-lg",
                                                children: "Resim Yükleniyor..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        'popular' in item && item.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold",
                                            children: "Popüler"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-2 text-gray-800",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-primary-600",
                                                    children: item.price
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg transition-colors duration-300",
                                                    children: "Sepete Ekle"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-4",
                            children: "Menümüzdeki tüm ürünler günlük taze olarak hazırlanmaktadır."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            children: "Tam Menüyü İndir"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Menu.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Menu, "354AQaMSxDRE5XBV/WidAdsajEU=");
_c = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/ScrollAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const About = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hikaye');
    const tabs = [
        {
            id: 'hikaye',
            name: 'Hikayemiz',
            icon: '📖'
        },
        {
            id: 'misyon',
            name: 'Misyonumuz',
            icon: '🎯'
        },
        {
            id: 'vizyon',
            name: 'Vizyonumuz',
            icon: '🔮'
        },
        {
            id: 'degerler',
            name: 'Değerlerimiz',
            icon: '💎'
        }
    ];
    const tabContent = {
        hikaye: {
            title: '1995\'ten Beri Lezzetin Adresi',
            content: [
                'Kaburgacı Aybaz, 1995 yılında küçük bir aile işletmesi olarak başladı. Kurucumuz Aybaz Bey, yıllar süren mutfak deneyimini ve et işleme konusundaki ustalığını birleştirerek Türkiye\'nin en lezzetli kaburga tariflerini oluşturdu.',
                'İlk günlerde sadece birkaç çeşit kaburga ile hizmet veren restoranımız, zamanla müşterilerimizin talepleri doğrultusunda menüsünü genişletti. Özellikle "Aybaz Özel Kaburga" tarifi, kısa sürede müşterilerimizin favorisi haline geldi.',
                'Bugün, 28 yıllık tecrübemizle Türkiye\'nin dört bir yanından gelen misafirlerimize en kaliteli hizmeti sunmaya devam ediyoruz. Her bir lokmada yılların birikimini ve ailemizin lezzet sırrını bulabilirsiniz.'
            ],
            image: '/images/about-story.jpg'
        },
        misyon: {
            title: 'Misyonumuz',
            content: [
                'Müşterilerimize en kaliteli ve taze malzemelerle hazırlanmış, lezzetli yemekler sunmak.',
                'Geleneksel Türk mutfağını modern sunum teknikleriyle birleştirerek benzersiz bir deneyim yaşatmak.',
                'Her müşteriyi ailemizin bir üyesi gibi karşılayarak sıcak ve samimi bir ortam oluşturmak.',
                'Sürdürülebilir ve etik üretim anlayışıyla çevreye ve topluma karşı sorumluluklarımızı yerine getirmek.'
            ],
            image: '/images/about-mission.jpg'
        },
        vizyon: {
            title: 'Vizyonumuz',
            content: [
                'Türkiye\'nin en çok tercih edilen kaburga restoranı olmak.',
                'Uluslararası alanda Türk mutfağını temsil eden bir marka haline gelmek.',
                'Yenilikçi lezzetler ve sunumlarla sektörde lider konumunu korumak.',
                'Franchising sistemiyle Türkiye ve dünyada daha fazla noktada hizmet vermek.'
            ],
            image: '/images/about-vision.jpg'
        },
        degerler: {
            title: 'Değerlerimiz',
            content: [
                'Kalite: Her zaman en kaliteli malzemeleri kullanırız.',
                'Müşteri Odaklılık: Müşteri memnuniyetini her şeyin üstünde tutarız.',
                'Geleneksel: Geleneksel tariflerimizi korurken modernize ederiz.',
                'Samimiyet: Her müşteriyi ailemizin bir üyesi gibi karşılarız.',
                'Sürdürülebilirlik: Doğaya ve topluma karşı sorumluluğumuz bilincindeyiz.'
            ],
            image: '/images/about-values.jpg'
        }
    };
    const features = [
        {
            icon: '🥩',
            title: 'Kaliteli Et',
            description: 'Sadece en kaliteli ve taze etler kullanıyoruz'
        },
        {
            icon: '👨‍🍳',
            title: 'Usta Şefler',
            description: 'Yılların tecrübesine sahip profesyonel şefler'
        },
        {
            icon: '🌿',
            title: 'Doğal Malzemeler',
            description: 'Hiçbir katkı maddesi kullanmadan doğal lezzet'
        },
        {
            icon: '⏰',
            title: '6 Saat Pişirim',
            description: 'Her kaburga 6 saat boyunca özel tekniklerle pişirilir'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "section-padding bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-gray-800",
                            children: "Hakkımızda"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "28 yıllık lezzet serüvenimiz ve bizi özel kılan değerlerimiz"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center mb-10",
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.id),
                            className: `m-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2",
                                    children: tab.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab.name
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold mb-6 text-gray-800",
                                    children: tabContent[activeTab].title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: tabContent[activeTab].content.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 leading-relaxed",
                                            children: paragraph
                                        }, index, false, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl overflow-hidden shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64 bg-gray-200 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 text-lg",
                                    children: "Resim Yükleniyor..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: index * 0.1,
                            className: "text-center p-6 bg-gray-50 rounded-xl card-hover",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-4",
                                    children: feature.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-2 text-gray-800",
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 bg-primary-600 rounded-2xl p-8 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-bold mb-2",
                                        children: "28+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-primary-100",
                                        children: "Yıllık Tecrübe"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-bold mb-2",
                                        children: "50K+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-primary-100",
                                        children: "Mutlu Müşteri"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-bold mb-2",
                                        children: "15+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-primary-100",
                                        children: "Özel Lezzet"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-bold mb-2",
                                        children: "4.9"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-primary-100",
                                        children: "Müşteri Puanı"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/About.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "CLSquofgIVgSdyXueXpNutyYOQg=");
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/ScrollAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Contact = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
    });
    const [formType, setFormType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('reservation') // 'reservation' or 'contact'
    ;
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Form doğrulama
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Lütfen zorunlu alanları doldurunuz.');
            return;
        }
        // Simüle edilmiş API çağrısı
        setTimeout(()=>{
            if (formType === 'reservation') {
                alert(`Rezervasyonunuz başarıyla alındı!\n\nAd: ${formData.name}\nTarih: ${formData.date}\nSaat: ${formData.time}\nKişi Sayısı: ${formData.guests}\n\nEn kısa sürede size dönüş yapacağız.`);
            } else {
                alert(`Mesajınız başarıyla gönderildi!\n\nAd: ${formData.name}\nE-posta: ${formData.email}\n\nEn kısa sürede size dönüş yapacağız.`);
            }
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: '',
                message: ''
            });
        }, 1000);
    };
    const contactInfo = [
        {
            icon: '📍',
            title: 'Adres',
            content: 'Mehmet Yavaş Bulvarı No:123\nKadıköy/İstanbul'
        },
        {
            icon: '📞',
            title: 'Telefon',
            content: '0216 555 12 34\n0532 123 45 67'
        },
        {
            icon: '⏰',
            title: 'Çalışma Saatleri',
            content: 'Pazartesi - Cuma: 11:00 - 23:00\nCumartesi - Pazar: 12:00 - 00:00'
        },
        {
            icon: '✉️',
            title: 'E-posta',
            content: 'info@kaburgaciaybaz.com\nrezervasyon@kaburgaciaybaz.com'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "section-padding bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-gray-800",
                            children: "İletişim"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "Bize ulaşın veya rezervasyon yapın"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                    children: contactInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: index * 0.1,
                            className: "bg-white p-6 rounded-xl shadow-md text-center card-hover",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl mb-4",
                                    children: info.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-2 text-gray-800",
                                    children: info.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 whitespace-pre-line",
                                    children: info.content
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-1 inline-flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFormType('reservation'),
                                className: `px-6 py-3 rounded-md font-medium transition-all duration-300 ${formType === 'reservation' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:text-primary-600'}`,
                                children: "Rezervasyon Yap"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFormType('contact'),
                                className: `px-6 py-3 rounded-md font-medium transition-all duration-300 ${formType === 'contact' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:text-primary-600'}`,
                                children: "İletişim Formu"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-xl shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-gray-800",
                                        children: formType === 'reservation' ? 'Rezervasyon Formu' : 'İletişim Formu'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "name",
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Adınız Soyadınız"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "name",
                                                                name: "name",
                                                                value: formData.name,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "email",
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "E-posta"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                id: "email",
                                                                name: "email",
                                                                value: formData.email,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "phone",
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Telefon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                id: "phone",
                                                                name: "phone",
                                                                value: formData.phone,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    formType === 'reservation' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "date",
                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                        children: "Tarih"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        id: "date",
                                                                        name: "date",
                                                                        value: formData.date,
                                                                        onChange: handleChange,
                                                                        required: true,
                                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "time",
                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                        children: "Saat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "time",
                                                                        name: "time",
                                                                        value: formData.time,
                                                                        onChange: handleChange,
                                                                        required: true,
                                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Seçiniz"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 220,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "11:00",
                                                                                children: "11:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 221,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "12:00",
                                                                                children: "12:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 222,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "13:00",
                                                                                children: "13:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 223,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "14:00",
                                                                                children: "14:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 224,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "15:00",
                                                                                children: "15:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 225,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "16:00",
                                                                                children: "16:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 226,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "17:00",
                                                                                children: "17:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 227,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "18:00",
                                                                                children: "18:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 228,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "19:00",
                                                                                children: "19:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "20:00",
                                                                                children: "20:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 230,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "21:00",
                                                                                children: "21:00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 231,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "guests",
                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                        children: "Kişi Sayısı"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "guests",
                                                                        name: "guests",
                                                                        value: formData.guests,
                                                                        onChange: handleChange,
                                                                        required: true,
                                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Seçiniz"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 246,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "1",
                                                                                children: "1 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 247,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "2",
                                                                                children: "2 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 248,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "3",
                                                                                children: "3 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 249,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "4",
                                                                                children: "4 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 250,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "5",
                                                                                children: "5 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 251,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "6",
                                                                                children: "6 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 252,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "7",
                                                                                children: "7 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "8",
                                                                                children: "8 Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 254,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "9+",
                                                                                children: "9+ Kişi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                                lineNumber: 255,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "message",
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: formType === 'reservation' ? 'Notunuz (Varsa)' : 'Mesajınız'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "message",
                                                        name: "message",
                                                        value: formData.message,
                                                        onChange: handleChange,
                                                        rows: 4,
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full btn-primary text-center",
                                                children: formType === 'reservation' ? 'Rezervasyon Yap' : 'Mesaj Gönder'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-xl shadow-lg h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-gray-800",
                                        children: "Konumumuz"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-96 bg-gray-200 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-lg",
                                            children: "Harita Yükleniyor..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Restoranımız Kadıköy\\'ün merkezinde, kolay ulaşılabilir bir konumda yer almaktadır. Toplu taşıma araçlarıyla veya özel aracınızla rahatlıkla ulaşabilirsiniz."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/adsız klasör/kaburgaci-aybaz/src/components/Contact.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contact, "nUAYIhq7Q8CrBQT4AYLQlfZjGhI=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_ads%C4%B1z%20klaso%CC%88r_kaburgaci-aybaz_src_components_7a140642._.js.map