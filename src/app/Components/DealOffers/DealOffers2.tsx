"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

interface Deal {
    id: string;
    name: string;
    img: string;
    flytype: string;
    Seat: string;
    location1: string;
    location2: string;
    starttime: string;
    startdate: string;
    duaration: string;
    endtime: string;
    enddate: string;
    classtype: string;
    price: string;
}

const DealOffers2: React.FC = () => {
    // Dummy data
    const dummyDeals: Deal[] = [
        {
            id: '1',
            name: 'Saudi Airlines',
            img: '/assets/img/offer/saudi.png',
            flytype: 'Direct Flight',
            Seat: '10 Seats',
            location1: 'London, UK',
            location2: 'Jeddah, Saudi Arabia',
            starttime: '08:30 AM',
            startdate: '15 Dec 2024',
            duaration: '06h 45m',
            endtime: '04:15 PM',
            enddate: '15 Dec 2024',
            classtype: 'Economy Class',
            price: '£720',
        },
        {
            id: '2',
            name: 'Qatar Airways',
            img: '/assets/img/offer/qatar.png',
            flytype: '1 Stop via Doha',
            Seat: '08 Seats',
            location1: 'Manchester, UK',
            location2: 'Madinah, Saudi Arabia',
            starttime: '09:50 AM',
            startdate: '18 Dec 2024',
            duaration: '09h 30m',
            endtime: '09:20 PM',
            enddate: '18 Dec 2024',
            classtype: 'Business Class',
            price: '£1,250',
        },
        {
            id: '3',
            name: 'Turkish Airlines',
            img: '/assets/img/offer/turkish.png',
            flytype: '1 Stop via Istanbul',
            Seat: '06 Seats',
            location1: 'Birmingham, UK',
            location2: 'Jeddah, Saudi Arabia',
            starttime: '07:15 AM',
            startdate: '22 Dec 2024',
            duaration: '10h 05m',
            endtime: '06:20 PM',
            enddate: '22 Dec 2024',
            classtype: 'Economy Class',
            price: '£680',
        },
        {
            id: '4',
            name: 'Emirates',
            img: '/assets/img/offer/emirates.png',
            flytype: '1 Stop via Dubai',
            Seat: '12 Seats',
            location1: 'Glasgow, UK',
            location2: 'Madinah, Saudi Arabia',
            starttime: '02:40 PM',
            startdate: '28 Dec 2024',
            duaration: '11h 10m',
            endtime: '01:50 AM',
            enddate: '29 Dec 2024',
            classtype: 'Economy Class',
            price: '£770',
        },
    ];

    const [deals, setDeals] = useState<Deal[]>(dummyDeals);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(2);

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                setLoading(true);
                const dealsCollection = collection(db, 'deals');
                const dealsSnapshot = await getDocs(dealsCollection);
                
                const dealsData = dealsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Deal[];
                
                // Use fetched data if available, otherwise keep dummy data
                if (dealsData.length > 0) {
                    setDeals(dealsData);
                }
            } catch (error) {
                console.error("Error fetching deals:", error);
                // Keep dummy data on error
            } finally {
                setLoading(false);
            }
        };

        fetchDeals();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + itemsPerPage >= deals.length ? 0 : prevIndex + itemsPerPage
        );
    };

    const previous = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - itemsPerPage < 0 ? Math.max(0, deals.length - itemsPerPage) : prevIndex - itemsPerPage
        );
    };

    const visibleDeals = deals.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className="deals-offer-section section-padding">
            <div className="container">
                <div className="section-title-area text-center mb-5">
                    <h2 className="section-title wow fadeInUp">
                        Last Minute Deals
                    </h2>
                    <div className="slider-controls">
                        <button onClick={previous} className="slider-btn prev-btn" disabled={currentIndex === 0}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button onClick={next} className="slider-btn next-btn" disabled={currentIndex + itemsPerPage >= deals.length}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading deals...</p>
                    </div>
                ) : deals.length > 0 ? (
                    <div className="row g-4">
                        {visibleDeals.map((deal) => (
                            <div key={deal.id} className="col-xl-6 col-lg-6 col-md-12">
                                <div className="deal-card">
                                    <div className="airline-header">
                                        <div className="airline-info">
                                            <div className="airline-logo">
                                                <img 
                                                    src={deal.img} 
                                                    alt={deal.name}
                                                    className="logo-image"
                                                />
                                            </div>
                                            <div className="airline-details">
                                                <h3 className="airline-name">{deal.name}</h3>
                                                <span className="flight-type">{deal.flytype}</span>
                                            </div>
                                        </div>
                                        <div className="seats-available">
                                            <svg className="seat-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            <span>{deal.Seat}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="deal-content">
                                        <div className="route-info">
                                            <div className="location-item">
                                                <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <span>{deal.location1}</span>
                                            </div>
                                            <div className="route-line">
                                                <svg width="80" height="2" viewBox="0 0 80 2">
                                                    <line x1="0" y1="1" x2="80" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"/>
                                                </svg>
                                                <svg className="plane-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                                                </svg>
                                            </div>
                                            <div className="location-item">
                                                <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <span>{deal.location2}</span>
                                            </div>
                                        </div>

                                        <div className="flight-timing">
                                            <div className="time-item">
                                                <h4 className="time">{deal.starttime}</h4>
                                                <span className="date">{deal.startdate}</span>
                                            </div>
                                            <div className="duration">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>{deal.duaration}</span>
                                            </div>
                                            <div className="time-item">
                                                <h4 className="time">{deal.endtime}</h4>
                                                <span className="date">{deal.enddate}</span>
                                            </div>
                                        </div>

                                        <div className="deal-footer">
                                            <div className="class-info">
                                                <svg className="class-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                                                </svg>
                                                <span>{deal.classtype}</span>
                                            </div>
                                            <div className="price-section">
                                                <span className="price-amount">{deal.price}</span>
                                            </div>
                                            <button className="view-details-btn">
                                                Flight Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <p>No deals available at the moment.</p>
                    </div>
                )}
            </div>

            <style jsx>{`
                .deals-offer-section {
                    background-color: #f8f9fa;
                    padding: 80px 0;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 1rem;
                }

                .section-title-area {
                    position: relative;
                }

                .slider-controls {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 20px;
                }

                .slider-btn {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: white;
                    border: 2px solid #28AAE2;
                    color: #28AAE2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .slider-btn:hover:not(:disabled) {
                    background-color: #28AAE2;
                    color: white;
                    transform: scale(1.1);
                }

                .slider-btn:disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                    border-color: #cbd5e1;
                    color: #cbd5e1;
                }

                .deal-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                }

                .deal-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
                }

                .airline-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 20px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .airline-info {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .airline-logo {
                    width: 60px;
                    height: 60px;
                    background: white;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px;
                }

                .logo-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .airline-details {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .airline-name {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: white;
                    margin: 0;
                }

                .flight-type {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 500;
                }

                .seats-available {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.2);
                    padding: 8px 16px;
                    border-radius: 20px;
                    color: white;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .seat-icon {
                    color: white;
                }

                .deal-content {
                    padding: 25px;
                }

                .route-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .location-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #4a5568;
                    font-size: 0.9rem;
                    font-weight: 500;
                    flex: 1;
                }

                .location-icon {
                    color: #667eea;
                    flex-shrink: 0;
                }

                .route-line {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin: 0 15px;
                }

                .plane-icon {
                    color: #667eea;
                }

                .flight-timing {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 8px;
                }

                .time-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .time {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin: 0;
                }

                .date {
                    font-size: 0.875rem;
                    color: #666;
                }

                .duration {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #667eea;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .deal-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .class-info {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #4a5568;
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .class-icon {
                    color: #2563eb;
                }

                .price-section {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                }

                .price-amount {
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: #1a1a1a;
                }

                .view-details-btn {
                    background-color: #28AAE2;
                    color: white;
                    padding: 12px 28px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .view-details-btn:hover {
                    background-color: #1e90c8;
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem;
                    }

                    .airline-header {
                        flex-direction: column;
                        gap: 15px;
                        align-items: flex-start;
                    }

                    .route-info {
                        flex-direction: column;
                        gap: 15px;
                    }

                    .route-line {
                        transform: rotate(90deg);
                        margin: 10px 0;
                    }

                    .flight-timing {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }

                    .deal-footer {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .view-details-btn {
                        width: 100%;
                    }

                    .price-amount {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default DealOffers2;