import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BeatPriceFeatures = () => {
    const features = [
        {
            img: '/assets/img/activities/01.jpg', 
            title: 'Best Price Guarantee', 
            description: 'We match or beat any genuine quote',
            icon: '💰'
        },
        {
            img: '/assets/img/activities/02.jpg', 
            title: 'Premium Hotels', 
            description: 'Top-rated accommodations near Haram',
            icon: '🏨'
        },
        {
            img: '/assets/img/activities/03.jpg', 
            title: 'Expert Guidance', 
            description: 'Experienced team for smooth journey',
            icon: '🧭'
        },
        {
            img: '/assets/img/activities/04.jpg', 
            title: 'ATOL Protected', 
            description: 'Fully protected travel packages',
            icon: '✓'
        },
        {
            img: '/assets/img/activities/05.jpg', 
            title: 'Flexible Payment', 
            description: 'Easy installment plans available',
            icon: '💳'
        },
        {
            img: '/assets/img/activities/06.jpg', 
            title: '24/7 Support', 
            description: 'UK-based support team always ready',
            icon: '☎️'
        },
        {
            img: '/assets/img/activities/07.jpg', 
            title: 'Group Discounts', 
            description: 'Special rates for families & groups',
            icon: '👥'
        },
        {
            img: '/assets/img/activities/08.jpg', 
            title: 'Direct Flights', 
            description: 'Premium airline partnerships',
            icon: '✈️'
        },
        {
            img: '/assets/img/activities/09.jpg', 
            title: 'Visa Assistance', 
            description: 'Complete visa support included',
            icon: '📋'
        },
    ];

    return (
        <>
            <style jsx>{`
                .beat-price-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    position: relative;
                    overflow: hidden;
                }

                .beat-price-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    opacity: 0.5;
                    pointer-events: none;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    position: relative;
                    z-index: 1;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section-title {
                    font-size: 42px;
                    font-weight: 700;
                    color: #1a202c;
                    margin-bottom: 16px;
                    line-height: 1.2;
                }

                .section-subtitle {
                    font-size: 18px;
                    color: #4a5568;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }

                .feature-card {
                    background: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: relative;
                }

                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
                }

                .feature-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                }

                .feature-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .feature-card:hover .feature-image {
                    transform: scale(1.1);
                }

                .feature-icon {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }

                .feature-content {
                    padding: 24px;
                }

                .feature-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #1a202c;
                    margin-bottom: 8px;
                    transition: color 0.3s ease;
                }

                .feature-card:hover .feature-title {
                    color: #667eea;
                }

                .feature-description {
                    font-size: 15px;
                    color: #718096;
                    line-height: 1.6;
                    margin: 0;
                }

                .cta-section {
                    margin-top: 60px;
                    text-align: center;
                    padding: 48px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                }

                .cta-title {
                    font-size: 32px;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 16px;
                }

                .cta-text {
                    font-size: 18px;
                    color: rgba(255, 255, 255, 0.95);
                    margin-bottom: 32px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .cta-button {
                    display: inline-block;
                    padding: 16px 40px;
                    background: white;
                    color: #667eea;
                    font-size: 18px;
                    font-weight: 600;
                    border-radius: 10px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                    background: #f7fafc;
                }

                @media (max-width: 768px) {
                    .beat-price-section {
                        padding: 60px 0;
                    }

                    .section-title {
                        font-size: 32px;
                    }

                    .section-subtitle {
                        font-size: 16px;
                    }

                    .section-header {
                        margin-bottom: 40px;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .feature-image-wrapper {
                        height: 200px;
                    }

                    .cta-section {
                        padding: 32px 24px;
                        margin-top: 40px;
                    }

                    .cta-title {
                        font-size: 24px;
                    }

                    .cta-text {
                        font-size: 16px;
                    }

                    .cta-button {
                        padding: 14px 32px;
                        font-size: 16px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .fadeInUp {
                    animation: fadeInUp 0.6s ease-out;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

            <section className="beat-price-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Us?</h2>
                        <p className="section-subtitle">
                            We don't just match prices - we deliver exceptional value with premium services that make your journey unforgettable
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((item, i) => (
                            <div 
                                key={i} 
                                className="feature-card fadeInUp" 
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="feature-image-wrapper">
                                    <Image 
                                        src={item.img} 
                                        alt={item.title}
                                        width={416} 
                                        height={240}
                                        className="feature-image"
                                    />
                                    <div className="feature-icon">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">
                                        {item.title}
                                    </h3>
                                    <p className="feature-description">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-section">
                        <h3 className="cta-title">Ready to Get Your Better Deal?</h3>
                        <p className="cta-text">
                            Submit your current quote and let us show you how we can provide better value, superior hotels, and exceptional service at a competitive price.
                        </p>
                        <Link href="#beat-quote-form" className="cta-button">
                            Submit Your Quote Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BeatPriceFeatures;