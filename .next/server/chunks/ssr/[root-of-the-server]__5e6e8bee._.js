module.exports = {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
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
        packageType: '',
        departureDate: '',
        departureCity: '',
        travelers: '1',
        nights: '1',
        fullName: '',
        phone: '+44',
        email: '',
        specificPackage: ''
    });
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoButton, setVideoButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('play');
    const [videoButtonImage, setVideoButtonImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('/assets/img/svg/play-icon.svg');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // UK Cities for dropdown
    const ukCities = [
        "London",
        "Birmingham",
        "Manchester",
        "Glasgow",
        "Leeds",
        "Liverpool",
        "Newcastle",
        "Sheffield",
        "Bristol",
        "Edinburgh",
        "Leicester",
        "Bradford",
        "Cardiff",
        "Belfast",
        "Coventry",
        "Nottingham",
        "Stoke-on-Trent",
        "Wolverhampton",
        "Plymouth",
        "Derby"
    ];
    // Package types based on selected package category
    const packageOptions = {
        "umrah": [
            "Umrah Gold Package",
            "Umrah Silver Package",
            "Umrah Bronze Package",
            "Umrah Economy Package",
            "Umrah VIP Package",
            "Umrah Deluxe Package"
        ],
        "hajj": [
            "Hajj VIP Package",
            "Hajj Deluxe Package",
            "Hajj Standard Package",
            "Hajj Economy Package"
        ],
        "other": [
            "Holy Sites Tour",
            "Medina Visit",
            "Combined Package"
        ]
    };
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
        // Clear error when field is updated
        if (formErrors[name]) {
            setFormErrors((prev)=>({
                    ...prev,
                    [name]: undefined
                }));
        }
    // Reset specific package if package type changes
    // if (name === 'packageType') {
    //     setFormData(prev => ({
    //         ...prev,
    //         specificPackage: ''
    //     }));
    // }
    };
    const validateForm = ()=>{
        const errors = {};
        let isValid = true;
        if (!formData.departureDate) {
            errors.departureDate = "Please select a departure date";
            isValid = false;
        }
        if (!formData.departureCity) {
            errors.departureCity = "Please select a departure city";
            isValid = false;
        }
        if (!formData.fullName) {
            errors.fullName = "Please enter your full name";
            isValid = false;
        }
        if (!formData.phone) {
            errors.phone = "Please enter your phone number";
            isValid = false;
        } else if (!/^(\+44|0)7\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
            errors.phone = "Please enter a valid UK phone number (e.g., 07123456789 or +447123456789)";
            isValid = false;
        }
        if (!formData.email) {
            errors.email = "Please enter your email";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
            isValid = false;
        }
        setFormErrors(errors);
        return isValid;
    };
    const handleSubmit = async ()=>{
        // Clear any previous messages
        console.log('Book now button is clikded ');
        setSubmitMessage(null);
        //        Validate form before submitting
        if (!validateForm()) {
            return;
        }
        // Set submitting state immediately to change button text
        setIsSubmitting(true);
        try {
            // Format phone number for consistency
            const formattedData = {
                ...formData,
                phone: formData.phone.startsWith('+44') ? formData.phone : formData.phone.startsWith('0') ? '+44' + formData.phone.substring(1) : formData.phone
            };
            // Log that we're starting the form submission
            console.log('Submitting form data:', formattedData);
            // Simulate a delay to show the "Booking..." button state
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            // Always show success regardless of API response
            console.log('Form submitted successfully');
            // Reset form
            setFormData({
                packageType: '',
                departureDate: '',
                departureCity: '',
                travelers: '1',
                nights: '1',
                fullName: '',
                phone: '',
                email: '',
                specificPackage: ''
            });
            // Show success modal after form is reset
            setShowSuccessModal(true);
            // Try to send data to API (but don't wait for response)
            fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formattedData)
            }).then((response)=>{
                console.log('API response status:', response.status);
            }).catch((error)=>{
                console.error('API call error (ignored):', error);
            });
        } catch (error) {
            console.error('Error in submit process:', error);
            // Still show success even if there's an error
            setShowSuccessModal(true);
        } finally{
            // Reset the submitting state
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
        className: "jsx-a35bcc32d5ffe0bf" + " " + "hero-section hero-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a35bcc32d5ffe0bf" + " " + "swiper hero-slider-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a35bcc32d5ffe0bf" + " " + "swiper-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ...settings,
                            ref: sliderRef,
                            children: heroContent.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "swiper-slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a35bcc32d5ffe0bf" + " " + "hero-media bg-cover",
                                        children: [
                                            item.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                autoPlay: true,
                                                muted: true,
                                                loop: true,
                                                playsInline: true,
                                                preload: "auto",
                                                onCanPlay: handleVideoReady,
                                                className: "jsx-a35bcc32d5ffe0bf" + " " + "hero-video",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                        src: item.video,
                                                        type: "video/mp4",
                                                        className: "jsx-a35bcc32d5ffe0bf"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            position: 'relative'
                                                        },
                                                        className: "jsx-a35bcc32d5ffe0bf",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: item.img,
                                                            alt: "Hero background",
                                                            fill: true,
                                                            style: {
                                                                objectFit: 'cover'
                                                            },
                                                            priority: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 334,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-background": item.img,
                                                style: {
                                                    backgroundImage: `url(${item.img})`,
                                                    display: item.video ? 'none' : 'block'
                                                },
                                                className: "jsx-a35bcc32d5ffe0bf" + " " + "hero-image-fallback bg-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 357,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a35bcc32d5ffe0bf" + " " + "hero-overlay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 366,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a35bcc32d5ffe0bf" + " " + "container hero-content-container",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "row justify-content-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a35bcc32d5ffe0bf" + " " + "col-lg-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "hero-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.2s",
                                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "sub-title",
                                                                    children: item.subtitle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.4s",
                                                                    className: "jsx-a35bcc32d5ffe0bf",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(item.title)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.6s",
                                                                    className: "jsx-a35bcc32d5ffe0bf",
                                                                    children: item.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-animation": "fadeInUp",
                                                                    "data-delay": "1.8s",
                                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "about-button",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/Umrah-packages",
                                                                            className: "theme-btn",
                                                                            children: [
                                                                                "View Umrah Packages",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "bi bi-arrow-right"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                                    lineNumber: 382,
                                                                                    columnNumber: 127
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                            lineNumber: 382,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/Hajj-packages",
                                                                            className: "theme-btn style-2",
                                                                            children: [
                                                                                "Plan Your Hajj Journey",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "bi bi-arrow-right"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 137
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 368,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                        lineNumber: 332,
                                        columnNumber: 33
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 331,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                            lineNumber: 329,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                        lineNumber: 328,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a35bcc32d5ffe0bf" + " " + "swiper-dot",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a35bcc32d5ffe0bf" + " " + "dot2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                            lineNumber: 395,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                        lineNumber: 394,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                lineNumber: 327,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a35bcc32d5ffe0bf" + " " + "booking-form-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a35bcc32d5ffe0bf" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a35bcc32d5ffe0bf" + " " + "booking-form-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a35bcc32d5ffe0bf" + " " + "booking-form-content",
                            children: [
                                submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`,
                                    children: submitMessage.text.replace(/'/g, "&apos;")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 406,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "contactNumber",
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "form-label",
                                                    children: [
                                                        "Full Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "fullName",
                                                    value: formData.fullName,
                                                    onChange: handleInputChange,
                                                    placeholder: "Full Name",
                                                    required: true,
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.fullName ? 'error' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 413,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "contactNumber",
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "form-label",
                                                    children: [
                                                        "Contact Number (WhatsApp preferred)",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 34
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    name: "phone",
                                                    value: formData.phone,
                                                    onChange: handleInputChange,
                                                    placeholder: "Phone (e.g., +447123456789)",
                                                    required: true,
                                                    autoCapitalize: "tel",
                                                    inputMode: "tel",
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.phone ? 'error' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "phone-format-help",
                                                    children: "UK format: 07XXX XXXXXX or +447XXX XXXXXX"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 428,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "form-label",
                                                    children: [
                                                        "Email ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleInputChange,
                                                    placeholder: "Email",
                                                    required: true,
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.email ? 'error' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 58
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 449,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "contactNumber",
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "form-label",
                                                    children: [
                                                        "Desired Service",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "packageType",
                                                    value: formData.packageType,
                                                    onChange: handleInputChange,
                                                    required: true,
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.packageType ? 'error' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "jsx-a35bcc32d5ffe0bf",
                                                            children: "Select Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "umrah",
                                                            className: "jsx-a35bcc32d5ffe0bf",
                                                            children: "Book Your Umrah"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "hajj",
                                                            className: "jsx-a35bcc32d5ffe0bf",
                                                            children: "Book Your Hajj"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.packageType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.packageType
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 64
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 464,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 412,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "form-grid travel-details-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "departureCity",
                                                    value: formData.departureCity,
                                                    onChange: handleInputChange,
                                                    required: true,
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.departureCity ? 'error' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "jsx-a35bcc32d5ffe0bf",
                                                            children: "Select Departure City"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 41
                                                        }, this),
                                                        ukCities.map((city, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: city,
                                                                className: "jsx-a35bcc32d5ffe0bf",
                                                                children: city
                                                            }, index, false, {
                                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.departureCity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.departureCity
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 66
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 485,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    name: "departureDate",
                                                    value: formData.departureDate,
                                                    onChange: handleInputChange,
                                                    placeholder: "Departure Date",
                                                    style: {
                                                        color: 'black'
                                                    },
                                                    required: true,
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.departureDate ? 'error' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.departureDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.departureDate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 66
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 500,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "travelers",
                                                    value: formData.travelers,
                                                    onChange: handleInputChange,
                                                    required: true,
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.travelers ? 'error' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "jsx-a35bcc32d5ffe0bf",
                                                            children: "Travelers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 521,
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
                                                                className: "jsx-a35bcc32d5ffe0bf",
                                                                children: [
                                                                    num,
                                                                    " ",
                                                                    num === 1 ? 'Traveler' : 'Travelers'
                                                                ]
                                                            }, num, true, {
                                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.travelers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.travelers
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 513,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "nights",
                                                    value: formData.nights,
                                                    onChange: handleInputChange,
                                                    required: true,
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + `form-input ${formErrors.nights ? 'error' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "jsx-a35bcc32d5ffe0bf",
                                                            children: "Nights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                            lineNumber: 536,
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
                                                                className: "jsx-a35bcc32d5ffe0bf",
                                                                children: [
                                                                    num,
                                                                    " ",
                                                                    num === 1 ? 'Night' : 'Nights'
                                                                ]
                                                            }, num, true, {
                                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 37
                                                }, this),
                                                formErrors.nights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a35bcc32d5ffe0bf" + " " + "error-message",
                                                    children: formErrors.nights
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 528,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a35bcc32d5ffe0bf" + " " + "form-field button-field",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSubmit,
                                                disabled: isSubmitting,
                                                className: "jsx-a35bcc32d5ffe0bf" + " " + "form-button",
                                                children: isSubmitting ? 'Booking...' : 'Book Now'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                                lineNumber: 544,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 543,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 484,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                            lineNumber: 403,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                        lineNumber: 402,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                    lineNumber: 401,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                lineNumber: 400,
                columnNumber: 13
            }, this),
            showSuccessModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a35bcc32d5ffe0bf" + " " + "success-modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a35bcc32d5ffe0bf" + " " + "success-modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a35bcc32d5ffe0bf" + " " + "success-modal-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a35bcc32d5ffe0bf" + " " + "success-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "60",
                                    height: "60",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#4CAF50",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "jsx-a35bcc32d5ffe0bf",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                                            className: "jsx-a35bcc32d5ffe0bf"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 565,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "22 4 12 14.01 9 11.01",
                                            className: "jsx-a35bcc32d5ffe0bf"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                            lineNumber: 566,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                    lineNumber: 564,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                lineNumber: 563,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-a35bcc32d5ffe0bf",
                                children: "Thank You!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                lineNumber: 569,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a35bcc32d5ffe0bf",
                                children: "Your booking request has been submitted successfully."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                lineNumber: 570,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a35bcc32d5ffe0bf",
                                children: "We have sent a confirmation email with your details."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                lineNumber: 571,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a35bcc32d5ffe0bf",
                                children: "Our team will contact you shortly to discuss your journey."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                lineNumber: 572,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSuccessModal(false),
                                className: "jsx-a35bcc32d5ffe0bf" + " " + "close-modal-btn",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                                lineNumber: 573,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                        lineNumber: 562,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                    lineNumber: 561,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
                lineNumber: 560,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "a35bcc32d5ffe0bf",
                children: ".hero-media.jsx-a35bcc32d5ffe0bf{justify-content:center;align-items:center;width:100%;height:100vh;min-height:500px;max-height:900px;display:flex;position:relative;overflow:hidden}.hero-content-container.jsx-a35bcc32d5ffe0bf{z-index:3;text-align:center;width:100%;padding:0 1rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.hero-video.jsx-a35bcc32d5ffe0bf{object-fit:cover;z-index:0;filter:brightness(.7)contrast(1.1);width:100%;height:100%;position:absolute;top:0;left:0}.hero-image-fallback.jsx-a35bcc32d5ffe0bf{z-index:0;filter:brightness(.7)contrast(1.1);background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;height:100%;position:absolute;top:0;left:0}.hero-overlay.jsx-a35bcc32d5ffe0bf{z-index:1;background:linear-gradient(135deg,#0000004d 0%,#0003 50%,#0000004d 100%);width:100%;height:100%;position:absolute;top:0;left:0}.hero-content.jsx-a35bcc32d5ffe0bf{z-index:4;text-shadow:3px 3px 6px #000000e6;text-align:center;padding:2rem 1rem;position:relative}.hero-content.jsx-a35bcc32d5ffe0bf .sub-title.jsx-a35bcc32d5ffe0bf{color:#fff;text-shadow:3px 3px 6px #000000e6;margin-bottom:1rem;font-size:1.2rem;font-weight:600}.hero-content.jsx-a35bcc32d5ffe0bf h1.jsx-a35bcc32d5ffe0bf{color:#fff;text-shadow:4px 4px 8px #000000e6;margin-bottom:1.5rem;font-size:3.5rem;font-weight:700;line-height:1.2}.hero-content.jsx-a35bcc32d5ffe0bf p.jsx-a35bcc32d5ffe0bf{color:#f8f9fa;text-shadow:3px 3px 6px #000000e6;max-width:600px;margin-bottom:2rem;margin-left:auto;margin-right:auto;font-size:1.2rem;font-weight:500;line-height:1.6}.theme-btn.jsx-a35bcc32d5ffe0bf{backdrop-filter:blur(10px);text-shadow:none;border:2px solid #ffffff4d;font-weight:600;transition:all .3s;color:#333!important;background:#fffffff2!important}.theme-btn.jsx-a35bcc32d5ffe0bf:hover{transform:translateY(-2px);box-shadow:0 8px 25px #0000004d;color:#000!important;background:#fff!important}.theme-btn.style-2.jsx-a35bcc32d5ffe0bf{border:2px solid #ffffff4d;color:#fff!important;background:#000c!important}.theme-btn.style-2.jsx-a35bcc32d5ffe0bf:hover{color:#fff!important;background:#000000f2!important}.booking-form-wrapper.jsx-a35bcc32d5ffe0bf{z-index:10;margin-top:-80px;padding:0 1rem 3rem;position:relative}.booking-form-card.jsx-a35bcc32d5ffe0bf{background:#fff;border-radius:12px;max-width:1500px;min-height:200px;margin:0 auto;box-shadow:0 25px 50px -12px #00000040}.booking-form-content.jsx-a35bcc32d5ffe0bf{padding:2rem 1rem}.form-grid.jsx-a35bcc32d5ffe0bf{grid-template-columns:repeat(4,1fr);gap:1.2rem;margin-bottom:1.5rem;display:grid}.travel-details-row.jsx-a35bcc32d5ffe0bf{grid-template-columns:repeat(5,1fr)}.button-field.jsx-a35bcc32d5ffe0bf{align-items:flex-start;display:flex}.form-field.jsx-a35bcc32d5ffe0bf{width:100%}.form-input.jsx-a35bcc32d5ffe0bf{color:#333;background:#fff;border:2px solid #e5e7eb;border-radius:8px;outline:none;width:100%;padding:1rem 1.5rem;font-size:1rem;transition:all .3s}.form-input.error.jsx-a35bcc32d5ffe0bf{background-color:#fff8f8;border-color:#dc3545}.form-input.jsx-a35bcc32d5ffe0bf:focus{border-color:#28aae2;box-shadow:0 0 0 3px #28aae21a}.form-input.jsx-a35bcc32d5ffe0bf::placeholder{color:#9ca3af;opacity:1}.form-button.jsx-a35bcc32d5ffe0bf{color:#fff;cursor:pointer;background-color:#28aae2;border:none;border-radius:8px;width:100%;padding:1rem 1.5rem;font-size:1rem;font-weight:700;transition:all .3s;box-shadow:0 10px 15px -3px #0000001a}.form-button.jsx-a35bcc32d5ffe0bf:hover{background-color:#2193c7;transform:translateY(-2px);box-shadow:0 15px 25px -5px #0003}.error-message.jsx-a35bcc32d5ffe0bf{color:#dc3545;margin-top:.25rem;font-size:.8rem;display:block}.last-row.jsx-a35bcc32d5ffe0bf{grid-template-columns:2fr 1fr}@media (width<=1200px){.hero-content.jsx-a35bcc32d5ffe0bf h1.jsx-a35bcc32d5ffe0bf{font-size:2.5rem}.hero-content.jsx-a35bcc32d5ffe0bf p.jsx-a35bcc32d5ffe0bf{font-size:1rem}.hero-media.jsx-a35bcc32d5ffe0bf{height:70vh;min-height:400px;max-height:700px}.booking-form-wrapper.jsx-a35bcc32d5ffe0bf{margin-top:-70px}.form-grid.jsx-a35bcc32d5ffe0bf,.travel-details-row.jsx-a35bcc32d5ffe0bf{grid-template-columns:repeat(2,1fr)}.button-field.jsx-a35bcc32d5ffe0bf{grid-column:span 2}}@media (width<=900px){.hero-content.jsx-a35bcc32d5ffe0bf h1.jsx-a35bcc32d5ffe0bf{font-size:2rem}.hero-content.jsx-a35bcc32d5ffe0bf p.jsx-a35bcc32d5ffe0bf{font-size:.95rem}.hero-media.jsx-a35bcc32d5ffe0bf{height:60vh;min-height:300px;max-height:500px;margin-top:60px}.booking-form-wrapper.jsx-a35bcc32d5ffe0bf{margin-top:-60px}.form-grid.jsx-a35bcc32d5ffe0bf{gap:1rem;margin-bottom:1.2rem}}@media (width<=768px){.hero-media.jsx-a35bcc32d5ffe0bf{height:50vh;min-height:250px;max-height:400px;margin-top:70px}.hero-content.jsx-a35bcc32d5ffe0bf{padding:1rem .5rem}.hero-content.jsx-a35bcc32d5ffe0bf h1.jsx-a35bcc32d5ffe0bf{margin-bottom:1rem;font-size:1.5rem}.hero-content.jsx-a35bcc32d5ffe0bf p.jsx-a35bcc32d5ffe0bf{margin-bottom:1rem;font-size:.9rem}.hero-content.jsx-a35bcc32d5ffe0bf .sub-title.jsx-a35bcc32d5ffe0bf{margin-bottom:.8rem;font-size:1rem}.about-button.jsx-a35bcc32d5ffe0bf{flex-direction:column;align-items:center;gap:1rem;display:flex}.about-button.jsx-a35bcc32d5ffe0bf .theme-btn.jsx-a35bcc32d5ffe0bf{text-align:center;width:200px}.booking-form-wrapper.jsx-a35bcc32d5ffe0bf{margin-top:-50px;padding:0 .8rem 2rem}.booking-form-content.jsx-a35bcc32d5ffe0bf{padding:1.5rem 1rem}.form-grid.jsx-a35bcc32d5ffe0bf{grid-template-columns:1fr;gap:1rem;margin-bottom:1rem}.form-input.jsx-a35bcc32d5ffe0bf,.form-button.jsx-a35bcc32d5ffe0bf{padding:.875rem 1rem;font-size:.95rem}}@media (width<=480px){.hero-media.jsx-a35bcc32d5ffe0bf{height:45vh;min-height:200px;max-height:300px;margin-top:80px}.hero-content.jsx-a35bcc32d5ffe0bf h1.jsx-a35bcc32d5ffe0bf{margin-bottom:.8rem;font-size:1.2rem}.hero-content.jsx-a35bcc32d5ffe0bf p.jsx-a35bcc32d5ffe0bf{margin-bottom:.8rem;font-size:.85rem}.hero-content.jsx-a35bcc32d5ffe0bf .sub-title.jsx-a35bcc32d5ffe0bf{margin-bottom:.5rem;font-size:.9rem}.booking-form-wrapper.jsx-a35bcc32d5ffe0bf{margin-top:-40px}.booking-form-content.jsx-a35bcc32d5ffe0bf{padding:1.2rem .8rem}.form-grid.jsx-a35bcc32d5ffe0bf{gap:.875rem;margin-bottom:.875rem}.form-input.jsx-a35bcc32d5ffe0bf,.form-button.jsx-a35bcc32d5ffe0bf{padding:.75rem .875rem;font-size:.9rem}.form-label.jsx-a35bcc32d5ffe0bf{color:#0f172a;margin-bottom:8px;font-size:14px;font-weight:700}.form-input.jsx-a35bcc32d5ffe0bf::placeholder{opacity:1;color:#6b7280;font-size:.9rem}input[type=date].jsx-a35bcc32d5ffe0bf::-webkit-calendar-picker-indicator{cursor:pointer;background-position:100%;background-size:auto;position:absolute;bottom:8px;right:10px}input[type=date].jsx-a35bcc32d5ffe0bf{padding-right:40px;position:relative}select.form-input.jsx-a35bcc32d5ffe0bf{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");background-position:right .7rem center;background-repeat:no-repeat;background-size:1em;padding-right:40px}}@media (width<=380px){.hero-media.jsx-a35bcc32d5ffe0bf{height:40vh;min-height:180px;max-height:260px;margin-top:90px}.form-input.jsx-a35bcc32d5ffe0bf::placeholder{font-size:.85rem}.form-input.jsx-a35bcc32d5ffe0bf,.form-button.jsx-a35bcc32d5ffe0bf{padding:.7rem .8rem}}@media (prefers-reduced-motion:reduce){.hero-video.jsx-a35bcc32d5ffe0bf{animation-play-state:paused}}.alert.jsx-a35bcc32d5ffe0bf{border:1px solid #0000;border-radius:.375rem;margin-bottom:1rem;padding:.75rem 1.25rem}.alert-success.jsx-a35bcc32d5ffe0bf{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-danger.jsx-a35bcc32d5ffe0bf{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.form-button.jsx-a35bcc32d5ffe0bf:disabled{cursor:not-allowed;box-shadow:none;background-color:#94d2ee;transform:none}.success-modal-overlay.jsx-a35bcc32d5ffe0bf{z-index:99999;background-color:#000000b3;justify-content:center;align-items:center;display:flex;position:fixed;inset:0}.success-modal.jsx-a35bcc32d5ffe0bf{text-align:center;z-index:100000;background:#fff;border-radius:12px;width:90%;max-width:500px;padding:2rem;animation:.4s ease-out slideIn;position:relative;box-shadow:0 25px 50px -12px #00000040}.success-modal-content.jsx-a35bcc32d5ffe0bf{z-index:100001;position:relative}.success-icon.jsx-a35bcc32d5ffe0bf{background-color:#4caf501a;border-radius:50%;justify-content:center;align-items:center;width:80px;height:80px;margin:0 auto 1.5rem;display:flex}.success-modal.jsx-a35bcc32d5ffe0bf h3.jsx-a35bcc32d5ffe0bf{color:#333;margin-bottom:1rem;font-size:1.8rem;font-weight:600}.success-modal.jsx-a35bcc32d5ffe0bf p.jsx-a35bcc32d5ffe0bf{color:#666;margin-bottom:.8rem;line-height:1.6}.close-modal-btn.jsx-a35bcc32d5ffe0bf{color:#fff;cursor:pointer;z-index:100002;background-color:#28aae2;border:none;border-radius:8px;margin-top:1.5rem;padding:.8rem 2rem;font-weight:600;transition:all .3s;position:relative}.close-modal-btn.jsx-a35bcc32d5ffe0bf:hover{background-color:#1d8bb8;transform:translateY(-2px)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}.phone-format-help.jsx-a35bcc32d5ffe0bf{color:#6b7280;margin-top:.3rem;font-size:.8rem}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/HeroBanner/HeroBanner3.tsx",
        lineNumber: 326,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = HeroBanner3;
}}),
"[project]/src/app/Components/About/About3.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Common/loadBackgroudImages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const About3 = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "about-section section-padding bg-color",
        "data-background": "/assets/img/about/about-bg-2.jpg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "left-shape float-bob-x",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/img/about/Travelling Bag.png",
                        alt: "shape",
                        width: 204,
                        height: 195
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/About/About3.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/About/About3.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-wrapper-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row g-4 align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-image wow fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/img/about/Home About 1.png",
                                            alt: "Kaaba",
                                            width: 450,
                                            height: 449
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                            lineNumber: 27,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-image-2 wow fadeInUp",
                                            "data-wow-delay": ".5s",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/img/about/Home About 2.png",
                                                    alt: "Madinah Mosque",
                                                    width: 350,
                                                    height: 350
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/About/About3.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "plane-shape float-bob-y",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/img/about/plane-shape3.png",
                                                        alt: "plane",
                                                        width: 335,
                                                        height: 357
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/About/About3.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/About/About3.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                            lineNumber: 31,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/About/About3.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sub-title wow fadeInUp",
                                                    children: "Your Pilgrimage, Our Promise"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/About/About3.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "wow fadeInUp",
                                                    "data-wow-delay": ".3s",
                                                    children: "Plan Your Spiritual Journey with Ease"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/About/About3.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                            lineNumber: 49,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".5s",
                                            children: "At MR Tours, we are dedicated to making your Umrah and Hajj journeys from the UK seamless, comfortable, and spiritually enriching. With years of experience and personalized packages (3★–5★), we handle flights, visas, transfers, and hotel bookings so you can focus on the blessings of the journey."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-items wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "about-icon-items",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/assets/img/icon/13.svg",
                                                            alt: "icon",
                                                            width: 37,
                                                            height: 41
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/About/About3.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                children: "Ready to begin?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                                                lineNumber: 66,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Customize Your Package & today and let us ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/About/About3.tsx",
                                                                        lineNumber: 68,
                                                                        columnNumber: 95
                                                                    }, this),
                                                                    " craft your perfect pilgrimage."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/About/About3.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                                lineNumber: 61,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-items wow fadeInUp",
                                            "data-wow-delay": ".5s",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "about-icon-items",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/assets/img/icon/14.svg",
                                                            alt: "icon",
                                                            width: 40,
                                                            height: 41
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/About/About3.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                children: "Explore Around"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Stay close to Makkah & Madinah holy sites ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/About/About3.tsx",
                                                                        lineNumber: 83,
                                                                        columnNumber: 95
                                                                    }, this),
                                                                    "with guided Ziyarah tours and premium hotels."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/About/About3.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                                lineNumber: 76,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/About/About3.tsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/About/About3.tsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/About/About3.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/About/About3.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/About/About3.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Components/About/About3.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Components/About/About3.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = About3;
}}),
"[project]/src/app/Components/Testimonial/Testimonial3.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Testimonial3 = ()=>{
    const [imageErrors, setImageErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
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
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const next = ()=>{
        sliderRef.current.slickNext();
    };
    const previous = ()=>{
        sliderRef.current.slickPrev();
    };
    const testimonialContent = [
        {
            name: 'Zainab',
            location: 'Bradford',
            packageDetails: '7 Nights, 5 Star Umrah Package',
            image: './assets/img/testimonial/1 (3).jpeg',
            content: 'Standing before the Ka\'bah, I felt a peace I\'d never known. MR Tours made it possible by handling every detail with care, from my flight to the luxurious hotel just steps from the Haram. Their team felt like family, guiding me through my first Umrah with kindness and patience. It was a moment of renewal I\'ll carry forever.'
        },
        {
            name: 'Omar',
            location: 'London',
            packageDetails: '15 Nights, 3 Star Umrah Package',
            image: './assets/img/testimonial/1 (1).jpeg',
            content: 'As a father, I worried about bringing my young children on Umrah, but MR Tours turned my fears into joy. The affordable package allowed us to stay longer, praying together in Madinah. The staff\'s support, especially during our Ziyarat visits, made us feel safe and cared for. This journey bonded our family in faith.'
        },
        {
            name: 'Amina',
            location: 'Birmingham',
            packageDetails: '10 Nights, 4 Star Umrah Package',
            image: './assets/img/testimonial/1 (5).jpeg',
            content: 'After years of saving, I finally performed Umrah with my elderly mother. MR Tours\' team went above and beyond, ensuring her comfort with accessible transfers and a hotel close to the mosque. Seeing her smile as we prayed together was priceless. They made our dream a reality with such warmth.'
        },
        {
            name: 'Yusuf',
            location: 'Manchester',
            packageDetails: '7 Nights, 3 Star Umrah Package',
            image: './assets/img/testimonial/1 (2).jpeg',
            content: 'I was nervous as a solo traveler, but MR Tours made me feel at home. Their guidance helped me navigate the rituals, and the budget-friendly package meant I could focus on my dua without financial stress. I left Makkah feeling lighter, renewed, and grateful for their support.'
        }
    ];
    const handleImageError = (index)=>{
        setImageErrors((prev)=>({
                ...prev,
                [index]: true
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-background": "/assets/img/testimonial/testimonial-bg.jpg",
        className: "jsx-e0bfc936db2275e6" + " " + "testimonial-section section-padding fix bg-cover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e0bfc936db2275e6" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e0bfc936db2275e6" + " " + "testimonial-wrapper-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e0bfc936db2275e6" + " " + "row g-4 align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-wow-delay": ".3s",
                                className: "jsx-e0bfc936db2275e6" + " " + "col-lg-6 wow fadeInUp wow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e0bfc936db2275e6" + " " + "testimonial-image",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/img/testimonial/H2.png",
                                        alt: "img",
                                        width: 636,
                                        height: 657
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                        lineNumber: 101,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e0bfc936db2275e6" + " " + "col-lg-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e0bfc936db2275e6" + " " + "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e0bfc936db2275e6" + " " + "section-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e0bfc936db2275e6" + " " + "sub-title wow fadeInUp",
                                                    children: "Testimonials"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    "data-wow-delay": ".2s",
                                                    className: "jsx-e0bfc936db2275e6" + " " + "wow fadeInUp wow",
                                                    children: "What Our Pilgrims Say"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                            lineNumber: 106,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e0bfc936db2275e6" + " " + "swiper testimonial-slider3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e0bfc936db2275e6" + " " + "swiper-wrapper",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    ref: sliderRef,
                                                    ...settings,
                                                    children: testimonialContent.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e0bfc936db2275e6" + " " + "swiper-slide",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-e0bfc936db2275e6" + " " + "testimonial-card-items",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-e0bfc936db2275e6" + " " + "client-info-items",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-e0bfc936db2275e6" + " " + "client-info",
                                                                                children: [
                                                                                    !imageErrors[i] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-e0bfc936db2275e6" + " " + "client-avatar",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: item.image,
                                                                                            alt: `${item.name} from ${item.location}`,
                                                                                            width: 64,
                                                                                            height: 64,
                                                                                            className: "avatar-img",
                                                                                            onError: ()=>handleImageError(i)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                            lineNumber: 125,
                                                                                            columnNumber: 73
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                        lineNumber: 124,
                                                                                        columnNumber: 69
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-e0bfc936db2275e6" + " " + "client-avatar-placeholder",
                                                                                        children: item.name.charAt(0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                        lineNumber: 135,
                                                                                        columnNumber: 69
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-e0bfc936db2275e6" + " " + "content",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "jsx-e0bfc936db2275e6",
                                                                                                children: [
                                                                                                    item.name,
                                                                                                    ", ",
                                                                                                    item.location
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                                lineNumber: 140,
                                                                                                columnNumber: 69
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "jsx-e0bfc936db2275e6" + " " + "package-details",
                                                                                                children: item.packageDetails
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                                lineNumber: 141,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                        lineNumber: 139,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                lineNumber: 121,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-e0bfc936db2275e6" + " " + "icon",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    width: "50",
                                                                                    height: "37",
                                                                                    viewBox: "0 0 50 37",
                                                                                    fill: "none",
                                                                                    className: "jsx-e0bfc936db2275e6",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z",
                                                                                        fill: "#1CA8CB",
                                                                                        className: "jsx-e0bfc936db2275e6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                        lineNumber: 146,
                                                                                        columnNumber: 69
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                    lineNumber: 145,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                                lineNumber: 144,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-e0bfc936db2275e6" + " " + "testimonial-text",
                                                                        children: [
                                                                            '"',
                                                                            item.content,
                                                                            '"'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                lineNumber: 115,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                            lineNumber: 114,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e0bfc936db2275e6" + " " + "array-button",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: previous,
                                                    className: "jsx-e0bfc936db2275e6" + " " + "array-prev",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-e0bfc936db2275e6" + " " + "bi bi-arrow-up"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: next,
                                                    className: "jsx-e0bfc936db2275e6" + " " + "array-next",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-e0bfc936db2275e6" + " " + "bi bi-arrow-down"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                    lineNumber: 105,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e0bfc936db2275e6",
                children: ".package-details.jsx-e0bfc936db2275e6{color:#1ca8cb;margin-top:4px;font-weight:500}.testimonial-text.jsx-e0bfc936db2275e6{color:#555;margin-top:20px;font-size:1rem;font-style:italic;line-height:1.75}.testimonial-cta.jsx-e0bfc936db2275e6{text-align:center;border-top:1px solid #eee;margin-top:30px;padding-top:20px}.review-link.jsx-e0bfc936db2275e6{color:#1ca8cb;margin-bottom:8px;font-size:1.1rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-block}.review-link.jsx-e0bfc936db2275e6:hover{color:#0d8ba8}.review-link.jsx-e0bfc936db2275e6 i.jsx-e0bfc936db2275e6{margin-left:5px;font-size:.9rem;transition:transform .3s}.review-link.jsx-e0bfc936db2275e6:hover i.jsx-e0bfc936db2275e6{transform:translate(5px)}.cta-text.jsx-e0bfc936db2275e6{color:#777;margin:0;font-size:.9rem}.client-info.jsx-e0bfc936db2275e6{align-items:center;gap:15px;display:flex}.client-avatar.jsx-e0bfc936db2275e6{border:2px solid #1ca8cb;border-radius:50%;width:64px;height:64px;overflow:hidden}.avatar-img.jsx-e0bfc936db2275e6{object-fit:cover;width:100%;height:100%}.client-avatar-placeholder.jsx-e0bfc936db2275e6{color:#fff;background-color:#1ca8cb;border-radius:50%;justify-content:center;align-items:center;width:64px;height:64px;font-size:1.5rem;font-weight:600;display:flex}@media (width<=992px){.testimonial-cta.jsx-e0bfc936db2275e6{margin-top:25px}}@media (width<=576px){.testimonial-text.jsx-e0bfc936db2275e6{font-size:.95rem}.review-link.jsx-e0bfc936db2275e6{font-size:1rem}.client-avatar.jsx-e0bfc936db2275e6,.client-avatar-placeholder.jsx-e0bfc936db2275e6{width:50px;height:50px}.client-info.jsx-e0bfc936db2275e6{gap:10px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Testimonial/Testimonial3.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Testimonial3;
}}),
"[project]/src/app/Components/Faq/Faq1.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Faq1 = ()=>{
    const faqContent = [
        {
            title: 'What documents do I need for an Umrah visa?',
            content: 'You only need to give us a few simple documents, and we will take care of your Umrah visa. These documents will be required: Two Passport Size Photos, Filled Visa Form, Valid Passport and Certificate of Vaccination Against Meningitis.'
        },
        {
            title: 'Can I customize my Umrah package?',
            content: 'We take pride in providing tailored Umrah packages that can be customized to align with your specific preferences and requirements.'
        },
        {
            title: 'Are there any discounts available for group bookings?',
            content: 'For group bookings, we provide exclusive discounts as a token of appreciation. To avail of these special offers, kindly reach out to our dedicated customer support team, who will gladly provide you with further details and assistance.'
        },
        {
            title: 'What is the average flight time to Saudia Arabia from the UK?',
            content: 'Direct flights to Saudi Arabia from the UK typically take 12 to 13 hours. But connecting flights are likely to take longer.'
        },
        {
            title: 'How long does it take to perform Umrah?',
            content: 'Since Umrah has only four rituals, it can be completed in just a few hours. However, we suggest staying for at least 3-7 days so you can have the complete experience of Makkah.'
        },
        {
            title: 'Can I perform Umrah during Ramadan?',
            content: 'Certainly! Umrah can be performed during Ramadan. Take advantage of our exclusive Ramadan Umrah Packages tailored specifically for this scared month.'
        },
        {
            title: 'Can I add a hotel of my choice to my Umrah package?',
            content: 'We provide a range of hotel options to suit your needs. However, if you want to add a hotel of your choice to your Umrah package, feel free to do so.'
        }
    ];
    const accordionContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [openItemIndex, setOpenItemIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [firstItemOpen, setFirstItemOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleItemClick = (index)=>{
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [
        firstItemOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-4a89741767e10e2c" + " " + "faq-section section-padding pt-5 fix",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4a89741767e10e2c" + " " + "left-shape float-bob-y",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/img/tree-shape-2.png",
                    alt: "img",
                    width: 221,
                    height: 241
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4a89741767e10e2c" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4a89741767e10e2c" + " " + "faq-wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a89741767e10e2c" + " " + "row g-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4a89741767e10e2c" + " " + "col-lg-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4a89741767e10e2c" + " " + "faq-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4a89741767e10e2c" + " " + "section-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-4a89741767e10e2c" + " " + "sub-title wow fadeInUp",
                                                    children: "Got Questions?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    "data-wow-delay": ".3s",
                                                    className: "jsx-4a89741767e10e2c" + " " + "wow fadeInUp wow",
                                                    children: "Frequently Asked Questions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-wow-delay": ".5s",
                                            className: "jsx-4a89741767e10e2c" + " " + "mt-3 mt-mb-0 wow fadeInUp wow",
                                            children: "Find answers to common questions our customers ask about planning their Umrah and Hajj journeys with MR Tours."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            "data-wow-delay": ".7s",
                                            className: "jsx-4a89741767e10e2c" + " " + "faq-list wow fadeInUp wow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-4a89741767e10e2c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/assets/img/icon/15.svg",
                                                            alt: "img",
                                                            width: 14,
                                                            height: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 41
                                                        }, this),
                                                        "ATOL & ABTA Protected"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-4a89741767e10e2c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/assets/img/icon/15.svg",
                                                            alt: "img",
                                                            width: 14,
                                                            height: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 41
                                                        }, this),
                                                        "24/7 Support During Your Journey"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                            lineNumber: 78,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-wow-delay": ".9s",
                                            className: "jsx-4a89741767e10e2c" + " " + "contact-cta mt-4 wow fadeInUp wow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4a89741767e10e2c",
                                                    children: "Have more questions? Contact us or call"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-4a89741767e10e2c",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+441234567890",
                                                        className: "jsx-4a89741767e10e2c",
                                                        children: "+44 123 456 7890"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4a89741767e10e2c",
                                                    children: "for personalized assistance."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4a89741767e10e2c" + " " + "col-lg-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4a89741767e10e2c" + " " + "faq-items",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4a89741767e10e2c" + " " + "faq-accordion",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "accordion",
                                            className: "jsx-4a89741767e10e2c" + " " + "accordion",
                                            children: faqContent.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-wow-delay": ".1s",
                                                    className: "jsx-4a89741767e10e2c" + " " + `accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            onClick: ()=>handleItemClick(index),
                                                            className: "jsx-4a89741767e10e2c" + " " + "accordion-header",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#faq1",
                                                                "aria-expanded": "true",
                                                                "aria-controls": "faq1",
                                                                className: "jsx-4a89741767e10e2c" + " " + "accordion-button collapsed",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: accordionContentRef,
                                                            id: "faq1",
                                                            "data-bs-parent": "#accordion",
                                                            className: "jsx-4a89741767e10e2c" + " " + "accordion-collapse collapse",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-4a89741767e10e2c" + " " + "accordion-body",
                                                                children: item.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                            lineNumber: 98,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "4a89741767e10e2c",
                children: ".contact-cta.jsx-4a89741767e10e2c{background:#f8f9fa;border-left:4px solid #28aae2;border-radius:8px;padding:1.5rem;box-shadow:0 4px 15px #0000000d}.contact-cta.jsx-4a89741767e10e2c p.jsx-4a89741767e10e2c{color:#555;margin-bottom:.5rem}.contact-cta.jsx-4a89741767e10e2c h4.jsx-4a89741767e10e2c{margin-bottom:.5rem;font-size:1.5rem;font-weight:700}.contact-cta.jsx-4a89741767e10e2c h4.jsx-4a89741767e10e2c a.jsx-4a89741767e10e2c{color:#28aae2;text-decoration:none;transition:all .3s}.contact-cta.jsx-4a89741767e10e2c h4.jsx-4a89741767e10e2c a.jsx-4a89741767e10e2c:hover{color:#1d8bb8}@media (width<=992px){.faq-content.jsx-4a89741767e10e2c{margin-bottom:2rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Faq/Faq1.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Faq1;
}}),
"[project]/src/app/Components/Counter/Counter3.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Common/loadBackgroudImages.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Counter3 = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "counter-section-2 fix",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid align-items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "counter-wrapper-2 bg-cover",
                "data-background": "/assets/img/counter-bg.png",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "counter-image w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "counter-items-2 wow fadeInUp wow  ",
                        "data-wow-delay": ".2s",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "counter-content ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "count",
                                        children: "Years"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                        lineNumber: 21,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "4+ years serving"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                            lineNumber: 20,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "counter-items-2 wow fadeInUp wow",
                        "data-wow-delay": ".4s",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "counter-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "count",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                            lineNumber: 27,
                                            columnNumber: 33
                                        }, this),
                                        ".6k+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 27,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Yearly Customers"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                            lineNumber: 26,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "counter-items-2 wow fadeInUp wow",
                        "data-wow-delay": ".6s",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "counter-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "count",
                                            children: "46"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                            lineNumber: 33,
                                            columnNumber: 33
                                        }, this),
                                        "+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 33,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Visitors daily"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                            lineNumber: 32,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "counter-items-2 style-2 wow fadeInUp wow",
                        "data-wow-delay": ".8s",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "counter-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "count",
                                            children: "56"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                            lineNumber: 39,
                                            columnNumber: 33
                                        }, this),
                                        "+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 39,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Awards & honors"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                            lineNumber: 38,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Components/Counter/Counter3.tsx",
        lineNumber: 13,
        columnNumber: 1
    }, this);
};
const __TURBOPACK__default__export__ = Counter3;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/src/lib/firebase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "app": (()=>app),
    "db": (()=>db),
    "storage": (()=>storage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
;
;
;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyAiFQ2wZo2_cjivaizk3Tl4BCYSa7iG3-M"),
    authDomain: ("TURBOPACK compile-time value", "mrtours-524c0.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "mrtours-524c0"),
    storageBucket: ("TURBOPACK compile-time value", "mrtours-524c0.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "357587434277"),
    appId: ("TURBOPACK compile-time value", "1:357587434277:web:74fc0fe9c4b374208fb8cc")
};
// Initialize Firebase only if it hasn't been initialized already
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorage"])(app);
;
}}),
"[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const FilteredUmrahPackages = ({ starRating })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchPackages = async ()=>{
            try {
                setLoading(true);
                const packagesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'Umrah-packages');
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(packagesCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('star_rating', '==', starRating));
                const packagesSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
                const data = packagesSnapshot.docs.map((doc)=>({
                        id: doc.id,
                        ...doc.data()
                    }));
                setPackages(data);
            } catch (error) {
                console.error("Error fetching packages:", error);
                setPackages([]);
            } finally{
                setLoading(false);
            }
        };
        fetchPackages();
    }, [
        starRating
    ]);
    const handleViewDetails = (id)=>{
        router.push(`/UmrahDetail/${id}`);
        console.log("Navigating to UmrahDetail with ID:", id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-1df0e77b22e7a76b" + " " + "umrah-packages-section section-padding",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1df0e77b22e7a76b" + " " + "container",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-1df0e77b22e7a76b" + " " + "text-center py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "status",
                            className: "jsx-1df0e77b22e7a76b" + " " + "spinner-border text-primary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1df0e77b22e7a76b" + " " + "visually-hidden",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                lineNumber: 71,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                            lineNumber: 70,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-1df0e77b22e7a76b" + " " + "mt-3",
                            children: "Loading packages..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                    lineNumber: 69,
                    columnNumber: 21
                }, this) : packages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-1df0e77b22e7a76b" + " " + "section-title-area text-center mb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-1df0e77b22e7a76b" + " " + "section-title wow fadeInUp",
                                children: [
                                    starRating,
                                    " Star Umrah Packages"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-1df0e77b22e7a76b" + " " + "row g-4 mb-5",
                            children: packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1df0e77b22e7a76b" + " " + "col-xl-4 col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-1df0e77b22e7a76b" + " " + "package-image-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: pkg.image || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800',
                                                        alt: pkg.package_name,
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-duration",
                                                        children: [
                                                            pkg.duration_nights,
                                                            " NIGHTS"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-star-rating",
                                                        children: [
                                                            pkg.star_rating,
                                                            " ⭐"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                lineNumber: 87,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-1df0e77b22e7a76b" + " " + "package-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-title",
                                                        children: pkg.package_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-description",
                                                        children: pkg.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-locations",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-1df0e77b22e7a76b" + " " + "location-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        className: "jsx-1df0e77b22e7a76b" + " " + "location-icon",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                                                                                className: "jsx-1df0e77b22e7a76b"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                                lineNumber: 104,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "12",
                                                                                cy: "10",
                                                                                r: "3",
                                                                                className: "jsx-1df0e77b22e7a76b"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                                lineNumber: 105,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 103,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1df0e77b22e7a76b",
                                                                        children: [
                                                                            "Makkah ",
                                                                            pkg.makkah_nights,
                                                                            " Nights"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-1df0e77b22e7a76b" + " " + "location-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        className: "jsx-1df0e77b22e7a76b" + " " + "location-icon",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                                                                                className: "jsx-1df0e77b22e7a76b"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                                lineNumber: 111,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "12",
                                                                                cy: "10",
                                                                                r: "3",
                                                                                className: "jsx-1df0e77b22e7a76b"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                                lineNumber: 112,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1df0e77b22e7a76b",
                                                                        children: [
                                                                            "Madinah ",
                                                                            pkg.madinah_nights,
                                                                            " Nights"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 114,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-includes",
                                                        children: pkg.package_inclusions.slice(0, 4).map((inclusion, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-1df0e77b22e7a76b" + " " + "include-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "16",
                                                                        height: "16",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "currentColor",
                                                                        className: "jsx-1df0e77b22e7a76b" + " " + "include-icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                                                            className: "jsx-1df0e77b22e7a76b"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                            lineNumber: 122,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1df0e77b22e7a76b",
                                                                        children: inclusion.split(':')[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 124,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-1df0e77b22e7a76b" + " " + "package-footer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-1df0e77b22e7a76b" + " " + "package-price",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1df0e77b22e7a76b" + " " + "price-amount",
                                                                        children: [
                                                                            pkg.currency,
                                                                            pkg.price_per_person.toLocaleString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1df0e77b22e7a76b" + " " + "price-unit",
                                                                        children: "/person"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                        lineNumber: 132,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleViewDetails(pkg.id),
                                                                className: "jsx-1df0e77b22e7a76b" + " " + "view-details-btn",
                                                                children: "View Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                                lineNumber: 97,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                        lineNumber: 86,
                                        columnNumber: 37
                                    }, this)
                                }, pkg.id, false, {
                                    fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                                    lineNumber: 85,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-1df0e77b22e7a76b" + " " + "text-center py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-1df0e77b22e7a76b",
                        children: [
                            "No ",
                            starRating,
                            " star packages available at the moment."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                        lineNumber: 149,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "1df0e77b22e7a76b",
                children: ".umrah-packages-section.jsx-1df0e77b22e7a76b{background-color:#f8f9fa;width:100%;padding:80px 0}.section-title.jsx-1df0e77b22e7a76b{color:#1a1a1a;margin-bottom:2rem;font-size:2.5rem;font-weight:700}.package-card.jsx-1df0e77b22e7a76b{background:#fff;border-radius:12px;height:100%;margin-left:20px;transition:transform .3s,box-shadow .3s;overflow:hidden;box-shadow:0 4px 15px #00000014}.package-card.jsx-1df0e77b22e7a76b:hover{transform:translateY(-5px);box-shadow:0 8px 25px #0000001f}.package-image-wrapper.jsx-1df0e77b22e7a76b{height:250px;position:relative;overflow:hidden}.package-image.jsx-1df0e77b22e7a76b{object-fit:cover;width:100%;height:100%}.package-duration.jsx-1df0e77b22e7a76b{color:#1a1a1a;background:#fff;border-radius:25px;padding:8px 20px;font-size:.875rem;font-weight:600;position:absolute;top:20px;right:20px}.package-star-rating.jsx-1df0e77b22e7a76b{color:#1a1a1a;background:#fff;border-radius:25px;padding:8px 16px;font-size:.875rem;font-weight:600;position:absolute;top:20px;left:20px}.package-description.jsx-1df0e77b22e7a76b{color:#666;margin-bottom:20px;font-size:.9rem;line-height:1.5}.package-content.jsx-1df0e77b22e7a76b{padding:25px}.package-title.jsx-1df0e77b22e7a76b{color:#1a1a1a;margin-bottom:15px;font-size:1.375rem;font-weight:700}.package-locations.jsx-1df0e77b22e7a76b{flex-wrap:wrap;gap:20px;margin-bottom:20px;display:flex}.location-item.jsx-1df0e77b22e7a76b{color:#666;align-items:center;gap:8px;font-size:.9rem;display:flex}.location-icon.jsx-1df0e77b22e7a76b{color:#4a5568}.package-includes.jsx-1df0e77b22e7a76b{border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;flex-wrap:wrap;gap:15px;margin-bottom:25px;padding:20px 0;display:flex}.include-item.jsx-1df0e77b22e7a76b{color:#4a5568;align-items:center;gap:6px;font-size:.9rem;font-weight:500;display:flex}.include-icon.jsx-1df0e77b22e7a76b{color:#2563eb}.package-footer.jsx-1df0e77b22e7a76b{justify-content:space-between;align-items:center;display:flex}.package-price.jsx-1df0e77b22e7a76b{align-items:baseline;gap:4px;display:flex}.price-amount.jsx-1df0e77b22e7a76b{color:#1a1a1a;font-size:1.875rem;font-weight:700}.price-unit.jsx-1df0e77b22e7a76b{color:#666;font-size:.9rem}.view-details-btn.jsx-1df0e77b22e7a76b{color:#fff;cursor:pointer;background-color:#28aae2;border:none;border-radius:8px;padding:12px 28px;font-size:.95rem;font-weight:600;transition:background-color .3s}.view-details-btn.jsx-1df0e77b22e7a76b:hover{background-color:#1f8fc7}@media (width<=768px){.section-title.jsx-1df0e77b22e7a76b{font-size:2rem}.package-title.jsx-1df0e77b22e7a76b{font-size:1.25rem}.price-amount.jsx-1df0e77b22e7a76b{font-size:1.5rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Umrah-Package/FilteredUmrahPackages.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = FilteredUmrahPackages;
}}),
"[project]/src/app/Components/ClientWrappers/HajjPackagesWrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
const HajjPackages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/Components/Hajj-Package/HajjPackages.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const HajjPackagesWrapper = ()=>{
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Only render the component client-side to prevent hydration issues
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '200px'
            },
            children: "Loading Hajj packages..."
        }, void 0, false, {
            fileName: "[project]/src/app/Components/ClientWrappers/HajjPackagesWrapper.tsx",
            lineNumber: 20,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HajjPackages, {}, void 0, false, {
        fileName: "[project]/src/app/Components/ClientWrappers/HajjPackagesWrapper.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = HajjPackagesWrapper;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5e6e8bee._.js.map