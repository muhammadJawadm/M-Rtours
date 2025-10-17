'use client';
import React from 'react';

const ServicesSection = () => {
    return (
        <>
            <style jsx>{`
                .services-section {
                    padding: 64px 16px;
                }

                .services-container {
                    max-width: 1280px;
                    margin: 0 auto;
                }

                .services-title {
                    text-align: center;
                    margin-bottom: 48px;
                }

                .services-title h2 {
                    font-size: 48px;
                    font-weight: bold;
                    color: #1f2937;
                    margin: 0;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 24px;
                }

                @media (min-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .service-card {
                    display: block;
                    text-decoration: none;
                }

                .card-inner {
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    transition: box-shadow 0.3s ease;
                }

                .card-inner:hover {
                    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
                }

                .card-image {
                    height: 288px;
                    overflow: hidden;
                }

                .card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .card-content {
                    padding: 24px;
                    background: white;
                }

                .card-content h3 {
                    font-size: 24px;
                    font-weight: bold;
                    color: #1f2937;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .services-title h2 {
                        font-size: 36px;
                    }

                    .services-section {
                        padding: 48px 16px;
                    }
                }
            `}</style>

            <section className="services-section">
                <div className="services-container">
                    <div className="services-title">
                        <h2>Our Services</h2>
                    </div>
                    
                    <div className="services-grid">
                        {/* Umrah Packages */}
                        <a href="/Umrah-packages" className="service-card">
                            <div className="card-inner">
                                <div className="card-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80" 
                                        alt="Umrah Packages" 
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>Umrah Packages</h3>
                                </div>
                            </div>
                        </a>

                        {/* Hajj Packages */}
                        <a href="/Hajj-packages" className="service-card">
                            <div className="card-inner">
                                <div className="card-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80" 
                                        alt="Hajj Packages" 
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>Hajj Packages</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;