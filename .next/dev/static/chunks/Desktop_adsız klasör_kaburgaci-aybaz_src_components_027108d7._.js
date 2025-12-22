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
                                        href: "/",
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
                                        href: "/menu",
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
                                        href: "/about",
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
                                        href: "/contact",
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
                    className: "md:hidden bg-white rounded-lg shadow-xl mt-4 py-4 px-6 absolute top-full left-0 right-0 w-full z-40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ads$_131$z__klaso$_308$r$2f$kaburgaci$2d$aybaz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300 py-2 border-b border-gray-100",
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
                                    href: "/menu",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300 py-2 border-b border-gray-100",
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
                                    href: "/about",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300 py-2 border-b border-gray-100",
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
                                    href: "/contact",
                                    className: "block text-gray-800 font-medium hover:text-secondary-500 transition-colors duration-300 py-2",
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
]);

//# sourceMappingURL=Desktop_ads%C4%B1z%20klaso%CC%88r_kaburgaci-aybaz_src_components_027108d7._.js.map