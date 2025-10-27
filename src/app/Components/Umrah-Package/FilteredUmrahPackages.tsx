"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { db } from '../../../lib/firebase';
import Image from 'next/image';

interface Package {
    id: string;
    "Package Name": string;
    "Duration (Nights)": number;
    "Makkah Nights": number;
    "Madinah Nights": number;
    "Star Rating": string;
    "Price (£)": number;
    "Makkah Hotel": string;
    "Madinah Hotel": string;
    "Month": string;
    "Includes": string;
    image?: string;
    currency: string;
}

interface FilteredUmrahPackagesProps {
    starRating: string;
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
                const q = query(
                    packagesCollection, 
                    where('Star Rating', '==', starRating),
                    limit(3)
                );
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
                                {starRating} Umrah Packages
                            </h2>
                        </div>

                        <div className="row g-4 mb-5">
                            {packages.map((pkg) => (
                                <div key={pkg.id} className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="package-card">
                                        <div className="package-image-wrapper">
                                            <Image 
                                                src={pkg.image || '/assets/img/Umrah/Umrah page 4.png'}
                                                alt={pkg["Package Name"]}
                                                width={400}
                                                height={250}
                                                className="package-image"
                                                priority={false}
                                                unoptimized
                                            />
                                            <span className="package-duration">{pkg["Duration (Nights)"]} NIGHTS</span>
                                            <span className="package-month-badge">{pkg.Month}</span>
                                        </div>
                                        
                                        <div className="package-content">
                                            <div className="package-header">
                                                <h3 className="package-title">{pkg["Package Name"]}</h3>
                                                <span className="package-star-rating">{pkg["Star Rating"]}</span>
                                            </div>
                                            
                                            <div className="package-hotels">
                                                <div className="hotel-item">
                                                    <svg className="hotel-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                    </svg>
                                                    <div className="hotel-info">
                                                        <span className="hotel-label">Makkah ({pkg["Makkah Nights"]} Nights)</span>
                                                        <span className="hotel-name">{pkg["Makkah Hotel"]}</span>
                                                    </div>
                                                </div>
                                                <div className="hotel-item">
                                                    <svg className="hotel-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                    </svg>
                                                    <div className="hotel-info">
                                                        <span className="hotel-label">Madinah ({pkg["Madinah Nights"]} Nights)</span>
                                                        <span className="hotel-name">{pkg["Madinah Hotel"]}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="package-includes">
                                                <h4 className="includes-title">Package Includes:</h4>
                                                <div className="includes-list">
                                                    {pkg.Includes.split(', ').map((inclusion, idx) => (
                                                        <div key={idx} className="include-item">
                                                            <svg className="include-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                                            </svg>
                                                            <span>{inclusion}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="package-footer">
                                                <div className="package-price">
                                                    <span className="price-amount">{pkg.currency}{pkg["Price (£)"].toLocaleString()}</span>
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
                        <p>No {starRating} packages available at the moment.</p>
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

                .package-month-badge {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: #28AAE2;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 25px;
                    font-weight: 600;
                    font-size: 0.875rem;
                }

                .package-content {
                    padding: 25px;
                }

                .package-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 20px;
                    gap: 15px;
                }

                .package-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    flex: 1;
                    line-height: 1.3;
                }

                .package-star-rating {
                    background: #fef3c7;
                    color: #92400e;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-weight: 600;
                    font-size: 0.8rem;
                    white-space: nowrap;
                }

                .package-hotels {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 20px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 8px;
                }

                .hotel-item {
                    display: flex;
                    gap: 12px;
                    align-items: flex-start;
                }

                .hotel-icon {
                    color: #28AAE2;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .hotel-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .hotel-label {
                    font-size: 0.8rem;
                    color: #666;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .hotel-name {
                    font-size: 0.95rem;
                    color: #1a1a1a;
                    font-weight: 500;
                }

                .package-includes {
                    margin-bottom: 25px;
                    padding-bottom: 25px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .includes-title {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .includes-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .include-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #4a5568;
                    font-size: 0.9rem;
                }

                .include-icon {
                    color: #28AAE2;
                    flex-shrink: 0;
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
                        font-size: 1.1rem;
                    }

                    .price-amount {
                        font-size: 1.5rem;
                    }

                    .package-card {
                        margin-left: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default FilteredUmrahPackages;