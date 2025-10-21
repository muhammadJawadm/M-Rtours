'use client';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div>
            {/* Hero Section with Image and About */}
           

            {/* Contact Information Section */}
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
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
                                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
                                    <a href="tel:+447517240405" style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}>
                                        +44 7517 240405
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

            {/* Contact Form Section */}
            <section className="contact-us-section-2 section-bg-2 fix" style={{
                background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                padding: '80px 0'
            }}>
                <div className="container">
                    <div className="contact-us-wrapper">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-8">
                                <div style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '50px',
                                    borderRadius: '15px',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <div className="section-title text-center" style={{ marginBottom: '40px' }}>
                                        <span style={{
                                            color: '#4299e1',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}>
                                            Contact us
                                        </span>
                                        <h2 style={{
                                            color: 'white',
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
                                                            placeholder="Your Name"
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid rgba(255,255,255,0.1)',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                color: 'white',
                                                                fontSize: '1rem'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input 
                                                            type="text" 
                                                            name="email" 
                                                            id="email4" 
                                                            placeholder="Your Email"
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid rgba(255,255,255,0.1)',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                color: 'white',
                                                                fontSize: '1rem'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                       <input 
                                                            type="text" 
                                                            name="subject" 
                                                            id="subject" 
                                                            placeholder="Subject"
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid rgba(255,255,255,0.1)',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                color: 'white',
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
                                                            placeholder="Your Message"
                                                            rows={6}
                                                            style={{
                                                                width: '100%',
                                                                padding: '15px 20px',
                                                                borderRadius: '8px',
                                                                border: '2px solid rgba(255,255,255,0.1)',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                color: 'white',
                                                                fontSize: '1rem',
                                                                resize: 'vertical'
                                                            }}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <button 
                                                        type="button" 
                                                        className="theme-btn"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #4299e1 0%, #4299e1 100%)',
                                                            color: 'white',
                                                            padding: '15px 50px',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            fontSize: '1.1rem',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            transition: 'transform 0.3s ease'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                    >
                                                        Submit Message
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
        </div>
    );
};

export default Contact;