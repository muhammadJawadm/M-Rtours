module.exports = {

"[project]/src/app/Components/Common/loadBackgroudImages.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>loadBackgroudImages)
});
function loadBackgroudImages() {
    const backgroudImages = document.querySelectorAll("[data-background]");
    if (backgroudImages.length > 0) {
        backgroudImages.forEach((element)=>{
            if (element instanceof HTMLElement) {
                const image = element.dataset.background;
                if (image) {
                    element.style.backgroundImage = `url('${image}')`;
                }
            }
        });
    }
}
}}),
"[project]/src/app/Components/HeroBanner/HeroBanner3.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Common/loadBackgroudImages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/esm/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const HeroBanner3 = ()=>{
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        departureDate: '',
        departureCity: '',
        travelers: '1',
        nights: '1',
        fullName: '',
        phone: '',
        email: ''
    });
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoButton, setVideoButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('play');
    const [videoButtonImage, setVideoButtonImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('/assets/img/svg/play-icon.svg');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const heroContent = [
        {
            img: "/assets/video/start.PNG",
            video: "/assets/video/Hero1.mp4",
            subtitle: "Book Your Umrah Today",
            title: "Your 2025 Umrah Journey from the UK Starts Here",
            content: "Flexible packages, Haram-view hotels & VIP support for a seamless spiritual experience. Book affordable Umrah packages UK with private transfers and full visa assistance."
        },
        {
            img: "/assets/video/start.PNG",
            video: "/assets/video/Hero2.mp4",
            subtitle: "Spiritual Journey",
            title: "Perform Umrah <br> With Comfort & Care",
            content: "From flights to hotels, we provide complete Umrah services so you can focus on your prayers and worship."
        },
        {
            img: "/assets/video/start.PNG",
            video: "/assets/video/Hero3.mp4",
            subtitle: "Plan Your Hajj",
            title: "Hajj Packages <br> With Trusted Guidance",
            content: "Join thousands of pilgrims in a life-changing journey, guided by experts who ensure your safety and ease."
        }
    ];
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async ()=>{
        // Clear any previous messages
        setSubmitMessage(null);
        try {
            setIsSubmitting(true);
            // Send the email using our API route
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.success) {
                // Success - show success message and reset form
                setSubmitMessage({
                    text: 'Booking request sent successfully! We will contact you shortly.',
                    type: 'success'
                });
                // Reset form after successful submission
                setFormData({
                    departureDate: '',
                    departureCity: '',
                    travelers: '1',
                    nights: '1',
                    fullName: '',
                    phone: '',
                    email: ''
                });
            } else {
                // API returned an error
                setSubmitMessage({
                    text: 'Failed to send booking request. Please try again later.',
                    type: 'error'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitMessage({
                text: 'An error occurred. Please try again later.',
                type: 'error'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        const videoElement = document.querySelector('.hero-video');
        if (videoElement) {
            videoElement.play().catch((error)=>{
                console.error('Error playing video:', error);
            });
        }
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        beforeChange: (current, next)=>{
            const videos = document.querySelectorAll('.hero-video');
            videos.forEach((video)=>{
                if (!video.paused) {
                    video.currentTime = 0;
                }
            });
        },
        afterChange: (current)=>{
            const activeSlide = document.querySelector('.slick-active .hero-video');
            if (activeSlide) {
                activeSlide.play().catch(()=>{
                    console.log('Video play failed');
                });
            }
        },
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const handlePlayPause = ()=>{
        const videoElement = document.querySelector('.hero-video');
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.currentTime = 0;
                setIsPlaying(true);
                setVideoButton('pause');
                setVideoButtonImage('/assets/img/svg/pause-icon.svg');
                videoElement.play().catch((error)=>{
                    console.error('Error playing video:', error);
                });
            } else {
                setIsPlaying(false);
                setVideoButton('play');
                setVideoButtonImage('/assets/img/svg/play-icon.svg');
                videoElement.pause();
            }
        }
    };
    const handleVideoReady = (e)=>{
        const video = e.target;
        if (video) {
            video.play().catch((error)=>{
                console.error('Error auto-playing video:', error);
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-c40ee9d065567758" + " " + "hero-section hero-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c40ee9d065567758" + " " + "swiper hero-slider-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c40ee9d065567758" + " " + "swiper-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ...settings,
                            ref: sliderRef,
                            children: heroContent.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c40ee9d065567758" + " " + "swiper-slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c40ee9d065567758" + " " + "hero-media bg-cover",
                                        children: [
                                            item.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                autoPlay: true,
                                                muted: true,
                                                loop: true,
                                                playsInline: true,
                                                preload: "auto",
                                                onCanPlay: handleVideoReady,
                                                className: "jsx-c40ee9d065567758" + " " + "hero-video",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                        src: item.video,
                                                        type: "video/mp4",
                                                        className: "jsx-c40ee9d065567758"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.img,
                                                        alt: "Hero background",
                                                        className: "jsx-c40ee9d065567758"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 221,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-background": item.img,
                                                style: {
                                                    backgroundImage: `url(${item.img})`,
                                                    display: item.video ? 'none' : 'block'
                                                },
                                                className: "jsx-c40ee9d065567758" + " " + "hero-image-fallback bg-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 235,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c40ee9d065567758" + " " + "hero-overlay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 244,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c40ee9d065567758" + " " + "container hero-content-container",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c40ee9d065567758" + " " + "row justify-content-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c40ee9d065567758" + " " + "col-lg-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-c40ee9d065567758" + " " + "hero-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.2s",
                                                                    className: "jsx-c40ee9d065567758" + " " + "sub-title",
                                                                    children: item.subtitle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.4s",
                                                                    className: "jsx-c40ee9d065567758",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(item.title)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.6s",
                                                                    className: "jsx-c40ee9d065567758",
                                                                    children: item.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.8s",
                                                                    className: "jsx-c40ee9d065567758" + " " + "about-button",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/Umrah-packages",
                                                                            className: "theme-btn",
                                                                            children: [
                                                                                "View Packages",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "jsx-c40ee9d065567758" + " " + "bi bi-arrow-right"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                                    lineNumber: 260,
                                                                                    columnNumber: 121
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/Hajj-packages",
                                                                            className: "theme-btn style-2",
                                                                            children: [
                                                                                "Plan Your Journey",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "jsx-c40ee9d065567758" + " " + "bi bi-arrow-right"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                                    lineNumber: 261,
                                                                                    columnNumber: 132
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                            lineNumber: 261,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 246,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                        lineNumber: 219,
                                        columnNumber: 33
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                            lineNumber: 216,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c40ee9d065567758" + " " + "swiper-dot",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c40ee9d065567758" + " " + "dot2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                            lineNumber: 273,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                        lineNumber: 272,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c40ee9d065567758" + " " + "booking-form-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c40ee9d065567758" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c40ee9d065567758" + " " + "booking-form-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c40ee9d065567758" + " " + "booking-form-content",
                            children: [
                                submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c40ee9d065567758" + " " + `alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`,
                                    children: submitMessage.text.replace(/'/g, "&apos;")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 284,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c40ee9d065567758" + " " + "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                name: "departureDate",
                                                value: formData.departureDate,
                                                onChange: handleInputChange,
                                                placeholder: "Departure Date",
                                                style: {
                                                    width: '90%',
                                                    color: 'black'
                                                },
                                                required: true,
                                                className: "jsx-c40ee9d065567758" + " " + "form-input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 293,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 292,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "departureCity",
                                                value: formData.departureCity,
                                                onChange: handleInputChange,
                                                placeholder: "Departure City",
                                                required: true,
                                                className: "jsx-c40ee9d065567758" + " " + "form-input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 305,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 304,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "travelers",
                                                value: formData.travelers,
                                                onChange: handleInputChange,
                                                required: true,
                                                className: "jsx-c40ee9d065567758" + " " + "form-input",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-c40ee9d065567758",
                                                        children: "Travelers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 41
                                                    }, this),
                                                    [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5,
                                                        6,
                                                        7,
                                                        8
                                                    ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: num,
                                                            className: "jsx-c40ee9d065567758",
                                                            children: [
                                                                num,
                                                                " ",
                                                                num === 1 ? 'Traveler' : 'Travelers'
                                                            ]
                                                        }, num, true, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 45
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 316,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 315,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "nights",
                                                value: formData.nights,
                                                onChange: handleInputChange,
                                                required: true,
                                                className: "jsx-c40ee9d065567758" + " " + "form-input",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-c40ee9d065567758",
                                                        children: "Nights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 41
                                                    }, this),
                                                    [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5,
                                                        6,
                                                        7,
                                                        8,
                                                        9,
                                                        10,
                                                        14,
                                                        21
                                                    ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: num,
                                                            className: "jsx-c40ee9d065567758",
                                                            children: [
                                                                num,
                                                                " ",
                                                                num === 1 ? 'Night' : 'Nights'
                                                            ]
                                                        }, num, true, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 45
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 330,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 329,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 291,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c40ee9d065567758" + " " + "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "fullName",
                                                value: formData.fullName,
                                                onChange: handleInputChange,
                                                placeholder: "Full Name",
                                                required: true,
                                                className: "jsx-c40ee9d065567758" + " " + "form-input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 348,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 347,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                name: "phone",
                                                value: formData.phone,
                                                onChange: handleInputChange,
                                                placeholder: "Phone",
                                                required: true,
                                                className: "jsx-c40ee9d065567758" + " " + "form-input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 359,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 358,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                value: formData.email,
                                                onChange: handleInputChange,
                                                placeholder: "Email",
                                                required: true,
                                                className: "jsx-c40ee9d065567758" + " " + "form-input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 370,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 369,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c40ee9d065567758" + " " + "form-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSubmit,
                                                disabled: isSubmitting,
                                                className: "jsx-c40ee9d065567758" + " " + "form-button",
                                                children: isSubmitting ? 'Sending...' : 'Book Now'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 381,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 380,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 346,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                            lineNumber: 281,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                        lineNumber: 280,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                    lineNumber: 279,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "c40ee9d065567758",
                children: ".hero-media.jsx-c40ee9d065567758{justify-content:center;align-items:center;width:100%;height:100vh;min-height:500px;max-height:900px;display:flex;position:relative;overflow:hidden}.hero-content-container.jsx-c40ee9d065567758{z-index:3;text-align:center;width:100%;padding:0 1rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.hero-video.jsx-c40ee9d065567758{object-fit:cover;z-index:0;filter:brightness(.7)contrast(1.1);width:100%;height:100%;position:absolute;top:0;left:0}.hero-image-fallback.jsx-c40ee9d065567758{z-index:0;filter:brightness(.7)contrast(1.1);background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;height:100%;position:absolute;top:0;left:0}.hero-overlay.jsx-c40ee9d065567758{z-index:1;background:linear-gradient(135deg,#0000004d 0%,#0003 50%,#0000004d 100%);width:100%;height:100%;position:absolute;top:0;left:0}.hero-content.jsx-c40ee9d065567758{z-index:4;text-shadow:3px 3px 6px #000000e6;text-align:center;padding:2rem 1rem;position:relative}.hero-content.jsx-c40ee9d065567758 .sub-title.jsx-c40ee9d065567758{color:#fff;text-shadow:3px 3px 6px #000000e6;margin-bottom:1rem;font-size:1.2rem;font-weight:600}.hero-content.jsx-c40ee9d065567758 h1.jsx-c40ee9d065567758{color:#fff;text-shadow:4px 4px 8px #000000e6;margin-bottom:1.5rem;font-size:3.5rem;font-weight:700;line-height:1.2}.hero-content.jsx-c40ee9d065567758 p.jsx-c40ee9d065567758{color:#f8f9fa;text-shadow:3px 3px 6px #000000e6;max-width:600px;margin-bottom:2rem;margin-left:auto;margin-right:auto;font-size:1.2rem;font-weight:500;line-height:1.6}.theme-btn.jsx-c40ee9d065567758{backdrop-filter:blur(10px);text-shadow:none;border:2px solid #ffffff4d;font-weight:600;transition:all .3s;color:#333!important;background:#fffffff2!important}.theme-btn.jsx-c40ee9d065567758:hover{transform:translateY(-2px);box-shadow:0 8px 25px #0000004d;color:#000!important;background:#fff!important}.theme-btn.style-2.jsx-c40ee9d065567758{border:2px solid #ffffff4d;color:#fff!important;background:#000c!important}.theme-btn.style-2.jsx-c40ee9d065567758:hover{color:#fff!important;background:#000000f2!important}.booking-form-wrapper.jsx-c40ee9d065567758{z-index:10;margin-top:-80px;padding:0 1rem 3rem;position:relative}.booking-form-card.jsx-c40ee9d065567758{background:#fff;border-radius:12px;max-width:1500px;min-height:200px;margin:0 auto;box-shadow:0 25px 50px -12px #00000040}.booking-form-content.jsx-c40ee9d065567758{padding:2rem 1rem}.form-grid.jsx-c40ee9d065567758{grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.2rem;margin-bottom:1.5rem;display:grid}.form-field.jsx-c40ee9d065567758{width:100%}.form-input.jsx-c40ee9d065567758{color:#333;background:#fff;border:2px solid #e5e7eb;border-radius:8px;outline:none;width:100%;padding:1rem 1.5rem;font-size:1rem;transition:all .3s}.form-input.jsx-c40ee9d065567758:focus{border-color:#28aae2;box-shadow:0 0 0 3px #28aae21a}.form-input.jsx-c40ee9d065567758::placeholder{color:#9ca3af;opacity:1}.form-button.jsx-c40ee9d065567758{color:#fff;cursor:pointer;background-color:#28aae2;border:none;border-radius:8px;width:100%;padding:1rem 1.5rem;font-size:1rem;font-weight:700;transition:all .3s;box-shadow:0 10px 15px -3px #0000001a}.form-button.jsx-c40ee9d065567758:hover{background-color:#2193c7;transform:translateY(-2px);box-shadow:0 15px 25px -5px #0003}@media (width<=1200px){.hero-content.jsx-c40ee9d065567758 h1.jsx-c40ee9d065567758{font-size:2.5rem}.hero-content.jsx-c40ee9d065567758 p.jsx-c40ee9d065567758{font-size:1rem}.hero-media.jsx-c40ee9d065567758{height:70vh;min-height:400px;max-height:700px}.booking-form-wrapper.jsx-c40ee9d065567758{margin-top:-70px}}@media (width<=900px){.hero-content.jsx-c40ee9d065567758 h1.jsx-c40ee9d065567758{font-size:2rem}.hero-content.jsx-c40ee9d065567758 p.jsx-c40ee9d065567758{font-size:.95rem}.hero-media.jsx-c40ee9d065567758{height:60vh;min-height:300px;max-height:500px;margin-top:60px}.booking-form-wrapper.jsx-c40ee9d065567758{margin-top:-60px}.form-grid.jsx-c40ee9d065567758{gap:1rem;margin-bottom:1.2rem}}@media (width<=768px){.hero-media.jsx-c40ee9d065567758{height:50vh;min-height:250px;max-height:400px;margin-top:70px}.hero-content.jsx-c40ee9d065567758{padding:1rem .5rem}.hero-content.jsx-c40ee9d065567758 h1.jsx-c40ee9d065567758{margin-bottom:1rem;font-size:1.5rem}.hero-content.jsx-c40ee9d065567758 p.jsx-c40ee9d065567758{margin-bottom:1rem;font-size:.9rem}.hero-content.jsx-c40ee9d065567758 .sub-title.jsx-c40ee9d065567758{margin-bottom:.8rem;font-size:1rem}.about-button.jsx-c40ee9d065567758{flex-direction:column;align-items:center;gap:1rem;display:flex}.about-button.jsx-c40ee9d065567758 .theme-btn.jsx-c40ee9d065567758{text-align:center;width:200px}.booking-form-wrapper.jsx-c40ee9d065567758{margin-top:-50px;padding:0 .8rem 2rem}.booking-form-content.jsx-c40ee9d065567758{padding:1.5rem 1rem}.form-grid.jsx-c40ee9d065567758{grid-template-columns:1fr;gap:1rem;margin-bottom:1rem}.form-input.jsx-c40ee9d065567758,.form-button.jsx-c40ee9d065567758{padding:.875rem 1rem;font-size:.95rem}}@media (width<=480px){.hero-media.jsx-c40ee9d065567758{height:45vh;min-height:200px;max-height:300px;margin-top:80px}.hero-content.jsx-c40ee9d065567758 h1.jsx-c40ee9d065567758{margin-bottom:.8rem;font-size:1.2rem}.hero-content.jsx-c40ee9d065567758 p.jsx-c40ee9d065567758{margin-bottom:.8rem;font-size:.85rem}.hero-content.jsx-c40ee9d065567758 .sub-title.jsx-c40ee9d065567758{margin-bottom:.5rem;font-size:.9rem}.booking-form-wrapper.jsx-c40ee9d065567758{margin-top:-40px}.booking-form-content.jsx-c40ee9d065567758{padding:1.2rem .8rem}.form-grid.jsx-c40ee9d065567758{gap:.875rem;margin-bottom:.875rem}.form-input.jsx-c40ee9d065567758,.form-button.jsx-c40ee9d065567758{padding:.75rem .875rem;font-size:.9rem}.form-input.jsx-c40ee9d065567758::placeholder{opacity:1;color:#6b7280;font-size:.9rem}input[type=date].jsx-c40ee9d065567758::-webkit-calendar-picker-indicator{cursor:pointer;background-position:100%;background-size:auto;position:absolute;bottom:8px;right:10px}input[type=date].jsx-c40ee9d065567758{padding-right:40px;position:relative}select.form-input.jsx-c40ee9d065567758{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");background-position:right .7rem center;background-repeat:no-repeat;background-size:1em;padding-right:40px}}@media (width<=380px){.hero-media.jsx-c40ee9d065567758{height:40vh;min-height:180px;max-height:260px;margin-top:90px}.form-input.jsx-c40ee9d065567758::placeholder{font-size:.85rem}.form-input.jsx-c40ee9d065567758,.form-button.jsx-c40ee9d065567758{padding:.7rem .8rem}}@media (prefers-reduced-motion:reduce){.hero-video.jsx-c40ee9d065567758{animation-play-state:paused}}.alert.jsx-c40ee9d065567758{border:1px solid #0000;border-radius:.375rem;margin-bottom:1rem;padding:.75rem 1.25rem}.alert-success.jsx-c40ee9d065567758{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-danger.jsx-c40ee9d065567758{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.form-button.jsx-c40ee9d065567758:disabled{cursor:not-allowed;box-shadow:none;background-color:#94d2ee;transform:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
        lineNumber: 213,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = HeroBanner3;
}}),
"[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/esm/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const FeaturedTour1 = ()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const next = ()=>{
        sliderRef.current.slickNext();
    };
    const previous = ()=>{
        sliderRef.current.slickPrev();
    };
    const tourContent = [
        {
            img: '/assets/img/feature/01.jpg',
            location: 'Nederland',
            title: 'Best Time Ever to Explore <br>Molinas Nature',
            price: '$49.00'
        },
        {
            img: '/assets/img/feature/02.jpg',
            location: 'Thailand',
            title: 'Bathing and Kayaking at <br>Nonrival Beach',
            price: '$49.00'
        },
        {
            img: '/assets/img/feature/03.jpg',
            location: 'Austria',
            title: '5 Best Tips for an Amazing <br>Molina Trip',
            price: '$49.00'
        },
        {
            img: '/assets/img/feature/04.jpg',
            location: 'Slingerland',
            title: 'Discover Beautiful Moliva: <br>Natures Paradise',
            price: '$49.00'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "featured-tour-section section-padding section-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "left-shape",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/img/feature/plane-shape.png",
                    alt: "img",
                    width: 372,
                    height: 112
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                    lineNumber: 62,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "right-shape",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/img/feature/plane-shape.png",
                    alt: "img",
                    width: 372,
                    height: 112
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                    lineNumber: 65,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "array-button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: previous,
                        className: "array-prev",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/img/offer/chervon-right.png",
                            alt: "img",
                            width: 24,
                            height: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                            lineNumber: 68,
                            columnNumber: 67
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: next,
                        className: "array-next",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/img/icon/39.svg",
                            alt: "img",
                            width: 24,
                            height: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                            lineNumber: 69,
                            columnNumber: 63
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sub-title wow fadeInUp",
                                children: "Featured Tour"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wow fadeInUp wow",
                                "data-wow-delay": ".5s",
                                children: "unforgettable Travel Discoveries"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "wow fadeInUp wow",
                        "data-wow-delay": ".7s",
                        children: [
                            "There are many variations of passages of  available, but the majority have suffered alteration in some ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                lineNumber: 81,
                                columnNumber: 124
                            }, this),
                            " form, by injected humour words which do not look even slightly believable"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper tour-slider",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "swiper-wrapper cs_slider_gap_301",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                ref: sliderRef,
                                ...settings,
                                children: tourContent.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "feature-tour-items",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-tour-image",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: item.img,
                                                            alt: "img",
                                                            width: 294,
                                                            height: 238
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "location",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-geo-alt-fill"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                                        lineNumber: 93,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    item.location
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-tour-content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/tour/tour-details",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(item.title)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            children: [
                                                                item.price,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "/Per day"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/tour/tour-details",
                                                            className: "icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "bi bi-arrow-right"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 37
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/FeaturedTour/FeaturedTour1.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = FeaturedTour1;
}}),

};

//# sourceMappingURL=src_app_Components_54e5c6c3._.js.map