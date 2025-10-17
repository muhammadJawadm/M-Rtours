"use client"
import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import Link from 'next/link';

interface FormData {
    departureDate: string;
    departureCity: string;
    travelers: string;
    nights: string;
    fullName: string;
    phone: string;
    email: string;
}

const HeroBanner3 = () => {
    const sliderRef = useRef(null);
    const [formData, setFormData] = useState<FormData>({
        departureDate: '',
        departureCity: '',
        travelers: '1',
        nights: '1',
        fullName: '',
        phone: '',
        email: ''
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoButton, setVideoButton] = useState('play');
    const [videoButtonImage, setVideoButtonImage] = useState('/assets/img/svg/play-icon.svg');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);

   const heroContent = [
  {
    img: "/assets/video/start.PNG", 
    video: "/assets/video/Hero1.mp4",
    subtitle: "Book Your Umrah Today",
    title: "Your 2025 Umrah Journey from the UK Starts Here",
    content: "Flexible packages, Haram-view hotels & VIP support for a seamless spiritual experience. Book affordable Umrah packages UK with private transfers and full visa assistance.",
  },
  {
    img: "/assets/video/start.PNG",
    video: "/assets/video/Hero2.mp4",
    subtitle: "Spiritual Journey",
    title: "Perform Umrah <br> With Comfort & Care",
    content: "From flights to hotels, we provide complete Umrah services so you can focus on your prayers and worship.",
  },
  {
    img: "/assets/video/start.PNG",
    video: "/assets/video/Hero3.mp4",
    subtitle: "Plan Your Hajj",
    title: "Hajj Packages <br> With Trusted Guidance",
    content: "Join thousands of pilgrims in a life-changing journey, guided by experts who ensure your safety and ease.",
  },
];

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (): Promise<void> => {
        // Clear any previous messages
        setSubmitMessage(null);
        
        try {
            setIsSubmitting(true);
            
            // Send the email using our API route
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        loadBackgroudImages();
        
        const videoElement = document.querySelector('.hero-video');
        if (videoElement) {
            (videoElement as HTMLVideoElement).play()
                .catch(error => {
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
        beforeChange: (current, next) => {
            const videos = document.querySelectorAll('.hero-video');
            videos.forEach(video => {
                if (!(video as HTMLVideoElement).paused) {
                    (video as HTMLVideoElement).currentTime = 0;
                }
            });
        },
        afterChange: (current) => {
            const activeSlide = document.querySelector('.slick-active .hero-video');
            if (activeSlide) {
                (activeSlide as HTMLVideoElement).play().catch(() => {
                    console.log('Video play failed');
                });
            }
        },
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };

    const handlePlayPause = () => {
        const videoElement = document.querySelector('.hero-video');
        if (videoElement) {
            if ((videoElement as HTMLVideoElement).paused) {
                (videoElement as HTMLVideoElement).currentTime = 0;
                setIsPlaying(true);
                setVideoButton('pause');
                setVideoButtonImage('/assets/img/svg/pause-icon.svg');
                (videoElement as HTMLVideoElement).play()
                    .catch(error => {
                        console.error('Error playing video:', error);
                    });
            } else {
                setIsPlaying(false);
                setVideoButton('play');
                setVideoButtonImage('/assets/img/svg/play-icon.svg');
                (videoElement as HTMLVideoElement).pause();
            }
        }
    };

    const handleVideoReady = (e: React.SyntheticEvent) => {
        const video = e.target;
        if (video) {
            (video as HTMLVideoElement).play()
                .catch(error => {
                    console.error('Error auto-playing video:', error);
                });
        }
    };

    return (
        <section className="hero-section hero-3">
            <div className="swiper hero-slider-3">
                <div className="swiper-wrapper">
                    <Slider {...settings} ref={sliderRef}>
                        {heroContent.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="hero-media bg-cover">
                                    {item.video && (
                                        <video 
                                            className="hero-video"
                                            autoPlay 
                                            muted 
                                            loop 
                                            playsInline
                                            preload="auto"
                                            onCanPlay={handleVideoReady}
                                        >
                                            <source src={item.video} type="video/mp4" />
                                            <img src={item.img} alt="Hero background" />
                                        </video>
                                    )}
                                    
                                    <div 
                                        className="hero-image-fallback bg-cover" 
                                        data-background={item.img}
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                            display: item.video ? 'none' : 'block'
                                        }}
                                    ></div>
                                    
                                    <div className="hero-overlay"></div>
                                    
                                    <div className="container hero-content-container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="hero-content">
                                                    <div className="sub-title" data-animation="fadeInUp" data-delay="1.2s">
                                                        {item.subtitle}
                                                    </div>
                                                    <h1 data-animation="fadeInUp" data-delay="1.4s">
                                                        {parse(item.title)}
                                                    </h1>
                                                    <p data-animation="fadeInUp" data-delay="1.6s">
                                                        {item.content}
                                                    </p>
                                                    <div className="about-button" data-animation="fadeInUp" data-delay="1.8s">
                                                        <Link href="/Umrah-packages" className="theme-btn">View Packages<i className="bi bi-arrow-right"></i></Link>
                                                        <Link href="/Hajj-packages" className="theme-btn style-2">Plan Your Journey<i className="bi bi-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="swiper-dot">
                    <div className="dot2"></div>
                </div>
            </div>

            {/* Booking Form */}
            <div className="booking-form-wrapper">
                <div className="container">
                    <div className="booking-form-card">
                        <div className="booking-form-content">
                            {/* Display success/error message */}
                            {submitMessage && (
                                <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
                                    {submitMessage.text}
                                </div>
                            )}
                            
                            {/* First Row */}
                            <div className="form-grid">
                                <div className="form-field">
                                    <input
                                        type="date"
                                        name="departureDate"
                                        value={formData.departureDate}
                                        onChange={handleInputChange}
                                        placeholder="Departure Date"
                                        className="form-input"
                                        style={{width: '90%', color: 'black'} }
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        name="departureCity"
                                        value={formData.departureCity}
                                        onChange={handleInputChange}
                                        placeholder="Departure City"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <select
                                        name="travelers"
                                        value={formData.travelers}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    >
                                        <option value="">Travelers</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-field">
                                    <select
                                        name="nights"
                                        value={formData.nights}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    >
                                        <option value="">Nights</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Night' : 'Nights'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="form-grid">
                                <div className="form-field">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <button
                                        onClick={handleSubmit}
                                        className="form-button"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Book Now'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-media {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 500px;
                    max-height: 900px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .hero-content-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    z-index: 3;
                    text-align: center;
                    padding: 0 1rem;
                }

                .hero-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                    filter: brightness(0.7) contrast(1.1);
                }

                .hero-image-fallback {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 0;
                    filter: brightness(0.7) contrast(1.1);
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        135deg,
                        rgba(0, 0, 0, 0.3) 0%,
                        rgba(0, 0, 0, 0.2) 50%,
                        rgba(0, 0, 0, 0.3) 100%
                    );
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 4;
                    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
                    padding: 2rem 1rem;
                    text-align: center;
                }

                .hero-content .sub-title {
                    color: #ffffff;
                    font-weight: 600;
                    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }

                .hero-content h1 {
                    color: #ffffff;
                    font-weight: 700;
                    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9);
                    font-size: 3.5rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                }

                .hero-content p {
                    color: #f8f9fa;
                    font-weight: 500;
                    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
                    line-height: 1.6;
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .theme-btn {
                    background: rgba(255, 255, 255, 0.95) !important;
                    color: #333 !important;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(10px);
                    text-shadow: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .theme-btn:hover {
                    background: rgba(255, 255, 255, 1) !important;
                    color: #000 !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }

                .theme-btn.style-2 {
                    background: rgba(0, 0, 0, 0.8) !important;
                    color: #ffffff !important;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .theme-btn.style-2:hover {
                    background: rgba(0, 0, 0, 0.95) !important;
                    color: #ffffff !important;
                }

                /* Booking Form Styles */
                .booking-form-wrapper {
                    position: relative;
                    margin-top: -80px;
                    z-index: 10;
                    padding: 0 1rem 3rem;
                }
                .booking-form-card {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    max-width: 1500px;
                    min-height: 200px;
                    margin: 0 auto;
                }
                .booking-form-content {
                    padding: 2rem 1rem;
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.2rem;
                    margin-bottom: 1.5rem;
                }
                .form-field {
                    width: 100%;
                }
                .form-input {
                    width: 100%;
                    padding: 1rem 1.5rem;
                    border: 2px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    outline: none;
                    background: white;
                    color: #333;
                }
                .form-input:focus {
                    border-color: #28AAE2;
                    box-shadow: 0 0 0 3px rgba(40, 170, 226, 0.1);
                }
                .form-input::placeholder {
                    color: #9ca3af;
                    opacity: 1;
                }
                .form-button {
                    width: 100%;
                    padding: 1rem 1.5rem;
                    background-color: #28AAE2;
                    color: white;
                    font-weight: bold;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .form-button:hover {
                    background-color: #2193c7;
                    transform: translateY(-2px);
                    box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.2);
                }

                /* Responsive adjustments */
                @media (max-width: 1200px) {
                    .hero-content h1 {
                        font-size: 2.5rem;
                    }
                    .hero-content p {
                        font-size: 1rem;
                    }
                    .hero-media {
                        min-height: 400px;
                        height: 70vh;
                        max-height: 700px;
                    }
                    .booking-form-wrapper {
                        margin-top: -70px;
                    }
                }
                @media (max-width: 900px) {
                    .hero-content h1 {
                        font-size: 2rem;
                    }
                    .hero-content p {
                        font-size: 0.95rem;
                    }
                    .hero-media {
                        min-height: 300px;
                        height: 60vh;
                        max-height: 500px;
                        margin-top: 60px; /* Add margin for header separation */
                    }
                    .booking-form-wrapper {
                        margin-top: -60px;
                    }
                    .form-grid {
                        gap: 1rem;
                        margin-bottom: 1.2rem;
                    }
                }
                @media (max-width: 768px) {
                    .hero-media {
                        min-height: 250px;
                        height: 50vh;
                        max-height: 400px;
                        margin-top: 70px; /* Increased margin for header separation */
                    }
                    .hero-content {
                        padding: 1rem 0.5rem;
                    }
                    .hero-content h1 {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }
                    .hero-content p {
                        font-size: 0.9rem;
                        margin-bottom: 1rem;
                    }
                    .hero-content .sub-title {
                        font-size: 1rem;
                        margin-bottom: 0.8rem;
                    }
                    .about-button {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        align-items: center;
                    }
                    .about-button .theme-btn {
                        width: 200px;
                        text-align: center;
                    }
                    .booking-form-wrapper {
                        margin-top: -50px;
                        padding: 0 0.8rem 2rem;
                    }
                    .booking-form-content {
                        padding: 1.5rem 1rem;
                    }
                    .form-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                        margin-bottom: 1rem;
                    }
                    .form-input,
                    .form-button {
                        padding: 0.875rem 1rem;
                        font-size: 0.95rem;
                    }
                }
                @media (max-width: 480px) {
                    .hero-media {
                        min-height: 200px;
                        height: 45vh;
                        max-height: 300px;
                        margin-top: 80px; /* Further increased margin for header */
                    }
                    .hero-content h1 {
                        font-size: 1.2rem;
                        margin-bottom: 0.8rem;
                    }
                    .hero-content p {
                        font-size: 0.85rem;
                        margin-bottom: 0.8rem;
                    }
                    .hero-content .sub-title {
                        font-size: 0.9rem;
                        margin-bottom: 0.5rem;
                    }
                    .booking-form-wrapper {
                        margin-top: -40px;
                    }
                    .booking-form-content {
                        padding: 1.2rem 0.8rem;
                    }
                    .form-grid {
                        gap: 0.875rem;
                        margin-bottom: 0.875rem;
                    }
                    .form-input,
                    .form-button {
                        padding: 0.75rem 0.875rem;
                        font-size: 0.9rem;
                    }
                    .form-input::placeholder {
                        opacity: 1;
                        color: #6b7280;
                        font-size: 0.9rem;
                    }
                    /* Fix for input date display */
                    input[type="date"]::-webkit-calendar-picker-indicator {
                        background-position: right;
                        background-size: auto;
                        cursor: pointer;
                        position: absolute;
                        right: 10px;
                        bottom: 8px;
                    }
                    input[type="date"] {
                        position: relative;
                        padding-right: 40px; /* Make room for the calendar icon */
                    }
                    /* Better select element display */
                    select.form-input {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                        background-repeat: no-repeat;
                        background-position: right 0.7rem center;
                        background-size: 1em;
                        padding-right: 40px;
                    }
                }
                @media (max-width: 380px) {
                    .hero-media {
                        min-height: 180px;
                        height: 40vh;
                        max-height: 260px;
                        margin-top: 90px; /* Even more margin for smaller screens */
                    }
                    .form-input::placeholder {
                        font-size: 0.85rem;
                    }
                    .form-input,
                    .form-button {
                        padding: 0.7rem 0.8rem;
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-video {
                        animation-play-state: paused;
                    }
                }

                .alert {
                    padding: 0.75rem 1.25rem;
                    margin-bottom: 1rem;
                    border: 1px solid transparent;
                    border-radius: 0.375rem;
                }
                
                .alert-success {
                    background-color: #d1e7dd;
                    border-color: #badbcc;
                    color: #0f5132;
                }
                
                .alert-danger {
                    background-color: #f8d7da;
                    border-color: #f5c2c7;
                    color: #842029;
                }
                
                .form-button:disabled {
                    background-color: #94d2ee;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                }
            `}</style>
        </section>
    );
};

export default HeroBanner3;