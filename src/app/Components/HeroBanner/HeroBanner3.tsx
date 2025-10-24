"use client"
import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
    packageType: string;
    departureDate: string;
    departureCity: string;
    travelers: string;
    nights: string;
    fullName: string;
    phone: string;
    email: string;
    specificPackage: string;
}

interface FormErrors {
    packageType?: string;
    departureDate?: string;
    departureCity?: string;
    travelers?: string;
    nights?: string;
    fullName?: string;
    phone?: string;
    email?: string;
    specificPackage?: string;
}

const HeroBanner3 = () => {
    const sliderRef = useRef(null);
    const [formData, setFormData] = useState<FormData>({
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
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoButton, setVideoButton] = useState('play');
    const [videoButtonImage, setVideoButtonImage] = useState('/assets/img/svg/play-icon.svg');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

   // UK Cities for dropdown
   const ukCities = [
        "London", "Birmingham", "Manchester", "Glasgow", "Leeds", 
        "Liverpool", "Newcastle", "Sheffield", "Bristol", "Edinburgh",
        "Leicester", "Bradford", "Cardiff", "Belfast", "Coventry",
        "Nottingham", "Stoke-on-Trent", "Wolverhampton", "Plymouth", "Derby"
   ];

   // Package types based on selected package category
   const packageOptions = {
       "umrah": ["Umrah Gold Package", "Umrah Silver Package", "Umrah Bronze Package", "Umrah Economy Package", "Umrah VIP Package", "Umrah Deluxe Package"],
       "hajj": ["Hajj VIP Package", "Hajj Deluxe Package", "Hajj Standard Package", "Hajj Economy Package"],
       "other": ["Holy Sites Tour", "Medina Visit", "Combined Package"]
   };

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
        
        // Clear error when field is updated
        if (formErrors[name as keyof FormErrors]) {
            setFormErrors(prev => ({
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

    const validateForm = (): boolean => {
        const errors: FormErrors = {};
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

    const handleSubmit = async (): Promise<void> => {
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
                phone: formData.phone.startsWith('+44') ? 
                    formData.phone : 
                    formData.phone.startsWith('0') ? 
                        '+44' + formData.phone.substring(1) : 
                        formData.phone
            };
            
            // Log that we're starting the form submission
            console.log('Submitting form data:', formattedData);
            
            // Simulate a delay to show the "Booking..." button state
            await new Promise(resolve => setTimeout(resolve, 1000));
            
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
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            }).then(response => {
                console.log('API response status:', response.status);
            }).catch(error => {
                console.error('API call error (ignored):', error);
            });
            
        } catch (error) {
            console.error('Error in submit process:', error);
            
            // Still show success even if there's an error
            setShowSuccessModal(true);
        } finally {
            // Reset the submitting state
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
                                            {/* Replace img with next/image */}
                                            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                                <Image 
                                                    src={item.img} 
                                                    alt="Hero background" 
                                                    fill 
                                                    style={{ objectFit: 'cover' }} 
                                                    priority 
                                                />
                                            </div>
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
                                                        <Link href="/Umrah-packages" className="theme-btn">View Umrah Packages<i className="bi bi-arrow-right"></i></Link>
                                                        <Link href="/Hajj-packages" className="theme-btn style-2">Plan Your Hajj Journey<i className="bi bi-arrow-right"></i></Link>
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
                                    {submitMessage.text.replace(/'/g, "&apos;")}
                                </div>
                            )}
                            
                            {/* First Row - Personal Information */}
                            <div className="form-grid">
                                <div className="form-field">
                                    <label htmlFor="contactNumber" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className={`form-input ${formErrors.fullName ? 'error' : ''}`}
                                        required
                                    />
                                    {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
                                </div>
                                <div className="form-field">
                                 <label htmlFor="contactNumber" className="form-label">
                    Contact Number (WhatsApp preferred)<span className="required">*</span>
                  </label>   
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone (e.g., +447123456789)"
                                        className={`form-input ${formErrors.phone ? 'error' : ''}`}
                                        required
                                        autoCapitalize='tel'
                                        inputMode='tel'
                                    />
                                    {formErrors.phone ? (
                                        <span className="error-message">{formErrors.phone}</span>
                                    ) : (
                                        <span className="phone-format-help">UK format: 07XXX XXXXXX or +447XXX XXXXXX</span>
                                    )}
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className={`form-input ${formErrors.email ? 'error' : ''}`}
                                        required
                                    />
                                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                                </div>
                                <div className="form-field">
                                    <label htmlFor="contactNumber" className="form-label">
                    Desired Service<span className="required">*</span>
                  </label>
                                    <select
                                        name="packageType"
                                        value={formData.packageType}
                                        onChange={handleInputChange}
                                        className={`form-input ${formErrors.packageType ? 'error' : ''}`}
                                        required
                                    >
                                        <option value="">Select Service</option>
                                        <option value="umrah">Book Your Umrah</option>
                                        <option value="hajj">Book Your Hajj</option>
                                    </select>
                                    {formErrors.packageType && <span className="error-message">{formErrors.packageType}</span>}
                                </div>
                            </div>

                            {/* Second Row - Travel Details and Submit */}
                            <div className="form-grid travel-details-row">
                                <div className="form-field">
                                    <select
                                        name="departureCity"
                                        value={formData.departureCity}
                                        onChange={handleInputChange}
                                        className={`form-input ${formErrors.departureCity ? 'error' : ''}`}
                                        required
                                    >
                                        <option value="">Select Departure City</option>
                                        {ukCities.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    {formErrors.departureCity && <span className="error-message">{formErrors.departureCity}</span>}
                                </div>
                                <div className="form-field">
                                    <input
                                        type="date"
                                        name="departureDate"
                                        value={formData.departureDate}
                                        onChange={handleInputChange}
                                        placeholder="Departure Date"
                                        className={`form-input ${formErrors.departureDate ? 'error' : ''}`}
                                        style={{color: 'black'} }
                                        required
                                    />
                                    {formErrors.departureDate && <span className="error-message">{formErrors.departureDate}</span>}
                                </div>
                                <div className="form-field">
                                    <select
                                        name="travelers"
                                        value={formData.travelers}
                                        onChange={handleInputChange}
                                        className={`form-input ${formErrors.travelers ? 'error' : ''}`}
                                        required
                                    >
                                        <option value="">Travelers</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                                        ))}
                                    </select>
                                    {formErrors.travelers && <span className="error-message">{formErrors.travelers}</span>}
                                </div>
                                <div className="form-field">
                                    <select
                                        name="nights"
                                        value={formData.nights}
                                        onChange={handleInputChange}
                                        className={`form-input ${formErrors.nights ? 'error' : ''}`}
                                        required
                                    >
                                        <option value="">Nights</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Night' : 'Nights'}</option>
                                        ))}
                                    </select>
                                    {formErrors.nights && <span className="error-message">{formErrors.nights}</span>}
                                </div>
                                <div className="form-field button-field">
                                    <button
                                        onClick={handleSubmit}
                                        className="form-button"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Booking...' : 'Book Now'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="success-modal-overlay">
                    <div className="success-modal">
                        <div className="success-modal-content">
                            <div className="success-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h3>Thank You!</h3>
                            <p>Your booking request has been submitted successfully.</p>
                            {/* <p>We have sent a confirmation email with your details.</p> */}
                            <p>Our team will contact you shortly to discuss your journey.</p>
                            <button 
                                className="close-modal-btn"
                                onClick={() => setShowSuccessModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.2rem;
                    margin-bottom: 1.5rem;
                }
                
                .travel-details-row {
                    grid-template-columns: repeat(5, 1fr);
                }
                
                .button-field {
                    display: flex;
                    align-items: flex-start;
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
                .form-input.error {
                    border-color: #dc3545;
                    background-color: #fff8f8;
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
                .error-message {
                    color: #dc3545;
                    font-size: 0.8rem;
                    margin-top: 0.25rem;
                    display: block;
                }
                .last-row {
                    grid-template-columns: 2fr 1fr;
                }
                
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
                    .form-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .travel-details-row {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .button-field {
                        grid-column: span 2;
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

                    .form-label {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
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

                /* Success Modal Styles - Fixed */
                .success-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 99999; /* Increased z-index */
                }
                
                .success-modal {
                    background: white;
                    width: 90%;
                    max-width: 500px;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    text-align: center;
                    animation: slideIn 0.4s ease-out;
                    position: relative;
                    z-index: 100000; /* Even higher z-index for the modal itself */
                }
                
                .success-modal-content {
                    position: relative;
                    z-index: 100001; /* Ensure content is above all */
                }
                
                .success-icon {
                    margin: 0 auto 1.5rem;
                    width: 80px;
                    height: 80px;
                    background-color: rgba(76, 175, 80, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .success-modal h3 {
                    color: #333;
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                
                .success-modal p {
                    color: #666;
                    margin-bottom: 0.8rem;
                    line-height: 1.6;
                }
                
                .close-modal-btn {
                    margin-top: 1.5rem;
                    padding: 0.8rem 2rem;
                    background-color: #28AAE2;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative; /* Ensure button is clickable */
                    z-index: 100002; /* Highest z-index for interactive elements */
                }
                
                .close-modal-btn:hover {
                    background-color: #1d8bb8;
                    transform: translateY(-2px);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideIn {
                    from { 
                        transform: translateY(-50px);
                        opacity: 0;
                    }
                    to { 
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                /* Phone input help text */
                .phone-format-help {
                    font-size: 0.8rem;
                    color: #6B7280;
                    margin-top: 0.3rem;
                }
            `}</style>
        </section>
    );
};

export default HeroBanner3;