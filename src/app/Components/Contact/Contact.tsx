'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
    // Add state for form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    
    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Handle form submission
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        try {
            // Send to API endpoint for mail
            const res = await fetch('/api/contact-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if (result.success) {
                setShowAlert(true);
            }
            if (!result.success) {
                alert("Failed to send email. Please try again later.");
            }

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });


            setTimeout(() => {
                setShowAlert(false);
            }, 8000);

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send email. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            {/* Success Alert Popup */}
            {showAlert && (
                <div className="success-alert-overlay">
                    <div className="success-alert">
                        <div className="success-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#28AAE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3>Thank You!</h3>
                        <p>Your message has been submitted successfully.</p>
                        <p>We will contact you within the next 24 hours.</p>
                        <button 
                            className="close-alert-btn"
                            onClick={() => setShowAlert(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Contact Information Section - Updated with primary colors */}
            <section className="contact-us-section fix section-padding" style={{
                background: '#ffffff'
            }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: '#2d3748',
                            marginBottom: '15px'
                        }}>
                            Get In Touch
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#718096'
                        }}>
                            We&apos;re here to help and answer any question you might have
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div style={{
                                background: '#28AAE2', // Changed to primary color
                                padding: '40px 30px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                height: '100%',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ marginBottom: '20px' }}>
                                    <Image src="/assets/img/icon/18.svg" alt="img" width={60} height={60} />
                                </div>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.4rem',
                                    marginBottom: '15px',
                                    fontWeight: '600'
                                }}>
                                    Our Address
                                </h3>
                                <p style={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    140 high road E18 2QS London, United Kingdom 
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div style={{
                                background: '#1f8bc0', // Changed to darker shade of primary
                                padding: '40px 30px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                height: '100%',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ marginBottom: '20px' }}>
                                    <Image src="/assets/img/icon/19.svg" alt="img" width={60} height={60} />
                                </div>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.4rem',
                                    marginBottom: '15px',
                                    fontWeight: '600'
                                }}>
                                    <a href="mailto:info@m-rtours.co.uk" style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}>
                                        info@m-rtours.co.uk
                                    </a>
                                </h3>
                                <p style={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    Email us anytime for any kind of query.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div style={{
                                background: '#3eb6ed', // Changed to lighter shade of primary
                                padding: '40px 30px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                height: '100%',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ marginBottom: '20px' }}>
                                    <Image src="/assets/img/icon/20.svg" alt="img" width={60} height={60} />
                                </div>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.4rem',
                                    marginBottom: '15px',
                                    fontWeight: '600'
                                }}>
                                    <a href="tel:+442034110076" style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}>
                                        +44 20 3411 0076
                                    </a>
                                </h3>
                                <p style={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    Call us for any kind of support, we will wait for it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>           

            {/* Contact Form Section - Updated with white form background */}
            <section className="contact-us-section-2 section-bg-2 fix" style={{
                background: '#073748ff', // Changed to primary color
                padding: '80px 0'
            }}>
                <div className="container">
                    <div className="contact-us-wrapper">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-8">
                                <div style={{
                                    background: 'white', // Changed to white
                                    padding: '50px',
                                    borderRadius: '15px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <div className="section-title text-center" style={{ marginBottom: '40px' }}>
                                        <span style={{
                                            color: '#28AAE2',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}>
                                            Contact us
                                        </span>
                                        <h2 style={{
                                            color: '#2d3748',
                                            fontSize: '2.5rem',
                                            fontWeight: '700',
                                            marginTop: '15px'
                                        }}>
                                            Send Message Anytime
                                        </h2>
                                    </div>
                                    <div className="comment-form-wrap">
                                        <div>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input 
                                                            type="text" 
                                                            name="name" 
                                                            id="name" 
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            placeholder="Your Name *"
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid #e2e8f0',
                                                                background: 'white',
                                                                color: '#2d3748',
                                                                fontSize: '1rem'
                                                            }}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input 
                                                            type="email" 
                                                            name="email" 
                                                            id="email4" 
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            placeholder="Your Email *"
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid #e2e8f0',
                                                                background: 'white',
                                                                color: '#2d3748',
                                                                fontSize: '1rem'
                                                            }}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                       <input 
                                                            type="text" 
                                                            name="subject" 
                                                            id="subject" 
                                                            value={formData.subject}
                                                            onChange={handleInputChange}
                                                            placeholder="Subject"
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid #e2e8f0',
                                                                background: 'white',
                                                                color: '#2d3748',
                                                                fontSize: '1rem'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                        <textarea 
                                                            name="message" 
                                                            id="message" 
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                            placeholder="Your Message *"
                                                            rows={6}
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid #e2e8f0',
                                                                background: 'white',
                                                                color: '#2d3748',
                                                                fontSize: '1rem',
                                                                resize: 'vertical'
                                                            }}
                                                            required
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <button 
                                                        type="button" 
                                                        className="theme-btn"
                                                        onClick={handleSubmit}
                                                        disabled={isSubmitting}
                                                        style={{
                                                            background: '#28AAE2',
                                                            color: 'white',
                                                            padding: '15px 50px',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            fontSize: '1.1rem',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            transition: 'transform 0.3s ease'
                                                        }}
                                                        onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.transform = 'scale(1.05)')}
                                                        onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.transform = 'scale(1)')}
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <span className="spinner" style={{
                                                                    display: 'inline-block',
                                                                    width: '20px',
                                                                    height: '20px',
                                                                    border: '3px solid rgba(255,255,255,0.3)',
                                                                    borderRadius: '50%',
                                                                    borderTopColor: 'white',
                                                                    animation: 'spin 1s linear infinite',
                                                                    marginRight: '10px',
                                                                    verticalAlign: 'middle'
                                                                }}></span>
                                                                Sending...
                                                            </>
                                                        ) : (
                                                            'Submit Message'
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add styles for success alert and spinner animation */}
            <style jsx>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .success-alert-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    animation: fadeIn 0.3s ease-out;
                }
                
                .success-alert {
                    background: white;
                    width: 90%;
                    max-width: 500px;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    text-align: center;
                    animation: slideIn 0.4s ease-out;
                    position: relative;
                }
                
                .success-icon {
                    margin: 0 auto 1.5rem;
                    width: 80px;
                    height: 80px;
                    background-color: rgba(40, 170, 226, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .success-alert h3 {
                    color: #333;
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                
                .success-alert p {
                    color: #666;
                    margin-bottom: 0.8rem;
                    line-height: 1.6;
                }
                
                .close-alert-btn {
                    margin-top: 1.5rem;
                    padding: 0.8rem 2rem;
                    background-color: #28AAE2;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .close-alert-btn:hover {
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

                /* Form Input Focus States */
                input:focus, textarea:focus {
                    outline: none;
                    border-color: #28AAE2 !important;
                    box-shadow: 0 0 0 3px rgba(40, 170, 226, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Contact;