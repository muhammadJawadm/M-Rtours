"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { db } from '../../../lib/firebase';

interface Package {
    id: string;
    package_name: string;
    duration_nights: number;
    makkah_nights: number;
    madinah_nights: number;
    star_rating: number;
    price_per_person: number;
    currency: string;
    description: string;
    package_inclusions: string[];
    hotel_details: {
        makkah_hotel: string;
        madinah_hotel: string;
    };
    notes: string[];
    image?: string;
}

interface FilteredUmrahPackagesProps {
    starRating: number;
}

const FilteredUmrahPackages: React.FC<FilteredUmrahPackagesProps> = ({ starRating }) => {
    const router = useRouter();
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                setLoading(true);
                const packagesCollection = collection(db, 'Umrah-packages');
                const q = query(packagesCollection, where('star_rating', '==', starRating));
                const packagesSnapshot = await getDocs(q);

                const data = packagesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Package[];

                setPackages(data);
            } catch (error) {
                console.error("Error fetching packages:", error);
                setPackages([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, [starRating]);
    
    const handleViewDetails = (id: string) => {
        router.push(`/UmrahDetail/${id}`);
        console.log("Navigating to UmrahDetail with ID:", id);
    };

    return (
        <section className="umrah-packages-section section-padding">
            <div className="container">
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading packages...</p>
                    </div>
                ) : packages.length > 0 ? (
                    <>
                        <div className="section-title-area text-center mb-5">
                            <h2 className="section-title wow fadeInUp">
                                {starRating} Star Umrah Packages
                            </h2>
                        </div>

                        <div className="row g-4 mb-5">
                            {packages.map((pkg) => (
                                <div key={pkg.id} className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="package-card">
                                        <div className="package-image-wrapper">
                                            <img 
                                                src={pkg.image || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800'} 
                                                alt={pkg.package_name}
                                                className="package-image"
                                            />
                                            <span className="package-duration">{pkg.duration_nights} NIGHTS</span>
                                            <span className="package-star-rating">{pkg.star_rating} ⭐</span>
                                        </div>
                                        
                                        <div className="package-content">
                                            <h3 className="package-title">{pkg.package_name}</h3>
                                            <p className="package-description">{pkg.description}</p>
                                            
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
                                                {pkg.package_inclusions.slice(0, 4).map((inclusion, idx) => (
                                                    <div key={idx} className="include-item">
                                                        <svg className="include-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                                        </svg>
                                                        <span>{inclusion.split(':')[0]}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="package-footer">
                                                <div className="package-price">
                                                    <span className="price-amount">{pkg.currency}{pkg.price_per_person.toLocaleString()}</span>
                                                    <span className="price-unit">/person</span>
                                                </div>
                                                <button 
                                                    className="view-details-btn"
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
                    </>
                ) : (
                    <div className="text-center py-5">
                        <p>No {starRating} star packages available at the moment.</p>
                    </div>
                )}
            </div>

            <style jsx>{`
                .umrah-packages-section {
                    background-color: #f8f9fa;
                    padding: 80px 0;
                    width: 100%;
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
                    margin-left: 20px;
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

                .package-description {
                    font-size: 0.9rem;
                    color: #666;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }

                .package-content {
                    padding: 25px;
                }

                .package-title {
                    font-size: 1.375rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 15px;
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

export default FilteredUmrahPackages;