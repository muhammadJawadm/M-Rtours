"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';

interface Package {
    id: string;
    package_name: string;
    duration_nights: number;
    makkah_nights: number;
    madinah_nights: number;
    // star_rating: number;
    price_per_person: number;
    currency: string;
    // description: string;
    inclusions: string[];
    locationss: {
        makkah_hotel: string;
        madinah_hotel: string;
    };
    created_at: string;
    updated_at: string;
    // star_rating: number;
    notes: string[];
    duration_days?: number;
    // duration_nights?: number;
    image?: string;
    package_type?: string;
    status?: string;
    year?: number;
}

const HajjPackages: React.FC = () => {
    const router = useRouter();
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                setLoading(true);
                const packagesCollection = collection(db, 'Hajj-packages');
                const packagesSnapshot = await getDocs(packagesCollection);
                
                const packagesData = packagesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Package[];
                console.log("Fetched packages:", packagesData);
                
                setPackages(packagesData);
            } catch (error) {
                console.error("Error fetching packages:", error);
                setPackages([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);
  const handleViewDetails = (id: string) => {
        router.push(`/HajjDetail/${id}`);
        console.log("Navigating to UmrahDetail with ID:", id);
    };
    // Check if package includes a specific feature
    const hasInclusion = (inclusions: string[] = [], keyword: string): boolean => {
        if (!Array.isArray(inclusions)) return false;
        return inclusions.some(inc => inc.toLowerCase().includes(keyword.toLowerCase()));
    };
    
    return (
        <section className="umrah-packages-section section-padding">
            <div className="container">
                <div className="section-title-area text-center mb-5">
                    <h2 className="section-title wow fadeInUp">
                        Hajj Packages
                    </h2>
                    {/* <button 
                        className="more-packages-btn"
                        onClick={() => window.location.href = '/hajj-packages'}
                    >
                        More Packages
                    </button> */}
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading packages...</p>
                    </div>
                ) : packages.length > 0 ? (
                    <div className="row g-4">
                        {packages.slice(0, 3).map((pkg) => (
                            <div key={pkg.id} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="package-card">
                                    <div className="package-image-wrapper">
                                        <img 
                                            src={pkg.image || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800'} 
                                            alt={pkg.package_name}
                                            className="package-image"
                                        />
                                        <span className="package-duration">{pkg.duration_nights} NIGHTS</span>
                                        {/* {pkg.star_rating && (
                                            <span className="package-star-rating">{pkg.star_rating} ⭐</span>
                                        )} */}
                                    </div>
                                    
                                    <div className="package-content">
                                        <h3 className="package-title">{pkg.package_name}</h3>
                                        
                                        <div className="package-locations">
                                            <div className="location-item">
                                                <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <span>Makkah {pkg.makkah_nights} Nights</span>
                                            </div>
                                            <div className="location-item">
                                                <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <span>Madinah {pkg.madinah_nights} Nights</span>
                                            </div>
                                        </div>

                                        <div className="package-includes">
                                            {hasInclusion(pkg.inclusions ?? [], 'flight') && (
                                                <div className="include-item">
                                                    <svg className="include-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                                                    </svg>
                                                    <span>Flights</span>
                                                </div>
                                            )}
                                            {hasInclusion(pkg.inclusions ?? [], 'transit') && (
                                                <div className="include-item">
                                                    <svg className="include-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                                                    </svg>
                                                    <span>Transport</span>
                                                </div>
                                            )}
                                            {hasInclusion(pkg.inclusions ?? [], 'hotel') && (
                                                <div className="include-item">
                                                    <svg className="include-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                                                    </svg>
                                                    <span>Hotels</span>
                                                </div>
                                            )}
                                            {hasInclusion(pkg.inclusions ?? [], 'ziyarat') && (
                                                <div className="include-item">
                                                    <svg className="include-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                                    </svg>
                                                    <span>Ziyarat</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="package-footer">
                                            <div className="package-price">
                                                <span className="price-amount">{pkg.currency}{pkg.price_per_person.toLocaleString()}</span>
                                                <span className="price-unit">/person</span>
                                            </div>
                                            <button className="view-details-btn"
                                             onClick={() => handleViewDetails(pkg.id)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <p>No packages available at the moment.</p>
                    </div>
                )}
            </div>

            <style jsx>{`
                .umrah-packages-section {
                    background-color: #f8f9fa;
                    padding: 80px 0;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 2rem;
                }

                .package-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                }

                .package-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
                }

                .package-image-wrapper {
                    position: relative;
                    height: 250px;
                    overflow: hidden;
                }

                .package-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .package-duration {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: white;
                    padding: 8px 20px;
                    border-radius: 25px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    color: #1a1a1a;
                }

                .package-star-rating {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: white;
                    padding: 8px 16px;
                    border-radius: 25px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    color: #1a1a1a;
                }

                .package-content {
                    padding: 25px;
                }

                .package-title {
                    font-size: 1.375rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                }

                .package-locations {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                }

                .location-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #666;
                    font-size: 0.9rem;
                }

                .location-icon {
                    color: #4a5568;
                }

                .package-includes {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    margin-bottom: 25px;
                    padding: 20px 0;
                    border-top: 1px solid #e5e7eb;
                    border-bottom: 1px solid #e5e7eb;
                }

                .include-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #4a5568;
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .include-icon {
                    color: #2563eb;
                }

                .package-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .package-price {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                }

                .price-amount {
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: #1a1a1a;
                }

                .price-unit {
                    font-size: 0.9rem;
                    color: #666;
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
                    background-color: #1f8fc7;
                }

                .more-packages-btn {
                    background-color: #28AAE2;
                    color: white;
                    padding: 12px 32px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 15px;
                }

                .more-packages-btn:hover {
                    background-color: #1f8fc7;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(40, 170, 226, 0.3);
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem;
                    }

                    .package-title {
                        font-size: 1.25rem;
                    }

                    .price-amount {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default HajjPackages;